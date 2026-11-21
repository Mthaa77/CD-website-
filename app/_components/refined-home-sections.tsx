"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import SpotlightCard from "./react-bits/spotlight-card";
import { websitePackages } from "../_lib/website-packages";
import { enquiryHref } from "../_lib/enquiry-context";
import { SHOWCASE_PROJECTS } from "../_lib/showcase-projects";
import "./showcase-refinement.css";

export function SelectedWork() {
  return <section className="refined-work refined-section" id="selected-work" aria-labelledby="refined-work-title"><span id="projects" /><span id="project-cases" /><header className="refined-section-head"><div><p className="refine-eyebrow">SELECTED DIRECTIONS / REAL DESIGN WORK</p><h2 id="refined-work-title">See what better<br /><em>can look like.</em></h2></div><p>Different businesses. Different reasons to be chosen. Explore two website prototypes created by Carter Digitals.</p></header><div className="refined-work-grid">{SHOWCASE_PROJECTS.map((project,index) => <article key={project.name}><SpotlightCard className="refined-work-visual" spotlightColor="rgba(49, 92, 255, 0.15)"><div className="refined-work-label"><span>0{index+1} / {project.sector}</span><span>PROTOTYPE</span></div><img src={project.image} alt={`${project.name} website prototype`} width={project.width} height={project.height} loading="lazy" /></SpotlightCard><div className="refined-work-description"><span>{project.name}</span><h3>{project.title}</h3><p>{project.detail}</p><Link href="/work">Explore our work <ArrowUpRight size={17} /></Link></div></article>)}</div><p className="refined-proof-note">These illustrations show example website directions for each sector.</p></section>;
}

export function StudioWelcome() {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = video.current; if (!el) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)"); let visible = false;
    const sync = () => { if (visible && !media.matches && !document.hidden) void el.play().catch(() => {}); else el.pause(); };
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, { threshold: .15 });
    observer.observe(el); media.addEventListener("change", sync); document.addEventListener("visibilitychange", sync);
    return () => { observer.disconnect(); media.removeEventListener("change", sync); document.removeEventListener("visibilitychange", sync); el.pause(); };
  }, []);
  return <section className="refined-welcome refined-section" id="welcome-to-carter" aria-labelledby="refined-welcome-title"><div className="refined-welcome-film"><video ref={video} src="/videos/carter-digitals-logo-reveal.mp4" poster="/carter-digitals-logo-dark-panel.webp" muted loop playsInline controls preload="none" aria-label="Carter Digitals logo film" /></div><div><p className="refine-eyebrow">THE PERSON BEHIND THE PIXELS</p><h2 id="refined-welcome-title">A studio with ambition.<br /><em>A person you can reach.</em></h2><p>I’m Kabelo Kadiaka, founder of Carter Digitals in Soshanguve, Pretoria. I bring design and development together to help businesses show up with more clarity and confidence.</p><div className="refined-founder"><img src="/kabelo-kadiaka-founder.webp" alt="Kabelo Kadiaka" width="1122" height="1402" loading="lazy" /><span><strong>Kabelo Kadiaka</strong>Founder · Designer · Developer</span><Link href="/about" aria-label="Meet Kabelo Kadiaka"><ArrowUpRight /></Link></div></div></section>;
}

export function HomepagePackages() {
  return <section className="refined-packages refined-section" aria-labelledby="refined-packages-title"><header className="refined-section-head"><div><p className="refine-eyebrow">YOUR INVESTMENT / CLEAR FROM THE START</p><h2 id="refined-packages-title">The right scale.<br /><em>A considered investment.</em></h2></div><p>Start with the scope your business needs. We agree the details before the build begins.</p></header><div className="refined-package-grid">{websitePackages.map((item,index) => <article key={item.name} className={index === 1 ? "is-featured" : ""}><span className="refine-eyebrow">0{index+1} / {item.shorthand}</span><h3>{item.price}</h3><strong>{item.scope}</strong><p>{item.decision}</p><span className="refined-package-time"><Check size={14} />{item.timeline}</span><Link href={enquiryHref({service:"websites",package:item.id})}>Choose {item.shorthand} <ArrowUpRight size={16} /></Link></article>)}</div><p className="refined-proof-note">Delivery depends on scope, approved direction, supplied content and feedback. Full inclusions and terms are on the pricing page.</p></section>;
}
