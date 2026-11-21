import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Globe2, MapPin, MessageCircle, Sparkles, Target } from "lucide-react";
import { CarterBubbleMenu } from "../bubble-menu";
import AboutMotion from "./about-motion";
import "./about.css";
import "./about-enhancements.css";

export const metadata: Metadata = {
  title: { absolute: "About Carter Digitals | Founder-led Pretoria Digital Studio" },
  description: "Meet Carter Digitals and Kabelo Kadiaka, a founder-led Pretoria studio building premium websites, web applications and internal business systems that make South African organisations easier to trust and choose.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Carter Digitals | Founder-led Pretoria Digital Studio",
    description: "The studio, the founder and the principles behind Carter Digitals' premium websites, applications and business systems.",
    images: [{ url: "/kabelo-kadiaka-founder.jpg", width: 1200, height: 1437, alt: "Kabelo Kadiaka, founder of Carter Digitals" }],
  },
};

const serviceAreas = ["Soshanguve", "Pretoria", "Mabopane", "Centurion", "Midrand", "Johannesburg", "Gauteng", "South Africa"];

const methodSteps = [
  { index: "01", label: "Clarify", title: "Start with the business truth.", copy: "We identify the offer, audience and next decision before the interface starts taking shape." },
  { index: "02", label: "Shape", title: "Turn complexity into confidence.", copy: "The message, structure and visual language are designed to make the right choice feel obvious." },
  { index: "03", label: "Build", title: "Engineer the experience.", copy: "The polished front end and the underlying system are built together, with performance and mobile use in mind." },
  { index: "04", label: "Hand over", title: "Leave the business stronger.", copy: "You receive a clear, production-ready build and a practical next step after launch." },
];

