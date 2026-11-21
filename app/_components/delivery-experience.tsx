"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight, Check, Clock3, Layers3, MessageCircle, Rocket } from "lucide-react";
import BuildReactor, { type BuildReactorStep } from "./build-reactor";
import "./delivery-experience.css";

const STEPS = [
  { step: "01", label: "Tell us what must change", detail: "Share the business goal, audience and action you need people to take.", canvasLabel: "YOUR BUSINESS PROBLEM", canvasTitle: "Start with what", canvasAccent: "must change.", noteTitle: "No polished brief needed.", note: "Bring the problem, the customer and the result you need." },
  { step: "02", label: "Get a visible direction", detail: "We turn the brief into a focused visual prototype within 24 hours.", canvasLabel: "YOUR FIRST DIRECTION", canvasTitle: "Now you can", canvasAccent: "see it.", noteTitle: "No blind commitment.", note: "Review the direction before the full build moves ahead." },
  { step: "03", label: "Shape it with us", detail: "You respond to something real. We keep what works and remove what does not.", canvasLabel: "YOUR APPROVED ROUTE", canvasTitle: "Build what", canvasAccent: "feels right.", noteTitle: "Feedback stays practical.", note: "We refine a real direction instead of debating abstract ideas." },
] as const satisfies readonly BuildReactorStep[];

export type PrototypeStep = (typeof STEPS)[number];

const SPRINT = [
  ["DAY 01", "Direction locked"], ["DAY 02–03", "Core build"], ["DAY 04–05", "Content + refinement"], ["DAY 06", "Quality control"], ["DAY 07", "Ready to launch"],
];

export function DeliveryExperience() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <>
      <section className="prototype-first" aria-labelledby="prototype-first-title">
        <div className="prototype-first__intro" data-reveal>
          <span>PROTOTYPE FIRST / SEE IT BEFORE YOU COMMIT</span>
          <h2 id="prototype-first-title">Your first direction.<br /><em>Within 24 hours.</em></h2>
          <p>You should not have to approve a full build based on promises. We create a focused first prototype within 24 hours, so you can see the direction, challenge it and invest in something you actually want.</p>
          <Link href="#project-route">Request my first direction <ArrowUpRight size={17} /></Link>
        </div>
        <div className="prototype-first__console" data-reveal>
          <BuildReactor steps={STEPS} activeStep={activeStep} onStepSelect={setActiveStep} />
          <ol>{STEPS.map(({ step, label, detail }, index) => <li key={step} className={activeStep === index ? "is-active" : ""}><button type="button" aria-pressed={activeStep === index} aria-controls="prototype-live-stage" onClick={() => setActiveStep(index)}><span>{step}</span><div><strong>{label}</strong><p>{detail}</p></div><Check size={17} aria-hidden="true" /></button></li>)}</ol>
        </div>
      </section>

      <section className="delivery-sprint" aria-labelledby="delivery-sprint-title">
        <div className="delivery-sprint__number" aria-hidden="true"><span>05</span><i>TO</i><span>07</span></div>
        <div className="delivery-sprint__content" data-reveal>
          <span>FOCUSED DELIVERY / CLEAR ACCOUNTABILITY</span>
          <h2 id="delivery-sprint-title">Focused builds.<br /><em>5–7 working days.</em></h2>
          <p>Once the direction is approved, we move with a clear schedule. A focused website can go from approved prototype to launch in 5–7 working days when content and feedback arrive on time.</p>
          <div className="delivery-sprint__promises"><span><Clock3 /> Clear schedule</span><span><MessageCircle /> Direct feedback</span><span><Rocket /> Launch-ready finish</span></div>
          <Link href="#project-route">Reserve a focused build slot <ArrowUpRight size={17} /></Link>
        </div>
        <div className="delivery-sprint__timeline" data-reveal>
          <div className="delivery-sprint__timeline-head"><Layers3 size={19} /><span>BUILD SEQUENCE</span><small>STATUS / FOCUSED</small></div>
          <ol>{SPRINT.map(([day, task], index) => <li key={day}><span>{day}</span><strong>{task}</strong><i style={{ "--progress": `${(index + 1) * 20}%` } as CSSProperties} /></li>)}</ol>
          <p>*Timing applies to focused projects with an approved direction, supplied content and prompt feedback.</p>
        </div>
      </section>
    </>
  );
}
