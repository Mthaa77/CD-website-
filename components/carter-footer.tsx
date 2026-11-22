import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react";
import { company } from "../lib/data";
import "./carter-footer.css";

const menus = [
  { title: "Services", links: [
    ["Websites", "/websites"], ["Online stores", "/stores"],
    ["Web applications", "/apps"], ["All services", "/services"],
  ] },
  { title: "Studio", links: [
    ["Company profile", "/company-profile"], ["Selected work", "/work"],
    ["Insights", "/insights"], ["Pricing", "/pricing"],
  ] },
] as const;

export function CarterFooter() {
  return (
    <footer className="carter-footer" aria-label="Carter Digitals footer">
      <div className="carter-footer__inner">
        <div className="carter-footer__intro">
          <div>
            <Link href="/" className="carter-footer__brand">
              <Image src="/carter-digitals-mark.png" alt="" width={38} height={38} unoptimized />
              Carter Digitals
            </Link>
            <h2>Let’s build something <em>worth visiting.</em></h2>
          </div>
          <Link href="/contact#enquiry" className="carter-footer__cta">
            Start a project <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>

        <div className="carter-footer__directory">
          <div className="carter-footer__contact">
            <h3>Contact</h3>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={company.call}>{company.phone}</a>
            <a className="carter-footer__chat" href={company.whatsapp}>
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp Kabelo
            </a>
          </div>
          {menus.map(({title, links}) => (
            <nav aria-label={`Footer ${title.toLowerCase()}`} key={title}>
              <h3>{title}</h3>
              {links.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}
            </nav>
          ))}
          <div className="carter-footer__credentials">
            <h3>Company credentials</h3>
            <p>{company.location}</p>
            <p>B-BBEE Level 1 EME<br />CSD registered</p>
          </div>
        </div>

        <div className="carter-footer__wordmark" aria-hidden="true">
          <span>Carter</span> <em>Digitals</em>
        </div>
        <div className="carter-footer__legal">
          <small>© {new Date().getFullYear()} {company.name} · CIPC {company.registration}</small>
          <nav aria-label="Legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav>
          <a href="#main-content" className="carter-footer__top">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
