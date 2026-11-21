"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Globe2, PenTool, Sparkles } from "lucide-react";
import "./service-trinity.css";

const SERVICES = [
  {
    number: "01",
    label: "CUSTOM WEBSITES",
    eyebrow: "WEB / TRUST / ENQUIRIES",
    title: "Your website should make the next step obvious.",
    copy: "Before they phone, visit or send a WhatsApp, people are checking whether the business looks credible. We plan and build a fast, responsive website that explains the offer in plain language, answers the first questions and moves serious visitors towards an enquiry.",
    detail: "From the first page structure to the final mobile check, the work is shaped around your customers, your location and the action you want them to take—not a generic template.",
    points: ["Mobile-first structure", "Clear service messaging", "WhatsApp + enquiry paths", "SEO-ready foundation"],
    action: "Build my website",
    href: "/offerings/premium-websites",
    tone: "web",
    signal: "TRUST / FIRST",
    signalNote: "A sharper first impression",
    signalOutcome: "More confident next steps",
    promise: "A digital front door that earns its first chance.",
    bestFor: "Businesses that need more trust, clearer enquiries and a stronger local presence.",
    deliverables: ["Responsive page structure", "Conversion-led copy", "WhatsApp + enquiry paths", "SEO-ready foundations"],
    startPoint: "A focused direction within 24 hours",
    metric: "TRUST / ENQUIRIES",
    Icon: Globe2,
  },
  {
    number: "02",
    label: "3D LOGO DESIGN",
    eyebrow: "IDENTITY / PRESENCE / RECALL",
    title: "A stronger identity starts with a mark people can remember.",
    copy: "Your logo has to work beyond a profile picture. We develop a distinctive 3D-led identity that gives the business a stronger presence across your company profile, storefront, pitch deck, uniform, website and social media.",
    detail: "You receive a primary mark with practical flat and dimensional directions, plus organised exports so the identity stays useful after the design handover.",
    points: ["Distinctive primary mark", "3D + flat directions", "Digital + print exports", "Practical brand guidance"],
    action: "Upgrade my logo",
    href: "/offerings/creative-media",
    tone: "logo",
    signal: "RECALL / BUILT",
    signalNote: "A mark with more presence",
    signalOutcome: "A brand people recognise",
    promise: "A distinctive mark that keeps working after the reveal.",
    bestFor: "Founders, organisations and growing brands that have outgrown a forgettable identity.",
    deliverables: ["Primary 3D-led direction", "Flat-use logo direction", "Digital + print exports", "Practical usage guidance"],
    startPoint: "A sharper identity direction",
    metric: "PRESENCE / RECALL",
    Icon: Sparkles,
  },
  {
    number: "03",
    label: "POSTERS + CAMPAIGN VISUALS",
    eyebrow: "CAMPAIGN / ATTENTION / ACTION",
    title: "A good poster makes the offer impossible to miss.",
    copy: "Posters for business + organisations have seconds to land. Whether it is a promotion, school notice, community event or campaign, we give the message a clear hierarchy, bring the important detail forward and design the visual for the channels your audience actually uses.",
    detail: "That means a strong first glance on WhatsApp, a readable social post and a print-ready layout that still feels like the same campaign.",
    points: ["Message-first hierarchy", "WhatsApp + social sizes", "Print-ready layout", "Consistent campaign system"],
    action: "Create my poster",
    href: "/offerings/creative-media",
    tone: "poster",
    signal: "ACTION / NOW",
    signalNote: "A message that lands quickly",
    signalOutcome: "Attention that earns action",
    promise: "Campaign visuals that say the important thing first.",
    bestFor: "Businesses, schools and organisations promoting something people must notice now.",
    deliverables: ["Message-first hierarchy", "WhatsApp + social sizes", "Print-ready artwork", "Consistent campaign system"],
    startPoint: "A clear visual route for the message",
    metric: "ATTENTION / ACTION",
    Icon: PenTool,
  },
] as const;