const faqs = [
  ["Who is Carter Digitals?", "Carter Digitals is a founder-led digital studio based in Soshanguve, Pretoria. The studio creates premium websites, web applications, internal business systems and brand content for South African organisations."],
  ["Who leads Carter Digitals?", "Carter Digitals is led by Kabelo Kadiaka, founder and full-stack developer. Clients work directly with the person shaping the strategy, interface and production build."],
  ["Where does Carter Digitals work?", "Carter Digitals serves organisations in Pretoria, Soshanguve, Mabopane, Centurion, Midrand, Johannesburg, Gauteng and across South Africa. Discovery and delivery can happen remotely."],
  ["What does a Carter Digitals website cost?", "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS."],
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://carterdigitals.co.za/about#webpage",
      url: "https://carterdigitals.co.za/about",
      name: "About Carter Digitals | Founder-led Pretoria Digital Studio",
      description: "The studio, founder and principles behind Carter Digitals.",
      isPartOf: { "@id": "https://carterdigitals.co.za/#website" },
      about: { "@id": "https://carterdigitals.co.za/#organization" },
      mainEntity: { "@id": "https://carterdigitals.co.za/#kabelo-kadiaka" },
      inLanguage: "en-ZA",
      dateModified: "2026-08-14",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://carterdigitals.co.za" },
        { "@type": "ListItem", position: 2, name: "About Carter Digitals", item: "https://carterdigitals.co.za/about" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <CarterBubbleMenu />
      <AboutMotion />
      <div className="about-scrollline" aria-hidden="true"><span /></div>

      <section className="about-hero" data-about-reveal>
        <div className="about-hero__grid" aria-hidden="true" />
        <div className="about-hero__copy">
          <nav className="about-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>About the studio</span></nav>
          <span className="about-kicker"><i /> CARTER DIGITALS / THE STUDIO</span>
          <h1>Built in Pretoria.<br /><em>Designed for what comes next.</em></h1>
          <p className="about-lead">Carter Digitals is a founder-led digital studio for organisations that need more than a website that looks good. We bring positioning, copy, design and engineering together to make the business easier to understand, trust and choose.</p>
          <div className="about-actions"><Link className="about-button" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link><Link className="about-text-link" href="/pricing">See pricing and scope <ArrowRight size={16} /></Link></div>
        </div>
        <div className="about-hero__visual" aria-label="Carter Digitals studio facts">
          <div className="about-hero__signal"><span>01</span><strong>FOUNDER-LED</strong><small>Soshanguve · Pretoria · South Africa</small><i /></div>
          <div className="about-hero__mini-card">
            <div className="about-hero__mini-image"><Image src="/kabelo-kadiaka-founder.webp" alt="Kabelo Kadiaka, founder of Carter Digitals" width={260} height={260} /></div>
            <div><small>THE BUILDER</small><strong>Kabelo Kadiaka</strong><span>Strategy · Design · Full-stack development</span></div>
          </div>
        </div>
      </section>

      <section className="about-proof-ribbon" aria-label="Carter Digitals studio proof" data-about-reveal>
        <div><small>THE SHORT VERSION</small><strong>One person accountable for the whole experience.</strong></div>
        <span><b>5–7</b> day focused launches</span><span><b>R4,999</b> website starting point</span><span><b>01</b> direct decision-maker</span>
      </section>

      <section className="about-answer" aria-labelledby="about-answer-title" data-about-reveal>
        <div className="about-section-label"><span>DIRECT ANSWER</span><i /><small>ENTITY / CARTER DIGITALS</small></div>
        <div className="about-answer__grid"><div><h2 id="about-answer-title">Who is<br /><em>Carter Digitals?</em></h2></div><div><p className="about-answer__lead">Carter Digitals is a founder-led website development and digital product studio based in Soshanguve, Pretoria.</p><p>We build custom websites from R4,999, web applications, dashboards, internal business systems and premium brand content for South African organisations.</p><div className="about-answer__links"><Link href="#founder">Meet the founder <ArrowUpRight size={15} /></Link><Link href="/company-profile">View company + procurement profile <ArrowUpRight size={15} /></Link></div></div></div>
      </section>

      <section className="about-facts" aria-labelledby="about-facts-title" data-about-reveal>
        <div className="about-facts__heading"><span className="about-kicker">THE CARTER SIGNAL</span><h2 id="about-facts-title">Clear facts.<br /><em>Useful context.</em></h2><p>When the business, location, offer and next step are clear, customers—and answer engines—have something trustworthy to work with.</p></div>
        <div className="about-facts__grid">
          <article><MapPin /><small>STUDIO BASE</small><strong>Soshanguve, Pretoria</strong><p>Founder-led digital work from the north of Tshwane, serving the wider Gauteng market.</p></article>
          <article><Globe2 /><small>SERVICE AREA</small><strong>Gauteng + South Africa</strong><p>Projects for local organisations, remote teams and ambitious South African businesses.</p></article>
          <article><Target /><small>CORE OFFER</small><strong>Presence + systems</strong><p>Websites, applications, operational tools and brand content shaped around the next business move.</p></article>
          <article><Sparkles /><small>STARTING POINT</small><strong>From R4,999</strong><p>A Carter Launch website can launch in 5–7 business days when scope and feedback stay clear.</p></article>
        </div>
      </section>

      <section className="about-method" aria-labelledby="about-method-title" data-about-reveal>
        <div className="about-method__heading"><span className="about-kicker">THE CARTER METHOD</span><h2 id="about-method-title">A clearer way<br /><em>to move forward.</em></h2><p>The process is deliberately direct. Fewer layers, better questions and a build that stays connected to the business goal.</p><Link href="/contact">Bring us the next challenge <ArrowUpRight size={15} /></Link></div>
        <div className="about-method__steps">
          {methodSteps.map((step) => <article key={step.index}><div className="about-method__step-top"><span>{step.index}</span><i /></div><small>{step.label}</small><h3>{step.title}</h3><p>{step.copy}</p></article>)}
        </div>
        <div className="about-method__footer"><span><i /> NO AGENCY RUNAROUND</span><span>STRATEGY · DESIGN · DEVELOPMENT</span><span>PRETORIA / SOUTH AFRICA</span></div>
      </section>

      <section className="about-founder" id="founder" aria-labelledby="founder-title" data-about-reveal>
        <div className="about-founder__portrait"><div className="about-founder__chrome"><span><i /> CARTER / FOUNDER PROFILE</span><small>PRETORIA · 01 / 01</small></div><Image src="/kabelo-kadiaka-founder.jpg" alt="Kabelo Kadiaka, founder and full-stack developer at Carter Digitals" width={1200} height={1437} sizes="(max-width: 900px) 90vw, 45vw" /></div>
        <div className="about-founder__copy"><span className="about-kicker">THE PERSON BEHIND THE BUILD</span><h2 id="founder-title">Meet Kabelo<br /><em>Kadiaka.</em></h2><p className="about-founder__lead">Founder. Full-stack developer. The person you speak to before the work begins and the person responsible for making the final build make sense.</p><blockquote>“Bring the business goal. We’ll turn it into a clear message, a premium experience and an easier next step.”</blockquote><div className="about-principles"><article><span>01</span><div><strong>Direct access</strong><p>No layers between the business need and the person building the solution.</p></div></article><article><span>02</span><div><strong>Useful ambition</strong><p>Every visual decision should help the customer understand, trust or act.</p></div></article><article><span>03</span><div><strong>Built to hand over</strong><p>Clear scope, production-ready work and a practical next step after launch.</p></div></article><article><span>04</span><div><strong>South African context</strong><p>Local service areas, mobile behaviour and real business constraints are part of the brief.</p></div></article></div><div className="about-founder__cta"><MessageCircle size={18} /><span><small>DIRECT ACCESS</small><strong>Speak with Kabelo about your next move.</strong></span><Link href="/contact">Contact the studio <ArrowUpRight size={15} /></Link></div></div>
      </section>

      <section className="about-areas" aria-labelledby="about-areas-title" data-about-reveal><div><span className="about-kicker">WHERE WE WORK</span><h2 id="about-areas-title">Rooted in Pretoria.<br /><em>Open to the country.</em></h2><p>Local relevance matters. Carter Digitals works from Soshanguve and Pretoria while serving organisations across Gauteng and South Africa.</p></div><div className="about-areas__list">{serviceAreas.map((area, index) => <span key={area}><small>0{index + 1}</small>{area}</span>)}</div></section>

      <section className="about-faq" aria-labelledby="about-faq-title" data-about-reveal><div><span className="about-kicker">QUESTIONS PEOPLE ASK</span><h2 id="about-faq-title">A useful answer<br /><em>before the call.</em></h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="about-cta" data-about-reveal><Check size={20} /><div><span>READY WHEN YOU ARE</span><h2>Make the next move<br /><em>easier to choose.</em></h2><p>Tell us what needs to change. You’ll receive practical guidance on the right scope, timeline and next step.</p></div><div className="about-cta__actions"><Link href="/contact">Start your project brief <ArrowUpRight size={16} /></Link><Link href="/">Return to the homepage <ArrowRight size={16} /></Link></div></section>

      <footer className="about-footer"><Link href="/">CARTER <strong>DIGITALS</strong></Link><span>Founder-led digital work from Soshanguve, Pretoria.</span><Link href="/contact">Contact studio <ArrowUpRight size={14} /></Link></footer>
    </main>
  );
}
