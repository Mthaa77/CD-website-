"use client";
import { catalogue } from "../../../_lib/catalogue";
import { enquiryHref } from "../../../_lib/enquiry-context";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Captions,
  Check,
  Code2,
  Globe2,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Timer,
  UserCheck,
  Video,
  Workflow,
} from "lucide-react";
import { CarterBubbleMenu } from "../../../bubble-menu";
import { creativeMediaItems } from "../../../_components/creative-media-items";
import MorphSlider from "@/components/MorphSlider/MorphSlider";
import "./website-types.css";

type Offer = {
  index: string;
  label: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  promise: string;
  fit: string;
  investment: string;
  investmentNote: string;
  timeline: string;
  primaryCta: string;
  outcomes: { signal: string; title: string; copy: string; result: string }[];
  deliverables: { title: string; copy: string }[];
  phases: { title: string; copy: string }[];
  questions: { question: string; answer: string }[];
  priorities: string[];
  websiteTypes?: WebsiteType[];
};

type WebsiteType = {
  number: string;
  label: string;
  eyebrow: string;
  title: string;
  copy: string;
  bestFor: string;
  coreRoute: string;
};

const offers: Record<string, Offer> = {
  "premium-websites": {
    index: "01",
    label: "Premium websites",
    eyebrow: "POSITIONING · PERSUASION · PERFORMANCE",
    title: "Make the right customer trust you",
    accent: "before the first call.",
    intro: "Your next customer is already comparing businesses. We turn your expertise into a clear, custom website that feels established, answers the real questions and makes choosing you feel easy.",
    promise: "A premium digital presence that makes your value clear, your business credible and your next enquiry easier to earn.",
    fit: "South African service businesses, institutions and ambitious launches where perception directly affects the opportunity.",
    investment: `From ${catalogue[0].items[0][1]}`,
    investmentNote: "Clear scope · once-off project",
    timeline: "Launch package target: 5–7 business days",
    primaryCta: "Build my website",
    outcomes: [
      { signal: "POSITION", title: "Be understood in seconds.", copy: "We clarify who the site is for, what they need to believe and why your business is the stronger choice.", result: "Visitors compare your value—not only your price." },
      { signal: "PERSUADE", title: "Earn confidence as they scroll.", copy: "Clear copy, deliberate proof and premium design answer the questions behind every serious enquiry.", result: "The right visitor keeps moving instead of opening the next tab." },
      { signal: "PERFORM", title: "Give interest a destination.", copy: "Fast mobile engineering and focused WhatsApp, call or enquiry paths make action feel natural.", result: "More of the attention you earn can become a real conversation." },
    ],
    deliverables: [
      { title: "Commercial direction", copy: "Audience, offer, objections and the clearest reason to choose you." },
      { title: "Persuasive copy", copy: "A page narrative written to remove doubt and guide decisions." },
      { title: "Custom design", copy: "An original responsive interface—never a recycled template." },
      { title: "Production build", copy: "Fast, accessible and mobile-first engineering." },
      { title: "Conversion paths", copy: "WhatsApp, call and enquiry routes placed with intent." },
      { title: "Launch foundation", copy: "Technical SEO, analytics and a confident handover." },
    ],
    phases: [
      { title: "Clarify the opportunity", copy: "We align the audience, message, proof and action the website must drive." },
      { title: "Shape the experience", copy: "Copy, structure and visual direction become one persuasive system." },
      { title: "Build and refine", copy: "The responsive experience is engineered, tested and refined around real screens." },
      { title: "Launch with confidence", copy: "Final checks, analytics and search foundations are put in place before handover." },
    ],
    questions: [
      { question: "How is this different from a template website?", answer: "The message, page structure, visual language and conversion journey are built around your business. Your business is not squeezed into a pre-made theme, so the finished site feels recognisable and commercially purposeful." },
      { question: "Can you improve an existing website?", answer: "Yes. Strong content and useful brand equity can stay while the positioning, hierarchy, mobile experience, speed and enquiry journey are rebuilt around what the business needs now." },
      { question: "What do you need from us to begin?", answer: "Bring your priority services, ideal customer, available proof and the main action you want visitors to take. If that is not organised yet, the discovery process will help clarify it." },
    ],
    priorities: ["Look more established", "Win more qualified enquiries", "Launch a stronger brand"],
    websiteTypes: [
      {
        number: "01",
        label: "E-commerce websites",
        eyebrow: "PRODUCTS / TRUST / CHECKOUT",
        title: "Make buying feel clear, secure and worth completing.",
        copy: "We shape the route from product discovery to purchase around your range, your customer and the way you fulfil orders. Product hierarchy, trust signals, delivery information and a focused checkout experience should remove doubt before the sale is lost.",
        bestFor: "Retailers, makers and growing product brands",
        coreRoute: "Browse → compare → buy",
      },
      {
        number: "02",
        label: "Law firm websites",
        eyebrow: "AUTHORITY / CLARITY / CONSULTATION",
        title: "Look authoritative without making help feel distant.",
        copy: "A legal website must help people recognise their matter, understand your areas of practice and contact the right team with confidence. We balance professional authority with plain-language guidance, privacy awareness and a clear consultation route.",
        bestFor: "Attorneys, advocates and specialist legal practices",
        coreRoute: "Recognise matter → understand route → enquire",
      },
      {
        number: "03",
        label: "School websites",
        eyebrow: "FAMILIES / INFORMATION / ADMISSIONS",
        title: "Give families a clearer reason to choose the school.",
        copy: "Parents and guardians should find the information they need without digging through dated pages. We organise the school story, subjects, leadership, admissions details, notices and contact paths into a calmer digital experience for families and the wider school community.",
        bestFor: "Independent, public and specialist schools",
        coreRoute: "Discover → understand → ask or apply",
      },
      {
        number: "04",
        label: "Dental & healthcare websites",
        eyebrow: "CARE / REASSURANCE / BOOKINGS",
        title: "Turn uncertainty into a confident first appointment.",
        copy: "Patients want to know what you offer, who will care for them, what the experience feels like and how to make contact. We make treatments, trust cues, location details and booking or WhatsApp routes easy to find on mobile.",
        bestFor: "Dental practices, therapists and healthcare teams",
        coreRoute: "Understand care → feel reassured → book",
      },
      {
        number: "05",
        label: "Professional service websites",
        eyebrow: "EXPERTISE / PROOF / ENQUIRIES",
        title: "Explain the expertise behind the price.",
        copy: "For consultants, contractors, property teams and local service businesses, the website must quickly answer three questions: what do you do, can I trust you and what should I do next? We turn the offer into a focused journey that makes serious enquiries easier to start.",
        bestFor: "Pretoria and Gauteng service businesses",
        coreRoute: "Problem → capability → conversation",
      },
      {
        number: "06",
        label: "Organisation & NGO websites",
        eyebrow: "PURPOSE / PROGRAMMES / PARTICIPATION",
        title: "Make the mission easier to understand and support.",
        copy: "Organisations need more than a statement of purpose. We structure programmes, impact, people, updates, ways to participate and contact information so communities, funders and partners can understand where they fit.",
        bestFor: "Nonprofits, community organisations and institutions",
        coreRoute: "Understand purpose → see the work → participate",
      },
    ],
  },
  "web-applications": {
    index: "02",
    label: "Web applications",
    eyebrow: "PRODUCT THINKING · INTERFACE · ENGINEERING",
    title: "Turn a frustrating process into",
    accent: "a product people enjoy using.",
    intro: "When generic software creates more work than it removes, we build a focused portal, booking journey or digital product around the people, logic and outcome that actually matter.",
    promise: "A made-for-purpose product that turns a valuable customer or staff journey into one clear, dependable experience people can actually use.",
    fit: "Teams with a validated workflow, recurring customer journey or operational bottleneck worth turning into a proper product.",
    investment: "Scoped to fit",
    investmentNote: "Phased around the smallest valuable release",
    timeline: "Roadmap confirmed after discovery",
    primaryCta: "Scope my application",
    outcomes: [
      { signal: "CLARIFY", title: "Find the essential job.", copy: "We map the users, decisions, data and constraints before choosing the interface or technology.", result: "Scope follows real value instead of a long feature wish-list." },
      { signal: "SIMPLIFY", title: "Make complexity feel calm.", copy: "Information, controls and feedback are organised around what each person is trying to complete.", result: "People move with less explanation, friction and uncertainty." },
      { signal: "ENGINEER", title: "Build for ownership.", copy: "Security, integrations, operational visibility and future change are considered from the first release.", result: "The product stays useful after launch—not only impressive in a demo." },
    ],
    deliverables: [
      { title: "Product discovery", copy: "Users, jobs, constraints and the smallest release worth building." },
      { title: "Journey architecture", copy: "The shortest useful route through every critical task." },
      { title: "Interface system", copy: "Clear states, controls and feedback designed for adoption." },
      { title: "Application build", copy: "Modern front-end, logic, data and secure access." },
      { title: "Integration plan", copy: "Practical connections to payments, email or existing tools." },
      { title: "Release handover", copy: "Testing, deployment, documentation and a sensible next phase." },
    ],
    phases: [
      { title: "Discover", copy: "Understand the users, process, risk and one outcome that matters most." },
      { title: "Prototype", copy: "Make the critical journey tangible before deeper engineering begins." },
      { title: "Build", copy: "Develop the focused release with visible progress and controlled decisions." },
      { title: "Release", copy: "Test with real scenarios, deploy and prioritise what comes next." },
    ],
    questions: [
      { question: "Do we need a complete specification first?", answer: "No. Discovery turns the people, recurring tasks, decisions and constraints into a focused blueprint. That prevents an untested feature list from deciding the budget." },
      { question: "Can it connect to tools we already use?", answer: "Where an existing platform provides a suitable API or integration method, connections can be planned for payments, email, documents, analytics and operational tools. Integration risk is confirmed during scoping." },
      { question: "How do you control cost and complexity?", answer: "We phase the product around one primary journey and the smallest release that creates measurable value. Later features earn their place after the core experience is validated." },
    ],
    priorities: ["Launch a digital product", "Replace a manual workflow", "Improve a client portal"],
  },
  "business-systems": {
    index: "03",
    label: "Business systems",
    eyebrow: "VISIBILITY · AUTOMATION · CONTROL",
    title: "Run the business from one clear view—",
    accent: "not scattered updates.",
    intro: "When work lives in spreadsheets, WhatsApp threads and people’s memory, progress becomes hard to see and easy to lose. We bring the information, responsibility and next action into one dependable system.",
    promise: "A practical operational system that makes the work visible, surfaces what needs attention and helps the team follow through without constant chasing.",
    fit: "Growing organisations where manual follow-up, fragmented information or limited visibility is slowing decisions and service delivery.",
    investment: "Scoped to fit",
    investmentNote: "Based on workflow, roles and integrations",
    timeline: "Blueprint confirmed after a fit session",
    primaryCta: "Map my system",
    outcomes: [
      { signal: "SEE", title: "Create one source of truth.", copy: "We identify the statuses, measures and exceptions that actually change a decision.", result: "Leaders see what needs attention before it becomes expensive." },
      { signal: "MOVE", title: "Let routine work flow.", copy: "Assignments, approvals, reminders and records move through designed rules instead of memory.", result: "The team spends less energy chasing the process." },
      { signal: "IMPROVE", title: "Turn activity into insight.", copy: "Clean operational history reveals where time, opportunity and accountability are being lost.", result: "Improvement becomes specific, visible and measurable." },
    ],
    deliverables: [
      { title: "Workflow map", copy: "People, responsibilities, data and the friction between them." },
      { title: "Role-based journeys", copy: "The right information and actions for each user." },
      { title: "Operational dashboard", copy: "A live view of progress, exceptions and next actions." },
      { title: "Automation rules", copy: "Reminders, assignments and hand-offs that move consistently." },
      { title: "Reporting signals", copy: "Useful measures designed around decisions—not dashboard theatre." },
      { title: "Team onboarding", copy: "Practical rollout and guidance designed to support adoption." },
    ],
    phases: [
      { title: "Map the operation", copy: "Trace the real work, ownership, data and repeated friction." },
      { title: "Design the control layer", copy: "Define roles, statuses, rules, reporting and the critical views." },
      { title: "Build and migrate", copy: "Create the system and bring across the information that matters." },
      { title: "Adopt and improve", copy: "Roll out with the team, measure usage and refine the workflow." },
    ],
    questions: [
      { question: "Can this replace spreadsheets and WhatsApp updates?", answer: "Often, yes. We first understand what each tool tracks, who updates it and which decisions depend on it. The new system centralises the useful information without recreating unnecessary complexity." },
      { question: "Can different users have different access?", answer: "Yes. Staff, managers, clients and administrators can receive role-based views and permissions appropriate to their responsibilities." },
      { question: "How do we encourage the team to use it?", answer: "Adoption is designed into the workflow through familiar language, clear feedback, short task paths, controlled rollout and practical onboarding. The system must make everyday work easier." },
    ],
    priorities: ["See operations clearly", "Replace scattered spreadsheets", "Automate repeated admin"],
  },
  "creative-media": {
    index: "04",
    label: "Brand content studio",
    eyebrow: "IDENTITY · CAMPAIGNS · CONTENT",
    title: "Look like one serious business",
    accent: "everywhere customers meet you.",
    intro: "Random logo treatments, posters and social content make a capable business feel improvised. We create a recognisable visual direction and the campaign assets needed to show up with confidence.",
    promise: "A consistent brand presence that makes every important customer touchpoint feel intentional, recognisable and ready to publish.",
    fit: "New and growing businesses that need a professional identity, stronger promotional material or a coherent content system.",
    investment: "Custom scope",
    investmentNote: "Choose identity, campaign assets or a connected system",
    timeline: "Focused production plan after briefing",
    primaryCta: "Shape my brand",
    outcomes: [
      { signal: "RECOGNISE", title: "Build a visual signature.", copy: "We translate the character, audience and ambition of the business into an original logo and useful identity direction.", result: "The business becomes easier to recognise and remember." },
      { signal: "CAMPAIGN", title: "Turn the offer into attention.", copy: "Persuasive hierarchy and premium art direction make services, launches and promotions easier to notice and understand.", result: "Every campaign communicates with more confidence." },
      { signal: "PUBLISH", title: "Show up as one brand.", copy: "Channel-ready assets are designed to feel related across print, web and social touchpoints.", result: "Consistency stops depending on who made the last post." },
    ],
    deliverables: [
      { title: "Creative direction", copy: "Audience, brand character, message and visual territory." },
      { title: "Logo system", copy: "Primary and supporting marks with a clear reason to exist." },
      { title: "Colour and type", copy: "A practical visual language that stays recognisable." },
      { title: "Campaign posters", copy: "Persuasive layouts for offers, launches and announcements." },
      { title: "Social adaptations", copy: "Useful sizes and compositions for chosen channels." },
      { title: "Organised exports", copy: "Production-ready assets labelled for practical use." },
    ],
    phases: [
      { title: "Find the visual idea", copy: "Align audience, personality, references and the message the brand must carry." },
      { title: "Create the system", copy: "Develop the identity or campaign direction as a connected visual language." },
      { title: "Apply it with purpose", copy: "Turn the system into the priority assets customers will actually see." },
      { title: "Refine and deliver", copy: "Complete focused revisions and organise every approved export." },
    ],
    questions: [
      { question: "Can we order one service without a full brand package?", answer: "Yes. Logo systems and premium campaign posters can be commissioned individually. A connected engagement is recommended when the business needs every customer-facing asset to feel recognisably related." },
      { question: "Do we receive files for print and social media?", answer: "Deliverables are organised for their intended channels, including appropriate digital, social and print-ready exports where relevant. Exact formats are confirmed in the project scope." },
      { question: "Do you also produce presenter-led videos?", answer: "Yes. AI Clone Avatar Videos now have a dedicated production package: four branded videos, including script refinement, avatar production, captions and platform-ready exports." },
    ],
    priorities: ["Create a professional identity", "Promote an important offer", "Make the brand consistent"],
  },
  "ai-clone-avatar-videos": {
    index: "05",
    label: "AI clone avatar videos",
    eyebrow: "YOUR FACE · YOUR MESSAGE · READY TO PUBLISH",
    title: "Show up on video consistently—",
    accent: "without recording every campaign.",
    intro: "Turn approved footage of you into a professional digital presenter for ads, explainers, announcements and business content. You approve the message; we shape the script, scenes, brand graphics and final edit.",
    promise: "Four polished, branded presenter videos that help your business stay visible, explain offers clearly and publish with confidence.",
    fit: "Founders, consultants, property professionals, educators and growing teams who need regular presenter-led content without a new shoot every time.",
    investment: "Scoped quote",
    investmentNote: "4 completed videos · once-off package",
    timeline: "Produced as one focused content batch",
    primaryCta: "Discuss a 4-video batch",
    outcomes: [
      { signal: "CLONE", title: "Create your approved presenter.", copy: "We work from consented source footage and voice material to create a consistent digital version of you.", result: "Your business gains a presenter that is ready when the next message is." },
      { signal: "CAMPAIGN", title: "Turn ideas into scripts people follow.", copy: "Four messages are tightened around the hook, value and next action instead of generic talking points.", result: "Each video has one clear job and one clear call to action." },
      { signal: "PUBLISH", title: "Receive content ready for the channel.", copy: "Brand graphics, captions, scenes and final edits make the batch feel polished and recognisably yours.", result: "You can publish a month of purposeful video without four separate shoots." },
    ],
    deliverables: [
      { title: "4 finished videos", copy: "Four presenter-led videos, each focused on one business message." },
      { title: "Avatar setup", copy: "One consented digital presenter created from approved source material." },
      { title: "Script refinement", copy: "Hooks, structure and calls to action shaped for clarity." },
      { title: "Brand treatment", copy: "Logo, colours, titles and scene styling carried across the batch." },
      { title: "Captions + edit", copy: "Readable captions, pacing and platform-conscious final polish." },
      { title: "Platform-ready exports", copy: "Vertical or landscape format agreed for the campaign." },
    ],
    phases: [
      { title: "Approve the presenter", copy: "Confirm consent and supply suitable face and voice source material." },
      { title: "Plan the four messages", copy: "Choose ads, explainers, announcements or business topics for the batch." },
      { title: "Produce the campaign", copy: "Build the avatar scenes, voice, graphics, captions and edits." },
      { title: "Approve and publish", copy: "Review the completed batch, apply the included focused revision and export." },
    ],
    questions: [
      { question: "What is included in the four-video package?", answer: "You receive four completed branded avatar videos, one approved presenter setup, script refinement, scene design, captions, editing and platform-ready exports. The four videos are planned and produced as one focused batch." },
      { question: "What can the videos be used for?", answer: "Popular uses include social ads, service explainers, founder updates, property or product introductions, recruitment, onboarding, training and regular business announcements." },
      { question: "Do I need to record every video?", answer: "No. You provide suitable source footage and voice material for the consented avatar setup, plus approval for each script. New campaign videos can then be produced without filming every message from scratch." },
      { question: "Can you clone another person for my business?", answer: "Only with that person’s explicit permission and suitable approved source material. Carter Digitals does not produce deceptive impersonations or clone a third party without consent. You remain responsible for approving scripts and factual claims." },
    ],
    priorities: ["Create social ads", "Explain my services", "Publish founder content"],
  },
};

