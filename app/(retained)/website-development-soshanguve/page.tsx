import type { Metadata } from "next";
import { LocalServicePage, type LocalServiceContent } from "../../_components/local-service-page";

export const metadata: Metadata = {
  title: { absolute: "Website Development Soshanguve | Carter Digitals" },
  description: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS.",
  alternates: { canonical: "/website-development-soshanguve" },
  openGraph: { url: "/website-development-soshanguve", title: "Website Development Soshanguve | Carter Digitals", description: "Premium, mobile-first websites for Soshanguve businesses, built to earn trust and turn local attention into enquiries.", images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Website development for Soshanguve businesses" }] }
};

const content: LocalServiceContent = {
  slug: "website-development-soshanguve",
  eyebrow: "WEBSITE DEVELOPMENT / SOSHANGUVE, PRETORIA",
  heading: "A clearer online presence",
  emphasis: "for Soshanguve businesses.",
  intro: "Carter Digitals builds fast, custom websites for Soshanguve businesses and professionals who want their first impression to feel credible, useful and easy to act on.",
  directQuestion: "Who builds business websites in Soshanguve?",
  directAnswer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS.",
  location: "Soshanguve",
  locationType: "Place",
  service: "Website Development Soshanguve",
  startingPrice: "R4,999",
  timeline: "5–7 business days for a focused website",
  audience: "Soshanguve SMEs, professionals and local organisations",
  localContext: "For many Soshanguve businesses, a prospect arrives from a WhatsApp recommendation, social post, search result or shared link. A strong website gives that prospect a quick answer: what you do, who you help, why you are credible and how to take the next step.",
  benefits: [
    { title: "Local trust, made visible", copy: "Your services, proof, location and contact details are arranged so a new visitor can understand the business without chasing for basics." },
    { title: "Built for mobile decisions", copy: "Typography, spacing, calls, WhatsApp actions and enquiry forms are designed around the small screen where local referrals often land." },
    { title: "A foundation that can grow", copy: "Start with the pages that matter now, then add service detail, local content, booking or systems as the business earns demand." }
  ],
  included: [
    { title: "Message and page direction", copy: "We clarify the offer, customer, proof and most useful first journey before the interface is built." },
    { title: "Custom responsive build", copy: "The experience is designed around the business instead of forcing it into a recycled template or generic layout." },
    { title: "Search-ready launch", copy: "Metadata, headings, sitemap, canonical URLs, basic structured data and performance checks are prepared for release." }
  ],
  faqs: [
    { question: "How much does a website cost in Soshanguve?", answer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS." },
    { question: "Is Carter Digitals based in Soshanguve?", answer: "Yes. Carter Digitals is a founder-led studio based in Soshanguve, Pretoria, and serves clients across Tshwane, Gauteng and South Africa." },
    { question: "Will the website work well on phones?", answer: "Yes. The build is mobile-first, with responsive layouts and clear call, WhatsApp and enquiry actions for visitors using common phone screen sizes." },
    { question: "Can you help a local business show up in search?", answer: "Every build includes a technical SEO foundation with crawlable structure, metadata, headings, sitemap and canonical URLs. Ongoing local content, reviews and authority building are separate growth activities." },
    { question: "Can the project be handled remotely?", answer: "Yes. Most discovery, feedback and launch work can happen remotely, with direct communication to Kabelo and clear checkpoints throughout the project." }
  ],
  related: [
    { label: "Website development Pretoria", href: "/website-development-pretoria" },
    { label: "Website development Mabopane", href: "/website-development-mabopane" },
    { label: "About the studio", href: "/about" },
    { label: "Discuss a Soshanguve project", href: "/contact" }
  ]
};

export default function Page() { return <LocalServicePage content={content} />; }
