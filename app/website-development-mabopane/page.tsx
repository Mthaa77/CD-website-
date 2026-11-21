import type { Metadata } from "next";
import { LocalServicePage, type LocalServiceContent } from "../_components/local-service-page";

export const metadata: Metadata = {
  title: { absolute: "Website Development Mabopane | Carter Digitals" },
  description: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS.",
  alternates: { canonical: "/website-development-mabopane" },
  openGraph: { url: "/website-development-mabopane", title: "Website Development Mabopane | Carter Digitals", description: "Mobile-first websites for Mabopane businesses that need clearer positioning, stronger trust and more useful enquiries.", images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Website development for Mabopane businesses" }] }
};

const content: LocalServiceContent = {
  slug: "website-development-mabopane",
  eyebrow: "WEBSITE DEVELOPMENT / MABOPANE, TSHWANE",
  heading: "Make the business easier",
  emphasis: "to choose in Mabopane.",
  intro: "Carter Digitals turns scattered information, dated pages and weak digital first impressions into a polished website that explains the offer and makes contact feel natural.",
  directQuestion: "Does Carter Digitals build websites for Mabopane businesses?",
  directAnswer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS.",
  location: "Mabopane",
  locationType: "Place",
  service: "Website Development Mabopane",
  startingPrice: "R4,999",
  timeline: "5–7 business days for a focused website",
  audience: "Mabopane service businesses and growing organisations",
  localContext: "A Mabopane business may be discovered through a referral, a local search, a social profile or a message shared between customers. The website should make the business feel established quickly, answer practical questions and guide the right visitor toward a call, WhatsApp message or enquiry.",
  benefits: [
    { title: "A sharper first answer", copy: "Visitors see what the business offers, where it operates, who it is for and what makes it worth considering without unnecessary friction." },
    { title: "Proof before the pitch", copy: "Services, experience, work samples, process and customer reassurance are given a clear place in the journey." },
    { title: "Low-friction contact", copy: "Calls, WhatsApp and forms are placed where intent appears, so a serious visitor does not have to hunt for the next step." }
  ],
  included: [
    { title: "Offer and audience clarity", copy: "We shape the information architecture around the people the business actually wants to serve." },
    { title: "Premium responsive interface", copy: "Original design, motion and responsive code give the business a stronger presence across phones, tablets and desktops." },
    { title: "Technical launch essentials", copy: "Semantic structure, metadata, sitemap, canonical URLs, analytics foundations and performance checks support a clean release." }
  ],
  faqs: [
    { question: "What does website development in Mabopane cost?", answer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS." },
    { question: "Do you work with businesses outside Pretoria?", answer: "Yes. Mabopane is part of Carter Digitals' Tshwane service area, and the studio also works with organisations across Gauteng and South Africa through a focused remote process." },
    { question: "Can you improve an existing website instead of starting over?", answer: "Often, yes. We can audit the message, page structure, mobile experience, performance and contact paths, then recommend a focused rebuild or a staged upgrade." },
    { question: "Is basic SEO included in the build?", answer: "Yes. The technical foundation includes crawlable pages, titles, descriptions, heading structure, sitemap, robots rules and canonical URLs. Content publishing and ongoing authority work can be added separately." },
    { question: "How quickly can a focused site launch?", answer: "A focused website can often launch in 5–7 business days once the brief, content and feedback checkpoints are agreed. More involved websites take longer and receive a clear schedule." }
  ],
  related: [
    { label: "Website development Soshanguve", href: "/website-development-soshanguve" },
    { label: "Website development Pretoria", href: "/website-development-pretoria" },
    { label: "Website packages and pricing", href: "/pricing" },
    { label: "Discuss a Mabopane project", href: "/contact" }
  ]
};

export default function Page() { return <LocalServicePage content={content} />; }
