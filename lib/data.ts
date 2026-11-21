export const company = {
  name: "Carter Digitals (Pty) Ltd",
  founder: "Kabelo Kadiaka",
  registration: "2025/907839/07",
  location: "Soshanguve, Pretoria, Gauteng, South Africa",
  url: "https://carterdigitals.co.za",
  phone: "072 402 6893",
  call: "tel:+27724026893",
  email: "kabelokadiaka4@gmail.com",
  whatsapp: "https://wa.me/27724026893",
  credentials: ["B-BBEE Level 1 EME", "135% procurement recognition", "100% Black-owned and youth-owned", "CSD registered", "POPIA-aware delivery"],
};

export type Package = {
  name: string; price: string; scope: string; timing: string; features: readonly string[]; recommended?: boolean;
};

export const packages = {
  websites: [
    { name: "Carter Launch", price: "R4,999", scope: "Up to 4 custom pages", timing: "5–7 business days", features: ["One enquiry form with up to 6 fields", "Refinement of supplied copy and basic SEO", "2 revision rounds and 14-day defect-fix period"] },
    { name: "Carter Business", price: "R7,999", scope: "Up to 7 custom pages", timing: "7–10 business days", recommended: true, features: ["Copywriting for up to 7 pages and up to 30 supplied gallery images", "Up to 2 forms with up to 10 fields each", "GA4, Search Console and basic enquiry and WhatsApp tracking where supported", "2 revision rounds and 14-day defect-fix period"] },
    { name: "Carter Growth", price: "R12,500", scope: "Up to 10 custom pages with CMS", timing: "10–14 business days", features: ["Up to 3 CMS content types and 20 supplied entries", "One signature interaction and up to 2 standard forms", "Event tracking for key actions where supported", "3 revision rounds, 30-day defect-fix period and 60-minute CMS training"] },
  ],
  stores: [
    { name: "Carter Shop Start", price: "R18,999", scope: "Up to 25 supplied products", timing: "10–15 business days", features: ["Up to 5 product categories and one standard payment gateway", "Up to 3 basic delivery rules, guest checkout and basic inventory", "2 revision rounds and up to 60 minutes of training"] },
    { name: "Carter Shop Professional", price: "R29,999", scope: "Up to 100 products and 250 variant records", timing: "15–20 business days", recommended: true, features: ["Up to 10 categories and 4 shipping zones or rate groups", "One supported courier integration or agreed manual shipping rules", "One abandoned-cart email, GA4 and Search Console subject to access", "2 revision rounds and up to 90 minutes of training"] },
    { name: "Carter Commerce Growth", price: "R49,999", scope: "Up to 250 products and 500 variant records", timing: "20–30 business days", features: ["Advanced filters and navigation where supported", "Up to 2 abandoned-cart recovery emails", "Optimisation for up to 30 priority product pages", "3 revision rounds and up to 2 hours of training"] },
  ],
  apps: [
    { name: "Carter Workflow", price: "R14,999", scope: "One workflow and up to 5 screens", timing: "Approximately 2–3 weeks", features: ["Job or task tracking", "Structured records", "A focused internal process"] },
    { name: "Carter MVP", price: "R29,999", scope: "Up to 12 screens and 3 roles", timing: "Approximately 3–5 weeks", features: ["First release of a customer or member portal", "Scoped booking or request management", "Agreed user roles and core workflows"] },
    { name: "Carter Business App", price: "R59,999", scope: "Approximately 20 screens and up to 5 roles", timing: "Approximately 6–9 weeks", recommended: true, features: ["Multi-module operations", "Record and file management", "Reporting and staged deployment"] },
    { name: "Carter Advanced Platform", price: "R119,999+", scope: "Custom platform scoped through discovery", timing: "Approximately 10–16+ weeks", features: ["Advanced permissions", "Multiple workflows", "Scoped data and integrations"] },
    { name: "Carter SaaS & Marketplace", price: "R199,999+", scope: "Multi-tenant software product or marketplace", timing: "Agreed during technical discovery", features: ["Tenant and platform architecture", "Agreed account and permissions model", "Milestone-based delivery"] },
  ],
} satisfies Record<string, readonly Package[]>;

export type Family = keyof typeof packages;
export const families = [
  { id: "websites", title: "Websites", copy: "Make it easy to understand your expertise and get in touch." },
  { id: "stores", title: "Online stores", copy: "Help customers discover, order and pay for your products." },
  { id: "apps", title: "Web applications", copy: "Give customers and staff a clear way to get work done." },
] as const;

