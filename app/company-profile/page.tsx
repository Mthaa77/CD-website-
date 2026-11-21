import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  FileCheck2,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { CarterBubbleMenu } from "../bubble-menu";
import "./company-profile.css";

export const metadata: Metadata = {
  title: { absolute: "Carter Digitals Company Profile | Founder & B-BBEE Level 1" },
  description: "Meet founder Kabelo Kadiaka and review Carter Digitals' B-BBEE Level 1, 100% Black-owned and youth-owned supplier profile, company credentials and procurement readiness.",
  alternates: { canonical: "/company-profile" },
  openGraph: {
    type: "profile",
    url: "/company-profile",
    title: "Carter Digitals Company Profile | Founder & Procurement",
    description: "Founder-led digital capability, B-BBEE Level 1 credentials and supplier information for South African organisations.",
    images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Carter Digitals company profile" }],
  },
};

const whatsappDocuments = "https://wa.me/27724026893?text=Hi%20Kabelo%2C%20please%20send%20me%20the%20Carter%20Digitals%20supplier%20and%20B-BBEE%20documentation.";

const companyFacts = [
  ["Registered entity", "Carter Digitals (Pty) Ltd"],
  ["Company number", "2025/907839/07"],
  ["Studio base", "Soshanguve, Pretoria"],
  ["Service reach", "Gauteng + South Africa"],
];

const credentials = [
  { icon: BadgeCheck, label: "B-BBEE contributor", title: "Level One", copy: "135% procurement recognition as an Exempt Micro Enterprise." },
  { icon: UserRoundCheck, label: "Ownership", title: "100% Black-owned", copy: "A transformed South African digital supplier with direct founder accountability." },
  { icon: Sparkles, label: "Ownership", title: "100% Youth-owned", copy: "Supporting meaningful youth enterprise while procuring premium digital capability." },
  { icon: Building2, label: "Company registration", title: "CIPC Registered", copy: "Carter Digitals (Pty) Ltd · registration 2025/907839/07." },
  { icon: FileCheck2, label: "Public procurement", title: "CSD Registered", copy: "Supplier information and supporting documentation available for review." },
  { icon: ShieldCheck, label: "Responsible delivery", title: "POPIA aligned", copy: "Privacy-aware planning and implementation for websites and digital systems." },
];

const faqs = [
  ["Who leads Carter Digitals?", "Carter Digitals is led by Kabelo Kadiaka, founder and director. Clients work directly with Kabelo through strategy, design, development and handover."],
  ["What is the company’s B-BBEE status?", "Carter Digitals is an EME with B-BBEE Level One contributor status and 135% procurement recognition. The company is 100% Black-owned and 100% youth-owned."],
  ["Is Carter Digitals ready for procurement review?", "Carter Digitals is CIPC registered and CSD registered. Relevant company and supplier documentation is available on request for procurement, onboarding or proposal review."],
  ["Can Carter Digitals work with public-sector and corporate teams?", "Yes. Carter Digitals supports focused digital projects for businesses, schools, professional firms, institutions and public-sector teams, with clear scope, milestones and direct accountability."],
  ["Where does Carter Digitals deliver projects?", "The studio is based in Soshanguve, Pretoria and serves clients across Gauteng and South Africa through a remote-friendly founder-led process."],
];

const companyProfileSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://carterdigitals.co.za/company-profile#webpage",
      url: "https://carterdigitals.co.za/company-profile",
      name: "Carter Digitals Company Profile | Founder & B-BBEE Level 1",
      description: "Founder, ownership and procurement profile for Carter Digitals (Pty) Ltd.",
      isPartOf: { "@id": "https://carterdigitals.co.za/#website" },
      mainEntity: { "@id": "https://carterdigitals.co.za/#organization" },
      inLanguage: "en-ZA",
      dateModified: "2026-08-14",
    },
    {
      "@type": "Person",
      "@id": "https://carterdigitals.co.za/#kabelo-kadiaka",
      name: "Kabelo Kadiaka",
      jobTitle: "Founder and Director",
      worksFor: { "@id": "https://carterdigitals.co.za/#organization" },
      image: "https://carterdigitals.co.za/kabelo-kadiaka-founder.webp",
      address: { "@type": "PostalAddress", addressLocality: "Soshanguve", addressRegion: "Gauteng", addressCountry: "ZA" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://carterdigitals.co.za" },
        { "@type": "ListItem", position: 2, name: "Company profile", item: "https://carterdigitals.co.za/company-profile" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
  ],
};

export default function CompanyProfilePage() {
  return (
    <main className="profile-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(companyProfileSchema) }} />
      <CarterBubbleMenu />

      <section className="profile-hero">
        <div className="profile-hero__aura" aria-hidden="true" />
        <div className="profile-hero__copy">
          <nav className="profile-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Company profile</span></nav>
          <span className="profile-kicker"><i /> CARTER DIGITALS / AUTHORITY DOSSIER</span>
          <h1>The founder, the company<br /><em>and the credentials behind every build.</em></h1>
          <p>For clients who want to know exactly who they are trusting—and procurement teams who need the facts before the work begins. Meet the founder, review the ownership profile and request the supplier documentation in one place.</p>
          <div className="profile-hero__actions"><Link href="/contact">Discuss a project <ArrowUpRight size={17} /></Link><a href={whatsappDocuments} target="_blank" rel="noreferrer">Request supplier documents <FileCheck2 size={17} /></a></div>
          <div className="profile-hero__signals"><span><BadgeCheck /> B-BBEE Level 1</span><span><UserRoundCheck /> 100% Black + Youth-owned</span><span><MapPin /> Pretoria, South Africa</span></div>
        </div>
        <aside className="profile-id-card" aria-label="Carter Digitals company identity">
          <div className="profile-id-card__chrome"><span><i /> VERIFIED COMPANY PROFILE</span><small>ZA / 2026</small></div>
          <div className="profile-id-card__brand"><Image src="/carter-digitals-mark.png" alt="" width={86} height={86} unoptimized /><div><small>REGISTERED ENTITY</small><strong>Carter Digitals<br />(Pty) Ltd</strong></div></div>
          <dl>{companyFacts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          <div className="profile-id-card__foot"><span><i /> ACTIVE SUPPLIER SIGNAL</span><ShieldCheck /></div>
        </aside>
      </section>

      <section className="profile-answer" aria-labelledby="profile-answer-title">
        <div className="profile-section-label"><span>THE DIRECT ANSWER</span><i /><small>WHO YOU ARE WORKING WITH</small></div>
        <div className="profile-answer__grid"><h2 id="profile-answer-title">Small by design.<br /><em>Accountable by default.</em></h2><div><p>Carter Digitals is a founder-led digital studio based in Soshanguve, Pretoria. We build premium websites, web applications, operational systems and brand content for South African organisations that need to look credible, explain their value clearly and make important work easier.</p><p>There is no sales-to-production hand-off. The person who understands the brief stays responsible for the strategy, interface and production build.</p><Link href="/work">See selected work <ArrowUpRight size={15} /></Link></div></div>
      </section>

      <section className="profile-founder" aria-labelledby="profile-founder-title">
        <div className="profile-founder__portrait">
          <div className="profile-founder__chrome"><span>FOUNDER RECORD / 01</span><small>DIRECT ACCESS</small></div>
          <Image src="/kabelo-kadiaka-founder.webp" alt="Kabelo Kadiaka, founder and director of Carter Digitals" width={1122} height={1402} sizes="(max-width: 900px) 100vw, 46vw" priority unoptimized />
          <div className="profile-founder__caption"><i /><span><small>ACCOUNTABLE LEAD</small><strong>Kabelo Kadiaka</strong></span></div>
        </div>
        <div className="profile-founder__copy">
          <span className="profile-kicker">FOUNDER + DIRECTOR</span>
          <h2 id="profile-founder-title">The person you brief<br /><em>is the person who builds.</em></h2>
          <p className="profile-founder__lead">I’m Kabelo Kadiaka. I lead the strategy, design and development at Carter Digitals, so the business context does not get diluted between departments—and you always know who owns the next decision.</p>
          <blockquote>“I build digital work that helps a business look ready for its next opportunity—and operate like it belongs there.”</blockquote>
          <div className="profile-founder__skills"><span>Business strategy</span><span>UI/UX direction</span><span>Full-stack development</span><span>AI-assisted production</span></div>
          <div className="profile-founder__principles">
            <article><span>01</span><div><strong>Direct collaboration</strong><p>Your questions, context and feedback reach the builder without losing meaning through layers.</p></div></article>
            <article><span>02</span><div><strong>Founder-level accountability</strong><p>Every deliverable carries the Carter name. Scope, quality and handover have one clear owner.</p></div></article>
            <article><span>03</span><div><strong>Honest recommendations</strong><p>If the larger build is not the smarter move, I will say so and help you start with what matters.</p></div></article>
          </div>
          <p className="profile-founder__origin"><Sparkles size={16} /> Carter Digitals is named in tribute to a close friend who passed away in April 2021. The company is a living monument to that friendship—and proof that meaningful work can be built from nothing.</p>
          <a className="profile-founder__contact" href="https://wa.me/27724026893?text=Hi%20Kabelo%2C%20I%20would%20like%20your%20honest%20recommendation%20on%20a%20digital%20project." target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>SPEAK TO THE FOUNDER</small><strong>Ask Kabelo what he would do first</strong></span><ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="profile-procurement" aria-labelledby="procurement-title">
        <div className="profile-procurement__heading"><span className="profile-kicker">B-BBEE + PROCUREMENT READINESS</span><h2 id="procurement-title">Premium digital capability.<br /><em>Meaningful South African value.</em></h2><p>For institutions, professional teams and procurement decision-makers, Carter Digitals combines direct delivery accountability with a transformed supplier profile.</p></div>
        <div className="profile-procurement__level"><div><small>CONTRIBUTOR STATUS</small><strong>Level<br /><em>One.</em></strong></div><span>135%<small>procurement recognition</small></span><p>EME status, 100% Black ownership and 100% youth ownership—supported by documentation available for formal review.</p></div>
        <div className="profile-credentials">{credentials.map(({ icon: Icon, label, title, copy }) => <article key={title}><span><Icon /></span><small>{label}</small><h3>{title}</h3><p>{copy}</p><Check size={15} /></article>)}</div>
      </section>

      <section className="profile-readiness" aria-labelledby="readiness-title">
        <div className="profile-readiness__heading"><span className="profile-kicker">SUPPLIER READINESS</span><h2 id="readiness-title">What procurement<br /><em>can expect.</em></h2><p>Clear ownership, practical documents and a direct line to the person responsible for the delivery.</p></div>
        <div className="profile-readiness__grid">
          <article><BriefcaseBusiness /><span>01</span><h3>Clear scope and milestones</h3><p>Deliverables, timing, responsibilities and payment stages are set out before production begins.</p></article>
          <article><UserRoundCheck /><span>02</span><h3>One accountable owner</h3><p>The founder remains your strategic and production point of contact from brief to handover.</p></article>
          <article><ShieldCheck /><span>03</span><h3>Responsible implementation</h3><p>Mobile performance, accessibility, privacy-aware delivery and practical handover are treated as fundamentals.</p></article>
          <article><FileCheck2 /><span>04</span><h3>Documents on request</h3><p>Company, B-BBEE and supplier information can be supplied for onboarding, review or proposal evaluation.</p></article>
        </div>
        <div className="profile-document-cta"><div><span><i /> PROCUREMENT DESK / DIRECT ACCESS</span><h3>Need the supplier pack for an RFQ, onboarding or internal review?</h3><p>Request the current Carter Digitals company and B-BBEE documentation directly from the founder.</p></div><div><a href={whatsappDocuments} target="_blank" rel="noreferrer">Request documents on WhatsApp <ArrowUpRight size={17} /></a><a href="mailto:kabelokadiaka4@gmail.com?subject=Carter%20Digitals%20supplier%20documentation">Request by email <ArrowRight size={16} /></a></div></div>
      </section>

      <section className="profile-faq" aria-labelledby="profile-faq-title"><div><span className="profile-kicker">QUESTIONS PROCUREMENT TEAMS ASK</span><h2 id="profile-faq-title">The useful facts.<br /><em>Before the first meeting.</em></h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="profile-final"><div><span><i /> ACCEPTING SELECTED PROJECTS</span><h2>Know the supplier.<br /><em>Then make the next move.</em></h2><p>Bring the commercial goal, procurement requirement or project problem. You will speak directly with the person responsible for shaping and delivering the work.</p></div><div><Link href="/contact">Start a project conversation <ArrowUpRight size={17} /></Link><a href="tel:+27724026893"><Phone size={17} /> Call 072 402 6893</a></div></section>

      <footer className="profile-footer"><Link href="/">CARTER <strong>DIGITALS</strong></Link><span>Founder-led digital capability from Soshanguve, Pretoria.</span><Link href="/pricing">View pricing <ArrowUpRight size={14} /></Link></footer>
    </main>
  );
}