export function ServiceTrinity() {
  const [active, setActive] = useState(0);
  const service = SERVICES[active];

  return (
    <section
      className={`service-trinity service-trinity--${service.tone}`}
      id="service-trinity"
      aria-labelledby="service-trinity-title"
    >
      <div className="service-trinity__glow" aria-hidden="true" />

      <header className="service-trinity__header" data-reveal>
        <span className="service-trinity__kicker">SERVICES / THE PIECES CUSTOMERS JUDGE FIRST</span>
        <h2 id="service-trinity-title">
          Three ways to look ready.
          <br />
          <em>One stronger reason to choose you.</em>
        </h2>
        <p>
          Choose the part of the business customers judge first. We make the message clearer, the presentation more credible and the next move easier for people across Pretoria, Gauteng and South Africa.
        </p>
      </header>

      <div className="service-trinity__type-strip" data-reveal>
        <div>
          <span>WEBSITE DIRECTIONS</span>
          <strong>Built for the business model—not copied from the next tab.</strong>
        </div>
        <div className="service-trinity__type-links" aria-label="Website directions">
          <Link href="/offerings/premium-websites#website-types">E-commerce</Link>
          <Link href="/offerings/premium-websites#website-types">Law firms</Link>
          <Link href="/offerings/premium-websites#website-types">Schools</Link>
          <Link href="/offerings/premium-websites#website-types">Dental &amp; healthcare</Link>
        </div>
        <Link className="service-trinity__type-cta" href="/offerings/premium-websites#website-types">
          Explore website types <ArrowUpRight size={15} />
        </Link>
      </div>

      <div className="service-trinity__readout" data-reveal aria-label="Carter Digitals service commitments">
        <div className="service-trinity__readout-label">
          <span><i aria-hidden="true" /> LIVE SERVICE READOUT</span>
          <strong>Choose the gap. See the move.</strong>
        </div>
        <div className="service-trinity__readout-stats">
          <div><b>24H</b><span>FIRST DIRECTION</span></div>
          <div><b>5–7</b><span>WORKING DAYS</span></div>
          <div><b>01:01</b><span>FOUNDER-LED DELIVERY</span></div>
        </div>
      </div>

      <div className="service-trinity__switchboard" data-reveal>
        <div className="service-trinity__selector" aria-label="Choose a service">
          {SERVICES.map(({ number, label, signal, Icon }, index) => (
            <button
              key={number}
              type="button"
              aria-pressed={active === index}
              aria-controls="service-stage"
              onClick={() => setActive(index)}
            >
              <span className="service-trinity__selector-number">{number}</span>
              <Icon aria-hidden="true" size={20} />
              <span className="service-trinity__selector-copy"><strong>{label}</strong><small>{signal}</small></span>
              <i aria-hidden="true"><ArrowUpRight size={17} /></i>
            </button>
          ))}
        </div>

        <article
          className="service-trinity__stage"
          id="service-stage"
          key={service.number}
          aria-label={`${service.label} service details`}
          aria-live="polite"
        >
          <div className="service-trinity__copy">
            <div className="service-trinity__stage-head"><span>SERVICE {service.number} / {service.signal}</span><strong>{service.promise}</strong><b>{service.metric}</b></div>
            <span className="service-trinity__eyebrow">{service.eyebrow}</span>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <p className="service-trinity__detail">{service.detail}</p>

            <ul>
              {service.points.map((point) => (
                <li key={point}><Check size={14} aria-hidden="true" />{point}</li>
              ))}
            </ul>

            <Link href={service.href}>
              {service.action}
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="service-trinity__signal" aria-label={`${service.label} deliverables and fit`}>
            <div className="service-trinity__offer-head"><span>WHAT YOU GET</span><b>{service.number} / 03</b></div>
            <div className="service-trinity__offer-statement"><span>{service.signalNote}</span><strong>{service.signalOutcome}</strong></div>
            <ul className="service-trinity__offer-list">
              {service.deliverables.map((item, index) => (
                <li key={item}><b>0{index + 1}</b><span>{item}</span><Check size={15} aria-hidden="true" /></li>
              ))}
            </ul>
            <div className="service-trinity__offer-fit"><span>BEST FOR</span><strong>{service.bestFor}</strong></div>
            <div className="service-trinity__offer-foot"><span>START WITH</span><b>{service.startPoint}</b></div>
          </div>
        </article>
      </div>

      <div className="service-trinity__closing" data-reveal>
        <span>NOT SURE WHERE TO START?</span>
        <strong>Start with the gap costing you the most trust. We’ll recommend the first move.</strong>
        <Link href="/contact">Get a direct recommendation <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}

export default ServiceTrinity;
