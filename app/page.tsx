import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MessageCircle, Search, ShieldCheck } from "lucide-react";
import { CarterNav } from "../components/carter-frame";
import { CarterFooter } from "../components/carter-footer";
import { HomeMotion, Reveal } from "../components/carter-motion";
import { PackageFinder } from "../components/carter-tools";
import { PremiumFaq } from "../components/home-showcase";
import { HomepageStudio } from "../components/homepage-studio";
import { DeliveryGraphic, HeroConversation, HomepageSignals } from "../components/homepage-signals";
import { company, faqs, families, packages, priceNote, proof } from "../lib/data";
import "./homepage-studio.css";

const demo = "/contact?brief=Prototype+preview#enquiry";
const feature = proof[1];
const otherProjects = [proof[0], proof[2]];
const process = [
  ["Agree the brief", "Write down the audience, scope, and the action the site needs to support."],
  ["See the direction", "Review the prototype and agree on the visual approach."],
  ["Review the build", "Check the working pages, mobile layouts, and enquiry paths."],
  ["Launch and hand over", "Receive the agreed site, access, and support details."],
];

function ProjectScreen({ hero = false }: { hero?: boolean }) {
  return <div className="hs-screen">
    <Image src="/images/case-studies/im-attorneys.webp" alt={hero ? "" : "Screenshot of the I.M Attorneys Inc website showing the homepage and its legal services"} width={723} height={1600} unoptimized priority={hero} />
  </div>;
}

