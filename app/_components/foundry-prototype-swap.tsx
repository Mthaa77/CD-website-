"use client";

import Image from "next/image";
import { Eye, MoveRight } from "lucide-react";
import type { PrototypeStep } from "./delivery-experience";
import "./foundry-prototype-swap.css";

type Props = {
  steps: readonly PrototypeStep[];
  activeStep: number;
};

export function FoundryPrototypeSwap({ steps, activeStep }: Props) {
  const safeStep = Math.max(0, Math.min(steps.length - 1, activeStep));

  return (
    <div className="foundry-prototype-swap" id="prototype-live-stage" aria-live="polite">
      <div className="foundry-prototype-swap__chrome"><span><i /><i /><i /></span><b>CLIENT VIEW / LIVE DIRECTION</b><small>24H / PROTOTYPE</small></div>
      <div className="foundry-prototype-swap__stage">
        <div className="foundry-prototype-swap__ambient foundry-prototype-swap__ambient--one" aria-hidden="true" />
        <div className="foundry-prototype-swap__ambient foundry-prototype-swap__ambient--two" aria-hidden="true" />
        {steps.map((step, index) => {
          const offset = (index - safeStep + steps.length) % steps.length;
          const position = offset === 0 ? "active" : offset === 1 ? "next" : "back";
          return (
            <article key={step.step} className={`foundry-prototype-swap__card foundry-prototype-swap__card--${position}`} aria-hidden={position !== "active"}>
              <Image className="foundry-prototype-swap__image" src="/images/homepage/carter-workshop.webp" alt="" fill sizes="(max-width: 900px) 92vw, 58vw" unoptimized />
              <div className="foundry-prototype-swap__wash" aria-hidden="true" />
              <div className="foundry-prototype-swap__card-top"><span>{step.canvasLabel}</span><b>{step.step} / 03</b></div>
              <div className="foundry-prototype-swap__card-copy"><small>VISIBLE DIRECTION</small><strong>{step.canvasTitle}<br /><em>{step.canvasAccent}</em></strong><p>{step.note}</p></div>
              <div className="foundry-prototype-swap__card-foot"><Eye size={16} /> {step.noteTitle}<MoveRight size={15} /></div>
            </article>
          );
        })}
        <div className="foundry-prototype-swap__cursor" aria-hidden="true"><span /><b>YOU ARE HERE</b></div>
      </div>
      <div className="foundry-prototype-swap__footer"><span>CARDS CHANGE / DIRECTION STAYS VISIBLE</span><b>{String(safeStep + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</b></div>
    </div>
  );
}

export default FoundryPrototypeSwap;
