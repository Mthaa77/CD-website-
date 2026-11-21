"use client";
import { contactError } from "../_lib/contact-validation";

import { measure } from "../_lib/measurement";

import { FormEvent, useMemo, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Send, Sparkles } from "lucide-react";
import type { ServiceKey, SignalKey } from "./business-signal-diagnostic";
import CardSwap, { Card } from "./react-bits/card-swap";
import "./project-route-builder.css";

const SERVICES: Record<ServiceKey, string> = { websites: "Custom website", identity: "3D brand identity", campaigns: "Campaign visuals" };
const SIGNALS: Record<SignalKey, string> = { unnoticed: "Become more visible", outdated: "Replace an outdated website", trust: "Build stronger trust", unclear: "Clarify the offer", enquiries: "Generate better enquiries" };

type Props = { service: ServiceKey; signal: SignalKey; onServiceChange: (service: ServiceKey) => void };

const ROUTE_CARDS: Array<{ key: ServiceKey; code: string; title: string; body: string; accent: string }> = [
  { key: "websites", code: "01 / WEBSITE", title: "Make trust easier to see.", body: "A mobile-first front door for clearer services, proof and enquiries.", accent: "#5bd8ef" },
  { key: "identity", code: "02 / IDENTITY", title: "Give the mark presence.", body: "A dimensional visual system that makes the business easier to remember.", accent: "#f2c858" },
  { key: "campaigns", code: "03 / CAMPAIGN", title: "Earn the first look.", body: "A sharper visual signal for the feed, search result and real-world conversation.", accent: "#f2637f" },
];

function ProjectRouteDeck({ service, signal, step, onServiceChange }: { service: ServiceKey; signal: SignalKey; step: number; onServiceChange: (service: ServiceKey) => void }) {
  return (
    <div className="project-route__route-deck react-bits-card-swap" aria-label="Interactive project route card deck">
      <div className="project-route__route-deck-head"><span><i aria-hidden="true" /> YOUR PROJECT / YOUR PRIORITY</span><b>STEP 0{step} / LIVE ROUTE</b></div>
      <div className="project-route__route-deck-stage">
        <CardSwap
          width="min(100%, 26rem)"
          height="18rem"
          cardDistance={26}
          verticalDistance={34}
          delay={5400}
          pauseOnHover
          easing="elastic"
          onCardClick={(index) => onServiceChange(ROUTE_CARDS[index % ROUTE_CARDS.length].key)}
        >
          {ROUTE_CARDS.map((card, index) => {
            const isSelected = card.key === service;
            return (
              <Card
                key={card.key}
                customClass={`project-route__route-card project-route__route-card--${index + 1}${isSelected ? " is-selected" : ""}`}
                style={{ "--route-accent": card.accent } as CSSProperties}
                role="button"
                tabIndex={0}
                aria-label={`Choose ${SERVICES[card.key]}`}
                aria-pressed={isSelected}
                onClick={() => onServiceChange(card.key)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onServiceChange(card.key);
                  }
                }}
              >
                <div className="project-route__route-card-top"><span>{card.code}</span><Sparkles size={16} aria-hidden="true" /></div>
                <div className="project-route__route-card-copy"><small>{isSelected ? "SELECTED DIRECTION" : "AVAILABLE DIRECTION"}</small><h3>{card.title}</h3><p>{card.body}</p></div>
                <footer><span>PRIORITY / {SIGNALS[signal]}</span><b>{isSelected ? "ACTIVE" : "OPEN"}</b></footer>
              </Card>
            );
          })}
        </CardSwap>
      </div>
    </div>
  );
}

