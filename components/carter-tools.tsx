"use client";

import { useEffect, useRef, useState } from "react";
import { families, packages, priceNote, quoteLink, type Family } from "../lib/data";

const goals: readonly [Family, string][] = [["websites", "More enquiries"], ["stores", "Sell online"], ["apps", "A business system"]];
const stages = ["Just starting", "Established", "Scaling up"];

export function PackageFinder() {
  const [goal, setGoal] = useState<Family>();
  const [stage, setStage] = useState<number>();
  const result = goal && stage !== undefined ? packages[goal][stage] : undefined;
  function chooseStage(index: number) {
    setStage(index);
    if (goal) window.dispatchEvent(new CustomEvent("carter:analytics", { detail: { event: "package_finder_complete", package: packages[goal][index].name } }));
  }
  return <section className="cd-section-new" id="package-finder"><div className="cd-quiz cd-panel-new">
    <div><p className="cd-kicker">Package finder</p><h2>Find the right starting point.</h2><p>Two questions to match your project to a Carter package.</p></div>
    <div className="cd-quiz__controls"><div className="cd-quiz__progress" aria-label={result?"Complete":goal?"Question 2 of 2":"Question 1 of 2"}><i data-active="true"/><i data-active={Boolean(goal)}/></div>
    {result ? <div aria-live="polite"><h3>{result.name}</h3><p className="cd-money">From {result.price}</p><p>{result.scope}</p><ul>{result.features.slice(0,3).map(feature=><li key={feature}>{feature}</li>)}</ul><div className="cd-actions-new"><a className="cd-button-new cd-button-new--gold" href={quoteLink(result.name)}>Get my quote</a><a href={`/${goal}`}>See all options</a><button type="button" onClick={()=>{setGoal(undefined);setStage(undefined)}}>Start over</button></div><small>{priceNote}</small></div>
    : goal ? <fieldset><legend>Where is the business?</legend>{stages.map((name,index)=><button type="button" key={name} onClick={()=>chooseStage(index)}>{name}</button>)}<button type="button" onClick={()=>setGoal(undefined)}>Back</button></fieldset>
    : <fieldset><legend>What do you need most?</legend>{goals.map(([id,label])=><button type="button" key={id} onClick={()=>setGoal(id)}>{label}</button>)}</fieldset>}</div>
  </div></section>;
}

export function WebsiteComparison() {
  const [value, setValue] = useState(55);
  const root = useRef<HTMLElement>(null);
  const interacted = useRef(false);
  useEffect(() => {
    if (!root.current || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        if (interacted.current) return;
        const time = Math.min(1,(now-start)/1050);
        setValue(Math.round(55 + 24 * Math.sin(time * Math.PI)));
        if (time < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .35 });
    observer.observe(root.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return <section ref={root} className="cd-section-new hx-comparison" aria-labelledby="compare-title"><p className="hx-kicker">A DIFFERENT FIRST IMPRESSION</p><h2 id="compare-title">The difference is <em>in the details.</em></h2><p className="hx-comparison-intro">Move the slider to explore how a clearer experience can change the way a business presents itself.</p>
    <div className="cd-compare"><div className="cd-compare__new"><small>After</small><h3>Build with confidence.</h3><p>See our capabilities, recent work and how to request a quote.</p><span>Explore our services</span></div><div className="cd-compare__old" style={{clipPath:`inset(0 ${100-value}% 0 0)`}}><small>Before</small><h3>WELCOME TO OUR WEBSITE!!!</h3><p>Best viewed in Internet Explorer.</p><u>HOME | ABOUT US | CLICK HERE</u></div><div className="cd-compare__line" style={{left:`${value}%`}}><span aria-hidden="true">↔</span></div></div>
    <label className="cd-compare__control">Before and after comparison<input type="range" min="0" max="100" value={value} onChange={event=>{interacted.current=true;setValue(Number(event.target.value))}} aria-valuetext={`${value}% before, ${100-value}% after`}/></label>
  </section>;
}

export function GrowthCards() {
  return <div className="cd-tiles cd-tiles--three">{families.map(({id,title,copy})=><a className="cd-panel-new cd-growth-card" href={`/${id}`} key={id}><h3>{title}</h3><p>{copy}</p><strong>From {packages[id][0].price}</strong></a>)}</div>;
}
