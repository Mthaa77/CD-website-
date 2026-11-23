import type { Metadata } from "next";
import { LocalServicePage, type LocalServiceContent } from "../../_components/local-service-page";

export const metadata: Metadata = {
  title: { absolute: "SEO & GEO Pretoria | Google, Bing & AI Search | Carter Digitals" },
  description: "SEO and GEO foundations for Pretoria and Gauteng businesses: local search structure, useful content, XML sitemaps, structured data and AI-readable answers.",
  keywords: ["SEO Pretoria", "local SEO Gauteng", "GEO South Africa", "AI search optimisation Pretoria", "Google ranking Pretoria", "Bing search visibility"],
  alternates: { canonical: "/seo-geo-pretoria" },
  openGraph: {
    type: "website",
    url: "/seo-geo-pretoria",
    title: "SEO & GEO Pretoria | Carter Digitals",
    description: "Make a Pretoria or Gauteng business easier for Google, Bing and AI search tools to understand and surface.",
    images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "SEO and GEO foundations for Pretoria businesses" }],
  },
};

const content: LocalServiceContent = {
  slug: "seo-geo-pretoria",
  eyebrow: "SEARCH VISIBILITY / SEO + GEO / PRETORIA, GAUTENG",
  heading: "Make your business easier to find",
  emphasis: "on Google and AI search.",
  intro: "Carter Digitals builds the page structure, content signals and technical foundations that help Pretoria and Gauteng businesses become easier for Google, Bing and answer engines to understand.",
  directQuestion: "What are SEO and GEO for a Pretoria business?",
  directAnswer: "SEO helps search engines connect the right customer with the right page. GEO—Generative Engine Optimisation—helps AI search tools understand what your business does, who it serves and why it is credible. Carter Digitals combines local relevance, useful answers, semantic page structure, structured data, XML sitemaps and clear internal links into one search-ready foundation.",
  location: "Pretoria",
  locationType: "City",
  service: "SEO and GEO foundations for Pretoria businesses",
  startingPrice: "Scoped with the website",
  timeline: "Mapped before launch and refined after release",
  audience: "Pretoria, Gauteng and South African businesses",
  localContext: "A business in Pretoria may be discovered through Google Maps, a normal search, a referral, WhatsApp or an AI answer. The customer does not care which system found you—they care whether the result feels relevant, trustworthy and easy to act on.",
  benefits: [
    { title: "Local relevance without stuffing", copy: "Service, sector and place are written naturally so a customer in Pretoria, Soshanguve, Centurion or Johannesburg understands the fit without reading robotic copy." },
    { title: "Answers people can actually use", copy: "Direct explanations, useful FAQs and clear service pages give search engines and AI tools better material to quote, summarise and connect to a real need." },
    { title: "A stronger technical route", copy: "Crawlable pages, canonical URLs, internal links, structured data, robots rules and an XML sitemap make the important parts of the website easier to discover." },
  ],
  included: [
    { title: "On-page SEO structure", copy: "Page titles, descriptions, headings, image alternatives, URL structure and service language aligned to real customer intent." },
    { title: "GEO and entity clarity", copy: "Plain-language business facts, service definitions, location context and answer-led content that helps AI search tools understand the organisation." },
    { title: "Sitemap and crawl foundations", copy: "XML sitemap, robots.txt, canonical URLs and internal links prepared so Google, Bing and other crawlers can move through the site with fewer dead ends." },
  ],
  faqs: [
    { question: "Can you guarantee a number-one Google ranking?", answer: "No credible studio can guarantee a specific position. Carter Digitals builds the technical and content foundation, then recommends ongoing local content, proof, reviews and authority work that can strengthen visibility over time." },
    { question: "What is the difference between SEO and GEO?", answer: "SEO helps search engines understand and match pages to searches. GEO helps generative search and AI answer tools understand the business well enough to include it in a useful answer. The strongest foundation supports both." },
    { question: "Do you submit the sitemap to Google and Bing?", answer: "The website publishes a crawlable XML sitemap and clear robots rules. Search Console and Bing Webmaster Tools should then be connected by the site owner so performance can be monitored and important releases can be submitted directly." },
    { question: "Will this help a business in Pretoria rank across Gauteng?", answer: "It creates a stronger foundation for local relevance across Pretoria and Gauteng. Sustainable growth still depends on the quality of the service pages, local proof, customer reviews, trusted mentions and how well the business serves each market." },
    { question: "Does AI search optimisation replace good website content?", answer: "No. GEO is not a shortcut or a special keyword list. Useful, accurate, well-structured content is still the core. The goal is to make the business clear to people first, then make that clarity easier for search systems to process." },
  ],
  related: [
    { label: "Website development Pretoria", href: "/website-development-pretoria" },
    { label: "Website packages and pricing", href: "/pricing" },
    { label: "Carter Digitals services", href: "/services" },
    { label: "Selected work", href: "/work" },
  ],
};

export default function Page() {
  return <LocalServicePage content={content} />;
}
