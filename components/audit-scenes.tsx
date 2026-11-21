import Image from "next/image";
import Link from "next/link";
import { phases } from "../lib/data";

const descriptions = [
  "We agree on what the website needs to do and what buyers need to find.",
  "We map the pages and prototype the main experience.",
  "We build the approved design and connect the systems in scope.",
  "We test the site on different screens and check the main enquiry paths.",
  "We launch the site and show you how to manage what we built.",
];

export function AuditScenes() {
  return <>
    <section className="audit-art cd-section-new" aria-labelledby="audit-art-title">
      <h2 id="audit-art-title">Built around <em>the way you work.</em></h2>
      <div className="audit-art-grid">
        <Link href="/websites">
          <Image src="/images/audit/web.webp" width={760} height={1018} unoptimized alt="Carter Digitals concept artwork showing websites, enquiry forms and WhatsApp integration" />
          <span>Explore custom websites</span>
        </Link>
        <Link href="/stores">
          <Image src="/images/audit/commerce.webp" width={760} height={1018} unoptimized alt="Carter Digitals concept artwork showing a CMS, online storefront and fulfilment" />
          <span>Explore online stores</span>
        </Link>
      </div>
    </section>
    <section className="audit-process cd-section-new" aria-labelledby="audit-process-title">
      <h2 id="audit-process-title">From first brief <em>to launch.</em></h2>
      <ol>
        {phases.map((phase, index) => <li key={phase}>
          <span aria-hidden="true">{index + 1}</span>
          <div><h3>{phase}</h3><p>{descriptions[index]}</p></div>
        </li>)}
      </ol>
      <Image src="/images/audit/light.webp" width={850} height={394} unoptimized alt="Carter Digitals metallic emblem and wordmark on silver" />
    </section>
  </>;
}
