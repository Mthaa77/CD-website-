import assert from 'node:assert/strict';
import test from 'node:test';
const {default:worker}=await import('../dist/server/index.js');
async function render(path){const r=await worker.fetch(new Request('https://carterdigitals.co.za'+path,{headers:{accept:'text/html'}}),{ASSETS:{fetch:async()=>new Response('Not found',{status:404})}},{waitUntil(){},passThroughOnException(){}});assert.equal(r.status,200);return r.text();}
test('homepage renders the current journey and an accessible contact path',async()=>{
const html=await render('/');
for(const slug of ['law-firms','construction','dental-practices','schools']) {
  assert.ok(html.includes('/sectors/'+slug),slug);
  assert.ok((await render('/sectors/'+slug)).includes('Interactive service example'));
}
assert.doesNotMatch(html,/Refresh Dental|S.J. van der Merwe/);
assert.ok(html.includes('/contact#enquiry'));
assert.match(html,/https:\/\/carterdigitals.co.za/);
});
test('pricing retains each package handoff and contact renders one shared form',async()=>{
const pricing=await render('/pricing');for(const id of ['launch','business','growth'])assert.ok(pricing.includes('package='+id),id);
assert.ok(pricing.includes('R12,500'));
assert.doesNotMatch(pricing,/R13,999|R2,799|App Care Essential/);
const contact=await render('/contact');assert.match(contact,/<h1[^>]*id="enquiry-title"/);assert.equal((contact.match(/<form\s/g)||[]).length,1);assert.match(contact,/<noscript>/);
});

test('restored work and service pages render at canonical URLs and appear in the sitemap', async () => {
  const paths = [
    '/work', '/offerings/premium-websites', '/offerings/web-applications', '/offerings/business-systems',
    '/offerings/creative-media', '/offerings/ai-clone-avatar-videos',
  ];
  const sitemap = await render('/sitemap.xml');
  for (const path of paths) {
    const page = await render(path);
    assert.ok(page.includes('rel="canonical" href="https://carterdigitals.co.za' + path + '"'), path);
    assert.ok(sitemap.includes('<loc>https://carterdigitals.co.za' + path + '</loc>'), path);
    assert.match(page, /<h1[\s>]/, path);
  }
  assert.match(await render('/offerings/premium-websites'), /From R4,999/);
});
