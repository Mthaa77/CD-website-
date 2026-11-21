export const MEASUREMENT_EVENTS = ["goal_select", "direction_cta", "page_view", "call_click", "whatsapp_click", "email_click", "enquiry_start", "enquiry_attempt", "enquiry_error"] as const;
export type MeasurementEvent = typeof MEASUREMENT_EVENTS[number];

// No free text, contact details, URLs with queries, cookies, or visitor identifiers.
export function measure(event: MeasurementEvent, page = window.location.pathname) {
  if (navigator.doNotTrack === "1") return;
  void fetch("/api/measure", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event, page: page.split(/[?#]/)[0] }), keepalive: true,
  }).catch(() => { /* Measurement must never block the visitor. */ });
}
