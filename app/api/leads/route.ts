import { eq } from "drizzle-orm";
import { normaliseContext } from "../../_lib/enquiry-context";
import { websitePackages } from "../../_lib/website-packages";
import { getDatabaseBinding, getDb } from "../../../db";
import { leadEvents, leads } from "../../../db/schema";

const OWNER_PHONE = "+27724026893";
const MAX_FIELD_LENGTH = 2_000;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1_000;
const RATE_LIMIT_MAX = 5;

type LeadPayload = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  preferredChannel?: string;
  project?: string;
  industry?: string;
  budget?: string;
  message?: string;
  startingPoint?: string;
  consent?: boolean;
  website?: string;
  source?: string;
  submissionKey?: string;
  context?: { service?: unknown; goal?: unknown; package?: unknown };
};

type TwilioMessage = {
  sid?: string;
  status?: string;
  configured: boolean;
};


function clean(value: unknown, limit = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function normalizePhone(value: string) {
  const compact = value.replace(/[^\d+]/g, "");
  if (/^0\d{9}$/.test(compact)) return `+27${compact.slice(1)}`;
  if (/^27\d{9}$/.test(compact)) return `+${compact}`;
  return compact;
}

function isValidEmail(value: string) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function digest(value: string) {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2,"0")).join("");
}

function getRuntimeValue(key: string) {
  const runtimeEnv = (globalThis as typeof globalThis & { __CARTER_RUNTIME_ENV__?: Record<string, unknown> }).__CARTER_RUNTIME_ENV__;
  return runtimeEnv?.[key];
}

function getStringEnv(key: string) {
  const value = getRuntimeValue(key);
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

function getTwilioConfig() {
  const accountSid = getStringEnv("TWILIO_ACCOUNT_SID");
  const username = getStringEnv("TWILIO_API_KEY_SID") || accountSid;
  const password =
    getStringEnv("TWILIO_API_KEY_SECRET") || getStringEnv("TWILIO_AUTH_TOKEN");
  const messagingServiceSid = getStringEnv("TWILIO_MESSAGING_SERVICE_SID");

  if (!accountSid || !username || !password || !messagingServiceSid) return null;
  return { accountSid, username, password, messagingServiceSid };
}

async function sendOwnerEmail(lead: Parameters<typeof buildOwnerAlert>[0], leadId: string) {
  const key = getStringEnv("RESEND_API_KEY");
  const from = getStringEnv("RESEND_FROM");
  if (!key || !from) return false;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    signal: AbortSignal.timeout(4000),
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "Idempotency-Key": `carter-lead-${leadId}` },
    body: JSON.stringify({ from, to: ["kabelokadiaka4@gmail.com"], subject: "New Carter Digitals quote request", text: buildOwnerAlert(lead, leadId) }),
  });
  return response.ok;
}

