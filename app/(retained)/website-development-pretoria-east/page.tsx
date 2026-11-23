import type { Metadata } from "next";
import { LocalServicePage, type LocalServiceContent } from "../../_components/local-service-page";

export const metadata: Metadata = {
  title: { absolute: "Website Development Pretoria East | Carter Digitals" },
  description: "Custom website development in Pretoria East from Carter Digitals. Premium, mobile-first websites for practices, property, hospitality and local services.",
  alternates: { canonical: "/website-development-pretoria-east" },
  openGraph: { url: "/website-development-pretoria-east", title: "Website Development Pretoria East | Carter Digitals", description: "A premium, conversion-focused website for Pretoria East businesses that want to be chosen with confidence.", images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Website development for Pretoria East businesses" }] }
};

const content: LocalServiceContent = {
  slug: "website-development-pretoria-east",
  eyebrow: "WEBSITE DEVELOPMENT / PRETORIA EAST",
  heading: "A premium digital front door",
  emphasis: "for Pretoria East.",
  intro: "Carter Digitals builds polished, mobile-first websites for Pretoria East businesses that want to communicate value quickly and turn a strong first impression into a real enquiry.",
  directQuestion: "Can Carter Digitals build a website for a Pretoria East business?",
  directAnswer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS.",
  location: "Pretoria East",
  locationType: "Place",
  service: "Website Development Pretoria East",
  startingPrice: "R4,999",
  timeline: "5–7 business days for a focused website",
  audience: "Pretoria East practices, property and service businesses",
  localContext: "Pretoria East businesses often win trust through a combination of referral, reputation and a quick digital check. The website should match that expectation: calm, specific, easy to navigate and direct about the value, proof and next action.",
  benefits: [
    { title: "Designed for high-intent visitors", copy: "The page journey answers what the service is, who it suits, what to expect and how to get started without making visitors work for clarity." },
    { title: "Confidence at every touchpoint", copy: "Proof, credentials, process, service areas and practical details are made visible so the business feels prepared and dependable." },
    { title: "A flexible growth base", copy: "The first release can support future service pages, content, booking, lead qualification or a client-facing system as demand grows." }
  ],
  included: [
    { title: "Customer journey mapping", copy: "We prioritise the questions, evidence and actions that matter for the business and its Pretoria East audience." },
    { title: "Premium responsive build", copy: "A custom interface, thoughtful motion and accessible responsive code create a polished experience across devices." },
    { title: "Launch and handover clarity", copy: "The release includes search essentials, performance checks, analytics foundations and a practical path for future improvements." }
  ],
  faqs: [
    { question: "What is the starting price for a Pretoria East website?", answer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS." },
    { question: "What types of Pretoria East businesses do you work with?", answer: "Carter Digitals is a strong fit for professional practices, property and real estate, hospitality, healthcare, education, contractors, consultants and local services that need a clearer online experience." },
    { question: "Can you connect the website to WhatsApp or booking?", answer: "Yes. Clear calls, WhatsApp journeys, forms and booking or enquiry flows can be included when they support the business process and are defined in scope." },
    { question: "Does the website include local SEO basics?", answer: "Yes. Each build is structured with crawlable content, metadata, headings, internal links, sitemap, canonical URLs and accurate service context. Ongoing content and authority growth can be planned after launch." },
    { question: "How soon can we speak about the project?", answer: "Use the contact page to share the current website, offer or goal. The first conversation is used to clarify the right first release and a sensible scope before production begins." }
  ],
  related: [
    { label: "Website development Centurion", href: "/website-development-centurion" },
    { label: "Website development Pretoria", href: "/website-development-pretoria" },
    { label: "Website packages and pricing", href: "/pricing" },
    { label: "Start a Pretoria East project", href: "/contact" }
  ]
};

export default function Page() { return <LocalServicePage content={content} />; }
