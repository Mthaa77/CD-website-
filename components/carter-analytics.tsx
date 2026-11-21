"use client";

import { useEffect } from "react";

type AnalyticsPayload = { event: string; location?: string; package?: string };
type AnalyticsWindow = Window & { dataLayer?: unknown[][]; gtag?: (...args: unknown[]) => void };
const id = process.env.NEXT_PUBLIC_GA_ID;

export function CarterAnalytics() {
  useEffect(() => {
    if (!id || !/^G-[A-Z0-9]+$/.test(id) || navigator.doNotTrack === "1" || (navigator as Navigator & {globalPrivacyControl?: boolean}).globalPrivacyControl) return;
    const browser = window as AnalyticsWindow;
    let started = false;
    function start() {
      if (started || !id) return;
      started = true;
      if (!browser.gtag) {
        browser.dataLayer ??= [];
        browser.gtag = (...args) => browser.dataLayer?.push(args);
        browser.gtag("js", new Date());
        browser.gtag("config", id, { send_page_view: false, client_storage: "none", allow_google_signals: false, allow_ad_personalization_signals: false });
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id);
        document.head.appendChild(script);
      }
    }
    function send({event, ...detail}: AnalyticsPayload) {
      start();
      browser.gtag?.("event", event, { ...detail, page_location: location.origin + location.pathname });
    }
    function onClick(event: MouseEvent) {
      if (!event.isTrusted) return;
      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      if (link.dataset.cta) send({ event: "cta_click", location: link.dataset.cta });
      const url = new URL(link.href, location.href);
      if (url.protocol === "tel:") send({ event: "call_click" });
      if (url.protocol === "mailto:") send({ event: "email_click" });
      if (url.hostname === "wa.me") send({ event: "whatsapp_click" });
    }
    function onCustom(event: Event) {
      const data = (event as CustomEvent<AnalyticsPayload>).detail;
      if (data && ["package_finder_complete","quote_form_submit"].includes(data.event)) send(data);
    }
    document.addEventListener("click", onClick);
    window.addEventListener("carter:analytics", onCustom);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("carter:analytics", onCustom);
    };
  }, []);
  return null;
}
