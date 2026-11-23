import type { Metadata } from "next";
import { LocalServicePage, type LocalServiceContent } from "../../_components/local-service-page";

export const metadata: Metadata = {
  title: { absolute: "Web Application Development Pretoria | Carter Digitals" },
  description: "Carter Digitals builds bespoke web applications, client portals, dashboards and internal tools for Pretoria and Gauteng organisations.",
  alternates: { canonical: "/web-application-development-pretoria" },
  openGraph: { url: "/web-application-development-pretoria", title: "Web Application Development Pretoria | Carter Digitals", description: "Purpose-built portals, dashboards and workflow systems for Pretoria organisations.", images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Web application development for Pretoria organisations" }] }
};

const content: LocalServiceContent = {
  slug: "web-application-development-pretoria",
  eyebrow: "WEB APPLICATION DEVELOPMENT / PRETORIA",
  heading: "Web applications built around",
  emphasis: "the way your team works.",
  intro: "Replace scattered spreadsheets, repeated WhatsApp follow-ups and generic software workarounds with a secure portal, dashboard or workflow system designed for the actual process.",
  directQuestion: "What web applications does Carter Digitals build in Pretoria?",
  directAnswer: "Carter Digitals designs and develops bespoke web applications for Pretoria and Gauteng organisations, including client portals, application and admissions journeys, booking systems, internal dashboards, quotation tools, workflow trackers and reporting platforms. Each project begins with workflow and user discovery, then moves through prototype, secure development, testing and controlled launch.",
  location: "Pretoria",
  service: "Web Application Development Pretoria",
  startingPrice: "Scoped per MVP",
  timeline: "Usually 4–12+ weeks, depending on scope",
  audience: "Teams outgrowing spreadsheets and generic tools",
  localContext: "Growing Gauteng organisations often reach a point where information is split across spreadsheets, email, WhatsApp and staff memory. A focused web application can create one dependable place to complete work, see progress and manage access.",
  benefits: [
    { title: "One operational view", copy: "Bring users, statuses, records and the next important actions into a clear dashboard instead of disconnected updates." },
    { title: "Less repetitive administration", copy: "Forms, approvals, reminders, assignments and reporting can follow defined rules while keeping people in control." },
    { title: "Software that fits", copy: "The interface and data model follow your real users and workflow rather than forcing the business into a generic product." }
  ],
  included: [
    { title: "Product and workflow discovery", copy: "Users, roles, decisions, bottlenecks and the smallest valuable release are mapped before development." },
    { title: "Prototype and secure build", copy: "Critical journeys are validated, then implemented with appropriate authentication, permissions, validation and data handling." },
    { title: "Deployment and ownership", copy: "Testing, production deployment, analytics, documentation and a practical iteration path are included in the release plan." }
  ],
  faqs: [
    { question: "What is the difference between a website and a web application?", answer: "A website mainly communicates information and generates enquiries. A web application lets users complete ongoing tasks such as applying, booking, uploading documents, managing records, approving work or viewing dashboards. Some projects combine both." },
    { question: "How much does a custom web application cost?", answer: "Web application pricing depends on users, roles, workflows, data, integrations and security requirements. Carter Digitals scopes an MVP around the smallest release that creates real value, then provides a defined proposal rather than an unreliable generic price." },
    { question: "Can you replace our spreadsheets with an internal system?", answer: "Often, yes. The first step is mapping what the spreadsheets track, who updates them, what decisions depend on them and where errors or repeated follow-up occur. That determines whether a dashboard, workflow tool or fuller operational system is appropriate." },
    { question: "Do users get different access levels?", answer: "Where required, applications can use role-based access so administrators, staff, clients or partners only see and perform actions appropriate to them." },
    { question: "Can the application grow after launch?", answer: "Yes. Carter Digitals plans the first release around a clear MVP and an extensible foundation, then prioritises later features using real operational feedback." }
  ],
  related: [
    { label: "Internal business systems", href: "/offerings/business-systems" },
    { label: "Bespoke web applications", href: "/offerings/web-applications" },
    { label: "Website development Pretoria", href: "/website-development-pretoria" },
    { label: "Discuss a system", href: "/contact" }
  ]
};

export default function Page() { return <LocalServicePage content={content} />; }
