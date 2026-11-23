import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { catalogue } from "../../../_lib/catalogue";
import OfferExperience from "./offer-experience";

const offerSlugs = ["premium-websites", "web-applications", "business-systems", "creative-media", "ai-clone-avatar-videos"] as const;

type OfferMeta = {
  title: string;
  name: string;
  serviceType: string;
  description: string;
  audience: string;
  price?: string;
  keywords?: string[];
  dateModified?: string;
  faqs: Array<{ question: string; answer: string }>;
};

const offerMeta: Record<string, OfferMeta> = {
  "premium-websites": {
    title: "Custom Website Development Pretoria | E-commerce, Law Firm & School Websites | Carter Digitals",
    name: "Custom Website Development",
    serviceType: "Custom website design and development",
    description: "SEO-ready website development in Pretoria for e-commerce shops, law firms, schools, dentists and service businesses—built for trust and enquiries.",
    audience: "South African e-commerce businesses, professional firms, schools, healthcare practices, organisations and service businesses",
    price: catalogue[0].items[0][1].replace(/\D/g, ""),
    keywords: [
      "website development Pretoria",
      "custom website design South Africa",
      "e-commerce website development Pretoria",
      "law firm website design South Africa",
      "school website design Pretoria",
      "dental website design Pretoria",
      "SEO website development Gauteng",
    ],
    dateModified: "2026-08-31",
    faqs: [
      { question: "How is this different from a template website?", answer: "The message, page structure, visual language and conversion journey are built around your business. Your business is not squeezed into a pre-made theme, so the finished site feels recognisable and commercially purposeful." },
      { question: "Can you improve an existing website?", answer: "Yes. Strong content and useful brand equity can stay while the positioning, hierarchy, mobile experience, speed and enquiry journey are rebuilt around what the business needs now." },
      { question: "Can you build websites for e-commerce, law firms and schools?", answer: "Yes. The structure changes according to the business: e-commerce needs a clear product and buying journey, law firms need authority and matter clarity, while schools need a useful path for families, learners and admissions enquiries." },
      { question: "What do you need from us to begin?", answer: "Bring your priority services, ideal customer, available proof and the main action you want visitors to take. If that is not organised yet, the discovery process will help clarify it." },
    ],
  },
  "web-applications": {
    title: "Web Application Development Pretoria | Carter Digitals",
    name: "Web Application Development",
    serviceType: "Custom web application and portal development",
    description: "Purpose-built portals, booking journeys and digital products for Pretoria, Gauteng and South African organisations, designed around one valuable workflow and one useful release.",
    audience: "Teams with a validated workflow, recurring customer journey or operational bottleneck",
    faqs: [
      { question: "Do we need a complete specification first?", answer: "No. Discovery turns the people, recurring tasks, decisions and constraints into a focused blueprint. That prevents an untested feature list from deciding the budget." },
      { question: "Can it connect to tools we already use?", answer: "Where an existing platform provides a suitable API or integration method, connections can be planned for payments, email, documents, analytics and operational tools. Integration risk is confirmed during scoping." },
      { question: "How do you control cost and complexity?", answer: "We phase the product around one primary journey and the smallest release that creates measurable value. Later features earn their place after the core experience is validated." },
    ],
  },
  "business-systems": {
    title: "Business Systems & Dashboards Pretoria | Carter Digitals",
    name: "Business Systems and Operational Dashboards",
    serviceType: "Business dashboard, workflow and automation development",
    description: "Custom dashboards, workflows, reporting and operational systems for Pretoria and Gauteng teams that need clearer visibility, accountability and follow-through without constant chasing.",
    audience: "Growing organisations affected by manual follow-up, fragmented information or limited operational visibility",
    faqs: [
      { question: "Can this replace spreadsheets and WhatsApp updates?", answer: "Often, yes. We first understand what each tool tracks, who updates it and which decisions depend on it. The new system centralises the useful information without recreating unnecessary complexity." },
      { question: "Can different users have different access?", answer: "Yes. Staff, managers, clients and administrators can receive role-based views and permissions appropriate to their responsibilities." },
      { question: "How do we encourage the team to use it?", answer: "Adoption is designed into the workflow through familiar language, clear feedback, short task paths, controlled rollout and practical onboarding. The system must make everyday work easier." },
    ],
  },
  "creative-media": {
    title: "Logo & Brand Content Design Pretoria | Carter Digitals",
    name: "Brand Content Studio",
    serviceType: "Logo design, visual identity and campaign content",
    description: "Premium logo design, visual identity and persuasive campaign assets for Pretoria, Gauteng and South African businesses that need a consistent, recognisable brand presence.",
    audience: "New and growing businesses that need professional identity direction and coherent campaign assets",
    faqs: [
      { question: "Can we order one service without a full brand package?", answer: "Yes. Logo systems and premium campaign posters can be commissioned individually. A connected engagement is recommended when the business needs every customer-facing asset to feel recognisably related." },
      { question: "Do we receive files for print and social media?", answer: "Deliverables are organised for their intended channels, including appropriate digital, social and print-ready exports where relevant. Exact formats are confirmed in the project scope." },
      { question: "Do you also produce presenter-led videos?", answer: "Yes. AI Clone Avatar Videos have a dedicated production package: four branded videos, including script refinement, avatar production, captions and platform-ready exports." },
    ],
  },
  "ai-clone-avatar-videos": {
    title: "AI Clone Avatar Videos South Africa | Carter Digitals",
    name: "AI Clone Avatar Video Production",
    serviceType: "Consented AI avatar video production",
    description: "Four branded AI clone avatar videos in a scoped production batch. Presenter-led ads, explainers and business content produced from explicitly consented source material and ready to publish.",
    audience: "Founders, consultants, property professionals, educators and teams that need regular presenter-led video",
    faqs: [
      { question: "What is included in the four-video package?", answer: "You receive four completed branded avatar videos, one approved presenter setup, script refinement, scene design, captions, editing and platform-ready exports. The four videos are planned and produced as one focused batch." },
      { question: "What can the videos be used for?", answer: "Popular uses include social ads, service explainers, founder updates, property or product introductions, recruitment, onboarding, training and regular business announcements." },
      { question: "Do I need to record every video?", answer: "No. You provide suitable source footage and voice material for the consented avatar setup, plus approval for each script. New campaign videos can then be produced without filming every message from scratch." },
      { question: "Can you clone another person for my business?", answer: "Only with that person’s explicit permission and suitable approved source material. Carter Digitals does not produce deceptive impersonations or clone a third party without consent. You remain responsible for approving scripts and factual claims." },
    ],
  },
};

