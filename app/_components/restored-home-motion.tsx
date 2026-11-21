"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./restored-home-motion.css";

export function EnquiryGraphic() {
  return (
    <svg className="restored-enquiry-svg" viewBox="0 0 560 480" role="img" aria-label="Animation: a customer finds the website on Google, then sends an enquiry on WhatsApp">
<defs>
      <linearGradient id="restored-wire-gradient"><stop stopColor="#168870"/><stop offset="1" stopColor="#2256bf"/></linearGradient>
      <linearGradient id="restored-device" x2="1" y2="1"><stop stopColor="#ffffff"/><stop offset="1" stopColor="#ebf2ff"/></linearGradient>
      <radialGradient id="restored-halo"><stop stopColor="#acc8ff" stopOpacity=".66"/><stop offset="1" stopColor="#acc8ff" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse className="restore-ambient" cx="300" cy="224" rx="270" ry="211" fill="url(#restored-halo)" />
    <g fill="none" stroke="#a3b8e3" opacity=".34">
      <ellipse cx="285" cy="224" rx="230" ry="134" />
      <ellipse cx="285" cy="224" rx="164" ry="184" transform="rotate(31 285 224)" />
    </g>
<path id="restore-p1" className="restore-wire" d="M150 250 C230 250 270 250 350 250"/>
<path id="restore-p2" className="restore-wire" d="M280 66 C280 130 420 130 440 150"/>
<path id="restore-p3" className="restore-wire" d="M400 350 C400 400 300 410 250 410"/>


<circle className="restore-signal restore-signal--search" r="5" fill="#3266f3" />
<circle className="restore-signal restore-signal--chat" r="5" fill="#1e9678" />
<g transform="translate(180 18)"><rect className="restore-pn" width="200" height="46" rx="23"/><circle cx="26" cy="23" r="7" fill="none" stroke="#3266f3" strokeWidth="2"/><path d="M31 28l6 6" stroke="#3266f3" strokeWidth="2"/><text x="48" y="28" fontSize="12" fill="currentColor" style={{"fill": "#182342"}}>renovations pretoria</text></g>
<g transform="translate(20 140)"><rect className="restore-pn" width="130" height="220" rx="24"/><rect width="130" height="40" rx="24" fill="#40b997"/><rect y="20" width="130" height="20" fill="#40b997"/><text x="40" y="26" fontSize="12" fontWeight="500" fill="#102832">Customer</text><circle cx="22" cy="20" r="9" fill="#102832" opacity=".25"/>
<g className="restore-bub"><rect x="12" y="56" width="86" height="30" rx="12" style={{"fill": "#dce6fa"}}/><text x="22" y="76" fontSize="11" style={{"fill": "#182342"}}>Quote please?</text></g>
<g className="restore-bub restore-b2"><rect x="30" y="98" width="88" height="30" rx="12" fill="#40b997"/><text x="40" y="118" fontSize="11" fill="#102832">Sure, 2 min</text></g>
<g className="restore-bub restore-b3"><rect x="12" y="140" width="96" height="30" rx="12" style={{"fill": "#dce6fa"}}/><text x="22" y="160" fontSize="11" style={{"fill": "#182342"}}>Book a site visit</text></g></g>
<g transform="translate(350 150)"><rect className="restore-pn" width="190" height="200" rx="14"/><circle cx="16" cy="16" r="4" fill="#ff5f57"/><circle cx="30" cy="16" r="4" fill="#febc2e"/><circle cx="44" cy="16" r="4" fill="#28c840"/><rect className="restore-sk" x="14" y="36" width="110" height="12" rx="6"/><rect x="14" y="58" width="150" height="14" rx="7" fill="#3266f3" opacity=".85"/><rect className="restore-sk" x="14" y="80" width="130" height="8" rx="4"/><rect className="restore-sk" x="14" y="94" width="100" height="8" rx="4"/><g className="restore-cta-p"><rect x="14" y="116" width="96" height="30" rx="15" fill="#40b997"/><text x="30" y="135" fontSize="11" fontWeight="500" fill="#102832">WhatsApp us</text></g><rect className="restore-sk" x="14" y="162" width="52" height="24" rx="8"/><rect className="restore-sk" x="72" y="162" width="52" height="24" rx="8"/><rect className="restore-sk" x="130" y="162" width="46" height="24" rx="8"/></g>
<g transform="translate(60 384)"><g className="restore-toast"><rect className="restore-pn" width="190" height="54" rx="16" style={{"stroke": "#40b997"}}/><circle cx="26" cy="27" r="10" fill="#40b997"/><path d="M21 27l4 4 7-8" stroke="#102832" strokeWidth="2.4" fill="none"/><text x="46" y="24" fontSize="12" fontWeight="500" style={{"fill": "#182342"}}>New enquiry</text><text x="46" y="40" fontSize="10" style={{"fill": "#536174"}}>scope + location included</text></g></g>
</svg>
  );
}