const relatedOffers = [
  { slug: "premium-websites", label: "Premium websites", code: "01" },
  { slug: "web-applications", label: "Web applications", code: "02" },
  { slug: "business-systems", label: "Business systems", code: "03" },
  { slug: "creative-media", label: "Brand content", code: "04" },
  { slug: "ai-clone-avatar-videos", label: "AI avatar videos", code: "05" },
];

export default function OfferExperience({ slug }: { slug: string }) {
  const offer = offers[slug];
  const [activeOutcome, setActiveOutcome] = useState(0);
  const [priority, setPriority] = useState(offer.priorities[0]);
  const active = offer.outcomes[activeOutcome];
  const whatsapp = `https://wa.me/27724026893?text=${encodeURIComponent(`Hi Kabelo, I am interested in ${offer.label}. My priority is: ${priority}.`)}`;

  return (
    <main className={`service-v2 service-v2--${slug}`}>
      <CarterBubbleMenu />

      <section className="service-v2-hero" id="service-main" tabIndex={-1}>
        <div className="service-v2-hero__copy">
          <div className="service-v2-breadcrumb"><Link href="/">Carter Digitals</Link><span>/</span><b>{offer.label}</b></div>
          <span className="service-v2-kicker"><i /> CAPABILITY {offer.index} · {offer.eyebrow}</span>
          <h1>{offer.title}<br /><em>{offer.accent}</em></h1>
          <p>{offer.intro}</p>
          <div className="service-v2-actions">
            <a href="#service-blueprint">See what is included <ArrowRight size={17} /></a>
            <a href={whatsapp} target="_blank" rel="noreferrer">{offer.primaryCta} <MessageCircle size={17} /></a>
          </div>
          <div className="service-v2-assurance">
            <span><ShieldCheck /> Founder-led in Pretoria</span>
            <span><Timer /> {offer.timeline}</span>
          </div>
        </div>

        <aside className="service-v2-hero__visual" aria-label={`${offer.label} overview`}>
          <div className="service-v2-visual__chrome"><span><i /> CARTER / LIVE SCOPE</span><small>{offer.index}—05</small></div>
          <ServiceVisual slug={slug} />
          <div className="service-v2-promise"><small>THE BUSINESS RESULT</small><strong>{offer.promise}</strong></div>
          <div className="service-v2-investment"><span><small>INVESTMENT</small><strong>{offer.investment}</strong><em>{offer.investmentNote}</em></span><ArrowUpRight /></div>
        </aside>
      </section>

      {offer.websiteTypes ? <WebsiteTypeNavigator types={offer.websiteTypes} /> : null}

      <section className="service-v2-shift" id="service-blueprint" aria-labelledby="service-shift-title">
        <div className="service-v2-heading"><span>WHAT CHANGES</span><h2 id="service-shift-title">Not another deliverable.<br /><em>A clearer way forward.</em></h2><p>Tap each stage to see how this engagement moves the business from friction to a useful result.</p></div>
        <div className="service-v2-outcome-tabs" role="tablist" aria-label={`${offer.label} outcomes`}>
          {offer.outcomes.map((item, index) => <button key={item.signal} type="button" role="tab" aria-selected={activeOutcome === index} className={activeOutcome === index ? "active" : ""} onClick={() => setActiveOutcome(index)}><span>0{index + 1}</span><b>{item.signal}</b><ArrowRight /></button>)}
        </div>
        <div className="service-v2-outcome-panel" role="tabpanel" key={active.signal}>
          <div><small>{active.signal} / THE SHIFT</small><h3>{active.title}</h3><p>{active.copy}</p></div>
          <div><span>FROM FRICTION</span><ArrowRight /><strong>{active.result}</strong></div>
        </div>
      </section>

      {slug === "ai-clone-avatar-videos" ? <AiPackageBand whatsapp={whatsapp} /> : null}

      <section className="service-v2-delivery" aria-labelledby="service-delivery-title">
        <div className="service-v2-heading"><span>THE COMPLETE ENGAGEMENT</span><h2 id="service-delivery-title">Everything needed to make<br /><em>the right next move obvious.</em></h2><p>Strategy and execution stay connected from the first decision to the final handover.</p></div>
        <div className="service-v2-deliverables">{offer.deliverables.map((item, index) => <article key={item.title}><span>0{index + 1}</span><Check /><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
        <div className="service-v2-fit"><span><UserCheck /></span><div><small>BEST FIT</small><strong>{offer.fit}</strong></div><Link href="/pricing">Compare service options <ArrowUpRight /></Link></div>
      </section>

      <section className="service-v2-process" aria-labelledby="service-process-title">
        <div className="service-v2-heading"><span>A CALM, VISIBLE PROCESS</span><h2 id="service-process-title">You always know<br /><em>what happens next.</em></h2></div>
        <ol>{offer.phases.map((phase, index) => <li key={phase.title}><span>0{index + 1}</span><div><h3>{phase.title}</h3><p>{phase.copy}</p></div>{index < offer.phases.length - 1 ? <i /> : null}</li>)}</ol>
      </section>

      <section className="service-v2-faq" aria-labelledby="service-faq-title">
        <div className="service-v2-heading"><span>BEFORE YOU COMMIT</span><h2 id="service-faq-title">Clear answers.<br /><em>No sales fog.</em></h2><p>A good project starts with fit, honest scope and shared expectations.</p></div>
        <div>{offer.questions.map((item, index) => <details key={item.question} open={index === 0}><summary><span>0{index + 1}</span><b>{item.question}</b><i>+</i></summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="service-v2-conversion" aria-labelledby="service-conversion-title">
        <div><span>NEXT STEP / NO-PRESSURE FIT CHECK</span><h2 id="service-conversion-title">Tell us what must change.<br /><em>We’ll shape the right build.</em></h2><p>Choose the priority closest to your situation. Your WhatsApp message will be prepared with that context.</p></div>
        <div className="service-v2-priorities" role="group" aria-label="Choose your priority">{offer.priorities.map(item => <button type="button" key={item} className={priority === item ? "active" : ""} aria-pressed={priority === item} onClick={() => setPriority(item)}><span>{item}</span>{priority === item ? <Check /> : <ArrowRight />}</button>)}</div>
        <div className="service-v2-conversion__actions"><a href={whatsapp} target="_blank" rel="noreferrer">Send my priority on WhatsApp <MessageCircle /></a><a href="tel:+27724026893">Call 072 402 6893 <Phone /></a></div>
      </section>

      <nav className="service-v2-related" aria-label="Other Carter Digitals services"><span>EXPLORE OTHER CAPABILITIES</span><div>{relatedOffers.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={`/offerings/${item.slug}`}><small>{item.code}</small><strong>{item.label}</strong><ArrowUpRight /></Link>)}</div></nav>
      <footer className="service-v2-footer"><Link href="/">CARTER <strong>DIGITALS</strong></Link><span>Built in Pretoria · Serving South Africa</span><Link href={enquiryHref({service: slug === "web-applications" ? "apps" : slug === "business-systems" ? "systems" : slug === "creative-media" ? "identity" : slug === "ai-clone-avatar-videos" ? "video" : "websites"})}>Start a project <ArrowUpRight /></Link></footer>
    </main>
  );
}

function WebsiteTypeNavigator({ types }: { types: WebsiteType[] }) {
  const [activeType, setActiveType] = useState(0);
  const type = types[activeType];

  return (
    <section className="website-types" id="website-types" aria-labelledby="website-types-title">
      <div className="website-types__heading">
        <span>WEBSITE TYPES / BUILT AROUND THE BUSINESS</span>
        <h2 id="website-types-title">Different businesses need different <em>digital signals.</em></h2>
        <p>
          A law firm, an online shop and a school should not sound or behave like the same website. Choose the direction closest to the business and see what the experience needs to make clear.
        </p>
      </div>

      <div className="website-types__console">
        <nav className="website-types__tabs" role="tablist" aria-label="Explore website types">
          {types.map((item, index) => (
            <button
              key={item.number}
              type="button"
              role="tab"
              aria-selected={activeType === index}
              aria-controls="website-type-panel"
              className={activeType === index ? "active" : ""}
              onClick={() => setActiveType(index)}
            >
              <span>{item.number}</span>
              <strong>{item.label}</strong>
              <ArrowUpRight aria-hidden="true" size={16} />
            </button>
          ))}
        </nav>

        <article className="website-types__panel" id="website-type-panel" role="tabpanel" aria-live="polite" key={type.number}>
          <div>
            <span>{type.eyebrow}</span>
            <h3>{type.title}</h3>
            <p>{type.copy}</p>
            <Link href={enquiryHref({service: "websites"})}>Discuss this website direction <ArrowUpRight size={17} /></Link>
          </div>
          <dl>
            <div><dt>BEST FOR</dt><dd>{type.bestFor}</dd></div>
            <div><dt>CORE ROUTE</dt><dd>{type.coreRoute}</dd></div>
          </dl>
        </article>
      </div>
    </section>
  );
}

function AiPackageBand({ whatsapp }: { whatsapp: string }) {
  return <section className="avatar-package" aria-labelledby="avatar-package-title"><div className="avatar-package__intro"><span>THE FOUR-VIDEO STARTER BATCH</span><h2 id="avatar-package-title">One recording setup.<br /><em>Four reasons to stay visible.</em></h2><p>Batch your next month of ads, explainers or founder content into one focused production cycle.</p></div><div className="avatar-package__price"><small>ONCE-OFF PACKAGE</small><strong>Scoped quote</strong><span>4 completed videos</span><a href={whatsapp} target="_blank" rel="noreferrer">Reserve a production slot <ArrowUpRight /></a></div><div className="avatar-package__uses"><article><Play /><strong>Social ads</strong><span>Hook, value and one clear action.</span></article><article><Globe2 /><strong>Service explainers</strong><span>Make a complex offer easier to understand.</span></article><article><UserCheck /><strong>Founder updates</strong><span>Stay visible without another shoot day.</span></article><article><Captions /><strong>Business content</strong><span>Announcements, training and onboarding.</span></article></div><p className="avatar-package__ethics"><ShieldCheck /> Your avatar is created only from approved material with explicit consent. You approve every script and factual claim before production.</p></section>;
}

function ServiceVisual({ slug }: { slug: string }) {
  if (slug === "premium-websites") return <div className="service-visual service-visual--website" aria-hidden="true"><div className="sv-browser sv-browser--back"><i /><i /><i /></div><div className="sv-browser sv-browser--front"><div><i /><i /><i /><span>YOUR BUSINESS / ONLINE</span></div><small>POSITION · PERSUADE · PERFORM</small><strong>Clear value.<br /><em>Easy next step.</em></strong><button>START AN ENQUIRY <ArrowRight /></button></div></div>;
  if (slug === "web-applications") return <div className="service-visual service-visual--app" aria-hidden="true"><div className="sv-flow"><span>USER</span><i /><span>LOGIC</span><i /><span>OUTCOME</span></div><div className="sv-app"><aside><Code2 /><i /><i /><i /></aside><div><small>PRODUCT JOURNEY / LIVE</small><strong>One focused task</strong><span><b>01</b> Details confirmed <Check /></span><span><b>02</b> Decision ready <Check /></span><button>COMPLETE JOURNEY <ArrowRight /></button></div></div></div>;
  if (slug === "business-systems") return <div className="service-visual service-visual--system" aria-label="Illustrative operations dashboard, with example data"><div className="sv-metrics"><span><small>ACTIVE WORK</small><strong>84%</strong></span><span><small>RESPONSE</small><strong>2.4h</strong></span><span><small>FLOW</small><strong>LIVE</strong></span></div><div className="sv-chart"><BarChart3 /><i /><i /><i /><i /><i /><i /></div><div className="sv-system-row"><Workflow /><span><small>NEXT ACTION</small><strong>3 opportunities need attention</strong></span><ArrowRight /></div></div>;
  if (slug === "creative-media") return (
    <div className="service-visual service-visual--brand service-visual--morph" aria-label="Carter Digitals logo, campaign and brand-presence visual direction">
      <div className="service-visual__morph-meta"><span><i /> IDENTITY / CAMPAIGNS / CONTENT</span><small>01—03</small></div>
      <MorphSlider
        items={creativeMediaItems}
        transition="melt"
        intensity={0.55}
        aberration={0.35}
        drift={0.4}
        autoplay={false}
        autoplayDelay={4.6}
        overlayColor="#12090d"
        radius={16}
        className="service-morph-slider"
      />
      <div className="service-visual__morph-footer"><span>ONE RECOGNISABLE SYSTEM</span><small>DRAG TO EXPLORE</small></div>
    </div>
  );
  return <div className="service-visual service-visual--avatar" aria-hidden="true"><div className="sv-avatar-stage"><div className="sv-avatar"><span /><i /></div><div className="sv-rec"><i /> AI PRESENTER / READY</div><button><Play fill="currentColor" /> PREVIEW MESSAGE</button></div><div className="sv-storyboard">{["AD", "EXPLAIN", "UPDATE", "TRAIN"].map((item, index) => <span key={item}><b>0{index + 1}</b><i /><small>{item}</small></span>)}</div><div className="sv-timeline"><Video /><i /><i /><i /><i /><span>4 VIDEOS</span></div></div>;
}