export const priceNote = "Suggested starting prices in ZAR. Final scope, VAT treatment and third-party costs are confirmed in the written quotation.";
export const paymentTerms = "A 50% deposit starts the project. The remaining 50% is due before production launch and final handover. Delivery targets begin once the deposit, content, access and approvals are in place.";
export const standardWebsite = ["Custom design and responsive testing", "One standard .co.za domain and agreed standard hosting for the first 12 months", "SSL/HTTPS where supported", "WhatsApp, phone and email links", "Defined revisions, delivery and defect-fix period"];
export const care = [
  ["Carter Care", "R399", "Hosting management, checks and up to 30 minutes of minor content changes"],
  ["Carter Care Plus", "R799", "Up to 90 minutes of minor changes, priority support and a basic monthly review"],
  ["Carter Store Care", "R999", "Platform checks, checkout health review and up to 30 minutes of minor updates"],
  ["Carter Commerce Care", "R1,999", "Up to 90 minutes of updates and a monthly store-health summary"],
] as const;

export const addOns: Record<Family, readonly (readonly [string, string])[]> = {
  websites: [["Extra page","R750"],["Campaign landing page","R1,500"],["Copywriting per page","R450"],["Google Business Profile","R750–R1,500"],["Booking integration","R1,500–R3,500"],["CMS upgrade","R2,500–R4,500"],["3D logo","R1,500–R3,500"],["Brand starter kit","R2,500–R5,000"]],
  stores: [["Product copywriting per product","R150"],["Extra standard payment gateway","R1,500"],["Additional courier integration","R1,500"],["Email automation","R2,500"],["Inventory or accounting integration","R5,000"]],
  apps: [["Payment gateway","R5,500"],["WhatsApp integration","R3,500"],["Booking","R6,500"],["AI feature","R9,500"],["Additional module","R8,500"],["Advanced reporting","R3,500"],["API integration","R5,000"],["Data migration","R2,500"]],
};

export const gaps = [
  ["Trust gap", "A dated site can make a capable business look smaller.", "Show your expertise, credentials and relevant work clearly."],
  ["Lead gap", "Interested visitors leave when the next step takes too much effort.", "Add a clear service path and direct WhatsApp or enquiry options."],
  ["Visibility gap", "Buyers have trouble finding the services you offer.", "Build search-ready service pages with local context."],
  ["Brand gap", "Inconsistent assets weaken the impression you make.", "Align your website and sales materials around one identity."],
] as const;
export const industries = [
  ["Legal & professional","Practice-area structure, founder positioning and clear consultation routes.","/sectors/law-firms"],
  ["Education & training","Programme pages, admissions, fees and WhatsApp enrolment.","/sectors/schools"],
  ["Health, medical & dental","Patient-friendly services, location visibility and appointment requests.","/sectors/dental-practices"],
  ["Construction & property","Project galleries, capability statements and quote flows.","/sectors/construction"],
  ["SMEs & local services","A clear offer, visible proof and simple ways to call or message.","/websites"],
  ["Government-aligned & civic","Accessible information, citizen journeys and practical governance controls.","/apps"],
] as const;
export const proof = [
  { name: "Manala & Co Incorporated", sector: "Legal", summary: "Website modernisation and conversion for static hosting. Deployment to the client’s cPanel environment with a protected legacy backup." },
  { name: "I.M Attorneys Inc", sector: "Legal", summary: "Practice-area pages, a founder narrative, enquiry and WhatsApp pathways, and refined motion and typography." },
  { name: "Lesia’s Educational Services", sector: "Education", summary: "A clearer enrolment journey, programme architecture and search-ready pages." },
];
export const phases = ["Discovery & alignment","Architecture & prototype","Design & development","QA & readiness","Launch & handover"];
export const stack = ["Next.js","React","TypeScript","Python","FastAPI","Node.js","PostgreSQL","Firestore","BigQuery","Google Cloud","Vercel","Cloud Run","Sanity"];
export const faqs = [
  ["How much does a website cost?", `Carter Launch starts at ${packages.websites[0].price}, Carter Business at ${packages.websites[1].price} and Carter Growth at ${packages.websites[2].price}. The written quote confirms the price for your scope.`],
  ["How long does a website take?", `The website targets are ${packages.websites.map(item => `${item.name}: ${item.timing}`).join(", ")}. Targets begin once the deposit, content, access and approvals are in place.`],
  ["Who owns the website and domain?", "Ownership, account access, code and content handover, and licences are documented in the written agreement. Domains and third-party accounts should be in the client’s name where possible."],
  ["What does hosting cover?", "Website packages include one standard .co.za domain and agreed standard hosting for the first 12 months. Resources, storage, traffic, backups and support are confirmed in the quote or care agreement."],
  ["When do I pay?", paymentTerms],
  ["How do you use AI?", "We use AI on code and synthetic data only during development. Real client and citizen records stay out of AI development tools. Human judgement governs design, security and final delivery."],
] as const;

export function quoteLink(packageName: string) {
  return `${company.whatsapp}?text=${encodeURIComponent(`Hi Kabelo, I’d like a quote for ${packageName}.`)}`;
}
