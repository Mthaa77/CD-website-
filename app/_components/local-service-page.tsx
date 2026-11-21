import Link from "next/link";
import { ArrowUpRight, Check, Code2, Gauge, Globe2, Layers3, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { CarterBubbleMenu } from "../bubble-menu";
import { PageGrowthLayer } from "./page-growth-layer";

export type LocalServiceContent = {
  slug: string;
  eyebrow: string;
  heading: string;
  emphasis: string;
  intro: string;
  directQuestion: string;
  directAnswer: string;
  location: string;
  service: string;
  locationType?: "City" | "Place" | "AdministrativeArea";
  startingPrice: string;
  timeline: string;
  audience: string;
  benefits: Array<{ title: string; copy: string }>;
  included: Array<{ title: string; copy: string }>;
  localContext: string;
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
};

const localAreaLinks = [
  { label: "Website development Soshanguve", href: "/website-development-soshanguve" },
  { label: "Website development Mabopane", href: "/website-development-mabopane" },
  { label: "Website development Centurion", href: "/website-development-centurion" },
  { label: "Website development Pretoria East", href: "/website-development-pretoria-east" },
  { label: "Website development Pretoria", href: "/website-development-pretoria" },
  { label: "Website development Johannesburg", href: "/website-development-johannesburg" },
  { label: "Web application development Pretoria", href: "/web-application-development-pretoria" },
  { label: "SEO + GEO Pretoria", href: "/seo-geo-pretoria" },
];

const icons = [Globe2, Layers3, Gauge, Code2, ShieldCheck, Check];

export function LocalServicePage({ content }: { content: LocalServiceContent }) {
  const numericPrice = content.startingPrice.replace(/[^0-9]/g, "");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://carterdigitals.co.za/${content.slug}#service`,
        name: content.service,
        serviceType: content.service,
        description: content.directAnswer,
        url: `https://carterdigitals.co.za/${content.slug}`,
        provider: { "@id": "https://carterdigitals.co.za/#organization" },
        mainEntityOfPage: { "@id": `https://carterdigitals.co.za/${content.slug}#webpage` },
        audience: { "@type": "Audience", audienceType: content.audience },
        areaServed: { "@type": content.locationType ?? "City", name: content.location },
        availableChannel: { "@type": "ServiceChannel", serviceUrl: `https://carterdigitals.co.za/${content.slug}`, servicePhone: "+27724026893" },
        ...(numericPrice ? { offers: { "@type": "Offer", priceCurrency: "ZAR", price: numericPrice, availability: "https://schema.org/InStock" } } : {})
      },
      {
        "@type": "WebPage",
        "@id": `https://carterdigitals.co.za/${content.slug}#webpage`,
        url: `https://carterdigitals.co.za/${content.slug}`,
        name: content.service,
        description: content.directAnswer,
        isPartOf: { "@id": "https://carterdigitals.co.za/#website" },
        about: { "@id": `https://carterdigitals.co.za/${content.slug}#service` },
        inLanguage: "en-ZA",
        dateModified: "2026-09-01"
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://carterdigitals.co.za" },
          { "@type": "ListItem", position: 2, name: "Digital services", item: "https://carterdigitals.co.za/services" },
          { "@type": "ListItem", position: 3, name: content.service, item: `https://carterdigitals.co.za/${content.slug}` }
        ]
      }
    ]
  };

  return (
    <main className="local-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CarterBubbleMenu />
      <section className="local-hero">
        <div className="local-hero__copy">
          <span>{content.eyebrow}</span>
          <h1>{content.heading}<br /><em>{content.emphasis}</em></h1>
          <p>{content.intro}</p>
          <div className="local-hero__actions"><Link href="/contact">Start a focused conversation <ArrowUpRight size={16} /></Link><a href="https://wa.me/27724026893" target="_blank" rel="noreferrer"><MessageCircle size={15} /> Chat with Kabelo</a></div>
        </div>
        <aside className="local-facts" aria-label="Service facts">
          <span>THE DECISION, MADE CLEAR</span>
          <div><small>STUDIO BASE</small><strong><MapPin size={14} /> Soshanguve, Pretoria</strong></div>
          <div><small>SERVICE</small><strong>{content.service}</strong></div>
          <div><small>STARTING FROM</small><strong>{content.startingPrice}</strong></div>
          <div><small>TYPICAL FIRST RELEASE</small><strong>{content.timeline}</strong></div>
          <div><small>BEST FIT</small><strong>{content.audience}</strong></div>
        </aside>
      </section>

      <section className="local-section">
        <div className="local-answer">
          <small>DIRECT ANSWER</small>
          <h2>{content.directQuestion}</h2>
          <p>{content.directAnswer}</p>
        </div>
      </section>

      <PageGrowthLayer compact />

      <section className="local-section local-section--light">
        <div className="local-heading"><span className="local-kicker">BUSINESS OUTCOMES</span><h2>Built to create confidence<br /><em>and action.</em></h2><p>{content.localContext}</p></div>
        <div className="local-grid">{content.benefits.map((item, index) => { const Icon = icons[index % icons.length]; return <article className="local-card" key={item.title}><span><Icon size={20} /></span><h3>{item.title}</h3><p>{item.copy}</p></article>; })}</div>
      </section>

      <section className="local-section local-section--blue">
        <div className="local-heading"><span className="local-kicker">WHAT IS INCLUDED</span><h2>A clear scope.<br /><em>Built around the business.</em></h2><p>Every engagement combines strategy, user experience and development. The exact scope is agreed before production begins, so the build stays focused on the outcome.</p></div>
        <div className="local-grid">{content.included.map((item, index) => { const Icon = icons[(index + 2) % icons.length]; return <article className="local-card" key={item.title}><span><Icon size={20} /></span><h3>{item.title}</h3><p>{item.copy}</p></article>; })}</div>
        <div className="local-process">
          {[['01','Discover','Clarify the users, business goal, proof and constraints.'],['02','Plan','Define the structure, journeys, content and technical scope.'],['03','Design + build','Create the responsive experience and production system.'],['04','Launch + learn','Test, deploy, measure and hand over with clarity.']].map(([number,title,copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="local-section local-section--light">
        <div className="local-heading"><span className="local-kicker">QUESTIONS BUYERS ASK</span><h2>Useful answers,<br /><em>before the first call.</em></h2></div>
        <div className="local-faq">{content.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="local-related"><h2>Other ways to move the business forward</h2><div><Link href="/services">All digital services <ArrowUpRight size={14} /></Link>{content.related.map((item) => <Link key={item.href} href={item.href}>{item.label} <ArrowUpRight size={14} /></Link>)}</div></section>
      <section className="local-area-links" aria-label="Carter Digitals local service areas">
        <div><span className="local-kicker">MORE LOCAL COVERAGE</span><h2>Find the right local fit.</h2><p>Explore the areas Carter Digitals serves across Tshwane and Gauteng, with practical context for the businesses and teams in each market.</p></div>
        <nav>{localAreaLinks.map((item) => <Link key={item.href} href={item.href}>{item.label} <ArrowUpRight size={13} /></Link>)}</nav>
      </section>
      <section className="local-cta"><h2>Build the version clients are ready to trust.</h2><p>Talk directly with Kabelo about your goal, scope and smartest next step.</p><Link href="/contact">Get a clear recommendation <ArrowUpRight size={15} /></Link></section>
    </main>
  );
}