export function ProjectRouteBuilder({ service, signal, onServiceChange }: Props) {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [data, setData] = useState({ business: "", industry: "", message: "", name: "", email: "", phone: "", preferredChannel: "whatsapp", consent: false, website: "" });
  const progress = `${step * 33.333}%`;
  const summary = useMemo(() => `${SERVICES[service]} for ${data.business || "my business"}. Priority: ${SIGNALS[signal]}. ${data.message}`.trim(), [service, signal, data.business, data.message]);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (status === "loading" || status === "success") return;
    const validation = contactError(data.email, data.phone, data.preferredChannel);
    if (validation) { setStatus("error"); setError(validation); return; }
    measure("enquiry_attempt");
    setStatus("loading"); setError("");
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, source: "homepage", project: SERVICES[service], startingPoint: SIGNALS[signal], message: summary, budget: "Discuss with me" }) });
      const payload = await response.json().catch(() => ({})) as { persisted?: boolean; error?: string };
      if (!response.ok || payload.persisted !== true) throw new Error(payload.error || "We could not send the enquiry.");
      setStatus("success");
    } catch (cause) { measure("enquiry_error"); setStatus("error"); setError(cause instanceof Error ? cause.message : "We could not send the enquiry. Please try WhatsApp."); }
  };

  const whatsapp = `https://wa.me/27724026893?text=${encodeURIComponent(`Hi Carter Digitals. I need help with: ${summary}`)}`;

  return (
    <section className="project-route" id="project-route" aria-labelledby="project-route-title">
      <span id="brief" className="enquiry-anchor" aria-hidden="true" /><span id="enquiry" className="enquiry-anchor" aria-hidden="true" />
      <div className="project-route__intro" data-reveal>
        <span>PROJECT ROUTE BUILDER / 06</span>
        <h2 id="project-route-title">Tell us where the business needs to go.<br /><em>We will map the first move.</em></h2>
        <p>Three short steps. No long brief. We use your answers to recommend a practical direction and prepare the right conversation.</p>
        <div className="project-route__promise"><i /><span><strong>Direct founder contact</strong> with Kabelo</span></div>
        <ProjectRouteDeck service={service} signal={signal} step={step} onServiceChange={onServiceChange} />
      </div>

      <form className="project-route__form" method="post" action="/api/leads" onSubmit={submit} data-reveal>
        <div className="project-route__form-top"><span>STEP 0{step} / 03</span><b>{step === 1 ? "CHOOSE THE BUILD" : step === 2 ? "SHARE THE CONTEXT" : "OPEN THE CONVERSATION"}</b></div>
        <div className="project-route__progress" aria-hidden="true"><span style={{ width: progress }} /></div>
        {status === "success" ? <div className="project-route__success" role="status"><Check size={34} /><small>ENQUIRY RECEIVED</small><h3>Sharp. We have your direction.</h3><p>We will review the project and respond with the clearest next step.</p><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Continue on WhatsApp</a></div> : <>
          {step === 1 && <fieldset><legend>What should we build first?</legend><div className="project-route__service-grid">{(Object.keys(SERVICES) as ServiceKey[]).map((key) => <button key={key} type="button" className={service === key ? "is-active" : ""} aria-pressed={service === key} onClick={() => onServiceChange(key)}><span>{key === "websites" ? "01" : key === "identity" ? "02" : "03"}</span><strong>{SERVICES[key]}</strong><small>{key === "websites" ? "Trust + enquiries" : key === "identity" ? "Presence + recall" : "Attention + action"}</small></button>)}</div></fieldset>}
          {step === 2 && <fieldset><legend>Give us the useful context.</legend><div className="project-route__fields"><label>Business or organisation<input required value={data.business} onChange={(e) => setData({ ...data, business: e.target.value })} placeholder="e.g. Mokoena Attorneys" /></label><label>Industry<input value={data.industry} onChange={(e) => setData({ ...data, industry: e.target.value })} placeholder="e.g. Legal services" /></label><label className="project-route__wide">What should this project improve?<textarea required value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} placeholder="Tell us what is not working and what a better result should look like." rows={4} /></label></div></fieldset>}
          {step === 3 && <fieldset><legend>Where should we reply?</legend><div className="project-route__fields"><label>Your name<input required value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} autoComplete="name" /></label><label>WhatsApp / phone<input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} autoComplete="tel" inputMode="tel" /></label><label>Email address<input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} autoComplete="email" inputMode="email" /></label><label>Best reply channel<select value={data.preferredChannel} onChange={(e) => setData({ ...data, preferredChannel: e.target.value })}><option value="whatsapp">WhatsApp</option><option value="call">Phone call</option><option value="email">Email</option></select></label><p className="project-route__helper">Add the contact detail for your selected reply channel. Choose email if you prefer not to share a number.</p><label className="project-route__consent"><input type="checkbox" required checked={data.consent} onChange={(e) => setData({ ...data, consent: e.target.checked })} /> I agree that Carter Digitals may contact me about this enquiry.</label><label className="project-route__honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={data.website} onChange={(e) => setData({ ...data, website: e.target.value })} /></label></div></fieldset>}
          <div className="project-route__actions">{step > 1 && <button type="button" className="project-route__back" onClick={() => setStep(step - 1)}><ArrowLeft size={18} /> Back</button>}<span />{step < 3 ? <button type="button" className="project-route__next" onClick={() => setStep(step + 1)} disabled={step === 2 && (!data.business || !data.message)}>Continue <ArrowRight size={18} /></button> : <button type="submit" className="project-route__next" disabled={status === "loading" || !data.name || (!data.phone && !data.email) || !data.consent}>{status === "loading" ? "Sending…" : <>Send my direction <Send size={17} /></>}</button>}</div>
          {status === "error" && <p className="project-route__error" role="alert">{error} <a href={whatsapp}>Use WhatsApp instead</a></p>}
        </>}
      </form>
    </section>
  );
}
