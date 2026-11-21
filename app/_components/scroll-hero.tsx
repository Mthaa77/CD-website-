"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown, Pause, Play } from "lucide-react";
import { SHOWCASE_PROJECTS } from "../_lib/showcase-projects";
import "./showcase-refinement.css";

export function ScrollHero() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const project = SHOWCASE_PROJECTS[active];
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const reset = () => { element.style.setProperty("--travel", "0"); element.style.setProperty("--pointer", "0"); };
    const update = () => {
      frame = 0;
      if (paused || reduced.matches) { reset(); return; }
      const rect = element.getBoundingClientRect();
      element.style.setProperty("--travel", String(Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height * .8)))));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const pointer = (e: PointerEvent) => { if (e.pointerType !== "mouse" || paused || reduced.matches) return; const rect = element.getBoundingClientRect(); element.style.setProperty("--pointer", String((e.clientX - rect.left) / rect.width - .5)); };
    const leave = () => element.style.setProperty("--pointer", "0");
    addEventListener("scroll", schedule, { passive: true }); addEventListener("resize", schedule); reduced.addEventListener("change", schedule);
    element.addEventListener("pointermove", pointer); element.addEventListener("pointerleave", leave); update();
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", schedule); removeEventListener("resize", schedule); reduced.removeEventListener("change", schedule); element.removeEventListener("pointermove", pointer); element.removeEventListener("pointerleave", leave); reset(); };
  }, [paused]);
  return <section ref={root} className="carter-showcase" id="route-launcher" aria-labelledby="showcase-title">
    <div className="showcase-copy"><p className="refine-eyebrow">CARTER DIGITALS / PRETORIA, SOUTH AFRICA</p><h1 id="showcase-title"><span>Your next customer</span><br /><span>should see</span><br /><em>your best.</em></h1><p className="showcase-description">Thoughtful websites for ambitious South African businesses—designed to earn trust, tell your story and turn interest into meaningful enquiries.</p><div className="showcase-actions"><Link href="/contact#enquiry" className="studio-button">Start a project <ArrowUpRight size={19} /></Link><a href="#selected-work" className="studio-text-link">Explore our work <ArrowDown size={17} /></a></div><p className="showcase-founder">Designed and built with Kabelo Kadiaka.<br /><span>One direct conversation, from first idea to launch.</span></p></div>
    <div className="showcase-scene" aria-label={`${project.name} website prototype display`}>
      <img className="showcase-portal" src="/images/scrollcraft/showcase-portal.webp" width="1536" height="1024" alt="" fetchPriority="high" />
      <div className="showcase-browser"><div className="showcase-browser-bar"><span aria-hidden="true">● ● ●</span><span>{project.name}</span><ArrowUpRight size={12} /></div><div className="showcase-browser-screen">{SHOWCASE_PROJECTS.map((item, index) => <img key={item.name} src={item.image} alt={index === active ? `${item.name} website prototype` : ""} aria-hidden={index !== active} className={index === active ? "is-active" : ""} width={item.width} height={item.height} />)}</div></div>
      <div className="showcase-phone" aria-hidden="true"><span className="showcase-phone-camera" />{SHOWCASE_PROJECTS.map((item,index) => <img key={item.name} src={item.image} alt="" className={index === active ? "is-active" : ""} width={item.width} height={item.height} />)}<span className="showcase-phone-caption">A closer look.</span></div>
      <div className="showcase-caption" aria-live="polite"><span>{project.sector} / WEBSITE PROTOTYPE</span><strong>{project.name}</strong><p>{project.title}</p></div>
    </div>
    <div className="showcase-bottom"><div className="showcase-projects" role="group" aria-label="Choose a website prototype">{SHOWCASE_PROJECTS.map((item,index) => <button key={item.name} type="button" aria-pressed={active === index} onClick={() => setActive(index)}><span>0{index+1}</span>{item.sector}<ArrowUpRight size={16} /></button>)}</div><span className="showcase-scroll-note">SCROLL INTO THE WORK <ArrowDown size={15} /></span><button type="button" className="showcase-pause" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={14} /> : <Pause size={14} />}{paused ? "Resume motion" : "Pause motion"}</button></div>
  </section>;
}