export function generateStaticParams() {
  return offerSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = offerMeta[slug];
  return meta ? {
    title: { absolute: meta.title },
    description: meta.description,
    ...(meta.keywords ? { keywords: meta.keywords } : {}),
    alternates: { canonical: `/offerings/${slug}` },
    openGraph: {
      url: `/offerings/${slug}`,
      title: meta.title,
      description: meta.description,
      images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: `${meta.title} by Carter Digitals` }],
    },
  } : {};
}

export default async function OfferingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!offerSlugs.includes(slug as (typeof offerSlugs)[number])) notFound();
  const meta = offerMeta[slug];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://carterdigitals.co.za/offerings/${slug}#service`,
        name: meta.name,
        serviceType: meta.serviceType,
        description: meta.description,
        url: `https://carterdigitals.co.za/offerings/${slug}`,
        provider: { "@id": "https://carterdigitals.co.za/#organization" },
        mainEntityOfPage: { "@id": `https://carterdigitals.co.za/offerings/${slug}#webpage` },
        audience: { "@type": "Audience", audienceType: meta.audience },
        areaServed: [
          { "@type": "City", name: "Pretoria" },
          { "@type": "AdministrativeArea", name: "Gauteng" },
          { "@type": "Country", name: "South Africa" }
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `https://carterdigitals.co.za/offerings/${slug}`,
          servicePhone: "+27724026893"
        },
        ...(meta.price ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "ZAR",
            price: meta.price,
            url: `https://carterdigitals.co.za/offerings/${slug}`,
            availability: "https://schema.org/InStock"
          }
        } : {})
      },
      {
        "@type": "WebPage",
        "@id": `https://carterdigitals.co.za/offerings/${slug}#webpage`,
        url: `https://carterdigitals.co.za/offerings/${slug}`,
        name: meta.title,
        description: meta.description,
        isPartOf: { "@id": "https://carterdigitals.co.za/#website" },
        about: { "@id": `https://carterdigitals.co.za/offerings/${slug}#service` },
        inLanguage: "en-ZA",
        dateModified: meta.dateModified ?? "2026-08-14",
        ...(meta.keywords ? { keywords: meta.keywords.join(", ") } : {})
      },
      {
        "@type": "FAQPage",
        mainEntity: meta.faqs.map((faq) => ({
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
          { "@type": "ListItem", position: 3, name: meta.name, item: `https://carterdigitals.co.za/offerings/${slug}` }
        ]
      }
    ]
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><OfferExperience slug={slug} /></>;
}
