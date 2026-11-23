"use client";

import { useEffect } from "react";

export default function AboutMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".about-page");
    if (!root) return;

    const revealItems = Array.from(root.querySelectorAll<HTMLElement>("[data-about-reveal]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add("about-is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("about-is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

    revealItems.forEach((item) => observer.observe(item));

    const progress = root.querySelector<HTMLElement>(".about-scrollline span");
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      if (!progress) return;
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, window.scrollY / scrollable))})`;
    };
    const requestProgress = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress, { passive: true });

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
    };
  }, []);

  return null;
}
