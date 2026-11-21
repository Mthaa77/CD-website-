import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, MapPin, ShieldCheck, Sparkles } from "lucide-react";

const proofSignals = [
  { icon: MapPin, label: "PRETORIA-BASED", value: "Serving Gauteng + South Africa" },
  { icon: ShieldCheck, label: "FOUNDER-LED", value: "Direct access to the builder" },
  { icon: Check, label: "B-BBEE LEVEL 1", value: "135% procurement recognition" },
  { icon: Sparkles, label: "BUILT TO PERFORM", value: "Strategy, design + development" },
];

const work = [
  {
    image: "/civiclens-platform.webp",
    label: "CIVIC INTELLIGENCE",
    title: "A public-service product made clear.",
    href: "/offerings/web-applications",
    alt: "CivicLens civic intelligence mobile application interface",
  },
  {
    image: "/luma-service-app.webp",
    label: "SERVICE MARKETPLACE",
    title: "Premium discovery and booking journeys.",
    href: "/offerings/premium-websites",
    alt: "Luma premium service marketplace mobile application",
  },
  {
    image: "/tut-open-horizon.webp",
    label: "EDUCATION AT SCALE",
    title: "A high-trust institutional experience.",
    href: "/website-development-pretoria",
    alt: "Tshwane University of Technology website experience",
  },
];

export function PageGrowthLayer({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`page-growth ${compact ? "page-growth--compact" : ""}`} aria-labelledby="page-growth-title">
      <div className="page-growth__signals" aria-label="Carter Digitals trust signals">
        {proofSignals.map(({ icon: Icon, label, value }) => (
          <div key={label}>
            <Icon size={17} />
            <span><small>{label}</small><strong>{value}</strong></span>
          </div>
        ))}
      </div>

      <div className="page-growth__intro">
        <div>
          <span>SELECTED PRODUCT THINKING</span>
          <h2 id="page-growth-title">Not just polished screens.<br /><em>Commercially useful experiences.</em></h2>
        </div>
        <p>Every Carter Digitals project connects the message customers need to understand, the proof they need to trust and the action the business needs them to take.</p>
      </div>

      <div className="page-growth__work">
        {work.map((item, index) => (
          <Link href={item.href} key={item.title}>
            <div className="page-growth__image">
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 88vw, 33vw" loading="lazy" decoding="async" unoptimized />
              <span>0{index + 1}</span>
            </div>
            <small>{item.label}</small>
            <strong>{item.title}</strong>
            <span>Explore capability <ArrowUpRight size={14} /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
