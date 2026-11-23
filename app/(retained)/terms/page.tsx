import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, FileCheck2, Handshake, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { CarterBubbleMenu } from "../../bubble-menu";
import "../privacy/privacy.css";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Carter Digitals" },
  description: "Clear, practical terms for working with Carter Digitals on websites, digital products and brand systems.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const sections = [
  { icon: FileCheck2, title: "A clear project scope", copy: "Every engagement starts with a written brief, proposal or statement of work describing the deliverables, assumptions, timeline and agreed price." },
  { icon: Handshake, title: "Collaborative approvals", copy: "You provide timely feedback, content and access. We keep decisions visible, flag risks early and ask for approval before moving into the next stage." },
  { icon: ShieldCheck, title: "Responsible delivery", copy: "We build carefully, protect project access and aim to launch work that is practical to use, maintain and grow. Third-party services remain subject to their own terms." },
  { icon: Check, title: "Fair changes", copy: "Small refinements within the agreed scope are welcome. New pages, features, integrations or direction changes may require a revised quote or timeline." },
];

export default function TermsPage() {
  return (
    <main className="privacy-page cd-legal-new">
      <CarterBubbleMenu />
      <section className="privacy-hero">
        <div><span><Handshake /> TERMS / PRACTICAL WORKING AGREEMENT</span><h1>Good work starts<br /><em>with clear expectations.</em></h1><p>These terms explain how Carter Digitals approaches projects, approvals, payment, ownership and support in plain language.</p><div><Link href="/contact">Start a project brief <MessageCircle /><ArrowUpRight /></Link><Link href="/privacy">Read the privacy notice <ShieldCheck /><ArrowUpRight /></Link></div></div>
        <aside><small>STUDIO</small><strong>Carter Digitals (Pty) Ltd</strong><span>Soshanguve, Pretoria · South Africa</span><i /><p>Effective date: 19 August 2026</p></aside>
      </section>

      <section className="privacy-principles" aria-labelledby="terms-principles-title">
        <div><span>THE SHORT VERSION</span><h2>Clear scope.<br /><em>Useful momentum.</em></h2><p>We want every client to know what happens next, what is included and where a decision is needed. If a proposal and these terms conflict, the signed proposal or statement of work takes priority for that project.</p></div>
        <div>{sections.map(({ icon: Icon, title, copy }, index) => <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="privacy-detail">
        <article><span>FEES + PAYMENT</span><h2>Pay by milestone.</h2><p>Fees, deposits and milestone dates are set out in the proposal. Work may pause when an invoice is overdue. Hosting, domains, paid software, stock assets and other third-party costs are billed separately unless the proposal says otherwise.</p></article>
        <article><span>OWNERSHIP + LICENSING</span><h2>Use what you paid for.</h2><p>Once agreed project fees are paid in full, you receive the rights described in the proposal for the final approved deliverables. Third-party fonts, plugins, templates, stock media and software remain subject to their licences. Unused concepts and working files stay with the studio unless agreed otherwise.</p></article>
        <article><span>LAUNCH + SUPPORT</span><h2>Keep the route healthy.</h2><p>We will make reasonable efforts to launch approved work on the agreed platform. Ongoing maintenance, content updates, hosting management and support are separate services unless included in writing. You remain responsible for your business claims, supplied content and account access.</p></article>
      </section>

      <section className="privacy-contact"><Mail /><div><span>QUESTIONS BEFORE YOU START?</span><h2>Let’s make the next step obvious.</h2><p>Ask about scope, timing, payment or ownership before approving a proposal. We would rather clarify early than create friction later.</p></div><a href="mailto:kabelokadiaka4@gmail.com?subject=Terms%20question%20-%20Carter%20Digitals">kabelokadiaka4@gmail.com <ArrowUpRight /></a></section>
      <footer className="privacy-footer"><Link href="/">CARTER <strong>DIGITALS</strong></Link><span>Clear, practical digital work from Pretoria, South Africa.</span><Link href="/contact">Contact the studio <ArrowUpRight /></Link></footer>
    </main>
  );
}