function TrustGraphic() {
  return (
    <svg viewBox="0 0 520 304" role="img" aria-label="Credentials, examples and project scope build customer confidence">
      <defs>
        <linearGradient id="trust-ring" x2="1" y2="1"><stop stopColor="#2351bb"/><stop offset="1" stopColor="#699dfa"/></linearGradient>
        <linearGradient id="trust-paper" x2="1" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#e8efff"/></linearGradient>
      </defs>
      <rect x="23" y="28" width="474" height="248" rx="24" fill="url(#trust-paper)" stroke="#b2c6ef"/>
      <circle cx="142" cy="153" r="64" fill="#edf4ff" stroke="#ccdaf7" strokeWidth="8"/>
      <circle className="restore-ring" cx="142" cy="153" r="64" pathLength="1" fill="none" stroke="url(#trust-ring)" strokeWidth="8" transform="rotate(-90 142 153)"/>
      <text x="142" y="151" textAnchor="middle" className="restore-trust-number">L1</text>
      <text x="142" y="179" textAnchor="middle" className="restore-trust-key">B-BBEE</text>
      {["Credentials", "Relevant work", "Clear scope"].map((name,index) => (
        <g className="restore-proof-row" key={name} style={{ animationDelay: index * .38 + "s" }}>
          <rect x="244" y={68 + index * 62} width="220" height="46" rx="12" fill="#fff" stroke="#cedbf3"/>
          <circle cx="270" cy={91 + index * 62} r="12" fill="#dfefe9"/>
          <path d={`M265 ${91 + index * 62}l3 3 7-7`} fill="none" stroke="#267b62" strokeWidth="2" strokeLinecap="round"/>
          <text x="293" y={97 + index * 62} className="restore-trust-key">{name}</text>
        </g>
      ))}
    </svg>
  );
}

export function WebsiteBenefit({ kind }: { kind: "trust" | "enquiry" }) {
  const ref = useRef<HTMLElement>(null);
  const trust = kind === "trust";
  useEffect(() => {
    const section = ref.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      section.dataset.visible = String(entry.isIntersecting);
    }, { threshold: .15 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} className="refined-section restored-benefit" aria-labelledby={`restored-${kind}`}>
      <div className="restored-benefit-copy">
        <h2 id={`restored-${kind}`}>{trust ? "Give buyers a reason to trust you." : "Make the first enquiry easy."}</h2>
        <p>{trust ? "Show the proof buyers look for. Put credentials, relevant work and a clear scope where people can find them." : "From the first Google search to a WhatsApp conversation, make it effortless for the right customer to reach your business."}</p>
        {trust ? <Link href="/company-profile">See Carter’s company credentials</Link> : <a href="https://wa.me/27724026893">Chat to Kabelo on WhatsApp</a>}
      </div>
      <figure>{trust ? <TrustGraphic /> : <EnquiryGraphic />}{!trust && <figcaption>Illustrative customer journey</figcaption>}</figure>
    </section>
  );
}

const stages = [
  ["They search", "A clear service page answers the question they searched for."],
  ["They trust", "Relevant work and credentials help them decide whether you’re a fit."],
  ["They enquire", "WhatsApp or a short form takes them straight to the next step."],
];

export function BuyerJourney() {
  return (
    <section className="refined-section restored-journey" aria-labelledby="restored-journey-title">
      <header><h2 id="restored-journey-title">From search to <em>first enquiry.</em></h2></header>
      <svg viewBox="0 0 1000 170" aria-hidden="true">
        <defs><linearGradient id="restored-journey-gradient"><stop stopColor="#244aac"/><stop offset=".55" stopColor="#3564d6"/><stop offset="1" stopColor="#1c9c80"/></linearGradient></defs>
        <path className="restored-track" d="M45 116C204 27 349 30 500 92S810 150 955 54" />
        <path className="restored-trail" d="M45 116C204 27 349 30 500 92S810 150 955 54" pathLength="1" />
        {[[45,116],[500,92],[955,54]].map(([x,y],index) => (
          <g key={x} className="restore-journey-node">
            <circle cx={x} cy={y} r="17" />
            <text x={x} y={y+5} textAnchor="middle">{index+1}</text>
          </g>
        ))}
      </svg>
      <ol>{stages.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    </section>
  );
}
