"use client";

import { useEffect, useRef } from "react";
import { CalendarDays, CreditCard, Mail, MapPin, MessageCircle, Search, ChartNoAxesCombined } from "lucide-react";

const orbit = [MessageCircle, Mail, Search, MapPin, ChartNoAxesCombined, CreditCard, CalendarDays];
const orbitLabels = ["WhatsApp","Mail","Google","Maps","GA4","Pay","Calendar"];
export function ConnectionOrbit() {
  return <svg className="cd-orbit" viewBox="0 0 460 370" role="img" aria-label="Carter Digitals connects websites to messaging, search, analytics, payments and calendars">
    <defs><radialGradient id="orbit-glow"><stop stopColor="#2fa8ff" stopOpacity=".26"/><stop offset="1" stopColor="#2fa8ff" stopOpacity="0"/></radialGradient></defs>
    <circle cx="230" cy="185" r="173" fill="url(#orbit-glow)"/>
    {[69,112,151].map((r,i)=><circle key={r} className={`cd-orbit__ring cd-orbit__ring--${i}`} cx="230" cy="185" r={r} fill="none" stroke="currentColor" strokeOpacity=".36" strokeDasharray={i===1?"3 10":"8 13"}/>)}
    <circle className="cd-orbit__pulse" cx="230" cy="185" r="53" fill="none" stroke="#2fa8ff" opacity=".55"/>
    <rect x="199" y="154" width="62" height="62" rx="15" fill="#fff"/>
    <image href="/carter-digitals-mark.png" x="204" y="159" width="52" height="52"/>
    {orbit.map((Icon,i)=>{
      const radius = [69,112,151,112,151,112,151][i];
      const angle = i * Math.PI * 2 / 7 - Math.PI / 2;
      const x = 230 + radius * Math.cos(angle);
      const y = 185 + radius * Math.sin(angle);
      return <g key={orbitLabels[i]} className={`cd-orbit__node cd-orbit__node--${i%2}`}><g transform={`translate(${x},${y})`}><g className="cd-orbit__upright"><circle r="19" fill="#101f38" stroke={i%2?"#d4b25a":"#2fa8ff"}/><Icon x="-10" y="-10" width="20" height="20" color="#f4f8ff"/><text y="34" textAnchor="middle" fill="currentColor" fontSize="11">{orbitLabels[i]}</text></g></g></g>;
    })}
  </svg>;
}

