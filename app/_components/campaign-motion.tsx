"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

const heading = ["A", "website", "as", "good", "as", "your", "work."];

export function CampaignTitle() {
  const word = (text: string, index: number) => (
    <span key={index} className="cf-w" style={{ "--i": index } as CSSProperties}>{text}{"\u00a0"}</span>
  );
  return <span aria-hidden="true">{heading.slice(0, 5).map(word)}<em>{heading.slice(5).map((text, index) => word(text, index + 5))}</em></span>;
}

export function CampaignMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const journey = page.querySelector<HTMLElement>("#journey");
    const path = page.querySelector<SVGPathElement>("#trail");
    const bar = page.querySelector<HTMLElement>("#bar");
    const hero = page.querySelector<HTMLElement>(".cf-hero");
    const heroGraphic = page.querySelector<SVGSVGElement>(".cf-hero-svg");
    const markers = Array.from(page.querySelectorAll<SVGCircleElement>(".cf-node"));
    const steps = page.querySelectorAll<HTMLElement>(".cf-step");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let heroVisible = true;

    if (path) {
      const length = path.getTotalLength();
      markers.forEach(marker => {
        const point = path.getPointAtLength(length * Number(marker.dataset.at));
        marker.setAttribute("cx", String(point.x));
        marker.setAttribute("cy", String(point.y));
      });
    }

    function draw() {
      frame = 0;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      bar?.style.setProperty("transform", `scaleX(${height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0})`);
      if (!journey || !path) return;

      const bounds = journey.getBoundingClientRect();
      const stickyHeight = journey.querySelector(".cf-stick")?.clientHeight ?? window.innerHeight;
      const distance = bounds.height - stickyHeight;
      const progress = preference.matches || distance <= 10 ? 1 : Math.min(1, Math.max(0, (88 - bounds.top) / distance));
      path.style.strokeDashoffset = String(1 - progress);
      markers.forEach((marker, index) => marker.classList.toggle("cf-on", progress >= [0, .48, .96][index]));
      steps.forEach((step, index) => step.classList.toggle("cf-on", progress >= [0, .34, .72][index]));
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(draw);
    }

    function syncMotion() {
      if (preference.matches || !heroVisible) heroGraphic?.pauseAnimations?.();
      else heroGraphic?.unpauseAnimations?.();
      if (hero) hero.dataset.visible = String(heroVisible);
      schedule();
    }

    const observer = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.target === hero) {
          heroVisible = entry.isIntersecting;
          syncMotion();
        } else {
          entry.target.classList.toggle("cf-in", entry.isIntersecting);
          if (entry.isIntersecting) entry.target.classList.add("cf-seen");
        }
      }
    }, { threshold: .12 }) : null;

    if (observer) {
      page.querySelectorAll(".cf-rv").forEach(element => observer.observe(element));
      if (hero) observer.observe(hero);
    }
    page.dataset.ready = String(Boolean(observer));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", syncMotion);
    syncMotion();
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", syncMotion);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={root} className="campaign-home"><div id="bar" aria-hidden="true" />{children}</div>;
}
