"use client";

import { ArrowDownRight, ArrowUpRight, Check, Radar } from "lucide-react";
import FoundryChromaGrid, { type ChromaSignal } from "./foundry-chroma-grid";
import "./business-signal-diagnostic.css";

export type ServiceKey = "websites" | "identity" | "campaigns";
export type SignalKey = "unnoticed" | "outdated" | "trust" | "unclear" | "enquiries";

const SIGNALS: Array<{
  key: SignalKey;
  label: string;
  short: string;
  service: ServiceKey;
  diagnosis: string;
  result: string;
}> = [
  { key: "unnoticed", label: "We are not being noticed", short: "Low visibility", service: "campaigns", diagnosis: "The offer may be solid, but the visual signal is too easy to ignore.", result: "A sharper campaign system that earns attention and tells people what to do next." },
  { key: "outdated", label: "Our website looks outdated", short: "Weak first impression", service: "websites", diagnosis: "Customers are judging the business through a digital front door that no longer reflects its quality.", result: "A modern, mobile-first website that makes the business look established and ready." },
  { key: "trust", label: "Customers hesitate to trust us", short: "Credibility gap", service: "websites", diagnosis: "The proof, structure and reassurance customers need are not arriving quickly enough.", result: "A clear credibility journey with useful proof, direct answers and confident next steps." },
  { key: "unclear", label: "Our offer is hard to explain", short: "Message confusion", service: "identity", diagnosis: "People should not need a meeting to understand what makes the business worth choosing.", result: "A distinctive identity and message system that makes the value easier to recognise and remember." },
  { key: "enquiries", label: "We need better enquiries", short: "Conversion leak", service: "websites", diagnosis: "Attention is arriving, but the journey is not guiding serious prospects towards action.", result: "A conversion-focused website with stronger service routes, calls to action and WhatsApp-ready contact." },
];

const CHROMA_SIGNALS: ChromaSignal[] = SIGNALS.map((signal, index) => ({
  key: signal.key,
  number: `0${index + 1}`,
  label: signal.label,
  short: signal.short,
  service: signal.service,
  accent: ["#ff5275", "#5bdff1", "#f2c85e", "#a98cff", "#5ee5ab"][index],
}));

const SERVICE_NAMES: Record<ServiceKey, string> = {
  websites: "Custom websites",
  identity: "3D brand identity",
  campaigns: "Campaign visuals",
};

type Props = {
  selected: SignalKey;
  onSelect: (signal: SignalKey) => void;
  onRecommend: (service: ServiceKey) => void;
};

export function BusinessSignalDiagnostic({ selected, onSelect, onRecommend }: Props) {
  const active = SIGNALS.find((signal) => signal.key === selected) ?? SIGNALS[0];

  const openRecommendation = () => {
    onRecommend(active.service);
    window.requestAnimationFrame(() => document.querySelector("#service-foundry")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <section className="signal-diagnostic" id="signal-diagnostic" aria-labelledby="signal-diagnostic-title">
      <div className="signal-diagnostic__ambient" aria-hidden="true"><i /><i /><i /></div>
      <header className="signal-diagnostic__header" data-reveal>
        <span className="signal-diagnostic__eyebrow"><Radar size={15} /> BUSINESS SIGNAL DIAGNOSTIC / 01</span>
        <h2 id="signal-diagnostic-title">Start with the business problem.<br /><em>Not the design trend.</em></h2>
        <p>Choose what customers are noticing—or failing to notice. We will route you to the digital move most likely to improve trust, clarity and enquiries.</p>
      </header>

      <div className="signal-diagnostic__console" data-reveal>
        <div className="signal-diagnostic__choices" role="group" aria-label="Choose the business problem">
          <span className="signal-diagnostic__label">WHAT IS COSTING THE BUSINESS?</span>
          {SIGNALS.map((signal, index) => (
            <button key={signal.key} type="button" className={selected === signal.key ? "is-active" : ""} aria-pressed={selected === signal.key} onClick={() => onSelect(signal.key)}>
              <span>0{index + 1}</span><strong>{signal.label}</strong><small>{signal.short}</small><ArrowDownRight size={19} />
            </button>
          ))}
        </div>

        <article className="signal-diagnostic__readout" aria-live="polite" key={active.key}>
          <div className="signal-diagnostic__readout-top"><span><i /> SIGNAL FOUND</span><b>ROUTE / {active.service.toUpperCase()}</b></div>
          <div className="signal-diagnostic__visual">
            <FoundryChromaGrid items={CHROMA_SIGNALS} active={selected} onSelect={onSelect} />
          </div>
          <div className="signal-diagnostic__copy">
            <small>WHAT WE SEE / {active.short}</small>
            <h3>{active.diagnosis}</h3>
            <div className="signal-diagnostic__result"><Check size={18} /><p><span>RECOMMENDED OUTCOME</span>{active.result}</p></div>
            <button type="button" className="signal-diagnostic__cta" onClick={openRecommendation}>Explore {SERVICE_NAMES[active.service]} <ArrowUpRight size={18} /></button>
          </div>
        </article>
      </div>
    </section>
  );
}
