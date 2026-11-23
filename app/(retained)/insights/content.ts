export type InsightSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  readTime: string;
  published: string;
  updated: string;
  answer: string;
  sections: InsightSection[];
  faqs: Array<{ question: string; answer: string }>;
  relatedLabel: string;
  relatedHref: string;
};

export const insights: Insight[] = [
  {
    slug: "website-cost-pretoria-2026",
    category: "PRICING + PROCUREMENT",
    title: "What should a business website cost in Pretoria in 2026?",
    dek: "A practical South African guide to website pricing, scope, hidden costs and the questions that protect your budget.",
    readTime: "8 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    answer: "Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS.",
    sections: [
      { title: "Start with the outcome, not the page count", paragraphs: ["A five-page website is not automatically more valuable than one focused page. A compact site can work hard when the offer is simple, while a professional firm with several services may need dedicated pages so each audience can find the right proof and next step.", "Before comparing quotations, define what should change after launch: stronger credibility, more qualified enquiries, clearer applications, easier bookings or less repeated explanation."] },
      { title: "Compare website and application scope", paragraphs: ["Carter Launch starts at R4,999 for up to 4 pages, Carter Business at R7,999 for up to 7, and Carter Growth at R12,500 for up to 10 pages with a CMS."], bullets: ["Custom workflow from R14,999","Application MVP from R29,999"] },
      { title: "What should be included in a professional quotation?", paragraphs: ["The quotation should make the boundaries visible. If the proposal only says “website design” and a price, the cheapest quote can become expensive once copy, forms, mobile refinement, launch setup and revisions appear as surprises."], bullets: ["Page or section scope and content responsibilities", "Custom design versus a purchased template", "Responsive behaviour and accessibility expectations", "Forms, WhatsApp, maps, analytics and integrations", "SEO foundations, metadata and indexing setup", "Revision rounds, delivery timing and payment milestones", "Hosting, maintenance and third-party recurring costs", "Handover, ownership and post-launch support"] },
      { title: "The hidden costs to ask about", paragraphs: ["Domains, hosting, paid plugins, email services, stock imagery, booking tools and payment platforms can create recurring costs. These are not automatically bad; the risk is discovering them after approval.", "Ask which costs are once-off, which repeat monthly or annually, and which services remain optional. A transparent supplier should explain this before production starts."] },
      { title: "How to compare two website proposals", paragraphs: ["Compare like with like. One proposal may include strategy, copy refinement, custom design, development, analytics and launch support while another covers only a theme installation. Both can be legitimate, but they are different products.", "The better decision is the smallest scope that can credibly achieve the business goal without forcing a rebuild immediately after launch."] },
    ],
    faqs: [
      { question: "What does Carter Launch include?", answer: "Up to four custom pages, one enquiry form and two consolidated revision rounds." },
      { question: "Should hosting be included in the website price?", answer: "It can be included or priced separately. What matters is that the hosting period, renewal cost, support level and ownership responsibilities are stated clearly before work begins." },
      { question: "Why do some South African website quotations differ so much?", answer: "They often include different levels of strategy, copy, custom design, development, integrations, SEO preparation, revisions and support. Compare the complete scope and intended result rather than the headline price alone." },
    ],
    relatedLabel: "Compare Carter website packages",
    relatedHref: "/pricing",
  },
  {
    slug: "south-african-business-website-checklist",
    category: "WEBSITE STRATEGY",
    title: "The serious South African business website checklist",
    dek: "What customers, procurement teams and search engines need to see before they trust, contact or shortlist your business.",
    readTime: "9 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    answer: "A serious South African business website should quickly explain what the company does, who it serves, where it operates and how to take the next step. It should also show real proof, work well on mobile data, use accurate business details and make calls, WhatsApp messages and enquiries easy.",
    sections: [
      { title: "The five-second credibility test", paragraphs: ["A visitor should not need to decode clever language before understanding the business. In the first screen, state the core service, intended customer, service area and the most appropriate action.", "Premium design matters because presentation influences perceived risk, but visual polish cannot replace a clear offer."] },
      { title: "Proof belongs near the promise", paragraphs: ["Customers become doubtful at predictable moments. Place the right evidence where hesitation appears instead of hiding every trust signal on an About page."], bullets: ["Real project examples or representative work clearly labelled", "Founder, team or accountable contact information", "Company registration and procurement credentials where relevant", "Service process, timelines and scope boundaries", "Testimonials only when genuine and attributable", "Physical service area and reliable contact channels"] },
      { title: "Design for South African mobile behaviour", paragraphs: ["Many visitors will arrive on a phone, through a shared link, Google result or WhatsApp referral. The mobile version is not a reduced desktop site; it is often the main sales experience.", "Keep important copy readable, control image weight, avoid interactions that require hovering, and make telephone and WhatsApp actions comfortable to tap without covering the page."] },
      { title: "Make the next action fit the decision", paragraphs: ["A law firm may need a confidential consultation route. A school may need programme and application guidance. A contractor may need a quotation form with project context. One generic “Contact us” button is rarely enough.", "The call to action should match the visitor’s confidence level: explore work, compare pricing, ask a question, call, WhatsApp or submit a project brief."] },
      { title: "Search and answer-engine foundations", paragraphs: ["A crawlable site needs accurate titles, descriptions, headings, canonical URLs, internal links, sitemap rules and useful structured data. Answer engines also benefit from direct explanations, clear entity information and consistent facts across the site.", "Technical setup creates the foundation. Sustainable visibility still depends on useful content, local relevance, reviews, trusted mentions and consistent business information beyond the website."] },
      { title: "The launch check", paragraphs: ["Before launch, test every form, phone number, WhatsApp link, route and external link. Review the site on a small phone and a wide desktop. Confirm the page title, social preview, favicon, sitemap, analytics events and privacy wording.", "A website is ready when the right customer can understand the offer, trust the business and complete the next step without assistance."] },
    ],
    faqs: [
      { question: "What information must a South African business website show?", answer: "At minimum, show an accurate business name, clear services, operating area, reliable contact information and enough proof for a visitor to assess credibility. Regulated sectors may have additional disclosure requirements." },
      { question: "Does every business need many website pages?", answer: "No. A focused business can perform well with one strategically structured page. Multiple services, locations, audiences or search topics usually benefit from dedicated pages." },
      { question: "Is WhatsApp enough instead of a contact form?", answer: "WhatsApp is useful for fast conversation, but a structured form helps capture project context and supports visitors who prefer email. Strong sites often offer both." },
    ],
    relatedLabel: "Explore premium website development",
    relatedHref: "/offerings/premium-websites",
  },
  {
    slug: "website-vs-web-app-vs-business-system",
    category: "DIGITAL PRODUCT DECISIONS",
    title: "Website, web app or business system: what do you actually need?",
    dek: "A plain-language decision guide for South African founders and teams before they spend money on the wrong build.",
    readTime: "7 min read",
    published: "2026-08-13",
    updated: "2026-08-13",
    answer: "Choose a website when people need to discover, understand and trust the business. Choose a web application when customers or staff must complete an interactive journey. Choose an internal business system when the main problem is operational visibility, coordination or repeated manual work.",
    sections: [
      { title: "Choose a website for trust and demand", paragraphs: ["A website is primarily a communication and conversion system. It explains the offer, positions the business, answers objections, presents proof and guides visitors towards an enquiry, booking, application or purchase.", "A website may contain forms, calculators or content management, but its central job is still helping an audience understand and act."] },
      { title: "Choose a web application for an interactive journey", paragraphs: ["A web application allows a user to do something meaningful: create an account, book, submit documents, track progress, manage a profile, compare information or complete a workflow.", "The cost is higher because the project involves product logic, user states, data, permissions, security, testing and ongoing operation—not only pages and content."] },
      { title: "Choose a business system for operational control", paragraphs: ["A business system is usually built for staff, managers, suppliers or clients who need a reliable shared process. It can replace fragmented spreadsheets, repeated WhatsApp updates and manual reporting with role-based workflows and one source of truth."], bullets: ["Lead and quotation tracking", "Applications and approvals", "Client documents and case status", "Inventory or field-service visibility", "Staff tasks, reporting and management dashboards"] },
      { title: "When the answer is more than one", paragraphs: ["A growing business may need a public website and a secure client portal. The website earns trust; the application completes the service journey. These can share a brand and technical foundation without being forced into one oversized first release.", "Start with the part that creates value soonest. A phased plan is usually safer than attempting the final imagined platform before the core workflow is proven."] },
      { title: "The question to answer before requesting a quote", paragraphs: ["Describe the person, the recurring task and the result. For example: “A prospective learner needs to compare programmes and submit an application” is more useful than “We need a portal.”", "A strong development partner should help turn that business statement into the smallest useful release, clear responsibilities and measurable success conditions."] },
    ],
    faqs: [
      { question: "Can a normal website include a client login?", answer: "It can, but a secure login, user data and personalised workflows move the project into web-application territory. The public website and secure product can still be delivered as one connected experience." },
      { question: "Should we replace our spreadsheets immediately?", answer: "Not always. First identify which spreadsheet supports a valuable repeated decision, who maintains it and where errors or delays occur. Replace the workflow that creates the clearest operational value first." },
      { question: "What is an MVP?", answer: "A minimum viable product is the smallest dependable release that allows real users to complete the core journey and allows the business to learn before funding more features." },
    ],
    relatedLabel: "Compare Carter capabilities",
    relatedHref: "/services",
  },
  {
    slug: "custom-website-benefits-south-africa",
    category: "WEBSITE STRATEGY",
    title: "What does a custom website actually do for a South African business?",
    dek: "A clear look at the trust, enquiries, mobile experience and search benefits of building around your business instead of a template.",
    readTime: "8 min read",
    published: "2026-09-01",
    updated: "2026-09-01",
    answer: "A custom website gives a business a clearer way to be found, understood and contacted. It can explain a specialised service, show proof, guide a mobile visitor and create a stronger foundation for SEO and AI search than a generic page that says very little.",
    sections: [
      { title: "It makes the offer easier to trust", paragraphs: ["People do not only judge whether a business looks attractive. They are trying to work out whether the business understands their problem, has done this before and will be easy to deal with.", "A custom website lets the page order answer those concerns in the right sequence: what you do, who it is for, why it matters, what proof exists and what the visitor should do next."] },
      { title: "It works while you are busy", paragraphs: ["A good website carries the first explanation when the owner is in a meeting, on a site visit or helping another customer. It can answer common questions, set expectations, collect project details and route serious enquiries to WhatsApp, email or a form."], bullets: ["Clear service and audience pathways", "Proof placed beside the promise", "Frequently asked questions that reduce repetition", "Mobile-friendly contact and WhatsApp actions", "A consistent explanation that the whole team can share"] },
      { title: "It gives search a page worth finding", paragraphs: ["Search visibility is not only about adding a keyword to a title. Google and Bing need a useful, crawlable page that clearly connects a service to a customer question and a location.", "A custom build can give each important offer the right heading structure, internal links, metadata, image alternatives, structured data and local context. That makes the site easier to understand for people and search systems alike."] },
      { title: "It becomes a business asset, not a brochure", paragraphs: ["A template can be a sensible starting point when the need is simple. The problem begins when the business has outgrown the template but keeps adding sections that do not belong together.", "A custom website gives you a deliberate structure that can expand into service pages, case studies, SEO content, applications, bookings or a secure web app when the next stage is proven."] },
    ],
    faqs: [
      { question: "Is a custom website worth it for a small business?", answer: "It can be, when the website has a specific job such as earning better enquiries, explaining a complex service or serving a local search audience. The right first release can be focused rather than oversized." },
      { question: "Does custom mean the website must be expensive?", answer: "Not necessarily. Scope matters. A focused page with a clear offer can be more useful than a large site full of generic content. Investment rises when the project needs more audiences, integrations, content depth or application logic." },
      { question: "What should a custom website include?", answer: "Start with a clear offer, audience-specific structure, proof, mobile-first layout, direct contact paths and search-ready foundations. Add advanced functionality only when it supports a real business workflow." },
    ],
    relatedLabel: "Explore custom website development",
    relatedHref: "/offerings/premium-websites",
  },
  {
    slug: "logo-design-business-pretoria",
    category: "BRAND IDENTITY",
    title: "Why a serious business needs more than a logo file",
    dek: "The practical role of a distinctive logo in recognition, credibility and consistent communication across Pretoria and South Africa.",
    readTime: "6 min read",
    published: "2026-09-01",
    updated: "2026-09-01",
    answer: "A useful logo is not just a polished image. It is a recognisable identity signal that should remain clear on a website header, WhatsApp profile, proposal, social post, uniform, signboard and small phone screen. The strongest logo direction balances distinctiveness with everyday usability.",
    sections: [
      { title: "Recognition starts before the pitch", paragraphs: ["A customer may see the name several times before they speak to you: in a search result, on a shared WhatsApp image, on a quotation or in a social feed. A considered logo helps those separate encounters feel like the same business.", "That consistency lowers mental effort. People can spend their attention on the offer instead of wondering whether they have found the right organisation."] },
      { title: "A logo needs a system around it", paragraphs: ["A logo file alone does not tell the team how to use it. Good identity direction establishes the mark, wordmark, spacing, colour behaviour, contrast and small-size rules needed for real work."], bullets: ["A recognisable mark and clear wordmark", "Light and dark background versions", "Small-size and social profile applications", "Useful export formats for web and print", "A simple direction for colour, spacing and placement"] },
      { title: "3D is a direction, not a restriction", paragraphs: ["A 3D render can give a logo presence in a hero section, launch video or presentation. It should still be supported by a clean flat version that works when the mark is reduced, printed or used in a single colour.", "The premium result is not the most complicated render. It is an identity that keeps its character in every context."] },
      { title: "Where a logo earns its keep", paragraphs: ["The real test is repetition. A strong identity makes the website, poster, proposal, social profile and customer follow-up feel connected. It turns separate pieces of communication into a recognisable signal that can compound over time."] },
    ],
    faqs: [
      { question: "Should a small business invest in 3D logo design?", answer: "3D direction can help when the business wants a premium hero visual, campaign asset or memorable launch moment. It should be delivered alongside a practical flat mark for everyday use." },
      { question: "What files should I receive with a logo?", answer: "At minimum, request web-ready and transparent files plus versions suited to light and dark backgrounds. The exact package should be agreed before work starts and should match how the business will use the identity." },
      { question: "Can a logo improve my website?", answer: "Yes, when it is used as part of a clear visual system. A consistent logo, colour direction and typography can make the website feel more credible and easier to remember, but it cannot replace a clear offer or proof." },
    ],
    relatedLabel: "Explore logo and brand content",
    relatedHref: "/offerings/creative-media",
  },
  {
    slug: "poster-design-south-africa",
    category: "CAMPAIGN VISUALS",
    title: "A business poster only works when people know what to do next",
    dek: "How to turn a promotion, school notice, event or community campaign into a visual people can understand in seconds.",
    readTime: "6 min read",
    published: "2026-09-01",
    updated: "2026-09-01",
    answer: "A persuasive poster makes the important message visible first, gives enough context to build confidence and makes the next action unmistakable. The design has to work in a fast social feed, a WhatsApp share, a printed page and the real environment where people will see it.",
    sections: [
      { title: "A poster is a decision in a rectangle", paragraphs: ["The viewer is usually not sitting down to study the design. They are walking past it, scrolling, receiving it in a group or glancing at it between tasks.", "That means the poster must answer three questions quickly: what is this, why should I care and what must I do now? Decoration comes after that job is clear."] },
      { title: "Hierarchy beats decoration", paragraphs: ["The event, offer or action should have a clear visual lead. Dates, prices, locations and contact details need enough contrast and space to remain legible on a phone—not only on the designer’s screen."], bullets: ["One dominant message", "A clear date, offer or reason to act", "Readable contact details and call to action", "Spacing that survives small screens", "Contrast that works in print and digital sharing"] },
      { title: "One idea, many touchpoints", paragraphs: ["A campaign often needs more than one size: a feed post, story frame, WhatsApp image, print poster and perhaps a banner. Building the visual direction as a system keeps the message recognisable while the layout adapts to each channel.", "That saves the campaign from becoming a collection of unrelated graphics that look like different organisations made them."] },
      { title: "Make response part of the design", paragraphs: ["If the goal is registrations, enquiries, attendance or sales, the action needs to be easy to complete. Use a short route, a clear number, a QR code when appropriate or a direct WhatsApp instruction. The poster should not make the audience do detective work."] },
    ],
    faqs: [
      { question: "What information belongs on a business poster?", answer: "Lead with the main message, then include the detail needed to decide: date, time, place, offer, eligibility, price or contact route. Remove anything that competes with the next action." },
      { question: "Should a poster be designed for social media or print?", answer: "Ideally, plan the message system for both. Social and print have different sizes and viewing distances, so the layout should be adapted rather than stretched into every format." },
      { question: "Can a premium poster still be simple?", answer: "Yes. Premium usually feels considered, legible and intentional. A clear hierarchy, strong typography, purposeful colour and a confident image can be more effective than adding more elements." },
    ],
    relatedLabel: "Explore campaign visual design",
    relatedHref: "/offerings/creative-media",
  },
  {
    slug: "internal-web-apps-business-systems",
    category: "INTERNAL WEB APPS",
    title: "When your team has outgrown spreadsheets and WhatsApp",
    dek: "The warning signs, benefits and first steps for building an internal web app or business system that people will actually use.",
    readTime: "8 min read",
    published: "2026-09-01",
    updated: "2026-09-01",
    answer: "An internal web app is worth exploring when a repeated business workflow is slowing people down, hiding important information or creating avoidable mistakes. The best first system focuses on one valuable process and gives the team a dependable way to capture, track and act on the work.",
    sections: [
      { title: "The warning signs are operational", paragraphs: ["The problem is not that a spreadsheet or WhatsApp is always wrong. The problem is when the team cannot confidently answer basic questions: what is waiting, who owns it, what changed, which version is correct and what needs attention today?", "Those gaps create follow-ups, duplicated work and decisions based on incomplete information."] },
      { title: "What an internal web app can improve", paragraphs: ["A focused system can make a process visible without forcing the organisation to buy a giant platform before it understands its own needs."], bullets: ["Lead, quotation or application tracking", "Approvals, assignments and status changes", "Client documents and case information", "Staff tasks and manager dashboards", "Inventory, field-service or delivery visibility"] },
      { title: "Start with one workflow", paragraphs: ["The safest first release follows one person through one repeated job. Map what starts the process, what information is needed, who makes decisions, what can go wrong and what a finished outcome looks like.", "That map becomes a practical MVP: small enough to launch, useful enough to learn from and structured enough to expand later."] },
      { title: "Design for the people who do the work", paragraphs: ["An internal tool does not succeed because it has more features. It succeeds when the person under pressure can understand the screen, complete the task and trust what happens next.", "Good systems use clear statuses, sensible permissions, helpful validation and a visible history of important changes. The workflow should feel easier than the workaround it replaces."] },
    ],
    faqs: [
      { question: "Is an internal web app the same as a website?", answer: "No. A website helps an audience discover, understand and trust a business. An internal web app helps people complete a workflow using data, permissions and shared states." },
      { question: "Do we need a custom system if we already use software subscriptions?", answer: "Not automatically. First identify the exact gap between the current tools and the workflow the team needs. A custom system is most useful when the process is important, repeated and poorly served by the existing setup." },
      { question: "How should we choose the first feature?", answer: "Choose the workflow that creates the clearest value when it becomes visible and dependable. Start with the core path, test it with real users and add complexity only when the evidence supports it." },
    ],
    relatedLabel: "Explore internal business systems",
    relatedHref: "/offerings/business-systems",
  },
  {
    slug: "seo-geo-google-ai-search-pretoria",
    category: "SEARCH VISIBILITY",
    title: "SEO and GEO: how Pretoria businesses get found on Google and AI search",
    dek: "An easy-to-understand guide to useful content, sitemaps, local relevance and the foundations that help search systems understand your business.",
    readTime: "8 min read",
    published: "2026-09-01",
    updated: "2026-09-01",
    answer: "SEO helps Google and Bing connect a useful page to a relevant search. GEO—Generative Engine Optimisation—helps AI search tools understand what a business does, who it serves and why it may be a credible answer. Both depend on clear information, helpful content, sound technical structure and consistent local signals.",
    sections: [
      { title: "SEO answers the question", paragraphs: ["When someone searches for website development in Pretoria, a law firm near them or a school programme, search engines are trying to match intent with a useful result.", "A strong page makes the match easier by explaining the service in plain language, using meaningful headings, covering the questions customers actually ask and giving the search engine accurate context about the business and location."] },
      { title: "GEO makes the business legible to AI", paragraphs: ["AI search tools need more than a list of keywords. They need clear facts: what the organisation does, where it operates, who it serves, what it offers and how those claims can be understood from the wider site.", "Direct answers, consistent terminology, structured data, useful pages and a clear organisation identity all make the business easier for an answer engine to interpret. There is no honest shortcut that guarantees inclusion in an AI answer."] },
      { title: "A sitemap is the map, not the destination", paragraphs: ["An XML sitemap tells crawlers which public URLs are important and available to discover. Robots rules explain what should be crawled. Neither can turn a thin or confusing page into a useful result.", "The map works best when the site has clean URLs, strong internal links, accurate canonical tags, fast pages and content that deserves to be found."] },
      { title: "What earns attention over time", paragraphs: ["Technical foundations help a site enter the conversation. Ongoing visibility is strengthened by useful local content, real reviews, trusted mentions, accurate business profiles and pages that answer a customer better than the alternatives."], bullets: ["Clear service and location pages", "Helpful answers in natural language", "Structured data and consistent business facts", "XML sitemap, robots rules and internal links", "Mobile performance and accessible page structure", "Real proof, reviews and trusted local references"] },
      { title: "A practical Pretoria search foundation", paragraphs: ["Start with the searches that matter commercially. Build a page for the service, audience or location when the topic deserves a complete answer—not merely because a keyword exists.", "For a Pretoria or Gauteng business, that means being precise about the areas served, the work delivered and the customer problem solved. Clarity helps people first; it gives search systems better material to work with second."] },
    ],
    faqs: [
      { question: "Can Carter Digitals guarantee a Google ranking?", answer: "No responsible provider can guarantee a specific position. Carter Digitals can build a clearer technical and content foundation, but rankings also depend on competition, relevance, authority, reviews and ongoing work." },
      { question: "What is the difference between SEO and GEO?", answer: "SEO helps search engines understand and match pages to searches. GEO helps generative search tools understand the business well enough to include it in a useful answer. The strongest foundation supports both." },
      { question: "Do I need a sitemap for a small website?", answer: "A small site can still benefit from a clean sitemap, especially when it has several important pages. The sitemap is only one part of search readiness; useful content, internal links and accurate technical signals matter too." },
    ],
    relatedLabel: "Explore SEO and GEO foundations",
    relatedHref: "/seo-geo-pretoria",
  },
];

export const insightSlugs = insights.map((insight) => insight.slug);

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