export function AnalyticsGraphic() {
  const svg = useRef<SVGSVGElement>(null);
  const metrics = [["Enquiries","28"],["WhatsApp clicks","64"],["Search clicks","312"]];
  useEffect(() => {
    const node = svg.current;
    if (!node || !("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const tiles = node.querySelectorAll<SVGTextElement>("[data-sample-count]");
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1,(now-start)/850);
        for (const tile of tiles) tile.textContent = String(Math.round(Number(tile.dataset.sampleCount)*progress));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .25 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return <svg ref={svg} className="cd-analytics-svg" viewBox="0 0 640 360" role="img" aria-label="Analytics dashboard with sample enquiries, WhatsApp clicks and search clicks">
    <defs><linearGradient id="metric-area" x2="0" y2="1"><stop stopColor="#2fa8ff" stopOpacity=".45"/><stop offset="1" stopColor="#2fa8ff" stopOpacity="0"/></linearGradient></defs>
    <rect x="1" y="1" width="638" height="358" rx="27" fill="#0b172a" stroke="#456084"/>
    <text x="26" y="36" fill="#f3f5f8" fontSize="18" fontWeight="700">Analytics · sample data</text>
    {metrics.map(([label,value],i)=><g key={label} className="cd-metric-tile" style={{animationDelay:`${i*120}ms`}} transform={`translate(${25+i*200},54)`}><rect width="190" height="75" rx="13" fill="#142643" stroke="#314b6c"/><text x="13" y="24" fill="#b9cae0" fontSize="13">{label}</text><text data-sample-count={value} x="13" y="57" fill="#f3f5f8" fontSize="26" fontWeight="700">{value}</text></g>)}
    <path d="M34 284H411M34 246H411M34 208H411M34 170H411" stroke="#395477" strokeOpacity=".55"/>
    <path className="cd-chart-area" d="M34 269C80 260 101 278 142 237S202 257 244 205S305 236 345 179S380 187 411 154V284H34Z" fill="url(#metric-area)"/>
    <path className="cd-chart-line" pathLength="1" d="M34 269C80 260 101 278 142 237S202 257 244 205S305 236 345 179S380 187 411 154" fill="none" stroke="#69c0ff" strokeWidth="4" strokeLinecap="round"/>
    <circle className="cd-chart-dot" r="5" fill="#ebc877"/>
    <circle cx="519" cy="215" r="40" fill="none" stroke="#263c63" strokeWidth="12"/>
    <circle cx="519" cy="215" r="40" pathLength="100" fill="none" stroke="#2fa8ff" strokeWidth="12" strokeDasharray="57 43" transform="rotate(-90 519 215)"/>
    <circle cx="519" cy="215" r="40" pathLength="100" fill="none" stroke="#25d366" strokeWidth="12" strokeDasharray="23 77" strokeDashoffset="-57" transform="rotate(-90 519 215)"/>
    <circle cx="519" cy="215" r="40" pathLength="100" fill="none" stroke="#d4b25a" strokeWidth="12" strokeDasharray="20 80" strokeDashoffset="-80" transform="rotate(-90 519 215)"/>
    <text x="435" y="300" fill="#c0cee3" fontSize="12">Google · WhatsApp · Direct</text>
  </svg>;
}

export function BenefitIcon({ index }: { index: number }) {
  return <svg className="cd-benefit-icon" viewBox="0 0 224 94" aria-hidden="true">
    {index===0 ? <><rect x="16" y="12" width="192" height="31" rx="15" fill="none" stroke="#2fa8ff"/><circle cx="34" cy="27" r="5" fill="none" stroke="#2fa8ff" strokeWidth="2"/><path d="m38 31 4 4" stroke="#2fa8ff" strokeWidth="2"/><text className="cd-benefit-type" x="53" y="32" fill="currentColor" fontSize="13">renovations pretoria</text><rect className="cd-benefit-pulse" x="16" y="54" width="192" height="24" rx="9" fill="#2fa8ff" opacity=".3"/><path d="M28 63h74m-74 7h44" stroke="currentColor" opacity=".6"/></>
    :index===1 ? <><circle cx="42" cy="46" r="25" fill="none" stroke="#d4b25a" strokeWidth="3" pathLength="1" className="cd-chart-line"/><text x="42" y="50" textAnchor="middle" fill="currentColor" fontSize="12">Level 1</text>{["Credentials","Real work","Clear scope"].map((label,i)=><g key={label}><path d={`m92 ${24+i*22} 4 4 7 -8`} fill="none" stroke="#25d366" strokeWidth="2" pathLength="1" className="cd-chart-line"/><text x="109" y={29+i*22} fill="currentColor" fontSize="13">{label}</text></g>)}</>
    : <><circle className="cd-benefit-pulse" cx="47" cy="49" r="29" fill="#25d366" opacity=".25"/><circle cx="47" cy="49" r="21" fill="#25d366"/><MessageCircle x="36" y="38" width="22" height="22" color="#041c12"/><rect x="84" y="15" width="56" height="28" rx="12" fill="#1e3f68"/><text x="96" y="33" fontSize="12" fill="#fff">Quote?</text><rect className="cd-benefit-pulse" x="120" y="51" width="80" height="28" rx="12" fill="#14623d"/><text x="133" y="69" fill="#fff" fontSize="12">Booked</text></>}
  </svg>;
}