async function sendTwilioMessage(
  to: string,
  body: string,
): Promise<TwilioMessage> {
  const config = getTwilioConfig();
  if (!config) return { configured: false };

  const form = new URLSearchParams({
    To: to,
    MessagingServiceSid: config.messagingServiceSid,
    Body: body,
  });
  const statusCallback = getStringEnv("TWILIO_STATUS_CALLBACK_URL");
  if (statusCallback) form.set("StatusCallback", statusCallback);

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${config.accountSid}/Messages.json`,
    {
      method: "POST",
      signal: AbortSignal.timeout(4000),
      headers: {
        Authorization: `Basic ${btoa(`${config.username}:${config.password}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
    },
  );

  const result = (await response.json().catch(() => ({}))) as {
    sid?: string;
    status?: string;
    message?: string;
  };
  if (!response.ok) {
    throw new Error(result.message || `Twilio returned HTTP ${response.status}`);
  }
  return { configured: true, sid: result.sid, status: result.status };
}

function buildOwnerAlert(lead: Required<Pick<LeadPayload, "name" | "project">> & LeadPayload, leadId: string) {
  return [
    "Carter Digitals lead alert",
    `${lead.name}${lead.business ? ` · ${lead.business}` : ""}`,
    `Project: ${lead.project}`,
    `Industry: ${lead.industry || "Not specified"}`,
    `Budget: ${lead.budget || "Not specified"}`,
    `Reply channel: ${lead.preferredChannel}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Email: ${lead.email || "Not provided"}`,
    `Lead ID: ${leadId}`,
    lead.message ? `Brief: ${lead.message}` : "",
    "Open the Carter inbox to follow up.",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildLeadReply(name: string) {
  return `Hi ${name}, thanks for reaching out to Carter Digitals. Kabelo has your project details and will review them within one business day. If it is urgent, WhatsApp +27 72 402 6893.`;
}

export async function GET() {
  return Response.json({
    service: "carter-lead-response-engine",
    twilioConfigured: Boolean(getTwilioConfig()),
  });
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ error: "We could not read that enquiry." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ error: "Please send a valid enquiry." }, { status: 400 });
  }

  if (clean(payload.website)) {
    return Response.json({ ok: true, spam: true });
  }

  if (payload.source === "contact-quote" && payload.consent !== true) {
    return Response.json({ error: "Please confirm that we can respond to your enquiry." }, { status: 400 });
  }

  const lead = {
    name: clean(payload.name, 120),
    business: clean(payload.business, 160),
    email: clean(payload.email, 180).toLowerCase(),
    phone: normalizePhone(clean(payload.phone, 40)),
    preferredChannel: ["whatsapp", "sms", "email", "call"].includes(payload.preferredChannel || "")
      ? payload.preferredChannel!
      : "whatsapp",
    project: clean(payload.project, 120),
    industry: clean(payload.industry, 120),
    budget: clean(payload.budget, 80),
    message: clean(payload.message),
    startingPoint: clean(payload.startingPoint, 120) || "Not specified",
    consent: payload.consent === true,
  };

  if (!lead.name || !lead.project) {
    return Response.json({ error: "Name and project type are required." }, { status: 400 });
  }
  if (!lead.email && !lead.phone) {
    return Response.json({ error: "Please provide an email address or WhatsApp number." }, { status: 400 });
  }
  if (!isValidEmail(lead.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (clean(payload.phone) && !/^\+[1-9]\d{7,14}$/.test(lead.phone)) {
    return Response.json({ error: "Enter a valid phone number, including its country code outside South Africa." }, { status: 400 });
  }
  if (lead.preferredChannel === "email" ? !lead.email : !lead.phone) {
    return Response.json({ error: lead.preferredChannel === "email" ? "Add an email address for your chosen reply channel." : "Add a phone number for your chosen reply channel, or choose email." }, { status: 400 });
  }

  const suppliedKey = clean(payload.submissionKey, 80);
  if (suppliedKey && !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(suppliedKey)) {
    return Response.json({ error: "Please refresh the form and try again." }, { status: 400 });
  }
  const requestKey = suppliedKey || crypto.randomUUID();
  const context = normaliseContext(payload.context && typeof payload.context === "object" ? payload.context : {});
  const chosenPackage = websitePackages.find(p => p.id === context.package);
  if (chosenPackage) lead.budget = chosenPackage.price;
  const source = payload.source === "homepage" ? "website-homepage" : "website-contact";
  const fingerprint = await digest(JSON.stringify({lead,context,source}));
  const leadId = crypto.randomUUID();
  let persisted = false;
  let db: ReturnType<typeof getDb> | null = null;
  try {
    const binding = getDatabaseBinding();
    if (!binding) throw new Error("storage unavailable");
    db = getDb(binding);
    const lookup = async () => {
      const rows = await binding.prepare('SELECT fingerprint, lead_id FROM lead_submissions WHERE key = ?').bind(requestKey).all<{ fingerprint: string; lead_id: string }>();
      return rows.results[0];
    };
    const receipt = (row: {fingerprint:string;lead_id:string}) => row.fingerprint === fingerprint
      ? Response.json({ok:true,persisted:true,leadId:row.lead_id,replayed:true})
      : Response.json({ok:false,persisted:false,error:"This submission was already used for a different enquiry. Start a new enquiry to change the details."},{status:409});
    const existing = await lookup();
    if (existing) return receipt(existing);
    // Contact-based limits avoid penalising unrelated visitors on a shared office/mobile IP.
    const contact = lead.preferredChannel === "email" ? lead.email : lead.phone;
    const bucket = await digest(contact);
    const now = Date.now();
    await binding.batch([
      binding.prepare(`INSERT INTO lead_rate_buckets (key, count, expires_at)
        SELECT ?, 1, ? WHERE NOT EXISTS (SELECT 1 FROM lead_submissions WHERE key = ?)
        ON CONFLICT(key) DO UPDATE SET count = CASE WHEN expires_at <= ? THEN 1 ELSE count + 1 END,
        expires_at = CASE WHEN expires_at <= ? THEN excluded.expires_at ELSE expires_at END
        WHERE count < ? OR expires_at <= ?`).bind(bucket,now + RATE_LIMIT_WINDOW_MS,requestKey,now,now,RATE_LIMIT_MAX,now),
      binding.prepare(`INSERT INTO lead_submissions (key, fingerprint, lead_id, context)
        SELECT ?, ?, ?, ? WHERE changes() = 1 ON CONFLICT(key) DO NOTHING`).bind(requestKey,fingerprint,leadId,JSON.stringify(context)),
      binding.prepare(`INSERT INTO leads (id,name,business,email,phone,preferred_channel,project,budget,message,starting_point,consent,source,status)
        SELECT ?,?,?,?,?,?,?,?,?,?,?,?,'new' FROM lead_submissions WHERE key = ? AND lead_id = ?`).bind(leadId,lead.name,lead.business,lead.email,lead.phone,lead.preferredChannel,lead.project,lead.budget,lead.message,lead.startingPoint,lead.consent ? 1 : 0,source,requestKey,leadId),
      binding.prepare(`INSERT INTO "lead_events" (id,lead_id,type,channel,payload)
        SELECT ?,?,'created','website',? FROM lead_submissions WHERE key = ? AND lead_id = ?`).bind(crypto.randomUUID(),leadId,JSON.stringify({project:lead.project,industry:lead.industry,preferredChannel:lead.preferredChannel,context}),requestKey,leadId),
    ]);
    const saved = await lookup();
    if (!saved) return Response.json({ok:false,persisted:false,error:"Please wait before sending another enquiry with these contact details."},{status:429,headers:{"Retry-After":"3600"}});
    if (saved.lead_id !== leadId) return receipt(saved);
    persisted = true;
  } catch {
    console.error("carter_lead_storage_failed");
    return Response.json({ ok: false, persisted: false, error: "Your enquiry could not be saved. Your details are still here: please retry or choose WhatsApp." }, { status: 503 });
  }

  const ownerPhone = getStringEnv("TWILIO_OWNER_PHONE") || OWNER_PHONE;
  const twilioResults = await Promise.allSettled([
    sendTwilioMessage(ownerPhone, buildOwnerAlert(lead, leadId)),
    lead.consent && lead.phone && lead.preferredChannel === "sms"
      ? sendTwilioMessage(lead.phone, buildLeadReply(lead.name))
      : Promise.resolve<TwilioMessage>({ configured: Boolean(getTwilioConfig()) }),
    sendOwnerEmail(lead, leadId),
  ]);

  const ownerMessage = twilioResults[0].status === "fulfilled" ? twilioResults[0].value : null;
  const leadMessage = twilioResults[1].status === "fulfilled" ? twilioResults[1].value : null;

  const emailed = twilioResults[2].status === "fulfilled" && twilioResults[2].value;
  if (db && persisted) {
    try {
      await db
        .update(leads)
        .set({
          status: emailed || ownerMessage?.sid || leadMessage?.sid ? "notified" : "new",
          twilioOwnerMessageSid: ownerMessage?.sid,
          twilioLeadMessageSid: leadMessage?.sid,
          updatedAt: new Date().toISOString(),
        })
        .where(eq(leads.id, leadId));
      await db.insert(leadEvents).values({
        id: crypto.randomUUID(),
        leadId,
        type: "response_attempted",
        channel: emailed ? "email" : ownerMessage?.configured ? "twilio" : "whatsapp",
        payload: JSON.stringify({
          ownerMessageSid: ownerMessage?.sid || null,
          leadMessageSid: leadMessage?.sid || null,
        }),
      });
    } catch {
      // Do not turn a successful lead capture into a failed browser handoff.
    }
  }

  return Response.json({
    ok: true,
    leadId,
    persisted,
    messaging: {
      configured: ownerMessage?.configured || leadMessage?.configured || false,
      ownerAlertSent: Boolean(ownerMessage?.sid),
      leadReplySent: Boolean(leadMessage?.sid),
    },
  });
}
