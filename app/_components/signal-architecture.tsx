"use client";

import { ArrowUpRight, Check, Route, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import MagicBento from "./react-bits/magic-bento";
import "./signal-architecture.css";

const SIGNAL_PRINCIPLES = [
  {
    code: "01",
    label: "SIGNAL",
    title: "Earn the first look.",
    body: "Distinctive art direction gives your business presence in a busy feed, search result or street-level conversation without making the message harder to understand.",
    action: "Make value obvious",
    icon: Sparkles,
  },
  {
    code: "02",
    label: "TRUST",
    title: "Remove the doubt.",
    body: "Clear services, credible structure and useful proof answer the questions customers ask before they call, book, buy or send a WhatsApp.",
    action: "Build public trust",
    icon: ShieldCheck,
  },
  {
    code: "03",
    label: "ACTION",
    title: "Guide the next move.",
    body: "Focused calls to action turn attention into an enquiry, a booking, a purchase or a proper conversation with the right customer.",
    action: "Make action easy",
    icon: Zap,
  },
] as const;

export function SignalArchitecture() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SIGNAL_PRINCIPLES[activeIndex];

  const moveSelection = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowDown" && event.key !== "ArrowLeft" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (index + direction + SIGNAL_PRINCIPLES.length) % SIGNAL_PRINCIPLES.length;
    setActiveIndex(nextIndex);
    document.getElementById("signal-node-" + nextIndex)?.focus();
  };

  return (
    <section className="signal-architecture" id="signal-system" aria-labelledby="signal-architecture-title">
      <div className="signal-architecture__wash" aria-hidden="true"><i /><i /><i /></div>

      <div className="signal-architecture__topline" data-reveal>
        <span><i aria-hidden="true" /> CARTER SIGNAL ARCHITECTURE</span>
        <b>03 MOVES / 01 CLEAR JOURNEY</b>
      </div>

      <div className="signal-architecture__layout">
        <div className="signal-architecture__copy" data-reveal>
          <span className="signal-architecture__kicker">THE FIRST IMPRESSION / BUILT ON PURPOSE</span>
          <h2 id="signal-architecture-title">Make the business<br /><em>easier to choose.</em></h2>
          <p>Attention is only useful when it becomes understanding. We shape the visual signal, the proof and the next action as one deliberate system.</p>

          <div className="signal-architecture__readout" aria-live="polite">
            <div className="signal-architecture__readout-head">
              <span><i aria-hidden="true" /> ACTIVE MOVE / {active.code}</span>
              <b>{active.label}</b>
            </div>
            <strong>{active.title}</strong>
            <p>{active.body}</p>
            <div className="signal-architecture__readout-action"><span>OUTCOME</span><b>{active.action}</b><ArrowUpRight size={16} /></div>
          </div>
        </div>

        <div className="signal-architecture__stage" data-reveal role="group" aria-label="Interactive Carter signal architecture">
          <div className="signal-architecture__stage-top"><span><Route size={14} /> LIVE SIGNAL PATH</span><b>01 / 03</b></div>
          <div className="signal-architecture__diagram" aria-label="Interactive signal architecture tiles">
            <MagicBento
              textAutoHide={false}
              enableStars
              enableSpotlight
              enableBorderGlow
              spotlightRadius={260}
              particleCount={8}
              enableTilt
              glowColor="64, 212, 232"
              clickEffect
              enableMagnetism={false}
            />
          </div>

          <div className="signal-architecture__nodes" role="group" aria-label="Select a signal move">
            {SIGNAL_PRINCIPLES.map((principle, index) => {
              const Icon = principle.icon;
              const isActive = index === activeIndex;
              return (
                <button
                  type="button"
                  id={"signal-node-" + index}
                  key={principle.code}
                  className={isActive ? "is-active" : ""}
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => moveSelection(event, index)}
                >
                  <span className="signal-architecture__node-top"><b>{principle.code}</b><Icon size={15} /></span>
                  <strong>{principle.label}</strong>
                  <small>{principle.action}</small>
                </button>
              );
            })}
          </div>

          <div className="signal-architecture__stage-foot">
            <span><Check size={13} /> NO FRICTION / JUST DIRECTION</span>
            <b>SELECT A NODE TO READ THE MOVE</b>
          </div>
        </div>
      </div>

      <div className="signal-architecture__footer" data-reveal>
        <span><i aria-hidden="true" /> SYSTEM STATUS / ACTIVE</span>
        <strong>ONE CLEAR MOVE <b>→</b> A BETTER FIRST IMPRESSION</strong>
      </div>
    </section>
  );
}

export default SignalArchitecture;