export default function Home() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name,text])=>({ "@type": "Question",name,acceptedAnswer:{"@type":"Answer",text} })) };
  const servicesSchema = { "@context": "https://schema.org", "@graph": families.map(({id,title})=>({ "@type":"Service",name:title,url:`${company.url}/${id}`,provider:{"@id":`${company.url}/#organization`},areaServed:"South Africa" })) };
  return <>
    <CarterNav/>
    <main className="cd-cinematic hs-home" id="top">
      <HomeMotion/>
      <nav className="hs-mobile" aria-label="Quick contact"><a href={company.whatsapp}>WhatsApp Kabelo</a><Link href="/contact#enquiry">Start a project</Link></nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(servicesSchema)}}/>
      <section className="hs-hero" aria-labelledby="hs-title">
        <div className="hs-hero-inner">
          <div className="hs-hero-copy">
            <p className="hs-label">Carter Digitals · Pretoria, South Africa</p>
            <h1 id="hs-title">Give people a reason <em>to choose you.</em></h1>
            <p>Custom websites, online stores and web apps for South African businesses. Make it easy for customers to find you, trust you and take the next step.</p>
            <div className="hs-actions"><Link className="hs-button" href={demo}>Request a free demo <ArrowUpRight size={18} aria-hidden="true"/></Link><Link className="hs-link" href="#selected-work">See the work <ArrowDown size={17} aria-hidden="true"/></Link></div>
            <small>Free prototype previews are available for suitable projects.</small>
          </div>
          <figure className="hs-hero-scene" aria-label="An illustrative path from finding a legal website to sending an enquiry">
            <div className="hs-hero-browser"><div className="hs-window"><i/><i/><i/><span>I.M Attorneys Inc</span></div><ProjectScreen hero/></div>
            <svg viewBox="0 0 620 430" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="hs-hero-trace-palette"><stop stopColor="#ff7894"/><stop offset=".6" stopColor="#749dff"/><stop offset="1" stopColor="#a8caff"/></linearGradient></defs><path d="M35 92H130Q165 92 165 131V268Q165 319 218 319H489Q536 319 536 364V398" fill="none" stroke="#44759e" strokeWidth="1.5"/><path className="hs-hero-trace" pathLength="1" d="M35 92H130Q165 92 165 131V268Q165 319 218 319H489Q536 319 536 364V398" fill="none" stroke="url(#hs-hero-trace-palette)" strokeWidth="2.5"/></svg>
            <div className="hs-scene-step hs-scene-step--search"><Search size={18}/><span>Find a practice area</span></div>
            <div className="hs-scene-step hs-scene-step--message"><MessageCircle size={18}/><span>Send an enquiry</span></div>
            <HeroConversation/>
            <figcaption>Illustrative enquiry journey · I.M Attorneys Inc</figcaption>
          </figure>
        </div>
        <div className="hs-trust"><span><ShieldCheck size={17} aria-hidden="true"/> Level 1 B-BBEE · CSD registered</span><span>Founder-led in Pretoria</span><span>Websites from {packages.websites[0].price}</span></div>
      </section>

      <Reveal><section className="hs-section hs-work" id="selected-work" aria-labelledby="hs-work-title">
        <span id="projects"/><span id="project-cases"/>
        <header className="hs-heading"><div><p className="hs-label">Selected client work</p><h2 id="hs-work-title">See the work <em>in context.</em></h2></div><Link className="hs-link" href="/work">View all projects <ArrowUpRight size={17} aria-hidden="true"/></Link></header>
        <article className="hs-case">
          <div className="hs-case-image"><ProjectScreen/></div>
          <div className="hs-case-copy"><p className="hs-label">{feature.sector} · Website delivery</p><h3>{feature.name}</h3><p>Make it easier for potential clients to understand the firm’s practice areas and find the right way to enquire.</p><p>{feature.summary}</p><Link className="hs-link" href="/work">Explore project delivery <ArrowUpRight size={16} aria-hidden="true"/></Link></div>
        </article>
        <div className="hs-case-notes">{otherProjects.map(project => <article key={project.name}><p className="hs-label">{project.sector}</p><h3>{project.name}</h3><p>{project.summary}</p></article>)}</div>
      </section></Reveal>

      <Reveal><HomepageStudio/></Reveal>
      <Reveal><HomepageSignals/></Reveal>
      <Reveal><section className="hs-section hs-services" aria-labelledby="hs-services-title">
        <header className="hs-heading"><div><p className="hs-label">Services &amp; pricing</p><h2 id="hs-services-title">Choose what <em>you need to build.</em></h2></div><Link className="hs-link" href="/pricing">Compare packages <ArrowUpRight size={17} aria-hidden="true"/></Link></header>
        <div className="hs-services-grid">{families.map(({id,title}, index) => <Link href={`/${id}`} key={id} className="hs-service">
          <div className="hs-service-visual" data-kind={id} aria-hidden="true"><div className="hs-service-window"><i/><strong>{["Your next website","Your online storefront","Your team workspace"][index]}</strong><div className="hs-service-lines"><b/><b/><b/></div></div></div>
          <div className="hs-service-copy"><h3>{title}</h3><p>{["Explain what you do and make enquiries easy.","Give customers a clear path from browsing to checkout.","Replace scattered admin with a focused workflow."][index]}</p><span>From {packages[id][0].price} <ArrowUpRight size={16} aria-hidden="true"/></span></div>
        </Link>)}</div>
        <small>{priceNote}</small>
      </section></Reveal>
      <Reveal><PackageFinder/></Reveal>

      <Reveal><section className="hs-section hs-process" aria-labelledby="hs-process-title">
        <header className="hs-heading"><div><p className="hs-label">How a project works</p><h2 id="hs-process-title">From first conversation <em>to handover.</em></h2></div><p>Work directly with Kabelo throughout your project.</p></header>
        <div className="hs-process-grid"><ol>{process.map(([name,copy])=><li key={name}><h3>{name}</h3><p>{copy}</p></li>)}</ol><figure><DeliveryGraphic/><figcaption>Review the site, check enquiry paths and hand over access.</figcaption></figure></div>
      </section></Reveal>
      <Reveal><PremiumFaq/></Reveal>
      <section className="hs-section hs-close" id="enquiry">
        <h2>Tell me what <em>you want to build.</em></h2>
        <div className="hs-actions"><Link className="hs-button" href="/contact#enquiry">Start a project <ArrowUpRight size={18} aria-hidden="true"/></Link><a className="hs-link" href={company.whatsapp}>WhatsApp Kabelo</a></div>
      </section>
    </main>
    <CarterFooter/>
  </>;
}
