import type { Metadata } from "next";
import { LocalServicePage, type LocalServiceContent } from "../../_components/local-service-page";

export const metadata: Metadata = {
  title: { absolute: "Website Development Centurion | Carter Digitals" },
  description: "Premium website development in Centurion from Carter Digitals. Custom, mobile-first websites for professional firms, property, contractors and service businesses.",
  alternates: { canonical: "/website-development-centurion" },
  openGraph: { url: "/website-development-centurion", title: "Website Development Centurion | Carter Digitals", description: "Custom websites for Centurion businesses that need a credible digital presence and more qualified enquiries.", images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Website development for Centurion businesses" }] }
};

const content: LocalServiceContent = {
  slug: "website-development-centurion",
  eyebrow: "WEBSITE DEVELOPMENT / CENTURION, GAUTENG",
  heading: "A website with the polish",
  emphasis: "your Centurion business deserves.",
  intro: "Carter Digitals designs premium, conversion-focused websites for Centurion firms that need to look established, communicate expertise and create a more confident path to enquiry.",
  directQuestion: "Who offers custom website development in Centurion?",
  directAnswer: "Carter Digitals is a Pretoria-based, founder-led studio that builds custom websites for Centurion and Gauteng businesses. We work with professional services, property teams, contractors, healthcare, education, hospitality and ambitious SMEs that need a clearer message, stronger proof and a website that supports commercial growth.",
  location: "Centurion",
  locationType: "Place",
  service: "Website Development Centurion",
  startingPrice: "R4,999",
  timeline: "5–7 business days for a focused website",
  audience: "Centurion professional firms and service businesses",
  localContext: "Centurion buyers often compare several credible-looking options before they make contact. A successful website does more than look modern: it makes expertise legible, surfaces proof, answers practical questions and gives a serious prospect a reason to start a conversation now.",
  benefits: [
    { title: "Authority without the noise", copy: "A composed visual system and precise copy help the business signal quality without relying on inflated claims or generic buzzwords." },
    { title: "Commercially useful structure", copy: "Priority services, sectors, proof and next steps are arranged around the questions a high-intent buyer is already asking." },
    { title: "Performance that protects trust", copy: "Fast-loading, responsive pages keep a premium experience intact when prospects arrive from search, email or a referral." }
  ],
  included: [
    { title: "Positioning and content architecture", copy: "We identify the offer, audience, proof and page hierarchy that deserve attention before visual production." },
    { title: "Bespoke design system", copy: "Typography, interaction, responsive layout and motion are tuned to the brand and the level of trust it needs to earn." },
    { title: "Search and measurement foundation", copy: "Metadata, structured content, sitemap, canonical URLs, analytics events and launch checks are part of the release plan." }
  ],
  faqs: [
    { question: "How much is a custom website in Centurion?", answer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS." },
    { question: "Can you redesign a professional services website?", answer: "Yes. A redesign can sharpen positioning, improve the experience on mobile, make proof easier to find, strengthen calls to action and create a more credible path from search to enquiry." },
    { question: "Do you build websites for property and construction businesses?", answer: "Yes. The studio regularly shapes service-led experiences around complex offerings, project proof, locations, qualification questions and direct contact paths." },
    { question: "Will the site be optimised for local search?", answer: "The build includes a clean local SEO foundation: relevant page structure, metadata, internal links, sitemap, canonical URLs and accurate business context. Ongoing local content, reviews and authority are separate activities." },
    { question: "How do we start?", answer: "Send the goal, current site or rough brief through the contact page. Kabelo will help clarify the right scope, first release and next step before any build begins." }
  ],
  related: [
    { label: "Website development Pretoria", href: "/website-development-pretoria" },
    { label: "Website development Pretoria East", href: "/website-development-pretoria-east" },
    { label: "Premium website capability", href: "/offerings/premium-websites" },
    { label: "Website packages and pricing", href: "/pricing" }
  ]
};

export default function Page() { return <LocalServicePage content={content} />; }
