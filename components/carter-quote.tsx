"use client";

import { useRef, useState, type FormEvent } from "react";
import { company } from "../lib/data";

export function QuoteForm({ initialBrief = "", initialService = "" }: { initialBrief?: string; initialService?: string }) {
  const [status,setStatus] = useState("");
  const [sending,setSending] = useState(false);
  const [sent,setSent] = useState(false);
  const submission = useRef({ body: "", id: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || sent) return;
    const fields = new FormData(event.currentTarget);
    const payload = {
      name: fields.get("name"), business: fields.get("business"), phone: fields.get("phone"), email: fields.get("email"),
      project: fields.get("project"), message: fields.get("message"), website: fields.get("website"),
      preferredChannel: "email", consent: fields.get("consent") === "yes", source: "contact-quote",
    };
    const body = JSON.stringify(payload);
    if (submission.current.body !== body) submission.current = { body, id: crypto.randomUUID() };
    setSending(true);
    setStatus("");
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, submissionKey: submission.current.id }) });
      const data = await response.json() as { persisted?: boolean; error?: string };
      if (!response.ok || !data.persisted) throw new Error(data.error || "We couldn’t save your enquiry. Please try again or use WhatsApp.");
      setSent(true);
      setStatus("Your enquiry has been received.");
      window.dispatchEvent(new CustomEvent("carter:analytics", { detail: { event: "quote_form_submit" } }));
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Please try again or use WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  return <><form className="cd-quote-new cd-panel-new" action="/api/leads" method="post" onSubmit={submit}>
    <fieldset disabled={sending || sent}>
      <legend>Project details</legend>
      <label>Name<input name="name" required autoComplete="name" maxLength={120}/></label>
      <label>Business<input name="business" required autoComplete="organization" maxLength={160}/></label>
      <label>Phone or WhatsApp<input name="phone" type="tel" autoComplete="tel" required/></label>
      <label>Email<input name="email" type="email" required autoComplete="email"/></label>
      <label>Service interest<select name="project" defaultValue={initialService} required><option value="">Choose a service</option>{["Website","Online store","Web application","Other"].map(item=><option key={item}>{item}</option>)}</select></label>
      <label>Short brief<textarea name="message" rows={5} required maxLength={2000} defaultValue={initialBrief}/></label>
      <label className="cd-quote-new__trap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
      <label className="cd-quote-new__consent"><input type="checkbox" name="consent" value="yes" required/><span>I agree that Carter Digitals may use these details to respond to my enquiry. Read the <a href="/privacy">privacy notice</a>.</span></label>
      <button className="cd-button-new cd-button-new--gold" type="submit">{sending ? "Sending…" : "Send quote request"}</button>
    </fieldset>
    <p role="status">{status}</p>
  </form><noscript><p>Request a quote on <a href={company.whatsapp}>WhatsApp</a> or by <a href={`mailto:${company.email}`}>email</a>.</p></noscript></>;
}
