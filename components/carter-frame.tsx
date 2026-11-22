"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { company } from "../lib/data";

const links = [["Home","/"],["Websites","/websites"],["Stores","/stores"],["Web apps","/apps"],["Company","/company"]];
export function CarterNav() {
  const path = usePathname();
  const reduced = useReducedMotion();
  const [state, setState] = useState({ scrolled: false, hidden: false });
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y-previous) < 14 && y > 30) return;
      const next = { scrolled: y > 30, hidden: y > 260 && y > previous };
      setState(current => current.scrolled === next.scrolled && current.hidden === next.hidden ? current : next);
      previous = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; };
  }, [open]);
  return <>
    <header className="cd-cinematic-nav" data-scrolled={state.scrolled} data-hidden={state.hidden && !open}>
      <Link className="cd-nav-brand-new" href="/"><Image unoptimized src="/carter-digitals-mark.png" width={38} height={38} alt=""/><span>Carter Digitals<small>Pretoria · South Africa</small></span></Link>
      <nav aria-label="Main navigation">{links.map(([name,href])=><Link href={href} aria-current={path===href?"page":undefined} key={href}>{path===href && <motion.i layoutId={reduced?undefined:"carter-active-nav"} transition={{duration:.25}}/>}<span>{name}</span></Link>)}</nav>
      <Link className="cd-button-new cd-button-new--gold cd-shine" href="/contact?brief=Prototype+preview#enquiry" data-cta="navbar">Free demo</Link>
      <button className="cd-menu-button-new" type="button" ref={trigger} onClick={()=>{menu.current?.showModal();setOpen(true)}} aria-label="Open menu" aria-expanded={open} aria-controls="carter-menu-new"><Menu size={23}/></button>
    </header>
    <dialog className="cd-menu-new" ref={menu} id="carter-menu-new" aria-label="Navigation" onClose={()=>{setOpen(false);trigger.current?.focus()}}>
      <button className="cd-menu-button-new" autoFocus aria-label="Close menu" onClick={()=>menu.current?.close()}><X size={27}/></button>
      <nav>{[...links,["Work","/work"],["Pricing","/pricing"],["Contact","/contact"]].map(([name,href],index)=><Link style={{animationDelay:`${index*38}ms`}} href={href} key={href} onClick={()=>menu.current?.close()}>{name}</Link>)}</nav>
      <a className="cd-button-new cd-button-new--gold" href={company.whatsapp}>WhatsApp Kabelo</a>
    </dialog>
    <a className="cd-wa-new" href={company.whatsapp} aria-label="Chat with Kabelo on WhatsApp"><MessageCircle size={24}/><span>Chat with Kabelo</span></a>
  </>;
}

export { CarterFooter } from "./carter-footer";
