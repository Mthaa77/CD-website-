import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, BookOpen, Check, Clock3, MessageCircle } from "lucide-react";
import { CarterBubbleMenu } from "../../../bubble-menu";
import { getInsight, insights, insightSlugs } from "../content";
import "../insights.css";

export function generateStaticParams() {
  return insightSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: { absolute: `${insight.title} | Carter Digitals` },
    description: insight.dek,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: { type: "article", url: `/insights/${slug}`, title: insight.title, description: insight.dek, publishedTime: insight.published, modifiedTime: insight.updated, authors: ["Kabelo Kadiaka"], images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: insight.title }] },
  };
}

function formatInsightDate(value: string) {
  return new Intl.DateTimeFormat("en-ZA", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  const related = insights.filter((item) => item.slug !== slug).slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BlogPosting", "@id": `https://carterdigitals.co.za/insights/${slug}#article`, headline: insight.title, description: insight.dek, datePublished: insight.published, dateModified: insight.updated, inLanguage: "en-ZA", author: { "@id": "https://carterdigitals.co.za/#kabelo-kadiaka" }, publisher: { "@id": "https://carterdigitals.co.za/#organization" }, mainEntityOfPage: `https://carterdigitals.co.za/insights/${slug}`, image: "https://carterdigitals.co.za/carter-social-preview-v2.jpg" },
      { "@type": "FAQPage", mainEntity: insight.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://carterdigitals.co.za" }, { "@type": "ListItem", position: 2, name: "Insights", item: "https://carterdigitals.co.za/insights" }, { "@type": "ListItem", position: 3, name: insight.title, item: `https://carterdigitals.co.za/insights/${slug}` }] },
    ],
  };

  return (
    <main className="insight-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CarterBubbleMenu />
      <header className="insight-article__hero"><nav aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/insights">Insights</Link><span>/</span><b>{insight.category}</b></nav><span>{insight.category}</span><h1>{insight.title}</h1><p>{insight.dek}</p><div><span><Clock3 /> {insight.readTime}</span><span>By Kabelo Kadiaka</span><span>Updated {formatInsightDate(insight.updated)}</span></div></header>
      <section className="insight-answer"><span>THE DIRECT ANSWER</span><p>{insight.answer}</p></section>
      <div className="insight-layout">
        <aside><span>IN THIS GUIDE</span><nav>{insight.sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}><small>0{index + 1}</small>{section.title}</a>)}</nav><Link href={insight.relatedHref}>{insight.relatedLabel} <ArrowUpRight /></Link></aside>
        <article className="insight-body">{insight.sections.map((section, index) => <section key={section.title} id={`section-${index + 1}`}><small>0{index + 1}</small><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}><Check />{bullet}</li>)}</ul> : null}</section>)}</article>
      </div>
      <section className="insight-faq" aria-labelledby="insight-faq-title"><div><span>QUESTIONS PEOPLE ASK</span><h2 id="insight-faq-title">Clear answers.<br /><em>Before the quote.</em></h2></div><div>{insight.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>0{index + 1}</span>{faq.question}<i>+</i></summary><p>{faq.answer}</p></details>)}</div></section>
      <section className="insight-related"><div><span>CONTINUE THE RESEARCH</span><h2>Two useful<br /><em>next reads.</em></h2></div><div>{related.map((item) => <Link key={item.slug} href={`/insights/${item.slug}`}><BookOpen /><small>{item.category}</small><strong>{item.title}</strong><span>Read guide <ArrowUpRight /></span></Link>)}</div></section>
      <section className="insight-conversion"><div><span>READY TO APPLY THE THINKING?</span><h2>Bring the business goal.<br /><em>Leave with a clearer route.</em></h2><p>No polished technical brief required. Explain what needs to change and get an honest recommendation on the smallest useful first release.</p></div><div><Link href="/contact">Start a project conversation <MessageCircle /><ArrowUpRight /></Link><Link href="/insights">Return to all insights <ArrowRight /></Link></div></section>
      <footer className="insights-footer"><Link href="/">CARTER <strong>DIGITALS</strong></Link><span>Practical digital guidance for South African organisations.</span><Link href="/privacy">Privacy notice <ArrowUpRight /></Link></footer>
    </main>
  );
}
