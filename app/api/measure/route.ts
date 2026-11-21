import { MEASUREMENT_EVENTS } from "../../_lib/measurement";
import { getDatabaseBinding } from "../../../db";

// Bounded best-effort abuse protection. IP is transient, never stored in analytics.
const bursts = new Map<string, { count: number; until: number }>();

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return new Response(null, { status: 403 });
  if (request.headers.get("sec-fetch-site") === "cross-site") return new Response(null, { status: 403 });
  if (request.headers.get("dnt") === "1") return new Response(null, { status: 204 });
  const now = Date.now();
  for (const [key, burst] of bursts) if (burst.until <= now) bursts.delete(key);
  const key = request.headers.get("CF-Connecting-IP") || "unknown";
  const burst = bursts.get(key);
  if ((burst && burst.count >= 120) || (!burst && bursts.size >= 5000)) return new Response(null, { status: 429 });
  bursts.set(key, { count: (burst?.count || 0) + 1, until: burst?.until || now + 60000 });
  if (Number(request.headers.get("content-length")) > 512) return new Response(null, { status: 413 });
  const raw = await request.text();
  if (raw.length > 512) return new Response(null, { status: 413 });
  let value;
  try { value = JSON.parse(raw); } catch { return new Response(null, { status: 400 }); }
  if (!value || !MEASUREMENT_EVENTS.includes(value.event) || typeof value.page !== "string" || !/^\/[a-z0-9/-]{0,160}$/.test(value.page)) {
    return new Response(null, { status: 400 });
  }
  const db = getDatabaseBinding();
  if (!db) return new Response(null, { status: 503 });
  try {
    await db.prepare("INSERT INTO measurement_events (id, event, page) VALUES (?, ?, ?)").bind(crypto.randomUUID(), value.event, value.page).run();
    return new Response(null, { status: 204 });
  } catch {
    console.error("carter_measurement_storage_failed");
    return new Response(null, { status: 503 });
  }
}
