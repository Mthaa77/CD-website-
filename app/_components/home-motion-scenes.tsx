"use client";

import { useEffect, useRef, type ReactNode } from "react";

function MotionFigure({ label, caption, scene, children }: {
  label: string;
  caption: string;
  scene: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const figure = ref.current;
    if (!figure || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      figure.dataset.motion = entry.isIntersecting ? "playing" : "paused";
    }, { threshold: .15 });
    observer.observe(figure);
    return () => observer.disconnect();
  }, []);

  return (
    <figure ref={ref} className={"studio-figure studio-figure--" + scene}>
      <svg viewBox="0 0 560 420" role="img" aria-label={label}>
        {children}
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function SearchLoop() {
  return (
    <MotionFigure scene="search" label="An illustrative Pretoria search connects to a construction company's service page" caption="Illustrative local search">
      <defs>
        <linearGradient id="search-grid-fade" x2="0" y2="1"><stop stopColor="#779cd8"/><stop offset="1" stopColor="#a6caff" stopOpacity=".12"/></linearGradient>
        <radialGradient id="search-spot"><stop stopColor="#7db4fb" stopOpacity=".8"/><stop offset="1" stopColor="#7db4fb" stopOpacity="0"/></radialGradient>
      </defs>
      <ellipse cx="280" cy="225" rx="244" ry="159" fill="url(#search-spot)" opacity=".68"/>
      <g fill="none" stroke="url(#search-grid-fade)" opacity=".62">
        <path d="M16 360 208 98M96 381 235 98M206 394 262 98M354 394 298 98M464 381 325 98M544 360 352 98"/>
        <path d="M45 347Q280 390 515 347M80 300Q280 329 480 300M113 254Q280 274 447 254M143 213Q280 226 417 213M170 175Q280 184 390 175"/>
        <ellipse cx="280" cy="259" rx="200" ry="87"/>
      </g>
      <path d="M114 286Q172 286 205 242T282 208T383 171" fill="none" stroke="#16387c" opacity=".4" strokeWidth="2"/>
      <path className="figure-search-trace" d="M114 286Q172 286 205 242T282 208T383 171" pathLength="100" fill="none" stroke="#1749b1" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="114" cy="286" r="6" fill="#1749b1"/>
      <circle className="figure-search-ring" cx="279" cy="208" r="30" fill="none" stroke="#194cb4" strokeWidth="2"/>
      <circle cx="279" cy="208" r="10" fill="#f7fbff" stroke="#194cb4" strokeWidth="3"/>
      <g>
        <rect x="81" y="51" width="398" height="59" rx="29.5" fill="#f9fbff"/>
        <circle cx="117" cy="79" r="8" fill="none" stroke="#1749b1" strokeWidth="2"/>
        <path d="m123 85 6 6" stroke="#1749b1" strokeWidth="2" strokeLinecap="round"/>
        <text x="147" y="86" className="figure-label" fill="#18284b">Construction company in Pretoria</text>
      </g>
      <g className="figure-search-result">
        <rect x="238" y="293" width="283" height="81" rx="13" fill="#142646"/>
        <text x="258" y="320" className="figure-meta" fill="#9ecaff">RELEVANT SERVICE PAGE</text>
        <text x="258" y="350" className="figure-label" fill="#fff">Projects · Services · Location</text>
      </g>
    </MotionFigure>
  );
}

export function WhatsAppLoop() {
  return (
    <MotionFigure scene="chat" label="A website contact button sends a visitor to a prefilled WhatsApp conversation" caption="Illustrative WhatsApp journey">
      <defs>
        <linearGradient id="chat-panel" x2="1" y2="1"><stop stopColor="#223e36"/><stop offset="1" stopColor="#101f1e"/></linearGradient>
        <radialGradient id="chat-halo"><stop stopColor="#376955" stopOpacity=".6"/><stop offset="1" stopColor="#376955" stopOpacity="0"/></radialGradient>
      </defs>
      <circle cx="310" cy="199" r="204" fill="url(#chat-halo)"/>
      <circle cx="310" cy="199" r="166" fill="none" stroke="#679583" opacity=".24"/>
      <circle cx="310" cy="199" r="196" fill="none" stroke="#679583" opacity=".13"/>
      <g>
        <rect x="22" y="108" width="259" height="172" rx="14" fill="url(#chat-panel)" stroke="#718d82"/>
        <path d="M23 145H280" stroke="#718d82" opacity=".65"/>
        <circle cx="43" cy="127" r="4" fill="#a9d0bc"/><circle cx="57" cy="127" r="4" fill="#60796e"/><circle cx="71" cy="127" r="4" fill="#60796e"/>
        <text x="91" y="132" className="figure-meta" fill="#d1e8db">BUSINESS WEBSITE</text>
        <text x="42" y="183" className="figure-label" fill="#f5fff8">Talk to our team</text>
        <rect className="figure-chat-tap" x="42" y="206" width="181" height="42" rx="21" fill="#baf5cf"/>
        <text x="58" y="233" className="figure-label" fill="#19362b">Chat on WhatsApp</text>
      </g>
      <path d="M225 226H281Q319 226 319 191T345 153H362" stroke="#557f73" strokeWidth="3" fill="none"/>
      <path className="figure-chat-signal" d="M225 226H281Q319 226 319 191T345 153H362" pathLength="100" stroke="#bafbd1" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <g>
        <rect x="362" y="37" width="176" height="337" rx="27" fill="#112421" stroke="#9bb6a9" strokeWidth="2"/>
        <rect x="420" y="51" width="60" height="4" rx="2" fill="#729487"/>
        <text x="381" y="107" className="figure-label" fill="#ebfff1">WhatsApp</text>
        <path d="M378 127H522" stroke="#426a59"/>
        <g className="figure-chat-message">
          <rect x="384" y="150" width="133" height="70" rx="12" fill="#aff0c9"/>
          <text x="396" y="178" className="figure-small" fill="#163629"><tspan x="396">Hi, I’d like to</tspan><tspan x="396" dy="19">request a quote.</tspan></text>
        </g>
        <g className="figure-chat-response">
          <rect x="377" y="239" width="132" height="61" rx="12" fill="#345348"/>
          <text x="389" y="264" className="figure-small" fill="#f2fff6"><tspan x="389">Happy to help.</tspan><tspan x="389" dy="18">Tell us more.</tspan></text>
        </g>
        <rect x="378" y="326" width="144" height="28" rx="14" fill="#253d34"/>
      </g>
    </MotionFigure>
  );
}

export function BriefLoop() {
  return (
    <MotionFigure scene="brief" label="A project enquiry collects scope, location and timeframe before reaching the team" caption="Illustrative project brief">
      <defs>
        <linearGradient id="brief-sheet" x2="1" y2="1"><stop stopColor="#fffbf0"/><stop offset="1" stopColor="#f0d8cc"/></linearGradient>
      </defs>
      <path d="M-40 339 490 23M40 435 580 115" stroke="#ffcfbc" strokeWidth="1" opacity=".36"/>
      <rect x="131" y="57" width="313" height="313" rx="19" fill="#ce8592" transform="rotate(8 285 215)"/>
      <rect x="96" y="54" width="313" height="303" rx="17" fill="#4e1c2b" opacity=".29" transform="rotate(-7 245 205)"/>
      <g className="figure-brief-paper">
        <rect x="100" y="43" width="319" height="301" rx="17" fill="url(#brief-sheet)"/>
        <text x="124" y="82" className="figure-meta" fill="#94304a">PROJECT ENQUIRY</text>
        <text x="124" y="130" className="figure-serif" fill="#3e1e29">A brief worth opening.</text>
        {[["Scope", "Commercial website"], ["Location", "Pretoria, Gauteng"], ["Timeframe", "Within three months"]].map(([field, value], index) => (
          <g key={field} className="figure-brief-field" style={{ animationDelay: index * 155 + "ms" }}>
            <path d={`M124 ${165 + index * 48}H388`} stroke="#62434a" opacity=".3"/>
            <text x="124" y={196 + index * 48} className="figure-small" fill="#634650">{field}</text>
            <text x="220" y={196 + index * 48} className="figure-small" fill="#361f29">{value}</text>
          </g>
        ))}
      </g>
      <g className="figure-brief-status">
        <rect x="288" y="303" width="237" height="65" rx="16" fill="#2f1c27"/>
        <circle cx="323" cy="335" r="13" fill="#f6bfca"/>
        <path d="m317 335 4 4 8-9" fill="none" stroke="#4d2436" strokeWidth="2"/>
        <text x="347" y="342" className="figure-label" fill="#fff0f2">Brief received</text>
      </g>
    </MotionFigure>
  );
}
