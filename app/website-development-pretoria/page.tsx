import type { Metadata } from "next";
import { LocalServicePage, type LocalServiceContent } from "../_components/local-service-page";

export const metadata: Metadata = {
  title: { absolute: "Website Development Pretoria | Carter Digitals" },
  description: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS.",
  alternates: { canonical: "/website-development-pretoria" },
  openGraph: { url: "/website-development-pretoria", title: "Website Development Pretoria | Carter Digitals", description: "Premium custom websites for Pretoria businesses, built for trust, local discovery and qualified enquiries.", images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Premium website development for Pretoria businesses" }] }
};

const content: LocalServiceContent = {
  slug: "website-development-pretoria",
  eyebrow: "WEBSITE DEVELOPMENT / PRETORIA, GAUTENG",
  heading: "Custom website development",
  emphasis: "for Pretoria businesses.",
  intro: "Carter Digitals creates distinctive, mobile-first business websites that explain your value clearly, establish credibility and turn local search or referrals into useful enquiries.",
  directQuestion: "Who builds custom business websites in Pretoria?",
  directAnswer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS.",
  location: "Pretoria",
  service: "Website Development Pretoria",
  startingPrice: "R4,999",
  timeline: "5–7 business days for a focused website",
  audience: "Pretoria SMEs and professional organisations",
  localContext: "Pretoria buyers often meet a business first through Google, a referral link or WhatsApp. The website has to confirm that the company is legitimate, relevant and worth contacting within a few seconds—especially on mobile.",
  benefits: [
    { title: "Clear local relevance", copy: "Service, sector and Pretoria context are organised naturally so customers and search engines understand who the business serves." },
    { title: "A stronger trust journey", copy: "Credentials, proof, process and direct contact paths reduce uncertainty before a prospect calls or requests a quote." },
    { title: "Mobile-first conversion", copy: "Fast, responsive pages make calling, WhatsApp, booking and enquiry comfortable on the device most local buyers use." }
  ],
  included: [
    { title: "Positioning and page strategy", copy: "We clarify the audience, offer, proof and page journey before design decisions begin." },
    { title: "Custom interface development", copy: "Original responsive design and code shaped around the business—not a recycled WordPress template." },
    { title: "Search-ready launch", copy: "Titles, descriptions, headings, crawl controls, sitemap, analytics foundations and performance checks are prepared for launch." }
  ],
  faqs: [
    { question: "How much does a business website cost in Pretoria?", answer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS." },
    { question: "How long does website development take?", answer: "A focused website with an approved brief can often be completed in 5–7 business days. Larger multipage builds, content-heavy sites or projects requiring integrations need a longer schedule agreed during scoping." },
    { question: "Will the website work on mobile phones?", answer: "Yes. Carter Digitals designs mobile-first and tests the experience across common screen sizes so text, navigation, forms, calls and WhatsApp actions remain easy to use." },
    { question: "Is SEO included?", answer: "Every website includes an SEO-ready technical foundation: crawlable pages, metadata, heading structure, sitemap, robots rules, canonical URLs and performance-conscious development. Ongoing content, reviews, authority building and local SEO are separate growth activities." },
    { question: "Do you only work with businesses in Pretoria?", answer: "No. Carter Digitals is based in Pretoria and serves clients across Gauteng and South Africa. Pretoria is the studio's strongest local service area, while discovery and delivery can happen remotely." }
  ],
  related: [
    { label: "Website packages and pricing", href: "/pricing" },
    { label: "Web application development Pretoria", href: "/web-application-development-pretoria" },
    { label: "Website development Johannesburg", href: "/website-development-johannesburg" },
    { label: "Premium website capability", href: "/offerings/premium-websites" }
  ]
};

export default function Page() { return <LocalServicePage content={content} />; }
