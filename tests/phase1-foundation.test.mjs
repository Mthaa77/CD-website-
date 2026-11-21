import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync, readdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const folder = mkdtempSync(join(tmpdir(), 'carter-phase1-'));
after(() => rmSync(folder, { recursive: true, force: true }));
async function route(file, name) {
  const outfile = join(folder, name + '.mjs');
  await build({ entryPoints: [file], outfile, bundle: true, platform: 'node', format: 'esm', logLevel: 'silent' });
  return import(pathToFileURL(outfile));
}
const leads = await route('app/api/leads/route.ts', 'leads');
const measure = await route('app/api/measure/route.ts', 'measure');
let sequence = 0;
function request(path, payload, extra = {}) {
  return new Request('https://carterdigitals.co.za' + path, { method: 'POST', headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': `test-${++sequence}`, ...extra }, body: JSON.stringify(payload) });
}
function database(failEvent = false) {
  const sql = new DatabaseSync(':memory:');
  for (const file of readdirSync('drizzle').filter(x => x.endsWith('.sql')).sort()) sql.exec(readFileSync('drizzle/' + file, 'utf8').replaceAll('--> statement-breakpoint', ''));
  const d1 = {
    prepare(query) {
      let values = [];
      return {
        bind(...args) { values = args; return this; },
        run() {
          if (failEvent && query.toLowerCase().includes('insert into "lead_events"')) throw new Error('simulated event storage failure');
          sql.prepare(query).run(...values);
          return { success: true, results: [] };
        },
        async all() { return { results: sql.prepare(query).all(...values) }; },
      };
    },
    async batch(statements) {
      sql.exec('BEGIN');
      try { const results = []; for (const statement of statements) results.push(statement.run()); sql.exec('COMMIT'); return results; }
      catch (error) { sql.exec('ROLLBACK'); throw error; }
    },
  };
  return { sql, d1 };
}
const valid = { name: 'Isolated test', project: 'Website design', preferredChannel: 'email', email: 'test@example.invalid', source: 'homepage' };

test('invalid JSON shape is rejected without touching storage', async () => {
  for (const payload of [null, [], 'bad']) assert.equal((await leads.POST(request('/api/leads', payload))).status, 400);
});
test('storage unavailable returns an honest recoverable failure', async () => {
  globalThis.__CARTER_RUNTIME_ENV__ = {};
  const response = await leads.POST(request('/api/leads', valid));
  assert.equal(response.status, 503);
  const result = await response.json();
  assert.equal(result.ok, false); assert.equal(result.persisted, false);
});
test('lead and creation event commit atomically; source and callback preference survive', async () => {
  const { sql, d1 } = database(); globalThis.__CARTER_RUNTIME_ENV__ = { DB: d1 };
  const response = await leads.POST(request('/api/leads', { ...valid, preferredChannel: 'call', phone: '072 000 0000' }));
  const result = await response.json();
  assert.equal(response.status, 200); assert.equal(result.persisted, true);
  const row = sql.prepare('SELECT * FROM leads').get();
  assert.equal(row.phone, '+27720000000'); assert.equal(row.preferred_channel, 'call'); assert.equal(row.source, 'website-homepage');
  assert.equal(sql.prepare("SELECT COUNT(*) AS n FROM lead_events WHERE type='created'").get().n, 1);
  assert.equal(result.messaging.ownerAlertSent, false); sql.close();
});
test('failed creation-event write rolls back the lead', async () => {
  const { sql, d1 } = database(true); globalThis.__CARTER_RUNTIME_ENV__ = { DB: d1 };
  assert.equal((await leads.POST(request('/api/leads', valid))).status, 503);
  assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM leads').get().n, 0); sql.close();
});
test('notification failure cannot undo capture or force a customer SMS', async () => {
  const { sql, d1 } = database();
  globalThis.__CARTER_RUNTIME_ENV__ = { DB: d1, TWILIO_ACCOUNT_SID: 'test', TWILIO_AUTH_TOKEN: 'test', TWILIO_MESSAGING_SERVICE_SID: 'test' };
  const original = globalThis.fetch; let calls = 0;
  globalThis.fetch = async () => { calls++; throw new Error('simulated provider failure'); };
  try {
    const response = await leads.POST(request('/api/leads', { ...valid, phone: '072 000 0000', consent: true }));
    assert.equal((await response.json()).persisted, true); assert.equal(calls, 1);
    assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM leads').get().n, 1);
  } finally { globalThis.fetch = original; sql.close(); }
});
test('selected response channel requires its matching contact detail', async () => {
  assert.equal((await leads.POST(request('/api/leads', { ...valid, preferredChannel: 'call' }))).status, 400);
  assert.equal((await leads.POST(request('/api/leads', { ...valid, phone: 'abc' }))).status, 400);
});
test('measurement persists allowed events without extra payload fields', async () => {
  const { sql, d1 } = database(); globalThis.__CARTER_RUNTIME_ENV__ = { DB: d1 };
  for (const event of ['call_click', 'whatsapp_click', 'enquiry_start', 'enquiry_attempt']) {
    assert.equal((await measure.POST(request('/api/measure', { event, page: '/contact', email: 'must-not-save@example.invalid' }))).status, 204);
  }
  assert.equal(sql.prepare('SELECT COUNT(*) AS n FROM measurement_events').get().n, 4);
  assert.equal(JSON.stringify(sql.prepare('SELECT * FROM measurement_events').all()).includes('must-not-save'), false);
  sql.close();
});
test('measurement rejects query strings, unknown events and cross-site posts; honours DNT', async () => {
  globalThis.__CARTER_RUNTIME_ENV__ = {};
  assert.equal((await measure.POST(request('/api/measure', { event: 'call_click', page: '/contact?email=private' }))).status, 400);
  assert.equal((await measure.POST(request('/api/measure', { event: 'lead_saved', page: '/' }))).status, 400);
  assert.equal((await measure.POST(request('/api/measure', { event: 'call_click', page: '/' }, { origin: 'https://other.example' }))).status, 403);
  assert.equal((await measure.POST(request('/api/measure', { event: 'call_click', page: '/' }, { dnt: '1' }))).status, 204);
  assert.equal((await measure.POST(request('/api/measure', { event: 'call_click', page: '/' }))).status, 503);
});

 test('same submission retries and concurrent attempts return one durable receipt', async()=>{
 const {sql,d1}=database();globalThis.__CARTER_RUNTIME_ENV__={DB:d1};
 const body={...valid,submissionKey:crypto.randomUUID(),context:{service:'websites',package:'growth',goal:'clarity'},budget:'R1'};
 const responses=await Promise.all([leads.POST(request('/api/leads',body)),leads.POST(request('/api/leads',body))]);
 const receipts=await Promise.all(responses.map(r=>r.json()));
 assert.ok(receipts.every(r=>r.persisted));assert.equal(receipts[0].leadId,receipts[1].leadId);
 assert.equal(sql.prepare('SELECT COUNT(*) n FROM leads').get().n,1);
 assert.equal(sql.prepare('SELECT budget FROM leads').get().budget,'R13,999');
 assert.equal(JSON.parse(sql.prepare('SELECT context FROM lead_submissions').get().context).package,'growth');
 assert.equal((await leads.POST(request('/api/leads',{...body,name:'Changed'}))).status,409);sql.close();
 });
 test('durable contact quota resets on expiry and does not block another contact',async()=>{
 const {sql,d1}=database();globalThis.__CARTER_RUNTIME_ENV__={DB:d1};
 for(let i=0;i<5;i++)assert.equal((await leads.POST(request('/api/leads',{...valid,submissionKey:crypto.randomUUID()}))).status,200);
 assert.equal((await leads.POST(request('/api/leads',valid))).status,429);
 assert.equal((await leads.POST(request('/api/leads',{...valid,email:'other@example.invalid'}))).status,200);
 sql.exec('UPDATE lead_rate_buckets SET expires_at=0');
 assert.equal((await leads.POST(request('/api/leads',valid))).status,200);sql.close();
 });
