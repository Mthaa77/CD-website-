import Link from "next/link";
import { BadgeCheck, ClipboardList, Handshake } from "lucide-react";

const trust = [
  { icon: BadgeCheck, title: "Level 1 B-BBEE", copy: "A 100% Black-owned and youth-owned Pretoria studio with 135% procurement recognition. Supplier documents are available on request.", action: "View company credentials", href: "/company-profile" },
  { icon: Handshake, title: "Speak to the person building it", copy: "Work directly with Kabelo on the brief, design and handover so there’s one point of contact throughout.", action: "Meet Kabelo", href: "/about" },
  { icon: ClipboardList, title: "See the scope before you commit", copy: "Compare page counts, delivery targets and post-launch defect-fix periods before you choose a package.", action: "Compare packages", href: "/pricing" },
];

export function HomeTrust() {
  return (
    <section className="home-wrap home-section growth-section trust-section" aria-labelledby="trust-heading">
      <div className="growth-heading">
        <h2 id="trust-heading">Know who you’re <em>building with.</em></h2>
        <p>See our company credentials, explore the work and know what the build includes before you commit.</p>
      </div>
      <div className="trust-grid">
        {trust.map(({ icon: Icon, title, copy, action, href }) => (
          <article key={title} className="trust-card">
            <Icon size={25} aria-hidden="true"/>
            <h3>{title}</h3><p>{copy}</p><Link className="home-text-link" href={href}>{action}</Link>
          </article>
        ))}
      </div>
      <Link className="home-text-link" href="/work">Explore Carter Digitals’ selected work</Link>
    </section>
  );
}
