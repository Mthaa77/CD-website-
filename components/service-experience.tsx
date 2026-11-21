"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, MousePointer2 } from "lucide-react";
import type { Family } from "../lib/data";
import "./service-experience.css";

const experiences = {
  websites: {
    label: "Website design & development",
    headline: "Make your first impression count.",
    introduction: "Your website should make it easier for people to understand your business, trust your work and take the next step.",
    image: "/images/industry/schools.webp",
    imageAlt: "Architecture in an education website concept",
    modes: [
      { title: "Build trust", description: "Show your expertise, your people and the work that helps a buyer feel confident choosing you.", preview: "Expertise worth finding.", detail: "Credentials, projects and a clear introduction come together in one considered experience." },
      { title: "Earn enquiries", description: "Give visitors a direct route from your services to a useful conversation, whether they prefer WhatsApp, phone or a form.", preview: "Let's talk about your project.", detail: "A focused enquiry journey makes the next step clear on every device." },
      { title: "Explain services", description: "Turn a complex offering into clear pages that help visitors find the service that fits their needs.", preview: "Find the right service.", detail: "Useful content and thoughtful navigation make your business easier to understand." },
    ],
    outcomes: [["A credible first impression", "Present the quality and character of your business with a design built around your brand."], ["A clear customer journey", "Guide visitors from the first look to the service and contact option they need."], ["Ready for discovery", "Give important services clear pages and search-friendly foundations."]],
  },
  stores: {
    label: "Online store development",
    headline: "Give your products room to shine.",
    introduction: "Bring your catalogue, checkout and order journey together in a storefront designed for the way your customers shop.",
    image: "/images/homepage/carter-premium-merch.webp",
    imageAlt: "An illustrative product collection",
    modes: [
      { title: "Discover", description: "Organise products and collections so customers can find what interests them and understand their options.", preview: "Find something worth keeping.", detail: "A curated product experience puts the details customers need within reach." },
      { title: "Purchase", description: "Create a clear path through the cart, payment and delivery choices, using supported providers agreed in your scope.", preview: "A smoother way to buy.", detail: "A considered checkout journey helps customers move from interest to order." },
      { title: "Manage", description: "Give your team a practical way to update products and work with orders after launch.", preview: "Ready for your next order.", detail: "Your agreed store setup and training make day-to-day management easier." },
    ],
    outcomes: [["A storefront with personality", "Present your products and collections in a way that feels true to your brand."], ["A considered checkout", "Bring shopping, payment and delivery choices into one connected journey."], ["Built for day-to-day use", "Agree your catalogue, operations and training needs before the build begins."]],
  },
  apps: {
    label: "Web applications & systems",
    headline: "Make the work flow better.",
    introduction: "From a focused internal workflow to a customer portal, we design software around the tasks your people actually need to complete.",
    image: "/carter-mobile-dashboard.webp",
    imageAlt: "An illustrative digital dashboard",
    modes: [
      { title: "Organise", description: "Bring agreed records, tasks and information into one structured place that your team can navigate.", preview: "Know where work stands.", detail: "A clear workspace brings people and information into the same journey." },
      { title: "Serve customers", description: "Give customers a practical route to submit requests, access information or follow an agreed process.", preview: "A better way to connect.", detail: "A portal can guide customers through the steps that matter to your business." },
      { title: "Make decisions", description: "Shape reporting and dashboards around the information your team needs to act on.", preview: "See the bigger picture.", detail: "Clearly presented information supports a more informed next step." },
    ],
    outcomes: [["Designed around real work", "Map the users, tasks and decisions before choosing the screens and features."], ["A clearer experience", "Make the agreed workflow easier for your customers and team to navigate."], ["Room to evolve", "Start with an agreed useful scope and plan further capabilities as needs grow."]],
  },
} as const;

export function ServiceExperience({ family }: { family: Family }) {
  const [active, setActive] = useState(0);
  const experience = experiences[family];
  const selected = experience.modes[active];
  return <>
    <header className={`service-hero service-hero--${family}`}>
      <div className="service-hero__copy">
        <p className="service-eyebrow">CARTER DIGITALS / {experience.label}</p>
        <h1>{experience.headline}</h1>
        <p>{experience.introduction}</p>
        <div className="service-actions"><a className="cd-button-new cd-button-new--gold" href="#experience">Explore the experience</a><a className="cd-button-new" href="#package-list">View packages</a></div>
        <small>Thoughtfully scoped for your business · Built in South Africa</small>
      </div>
      <div className="service-hero__visual">
        <img src={experience.image} alt={experience.imageAlt} width="950" height="633" fetchPriority="high" />
        <div className="service-hero__visual-label"><span>DESIGNED AROUND YOUR GOALS</span><strong>{experience.label}</strong></div>
      </div>
    </header>
    <section id="experience" className="service-experience" aria-labelledby="experience-heading">
      <div className="service-experience__intro"><div><p className="service-eyebrow">EXPLORE THE POSSIBILITIES</p><h2 id="experience-heading">What should your experience do?</h2></div><p>Choose a priority to see how the design can support your business.</p></div>
      <div className="service-experience__layout">
        <div className="service-experience__choices" role="group" aria-label="Choose a project priority">{experience.modes.map((mode,index)=><button type="button" key={mode.title} aria-pressed={active===index} onClick={()=>setActive(index)}><span><strong>{mode.title}</strong><small>{mode.description}</small></span><ArrowUpRight size={19} aria-hidden="true"/></button>)}</div>
        <div className="service-preview" aria-live="polite" key={selected.title}><div className="service-preview__bar"><span aria-hidden="true">● ● ●</span><span>ILLUSTRATIVE EXPERIENCE</span></div><div className="service-preview__body"><div className="service-preview__nav"><strong>YOUR BUSINESS</strong><span>ABOUT &nbsp; SERVICES &nbsp; CONTACT</span></div><p className="service-preview__eyebrow">A CLEARER DIGITAL EXPERIENCE</p><h3>{selected.preview}</h3><p>{selected.detail}</p><span className="service-preview__cta">Explore the possibilities <MousePointer2 size={14}/></span><div className="service-preview__shapes" aria-hidden="true"><i/><i/><i/></div></div><p className="service-preview__caption">Concept illustration</p></div>
      </div>
    </section>
    <section className="service-outcomes" aria-labelledby="outcomes-heading"><div><p className="service-eyebrow">BUILT WITH PURPOSE</p><h2 id="outcomes-heading">A stronger experience at every step.</h2></div><div className="service-outcomes__grid">{experience.outcomes.map(([title,copy])=><article key={title}><span><Check size={17}/></span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="service-transition"><div><p className="service-eyebrow">YOUR INVESTMENT</p><h2>Start with the scope that fits.</h2><p>Every business has different needs. Explore the starting packages and discuss the details with Kabelo.</p></div><Link className="cd-button-new" href="/contact#enquiry">Discuss your project</Link></section>
  </>;
}
