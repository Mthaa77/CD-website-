"use client";

import { ArrowUpRight, Check, ChevronRight, Crosshair, ScanLine } from "lucide-react";
import { type KeyboardEvent } from "react";
import SpotlightCard from "./react-bits/spotlight-card";
import "./conversion-xray.css";

export type ServiceKey = "websites" | "identity" | "campaigns";
export type SignalKey = "unnoticed" | "outdated" | "trust" | "unclear" | "enquiries";

const SIGNALS: Array<{
  key: SignalKey;
  label: string;
  short: string;
  service: ServiceKey;
  diagnosis: string;
  result: string;
  move: string;
}> = [
  { key: "unnoticed", label: "We are not being noticed", short: "Low visibility", service: "campaigns", diagnosis: "The offer may be solid, but the visual signal is too easy to ignore.", result: "A sharper campaign system that earns attention and tells people what to do next.", move: "Strengthen the signal" },
  { key: "outdated", label: "Our website looks outdated", short: "Weak first impression", service: "websites", diagnosis: "Customers are judging the business through a digital front door that no longer reflects its quality.", result: "A modern, mobile-first website that makes the business look established and ready.", move: "Renew the front door" },
  { key: "trust", label: "Customers hesitate to trust us", short: "Credibility gap", service: "websites", diagnosis: "The proof, structure and reassurance customers need are not arriving quickly enough.", result: "A clear credibility journey with useful proof, direct answers and confident next steps.", move: "Build public trust" },
  { key: "unclear", label: "Our offer is hard to explain", short: "Message confusion", service: "identity", diagnosis: "People should not need a meeting to understand what makes the business worth choosing.", result: "A distinctive identity and message system that makes the value easier to recognise and remember.", move: "Clarify the value" },
  { key: "enquiries", label: "We need better enquiries", short: "Conversion leak", service: "websites", diagnosis: "Attention is arriving, but the journey is not guiding serious prospects towards action.", result: "A conversion-focused website with stronger service routes, calls to action and WhatsApp-ready contact.", move: "Guide the next move" },
];

const SERVICE_NAMES: Record<ServiceKey, string> = {
  websites: "Custom websites",
  identity: "3D brand identity",
  campaigns: "Campaign visuals",
};

const normalizeIndex = (index: number) => ((index % SIGNALS.length) + SIGNALS.length) % SIGNALS.length;

type Props = {
  selected: SignalKey;
  onSelect: (signal: SignalKey) => void;
  onRecommend: (service: ServiceKey) => void;
};

export function ConversionXray({ selected, onSelect, onRecommend }: Props) {
  const activeIndex = Math.max(0, SIGNALS.findIndex((signal) => signal.key === selected));
  const active = SIGNALS[activeIndex] ?? SIGNALS[0];

  const chooseSignal = (index: number) => onSelect(SIGNALS[normalizeIndex(index)].key);

  const handleSignalKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = normalizeIndex(index + direction);
    chooseSignal(nextIndex);
    document.getElementById("signal-xray-" + nextIndex)?.focus();
  };

  const openRecommendation = () => {
    onRecommend(active.service);
    window.requestAnimationFrame(() => document.querySelector("#service-foundry")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <section className="conversion-xray" id="signal-diagnostic" aria-labelledby="conversion-xray-title">
      <div className="conversion-xray__atmosphere" aria-hidden="true"><i /><i /><i /></div>

      <header className="conversion-xray__header" data-reveal>
        <div className="conversion-xray__header-line"><span><Crosshair size={15} /> CONVERSION X-RAY / 02</span><b>FIND THE LEAK / ROUTE THE MOVE</b></div>
        <h2 id="conversion-xray-title">Find the signal leak.<br /><em>Then make the move.</em></h2>
        <p>Choose the friction your customers are feeling. The x-ray turns it into a practical direction for the website, identity or campaign that should come next.</p>
      </header>

      <div className="conversion-xray__workspace" data-reveal>
        <aside className="conversion-xray__rail" aria-label="Choose the business problem">
          <div className="conversion-xray__rail-head"><span>FRICTION INDEX</span><b>05 / 05</b></div>
          <div className="conversion-xray__signals" role="group" aria-label="Business problems">
            {SIGNALS.map((signal, index) => {
              const isActive = signal.key === active.key;
              return (
                <button
                  type="button"
                  id={"signal-xray-" + index}
                  key={signal.key}
                  className={isActive ? "is-active" : ""}
                  aria-pressed={isActive}
                  onClick={() => onSelect(signal.key)}
                  onKeyDown={(event) => handleSignalKeyDown(event, index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{signal.label}</strong>
                  <ChevronRight size={15} aria-hidden="true" />
                </button>
              );
            })}
          </div>
          <div className="conversion-xray__rail-foot"><i aria-hidden="true" /><span>SELECT A FRICTION<br />TO SCAN THE ROUTE</span></div>
        </aside>

        <div className="conversion-xray__chamber">
          <div className="conversion-xray__chamber-head"><span><ScanLine size={14} /> LIVE SURFACE / X-RAY ACTIVE</span><b>ROUTE / {active.service.toUpperCase()}</b></div>

          <div className="conversion-xray__chamber-body" key={active.key}>
            <SpotlightCard className="conversion-xray__scan-field" spotlightColor="rgba(50, 207, 231, 0.3)">
              <div className="conversion-xray__scan-grid" aria-hidden="true" />
              <div className="conversion-xray__scan-ring conversion-xray__scan-ring--outer" aria-hidden="true" />
              <div className="conversion-xray__scan-ring conversion-xray__scan-ring--middle" aria-hidden="true" />
              <div className="conversion-xray__scan-ring conversion-xray__scan-ring--inner" aria-hidden="true" />
              <div className="conversion-xray__scan-line" aria-hidden="true" />
              <div className="conversion-xray__lens-core">
                <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                <strong>{active.short}</strong>
                <small>FRICTION FOUND</small>
              </div>
              <div className="conversion-xray__lens-axis conversion-xray__lens-axis--horizontal" />
              <div className="conversion-xray__lens-axis conversion-xray__lens-axis--vertical" />
              <span className="conversion-xray__scan-tag conversion-xray__scan-tag--one">SIGNAL</span>
              <span className="conversion-xray__scan-tag conversion-xray__scan-tag--two">TRUST</span>
              <span className="conversion-xray__scan-tag conversion-xray__scan-tag--three">ACTION</span>
            </SpotlightCard>

            <div className="conversion-xray__finding">
              <span>WHAT WE SEE / {active.short}</span>
              <h3>{active.diagnosis}</h3>
              <div className="conversion-xray__finding-meta"><b>01</b><i /><span>{active.move}</span></div>
            </div>
          </div>

          <div className="conversion-xray__translation">
            <div><span><Check size={13} /> X-RAY FINDING</span><strong>{active.label}</strong></div>
            <div><span>RECOMMENDED ROUTE</span><strong>{SERVICE_NAMES[active.service]}</strong></div>
            <p>{active.result}</p>
          </div>

          <button type="button" className="conversion-xray__cta" onClick={openRecommendation}>
            Explore {SERVICE_NAMES[active.service]} <ArrowUpRight size={18} />
          </button>
        </div>
      </div>

      <footer className="conversion-xray__footer" data-reveal>
        <span><i aria-hidden="true" /> NO GENERIC PACKAGE / ONE RIGHT NEXT MOVE</span>
        <strong>SCAN COMPLETE <b>→</b> DIRECTION READY</strong>
      </footer>
    </section>
  );
}

export default ConversionXray;
