"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function RouteMotion({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <div key={pathname} className="carter-route-enter">{children}</div>;
}

export function HomeMotion() {
  const progress = useRef<HTMLSpanElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    const resize = () => {
      const range = document.documentElement.scrollHeight - innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${range > 0 ? scrollY / range : 0})`;
      if (!preference.matches && scrollY < innerHeight * 1.5) {
        progress.current?.closest("main")?.style.setProperty("--cd-parallax", `${Math.min(scrollY * .12, 85)}px`);
      }
    };
    const configure = () => {
      lenis?.destroy();
      lenis = preference.matches ? undefined : new Lenis({ autoRaf: true, anchors: true });
    };
    let pointerFrame = 0;
    let active: HTMLElement | null = null;
    const pointer = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && !preference.matches && glow.current) {
        cancelAnimationFrame(pointerFrame);
        pointerFrame = requestAnimationFrame(() => {
          if (!glow.current) return;
          glow.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
          glow.current.style.opacity = "1";
          const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(".cd-shine,.cd-hero-new__stage,.cd-tilt-new") ?? null;
          if (active !== target) {
            active?.style.removeProperty("--cd-pointer-x");
            active?.style.removeProperty("--cd-pointer-y");
            active = target;
          }
          if (target) {
            const box = target.getBoundingClientRect();
            target.style.setProperty("--cd-pointer-x", String((event.clientX-box.left)/box.width-.5));
            target.style.setProperty("--cd-pointer-y", String((event.clientY-box.top)/box.height-.5));
          }
        });
      }
    };
    const spotlight = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || preference.matches) return;
      const card = (event.target as HTMLElement).closest<HTMLElement>(".hx-service-row, .hx-industry-options button");
      if (!card) return;
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
    };
    window.addEventListener("pointermove", spotlight, { passive: true });
    configure();
    resize();
    preference.addEventListener("change", configure);
    window.addEventListener("scroll", resize, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", pointer, { passive: true });
    return () => {
      lenis?.destroy();
      window.removeEventListener("pointermove", spotlight);
      cancelAnimationFrame(pointerFrame);
      preference.removeEventListener("change", configure);
      window.removeEventListener("scroll", resize);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointer);
    };
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    window.dispatchEvent(new CustomEvent("carter:motion", { detail: { paused } }));
    if (paused) root.dataset.carterPaused = "true";
    else delete root.dataset.carterPaused;
    return () => { delete root.dataset.carterPaused; };
  }, [paused]);
  return <><div className="cd-progress" aria-hidden="true"><span ref={progress}/></div><div className="cd-pointer" ref={glow} aria-hidden="true"/><button type="button" className="cd-motion-toggle" aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused ? "Resume animation" : "Pause animation"}</button></>;
}

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      node.dataset.visible = String(entry.isIntersecting);
      if (entry.isIntersecting) node.dataset.entered = "true";
    }, { threshold: .08 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="cd-reveal">{children}</div>;
}

let scrollTriggerRegistered = false;

export function SearchJourney() {
  const root = useRef<HTMLElement>(null);
  const path = useRef<SVGPathElement>(null);
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce), (max-width: 790px)").matches) return;
    let paused = false;
    const onPause = (event: Event) => {
      paused = (event as CustomEvent<{paused: boolean}>).detail.paused;
      if (paused) path.current?.style.setProperty("stroke-dashoffset", "0");
    };
    window.addEventListener("carter:motion", onPause);
    let cleanup: (() => void) | undefined;
    let disposed = false;
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (disposed || !root.current) return;
      if (!scrollTriggerRegistered) {
        gsap.registerPlugin(ScrollTrigger);
        scrollTriggerRegistered = true;
      }
      const draw = (progress: number) => {
        if (paused) return;
        path.current?.style.setProperty("stroke-dashoffset", String(1 - progress));
        setStep(Math.min(2, Math.floor(progress * 3)));
      };
      const trigger = ScrollTrigger.create({
        trigger: root.current, start: "top top", end: "bottom bottom",
        onUpdate: ({ progress }) => draw(progress),
        onRefresh: ({ progress }) => draw(progress),
      });
      cleanup = () => trigger.kill();
    }).catch(() => {});
    return () => { disposed = true; cleanup?.(); window.removeEventListener("carter:motion", onPause); };
  }, []);
  const steps = [
    ["They search", "A clear service page helps the right buyer find you."],
    ["They trust", "Relevant work and credentials help them decide."],
    ["They message", "A direct contact route gives them a useful next step."],
  ];
  return <section ref={root} className="cd-journey" aria-labelledby="journey-title"><div className="cd-journey__sticky"><h2 id="journey-title">Search to signed.</h2><svg viewBox="0 0 760 170" aria-hidden="true"><defs><linearGradient id="journey-ink"><stop stopColor="#e03348"/><stop offset=".48" stopColor="#d4b25a"/><stop offset="1" stopColor="#2fa8ff"/></linearGradient></defs><path d="M44 116C224 117 239 34 380 82S550 155 716 65" fill="none" stroke="currentColor" strokeWidth="2" opacity=".25"/><path ref={path} d="M44 116C224 117 239 34 380 82S550 155 716 65" pathLength="1" strokeDasharray="1" fill="none" stroke="url(#journey-ink)" strokeWidth="5" strokeLinecap="round"/>{[[44,116],[380,82],[716,65]].map(([x,y],i)=><circle key={x} cx={x} cy={y} r={step===i?13:8} fill={step===i?"#d4b25a":"#2fa8ff"}/>)}</svg><ol>{steps.map(([title,copy],i)=><li key={title} className={step===i?"is-current":undefined}><h3>{title}</h3><p>{copy}</p></li>)}</ol></div></section>;
}

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const node = ref.current;
    const number = value.match(/\d[\d,]*/);
    if (!node || !number || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const target = Number(number[0].replaceAll(",", ""));
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const draw = (time: number) => {
        const progress = Math.min(1,(time-start)/700);
        node.textContent = value.replace(number[0],Math.round(target*(1-(1-progress)**3)).toLocaleString("en-US"));
        if (progress < 1) frame = requestAnimationFrame(draw);
      };
      frame = requestAnimationFrame(draw);
    });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span ref={ref} aria-label={value}>{value}</span>;
}
