"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, MessageCircleQuestion } from "lucide-react";
import SpotlightCard from "./react-bits/spotlight-card";
import "./objection-decoder.css";

const QUESTIONS = [
  { q: "I do not know what kind of website I need.", a: "That is normal. We start with the business goal, the customer and the action you want people to take. Within 24 hours, you receive a visual direction you can react to before committing to a full build.", action: "Ask for a recommendation" },
  { q: "We do not have proper content yet.", a: "You do not need a polished document before we begin. We help structure the offer, sharpen the important messages and show you exactly what copy, images and proof are still needed.", action: "Plan the content with us" },
  { q: "How much input will I have?", a: "Plenty, without turning the process into admin. You react to a real prototype, tell us what feels right or wrong, and we refine the direction before the main build moves ahead.", action: "See the prototype process" },
  { q: "Can you work with our current branding?", a: "Yes. We can strengthen an existing identity, translate it into a more premium digital system, or create a new dimensional direction when the current brand is holding the business back.", action: "Discuss the brand" },
  { q: "What happens after launch?", a: "We hand over a clear, tested experience and can support updates, additions and ongoing improvements. The aim is a site that keeps working after the launch excitement is over.", action: "Talk about ongoing support" },
];

export function ObjectionDecoder() {
  const [active, setActive] = useState(0);
  const activeQuestion = active >= 0 ? QUESTIONS[active] : null;
  return (
    <section className="objection-decoder" id="faq" aria-labelledby="objection-decoder-title">
      <header className="objection-decoder__intro" data-reveal>
        <span><MessageCircleQuestion size={16} /> OBJECTION DECODER / 05</span>
        <h2 id="objection-decoder-title">Good questions.<br /><em>Straight answers.</em></h2>
        <p>If something is making you hesitate, choose it. We will tell you how the process works without the runaround.</p>
        <a href="#project-route">Ask a different question <ArrowUpRight size={17} /></a>
      </header>
      <aside className="objection-decoder__stage" data-reveal aria-live="polite">
        <SpotlightCard className="objection-decoder__answer-surface" spotlightColor="rgba(239, 98, 114, 0.28)">
          <div className="objection-decoder__stage-top"><span><i /> LIVE ANSWER / {activeQuestion ? `0${active + 1}` : "—"}</span><b>NO AGENCY FOG</b></div>
          <div className="objection-decoder__stage-mark" aria-hidden="true">?</div>
          {activeQuestion ? <><span className="objection-decoder__stage-label">THE QUESTION UNDER THE QUESTION</span><h3>{activeQuestion.q}</h3><p>{activeQuestion.a}</p><a href="#project-route">{activeQuestion.action} <ArrowUpRight size={16} /></a></> : <><span className="objection-decoder__stage-label">READY WHEN YOU ARE</span><h3>Bring us the thing you are unsure about.</h3><p>We will turn the uncertainty into a clear first direction.</p></>}
        </SpotlightCard>
      </aside>
      <div className="objection-decoder__list" data-reveal>
        {QUESTIONS.map((item, index) => {
          const open = active === index;
          return <article key={item.q} className={open ? "is-open" : ""}>
            <h3><button type="button" aria-expanded={open} aria-controls={`answer-${index}`} onClick={() => setActive(open ? -1 : index)}><span>0{index + 1}</span>{item.q}<ChevronDown size={20} /></button></h3>
            <div id={`answer-${index}`} className="objection-decoder__answer" hidden={!open}><p>{item.a}</p><a href="#project-route">{item.action} <ArrowUpRight size={16} /></a></div>
          </article>;
        })}
      </div>
    </section>
  );
}
