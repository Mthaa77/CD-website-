import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Clock3,
  Globe2,
  Layers3,
  Megaphone,
  MessageCircle,
  Palette,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";
import { CarterBubbleMenu } from "../../bubble-menu";
import { insights } from "./content";
import "./insights.css";

export const metadata: Metadata = {
  title: { absolute: "Insights: Websites, Logos, Posters & Web Apps Pretoria | Carter Digitals" },
  description:
    "Practical South African insights on custom websites, e-commerce, law firm and school websites, logo design, business posters, internal web apps, SEO and GEO.",
  keywords: [
    "website insights Pretoria",
    "custom website benefits South Africa",
    "logo design Pretoria",
    "poster design South Africa",
    "internal web apps Gauteng",
    "business systems Pretoria",
    "SEO and GEO South Africa",
  ],
  alternates: { canonical: "/insights" },
  openGraph: {
    type: "website",
    url: "/insights",
    title: "Carter Digitals Insights | Websites, Brands & Digital Systems",
    description:
      "Clear, useful guidance for South African businesses deciding what to build, what to show and how to become easier to choose.",
    images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Carter Digitals insights" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carter Digitals Insights | Websites, Brands & Digital Systems",
    description: "Practical guidance on websites, logos, posters, SEO, GEO and internal web apps for South African organisations.",
    images: ["/carter-social-preview-v2.jpg"],
  },
};

const servicePillars = [
  {
    number: "01",
    label: "CUSTOM WEBSITES",
    title: "Turn a first visit into a confident next step.",
    copy: "A custom website gives the business one clear place to explain its offer, prove its value and make contact easy. We shape the structure around real customer questions—not a template’s limitations.",
    benefits: ["Mobile-first page journeys", "Persuasive, plain-language copy", "SEO + GEO-ready foundations", "WhatsApp and enquiry routes"],
    icon: Globe2,
    href: "/offerings/premium-websites",
    linkLabel: "Explore website development",
    accent: "cyan",
  },
  {
    number: "02",
    label: "3D LOGO DESIGN",
    title: "Make the name worth remembering.",
    copy: "A logo is the small signal people carry away from the website, proposal, uniform or WhatsApp profile. We create a distinctive mark with enough clarity to work at a favicon size and enough presence to lead a brand.",
    benefits: ["Distinctive mark and wordmark", "3D and flat-use direction", "Social, print and small-size use", "Clean brand-ready exports"],
    icon: Palette,
    href: "/offerings/creative-media",
    linkLabel: "Explore logo direction",
    accent: "gold",
  },
  {
    number: "03",
    label: "POSTERS + CAMPAIGN VISUALS",
    title: "Give the campaign a clear next move.",
    copy: "A poster has seconds to land. We sharpen the hierarchy, put the important detail first and make the action obvious—whether the visual is going to Instagram, WhatsApp, a noticeboard or print.",
    benefits: ["Message-first visual hierarchy", "Social and print-ready sizes", "Clear dates, offers and actions", "A consistent campaign look"],
    icon: Megaphone,
    href: "/offerings/creative-media",
    linkLabel: "Explore campaign visuals",
    accent: "coral",
  },
  {
    number: "04",
    label: "INTERNAL WEB APPS",
    title: "Replace repeated admin with a system.",
    copy: "When work is split across spreadsheets, inboxes and WhatsApp threads, the team loses time and visibility. An internal web app turns a repeated process into a shared, trackable workflow that can grow in phases.",
    benefits: ["Role-aware workflows", "Forms, statuses and dashboards", "One clearer source of truth", "Phased MVP delivery"],
    icon: Workflow,
    href: "/offerings/business-systems",
    linkLabel: "Explore business systems",
    accent: "blue",
  },
] as const;

const topicAnchors = [
  { label: "Websites", href: "#topic-websites" },
  { label: "Logos", href: "#topic-identity" },
  { label: "Posters", href: "#topic-campaigns" },
  { label: "Internal apps", href: "#topic-systems" },
  { label: "SEO + GEO", href: "#topic-search" },
];

