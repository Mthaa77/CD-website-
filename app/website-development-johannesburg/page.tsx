import type { Metadata } from "next";
import { LocalServicePage, type LocalServiceContent } from "../_components/local-service-page";

export const metadata: Metadata = {
  title: { absolute: "Website Development Johannesburg | Carter Digitals" },
  description: "Premium custom website development for Johannesburg businesses. Mobile-first design, persuasive content, local SEO foundations and direct founder access.",
  alternates: { canonical: "/website-development-johannesburg" },
  openGraph: { url: "/website-development-johannesburg", title: "Website Development Johannesburg | Carter Digitals", description: "Custom websites for Johannesburg organisations that need to look credible, communicate clearly and generate enquiries.", images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Premium website development for Johannesburg businesses" }] }
};

const content: LocalServiceContent = {
  slug: "website-development-johannesburg",
  eyebrow: "WEBSITE DEVELOPMENT / JOHANNESBURG, GAUTENG",
  heading: "Premium websites for",
  emphasis: "Johannesburg businesses.",
  intro: "Carter Digitals helps Johannesburg service businesses and organisations turn a weak or generic online presence into a clear, credible and conversion-focused customer experience.",
  directQuestion: "Does Carter Digitals develop websites for Johannesburg businesses?",
  directAnswer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS.",
  location: "Johannesburg",
  service: "Website Development Johannesburg",
  startingPrice: "R4,999",
  timeline: "5–7 business days for a focused website",
  audience: "Johannesburg service businesses and organisations",
  localContext: "Johannesburg is a competitive market where buyers compare capability, proof and professionalism quickly. A premium design only earns its place when the message is clear, the evidence is credible and every page supports the next commercial action.",
  benefits: [
    { title: "Premium market positioning", copy: "The visual system and copy help the business look appropriate for the value, clients and opportunities it wants to win." },
    { title: "Commercial clarity", copy: "Services, differentiators, proof and process are structured around the questions a serious Johannesburg buyer asks before making contact." },
    { title: "Measurable enquiry paths", copy: "Calls, WhatsApp actions, forms and priority CTAs are built into the journey and prepared for analytics measurement." }
  ],
  included: [
    { title: "Audience and competitor direction", copy: "We clarify the customer, category expectations and strongest positioning opportunity before design." },
    { title: "Bespoke design and development", copy: "Responsive layouts, typography, motion and interaction are created around the brand and offer." },
    { title: "SEO and launch foundations", copy: "Crawlability, metadata, semantic headings, structured data, sitemap, canonical URLs and performance are treated as launch essentials." }
  ],
  faqs: [
    { question: "Can a Pretoria studio work effectively with a Johannesburg business?", answer: "Yes. Discovery, feedback, content review and launch can be handled remotely through focused meetings and shared project checkpoints. Carter Digitals serves Gauteng and can arrange in-person requirements where the scope justifies it." },
    { question: "How much does website development cost in Johannesburg?", answer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS." },
    { question: "Can you redesign an existing Johannesburg business website?", answer: "Yes. A redesign can retain useful content or brand assets while improving positioning, page structure, mobile experience, performance, search foundations and enquiry paths." },
    { question: "Do you build WordPress websites?", answer: "Carter Digitals specialises in custom modern web development rather than generic template assembly. The recommended platform depends on the content, editing, integration, performance and ownership requirements of the project." },
    { question: "What happens after launch?", answer: "The agreed package includes a defined support period, handover and launch checks. Ongoing care, content publishing, analytics review and search growth can be scoped separately." }
  ],
  related: [
    { label: "Website development Pretoria", href: "/website-development-pretoria" },
    { label: "Website pricing", href: "/pricing" },
    { label: "Premium website capability", href: "/offerings/premium-websites" },
    { label: "Start a Johannesburg project", href: "/contact" }
  ]
};

export default function Page() { return <LocalServicePage content={content} />; }
