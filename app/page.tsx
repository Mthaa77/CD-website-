import { AuditScenes } from "../components/audit-scenes";
import "./homepage-audit.css";
import Image from "next/image";
import Link from "next/link";
import { AnalyticsGraphic, BenefitIcon } from "../components/carter-graphics";
import { CarterFooter, CarterNav } from "../components/carter-frame";
import { HomeMotion, Reveal } from "../components/carter-motion";
import { PackageFinder, WebsiteComparison } from "../components/carter-tools";
import { company, faqs, packages, priceNote } from "../lib/data";
import { EnquiryGraphic } from "./_components/restored-home-motion";
import { DeliveryShowcase, IndustryShowcase, PremiumFaq, ServiceShowcase, TrustMetrics } from "../components/home-showcase";
import { ConnectionExperience, CustomerJourney, OpportunityGaps } from "../components/cinematic-journey";

const benefits = [
  ["Be found", "Make it easier for buyers to discover your services in search."],
  ["Earn trust", "Put relevant work and credentials where buyers can see them."],
  ["Turn interest into action", "Give people a clear way to request a quote or start a conversation."],
];

const facts = [`Websites from ${packages.websites[0].price}`,`Stores from ${packages.stores[0].price}`,`Web apps from ${packages.apps[0].price}`,"Care plans from R399/mo","Level 1 B-BBEE","CSD registered"];

export default function Home() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name,text])=>({ "@type": "Question",name,acceptedAnswer:{"@type":"Answer",text} })) };
  const servicesSchema = { "@context": "https://schema.org", "@graph": ["websites","stores","apps"].map((family,index)=>({ "@type":"Service", name:["Website development","Online stores","Web application development"][index],url:`${company.url}/${family}`,provider:{"@id":`${company.url}/#organization`},areaServed:"South Africa" })) };
  return <>
    <CarterNav/>
    <main className="cd-cinematic" id="top">
      <HomeMotion/>
      <nav className="audit-mobile" aria-label="Quick contact"><a href={company.whatsapp}>WhatsApp Kabelo</a><Link href="/contact#enquiry">Start a project</Link></nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(servicesSchema)}}/>
      <section className="cd-hero-new" aria-labelledby="new-hero-title">
        <div className="cd-hero-new__orb cd-hero-new__orb--blue" aria-hidden="true"/><div className="cd-hero-new__orb cd-hero-new__orb--red" aria-hidden="true"/>
        <div className="cd-hero-new__grid">
          <div className="cd-hero-new__copy">
            <p className="cd-tag-new">Level 1 B-BBEE · 100% Black &amp; youth-owned</p>
            <h1 id="new-hero-title">Your work is strong. Your website should <em>make it obvious.</em></h1>
            <p>Custom websites, online stores and web applications for ambitious South African businesses. Built so customers find you, trust you and message you first.</p>
            <div className="cd-actions-new audit-actions"><Link className="cd-button-new cd-shine" data-cta="hero-demo" href="/contact?brief=Prototype+preview#enquiry">Request a free demo</Link><Link href="/pricing">See packages</Link><a href="#package-finder">Find my package in 60 seconds</a></div>
            <small>Have an existing site to improve or a clear brief for a new one? Tell us what you need and we’ll confirm whether a free prototype is a fit.</small>
            <ul className="audit-trust"><li>Level 1 B-BBEE</li><li>Websites from {packages.websites[0].price}</li><li>CSD registered</li></ul>
          </div>
          <Reveal><figure className="cd-hero-new__stage"><Image unoptimized className="cd-full-logo" src="/images/audit/dark.webp" width={1120} height={520} alt="Carter Digitals" priority/><div className="cd-hero-new__svg"><EnquiryGraphic/></div><figcaption>Illustrative enquiry journey</figcaption><div className="cd-chip-row">{["Level 1 B-BBEE",facts[0],"5–7 business-day launch track"].map(item=><span key={item}>{item}</span>)}</div></figure></Reveal>
        </div>
      </section>
      <Reveal><div className="cd-facts" aria-label="Carter Digitals at a glance"><div className="cd-facts__clip"><div>{[0,1].map(copy=><ul key={copy} aria-hidden={copy===1?true:undefined}>{facts.map(item=><li key={item}>{item}</li>)}</ul>)}</div></div></div></Reveal>
      <Reveal><section className="cd-section-new"><p className="cd-kicker">What a modern website does</p><h2>Give buyers a reason to choose you.</h2><div className="cd-tiles cd-tiles--three">{benefits.map(([title,copy],i)=><article className="cd-panel-new" key={title}><BenefitIcon index={i}/><h3>{title}</h3><p>{copy}</p></article>)}</div></section></Reveal>
      <Reveal><OpportunityGaps/></Reveal>
      <CustomerJourney/>
      <Reveal><ConnectionExperience/></Reveal>
      <Reveal><WebsiteComparison/></Reveal>
      <Reveal><ServiceShowcase/></Reveal>
      <Reveal><AuditScenes/></Reveal>
      <Reveal><section className="cd-section-new cd-split-new hx-analytics"><div><p className="hx-kicker">A CLEARER PICTURE</p><h2>Measure what matters.</h2><p>Carter Business includes GA4 and Search Console setup subject to access, and basic enquiry and WhatsApp tracking where supported. Carter Growth adds tracking for key events where supported.</p><small>The illustration uses sample data.</small></div><AnalyticsGraphic/></section></Reveal>
      <Reveal><PackageFinder/></Reveal>
      <Reveal><TrustMetrics/></Reveal>
      <Reveal><IndustryShowcase/></Reveal>
      <Reveal><DeliveryShowcase/></Reveal>
      <Reveal><PremiumFaq/></Reveal>
      <Reveal><section className="cd-section-new cd-final-new" id="enquiry"><h2>Let’s build your next move.</h2><div className="cd-actions-new"><a className="cd-button-new cd-button-new--gold" href={company.whatsapp}>WhatsApp {company.phone}</a><a className="cd-button-new" href={company.call}>Call Kabelo</a><a className="cd-button-new" href={`mailto:${company.email}`}>Email</a><Link className="cd-direct-link" href="/contact#enquiry">Request a quote</Link></div><div className="cd-chip-row">{["Prototype preview for suitable projects","Written scope","50/50 payment","Defect-fix window"].map(item=><span key={item}>✓ {item}</span>)}</div></section></Reveal>
    </main>
    <CarterFooter/>
  </>;
}