function insightTopic(category: string) {
  if (category.includes("BRAND")) return "identity";
  if (category.includes("CAMPAIGN")) return "campaigns";
  if (category.includes("SYSTEM") || category.includes("PRODUCT") || category.includes("INTERNAL")) return "systems";
  if (category.includes("SEARCH")) return "search";
  return "websites";
}

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://carterdigitals.co.za/insights#webpage",
  url: "https://carterdigitals.co.za/insights",
  name: "Carter Digitals Insights",
  headline: "Practical insights on websites, brands and digital systems",
  description: "Clear, useful guidance for South African businesses deciding what to build, what to show and how to become easier to choose.",
  inLanguage: "en-ZA",
  isPartOf: { "@id": "https://carterdigitals.co.za/#website" },
  about: [
    { "@type": "Thing", name: "Custom website development" },
    { "@type": "Thing", name: "Logo design" },
    { "@type": "Thing", name: "Poster and campaign design" },
    { "@type": "Thing", name: "Internal web application development" },
    { "@type": "Thing", name: "SEO and Generative Engine Optimisation" },
  ],
  author: { "@id": "https://carterdigitals.co.za/#kabelo-kadiaka" },
  publisher: { "@id": "https://carterdigitals.co.za/#organization" },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: insights.length,
    itemListElement: insights.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://carterdigitals.co.za/insights/${item.slug}`,
      name: item.title,
    })),
  },
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <main className="insights-page insights-page--story">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CarterBubbleMenu />

      <section className="insights-story-hero" aria-labelledby="insights-story-title">
        <div className="insights-story-hero__copy">
          <span className="insights-story-eyebrow"><Sparkles aria-hidden="true" /> INSIGHTS / FIELD NOTES FROM PRETORIA</span>
          <h1 id="insights-story-title">Build the right digital asset.<br /><em>Make the business easier to choose.</em></h1>
          <p>Clear, South African guidance on custom websites, e-commerce, law firm and school websites, logos, posters, SEO and internal web apps. Learn what each asset should do, what it should include and when it is worth investing.</p>
          <div className="insights-story-hero__actions">
            <a href="#service-lens">Choose your next move <ArrowRight aria-hidden="true" /></a>
            <Link href="/contact">Talk through your brief <MessageCircle aria-hidden="true" /><ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>

        <aside className="insights-story-hero__signal" aria-label="Carter Digitals editorial promise">
          <div className="insights-story-hero__signal-top"><span><i aria-hidden="true" /> SIGNAL / LIVE</span><small>EDITORIAL 2026</small></div>
          <Search aria-hidden="true" />
          <strong>Useful thinking.<br /><em>Before the spend.</em></strong>
          <p>Most digital mistakes become expensive before anyone opens Figma or writes code. These guides help you choose the right move earlier.</p>
          <div className="insights-story-hero__signal-bottom"><span>01</span><span>MAKE THE OFFER CLEAR</span><span>PRETORIA · GAUTENG · SA</span></div>
        </aside>
      </section>

      <section className="insights-story-thesis" aria-labelledby="insights-thesis-title">
        <div className="insights-story-thesis__intro">
          <span className="insights-story-eyebrow insights-story-eyebrow--dark">WHY THIS LIBRARY EXISTS</span>
          <h2 id="insights-thesis-title">The customer sees one signal.<br /><em>Make every part count.</em></h2>
          <p>Your customer does not experience your business in separate departments. They see the Google result, the logo, the poster in a feed or the link someone sends on WhatsApp. If that signal is unclear, trust leaks before the conversation starts.</p>
        </div>
        <div className="insights-story-thesis__steps">
          <article><span>01 / GET FOUND</span><h3>Show up where the question starts.</h3><p>Useful page structure, local context and crawlable content give search engines a fair chance to connect the right person to the right offer.</p></article>
          <article><span>02 / GET UNDERSTOOD</span><h3>Make the value obvious.</h3><p>Strong hierarchy turns a complicated service into a story people can scan, believe and repeat to someone else.</p></article>
          <article><span>03 / GET ACTION</span><h3>Give people a next step.</h3><p>A call, WhatsApp message, application, booking or project brief should feel like the natural end of the page—not a scavenger hunt.</p></article>
        </div>
      </section>

      <section className="insights-service-lens" id="service-lens" aria-labelledby="service-lens-title">
        <div className="insights-service-lens__header">
          <div>
            <span className="insights-story-eyebrow">THE CARTER DIGITAL LENS / WHAT TO BUILD</span>
            <h2 id="service-lens-title">Four tools.<br /><em>One clearer business.</em></h2>
          </div>
          <div className="insights-service-lens__note"><Layers3 aria-hidden="true" /><p>A website can win the click. A logo can make the name stick. A poster can move a campaign. An internal app can stop the team from working in circles.</p></div>
        </div>

        <div className="insights-service-lens__grid">
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article className={`insights-pillar insights-pillar--${pillar.accent}`} key={pillar.number}>
                <div className="insights-pillar__top"><span>{pillar.number}</span><Icon aria-hidden="true" /></div>
                <p className="insights-pillar__label">{pillar.label}</p>
                <h3>{pillar.title}</h3>
                <p className="insights-pillar__copy">{pillar.copy}</p>
                <ul>{pillar.benefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" />{benefit}</li>)}</ul>
                <Link href={pillar.href}>{pillar.linkLabel}<ArrowUpRight aria-hidden="true" /></Link>
              </article>
            );
          })}
        </div>

        <div className="insights-service-lens__footer"><span>CHOOSE THE FRICTION FIRST</span><strong>THEN CHOOSE THE ASSET</strong><span>NO OVERBUILDING · NO SALES FOG</span></div>
      </section>

      <section className="insights-story-featured" id="latest" aria-labelledby="featured-guide-title">
        <div className="insights-story-featured__intro">
          <span className="insights-story-eyebrow insights-story-eyebrow--dark">START WITH THE DECISION / FEATURED GUIDE</span>
          <h2 id="featured-guide-title">Before you buy the build,<br /><em>understand the job.</em></h2>
          <p>A good quote is easier to judge when you know what the website, brand asset or internal tool is supposed to change. Start with scope, audience, proof and the action you need next.</p>
          <div className="insights-story-featured__checks"><span><Check aria-hidden="true" /> Clear scope</span><span><Check aria-hidden="true" /> Real business outcome</span><span><Check aria-hidden="true" /> No hidden assumptions</span></div>
        </div>
        <Link className="insights-story-featured__card" href={`/insights/${featured.slug}`}>
          <div className="insights-story-card__meta"><span>{featured.category}</span><small><Clock3 aria-hidden="true" /> {featured.readTime}</small></div>
          <span className="insights-story-featured__number">01 / READ FIRST</span>
          <h3>{featured.title}</h3>
          <p>{featured.dek}</p>
          <strong>Read the complete guide <ArrowUpRight aria-hidden="true" /></strong>
        </Link>
      </section>

      <section className="insights-story-library" id="field-notes" aria-labelledby="field-notes-title">
        <div className="insights-story-library__header">
          <div><span className="insights-story-eyebrow">FIELD NOTES / PRACTICAL ANSWERS</span><h2 id="field-notes-title">Read the useful part.<br /><em>Then make the move.</em></h2></div>
          <p>The library is organised around real decisions: what to build, what to show, how to get found and how to make the work easier after launch.</p>
        </div>
        <nav className="insights-story-topics" aria-label="Browse insight topics">{topicAnchors.map((topic) => <a href={topic.href} key={topic.href}>{topic.label}<ArrowUpRight aria-hidden="true" /></a>)}</nav>
        <div className="insights-story-library__grid">
          {rest.map((item, index) => {
            const topic = insightTopic(item.category);
            const topicStart = rest.findIndex((candidate) => insightTopic(candidate.category) === topic) === index;
            return (
              <Link className={`insights-story-card insights-story-card--${topic}`} id={topicStart ? `topic-${topic}` : undefined} key={item.slug} href={`/insights/${item.slug}`}>
                <div className="insights-story-card__top"><span>0{index + 2}</span><BookOpen aria-hidden="true" /></div>
                <small>{item.category} · {item.readTime}</small>
                <h3>{item.title}</h3>
                <p>{item.dek}</p>
                <strong>Open the guide <ArrowUpRight aria-hidden="true" /></strong>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="insights-story-cta" aria-labelledby="insights-cta-title">
        <div><span className="insights-story-eyebrow">YOUR SITUATION IS SPECIFIC</span><h2 id="insights-cta-title">Turn the question into<br /><em>a clear next step.</em></h2><p>If the guides made the problem clearer but not the scope, bring the context. Kabelo will help you choose the smallest useful digital move for the business.</p></div>
        <div className="insights-story-cta__actions"><Link href="/contact">Start a project conversation <MessageCircle aria-hidden="true" /><ArrowUpRight aria-hidden="true" /></Link><Link href="/services">Compare all capabilities <ArrowRight aria-hidden="true" /></Link></div>
      </section>

      <footer className="insights-story-footer">
        <div><Link href="/" className="insights-story-footer__brand">CARTER <strong>DIGITALS</strong></Link><p>Practical digital guidance for South African organisations.</p></div>
        <nav aria-label="Insights footer navigation"><Link href="/services">Services <ArrowUpRight aria-hidden="true" /></Link><Link href="/work">Selected work <ArrowUpRight aria-hidden="true" /></Link><Link href="/pricing">Pricing <ArrowUpRight aria-hidden="true" /></Link><Link href="/contact">Contact <ArrowUpRight aria-hidden="true" /></Link></nav>
        <div className="insights-story-footer__location"><span>BUILT IN PRETORIA</span><strong>Websites · brands · systems</strong><Link href="/privacy">Privacy notice <ArrowUpRight aria-hidden="true" /></Link></div>
      </footer>
    </main>
  );
}
