"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Search, ShieldCheck } from "lucide-react";
import { industries } from "../lib/data";

const sectors = [
  { key: "law-firms", index: 0, labels: ["Find a practice area", "Meet the attorneys", "Request a consultation"] },
  { key: "construction", index: 3, labels: ["Find a contractor", "See similar projects", "Request a site visit"] },
  { key: "dental-practices", index: 2, labels: ["Find a treatment", "Meet the dental team", "Ask for an appointment"] },
  { key: "schools", index: 1, labels: ["Find a programme", "Explore the school", "Ask about admissions"] },
] as const;
const steps = [
  { label: "Discovery", Icon: Search },
  { label: "Confidence", Icon: ShieldCheck },
  { label: "Enquiry", Icon: MessageCircle },
] as const;

export function HomepageStudio() {
  const [sectorIndex, setSector] = useState<number>(0);
  const [stepIndex, setStep] = useState<number>(0);
  const sector = sectors[sectorIndex];
  const [industry, description, href] = industries[sector.index];
  const briefing = new URLSearchParams({ service: "websites", brief: `${industry}: ${sector.labels[stepIndex]}` });

  return (
    <section className="hs-section hs-studio" id="sectors" aria-labelledby="hs-studio-title">
      <header className="hs-heading"><div><p className="hs-label">Industry studio</p><h2 id="hs-studio-title">See your sector <em>through a customer’s eyes.</em></h2></div><p>Pick an industry and follow the decisions a visitor makes before reaching out.</p></header>
      <div className="hs-switch" role="group" aria-label="Choose an industry">
        {sectors.map(({key, index}, position) => <button key={key} type="button" aria-pressed={position === sectorIndex} onClick={() => {setSector(position); setStep(0)}}>{industries[index][0]}</button>)}
      </div>
      <div className="hs-studio-stage">
        <figure className="hs-industry-visual">
          <Image key={sector.key} src={`/images/industry/${sector.key}.webp`} fill unoptimized sizes="(max-width: 760px) 92vw, 47vw" alt="" />
          <figcaption>Illustrative sector visual</figcaption>
        </figure>
        <div className="hs-studio-panel">
          <div className="hs-steps" role="group" aria-label="Choose a stage of the customer journey">
            {steps.map(({label, Icon}, index) => <button type="button" key={label} aria-pressed={index === stepIndex} onClick={() => setStep(index)}><Icon size={17} aria-hidden="true"/>{label}</button>)}
          </div>
          <div className="hs-journey-detail" aria-live="polite">
            <svg className="hs-journey-line" viewBox="0 0 300 20" aria-hidden="true">
              <path d="M10 10H290" stroke="#41618a" strokeWidth="2"/>
              <path d={`M10 10H${10 + stepIndex * 140}`} stroke="#b9d9ff" strokeWidth="2"/>
              {[10,150,290].map((x, index) => <circle key={x} cx={x} cy="10" r={index === stepIndex ? 5 : 3} fill={index <= stepIndex ? "#b9d9ff" : "#6382a8"} />)}
            </svg>
            <h3 key={`${sector.key}-${stepIndex}`}>{sector.labels[stepIndex]}</h3>
            <p>{stepIndex === 0 ? `Give visitors a service page that answers what they came looking for. ${description}` : stepIndex === 1 ? "Bring the credentials, people and relevant work behind the service into view before asking visitors to get in touch." : "Offer an obvious next step with a short form or direct WhatsApp contact, depending on how your team handles enquiries."}</p>
          </div>
          <div className="hs-actions"><Link className="hs-button" href={`/contact?${briefing}#enquiry`}>Discuss this direction <ArrowUpRight size={17} aria-hidden="true"/></Link><Link className="hs-link" href={href}>View sector page</Link></div>
        </div>
      </div>
      <nav className="hs-sector-links" aria-label="Sector pages">{sectors.map(({key,index}) => <Link key={key} href={industries[index][2]}>{industries[index][0]} <ArrowUpRight size={14} aria-hidden="true"/></Link>)}</nav>
    </section>
  );
}
