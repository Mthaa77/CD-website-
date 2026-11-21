"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { RouteMotion } from "../../components/carter-motion";
import { CarterAnalytics } from "../../components/carter-analytics";
import { measure } from "../_lib/measurement";

// Native Link navigation remains available immediately; no blocking intro curtain.
export default function SiteTransitions({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    measure("page_view", pathname);
    const started = new WeakSet<HTMLFormElement>();
    const onFormFocus = (event: FocusEvent) => {
      const form = (event.target as HTMLElement | null)?.closest<HTMLFormElement>('form[action="/api/leads"]');
      if (form && !started.has(form)) { started.add(form); measure("enquiry_start"); }
    };
    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.hasAttribute("download")) return;
      const destination = new URL(anchor.href, window.location.href);
      if (destination.protocol === "tel:") measure("call_click");
      else if (destination.protocol === "mailto:") measure("email_click");
      else if (destination.hostname === "wa.me" || destination.hostname === "api.whatsapp.com") measure("whatsapp_click");
    };
    document.addEventListener("click", onAnchorClick, true);
    document.addEventListener("focusin", onFormFocus);
    return () => {
      document.removeEventListener("click", onAnchorClick, true);
      document.removeEventListener("focusin", onFormFocus);
    };
  }, [pathname]);
  return <div id="main-content" className="site-page" tabIndex={-1}><CarterAnalytics/><RouteMotion>{children}</RouteMotion></div>;
}
