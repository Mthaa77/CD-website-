import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, FileCheck2, LockKeyhole, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { CarterBubbleMenu } from "../bubble-menu";
import "./privacy.css";

export const metadata: Metadata = {
  title: { absolute: "Privacy Notice | Carter Digitals" },
  description: "Read how Carter Digitals handles project enquiries, contact details, analytics signals and personal information in a practical POPIA-aware manner.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  { icon: FileCheck2, title: "Information you choose to provide", copy: "When you send a project brief, Carter Digitals may receive your name, business name, email address, phone number, industry, project type, budget range and the message you write." },
  { icon: ShieldCheck, title: "Why the information is used", copy: "Your information is used to understand the enquiry, recommend an appropriate scope, respond through your preferred channel, prepare a quotation and maintain a practical record of the project conversation." },
  { icon: LockKeyhole, title: "How information is protected", copy: "Reasonable technical and organisational safeguards are used to limit unauthorised access. Access is restricted to the people and service providers needed to operate the enquiry and delivery process." },
  { icon: Check, title: "Analytics and website signals", copy: "We record page paths and counts of phone, email and WhatsApp clicks, form starts and submission attempts. These measurement records exclude form text, contact details and URL query strings, and use no visitor identifiers or analytics cookies. Do Not Track requests are respected. Saved enquiries are counted separately from contact-button clicks." },
];

export default function PrivacyPage() {
  return (
    <main className="privacy-page cd-legal-new">
      <CarterBubbleMenu />
      <section className="privacy-hero">
        <div><span><ShieldCheck /> PRIVACY / POPIA-AWARE PRACTICE</span><h1>Your information should be treated<br /><em>with the same care as your project.</em></h1><p>This notice explains what Carter Digitals collects through the website, why it is needed and the practical choices available to you.</p><div><a href="mailto:kabelokadiaka4@gmail.com?subject=Privacy%20request%20-%20Carter%20Digitals">Ask a privacy question <Mail /><ArrowUpRight /></a><Link href="/contact">Start a project brief <MessageCircle /><ArrowUpRight /></Link></div></div>
        <aside><small>RESPONSIBLE PARTY</small><strong>Carter Digitals (Pty) Ltd</strong><span>Soshanguve, Pretoria · South Africa</span><i /><p>Updated: 5 September 2026</p></aside>
      </section>

      <section className="privacy-principles" aria-labelledby="privacy-principles-title">
        <div><span>THE PRACTICAL SUMMARY</span><h2 id="privacy-principles-title">Collected for a reason.<br /><em>Kept only as needed.</em></h2><p>Carter Digitals does not ask for sensitive information through the public project form. Please do not submit passwords, identity documents, banking credentials or confidential client records.</p></div>
        <div>{sections.map(({ icon: Icon, title, copy }, index) => <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="privacy-detail">
        <article><span>RETENTION + SHARING</span><h2>Useful boundaries.</h2><p>Enquiry information is retained only for as long as reasonably needed for follow-up, project administration, legal obligations and legitimate business records. Information may be processed by essential hosting, database, analytics or messaging providers acting in support of Carter Digitals. It is not sold as a marketing list.</p></article>
        <article><span>YOUR CHOICES</span><h2>Ask, correct or object.</h2><p>You may ask what personal information is held about you, request a correction, ask for deletion where legally appropriate, or object to certain processing. Carter Digitals may need to verify the request before acting on it.</p></article>
        <article><span>EXTERNAL CHANNELS</span><h2>WhatsApp and email.</h2><p>If you continue through WhatsApp, email or another external service, that provider’s own privacy practices also apply. Only use a channel you are comfortable with and share information appropriate for an initial project conversation.</p></article>
      </section>

      <section className="privacy-contact"><ShieldCheck /><div><span>PRIVACY CONTACT</span><h2>Need clarity about your information?</h2><p>Email Kabelo directly. Include “Privacy request” in the subject line and describe what you need help with.</p></div><a href="mailto:kabelokadiaka4@gmail.com?subject=Privacy%20request%20-%20Carter%20Digitals">kabelokadiaka4@gmail.com <ArrowUpRight /></a></section>
      <footer className="privacy-footer"><Link href="/">CARTER <strong>DIGITALS</strong></Link><span>Privacy-aware digital work from Pretoria, South Africa.</span><Link href="/contact">Contact the studio <ArrowUpRight /></Link></footer>
    </main>
  );
}
