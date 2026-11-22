"use client";

import { useId, useState } from "react";
import { ArrowUpRight, MessagesSquare, Send, Share2 } from "lucide-react";
import Link from "next/link";
import { company } from "../lib/data";

const scenes = [
  {
    key: "whatsapp", label: "WhatsApp", Icon: MessagesSquare,
    title: "Start a conversation in one tap.",
    copy: "Put WhatsApp beside the service a visitor is reading. A prefilled message can give your team the context to reply.",
    outcome: "Fewer steps between interest and a conversation.",
    accent: "#8bf2c8", tags: ["Service page", "WhatsApp opened", "Conversation"],
  },
  {
    key: "enquiries", label: "Enquiry forms", Icon: Send,
    title: "Get an enquiry you can act on.",
    copy: "Ask for the essentials, such as the service, the brief and how to reply. Route those details to the right place for follow-up.",
    outcome: "Useful context before the first call.",
    accent: "#a5cdff", tags: ["Website form", "Details captured", "Ready to follow up"],
  },
  {
    key: "social", label: "Social referrals", Icon: Share2,
    title: "Give a social post a next step.",
    copy: "Link an Instagram post, Facebook campaign or LinkedIn profile to the page that answers the visitor’s question and gives them a clear next action.",
    outcome: "A relevant landing page for each source.",
    accent: "#b9d8ff", tags: ["Social profile", "Landing page", "Enquiry path"],
  },
] as const;

const paths = {
  whatsapp: "M130 151H248Q287 151 287 190T326 229H490",
  enquiries: "M130 180H236Q260 180 260 155V129Q260 105 289 105H351Q380 105 380 134V210Q380 240 409 240H490",
  social: "M130 112H205Q235 112 235 154V179Q235 206 267 206H367Q404 206 404 184V162Q404 136 434 136H490",
};
type SceneKey = keyof typeof paths;

function SignalGraphic({ kind, accent }: { kind: SceneKey; accent: string }) {
  const uid = useId();
  const track = paths[kind];
  return (
    <svg viewBox="0 0 620 326" className="hs-signal-svg" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={uid + "-grid"} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#b9d9ff" opacity=".2" />
        </pattern>
        <linearGradient id={uid + "-track"}>
          <stop stopColor="#f47193" />
          <stop offset=".55" stopColor="#588cff" />
          <stop offset="1" stopColor={accent} />
        </linearGradient>
        <linearGradient id={uid + "-panel"} x2="1" y2="1">
          <stop stopColor="#233f73" />
          <stop offset="1" stopColor="#111124" />
        </linearGradient>
      </defs>
      <rect width="620" height="326" fill={`url(#${uid}-grid)`} />
      <g fill="none" stroke="#647da7" opacity=".2">
        <circle cx="312" cy="161" r="101" strokeDasharray="2 9"/>
        <circle cx="312" cy="161" r="126"/>
      </g>
      <g fill={`url(#${uid}-panel)`} stroke="#7397c4" strokeWidth="1.4">
        <rect x="36" y="107" rx="17" width="132" height="126" />
        <rect x="454" y="97" rx="20" width="132" height="145" />
      </g>
      <g fill="none" stroke="#87a9d1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {kind === "whatsapp" && <><path d="M58 131h87m-87 22h65m-65 21h72"/><path d="M310 98h50v34h-27l-13 9v-9h-10z"/><path d="M473 132h74v26h-74zM494 181h70v26h-70z"/></>}
        {kind === "enquiries" && <><path d="M59 134h76m-76 24h84m-84 24h84m-84 24h35"/><path d="M484 151l35 24 35-24m-70 0v52h70v-52z"/><path d="M310 159l12 12 19-22"/></>}
        {kind === "social" && <><circle cx="67" cy="145" r="10"/><circle cx="104" cy="145" r="10"/><circle cx="140" cy="145" r="10"/><path d="M58 185h83m-70 19h58m402-70h36m-74 22h96m-96 23h72m-72 25h39"/></>}
      </g>
      <path d={track} fill="none" stroke={`url(#${uid}-track)`} strokeWidth="13" opacity=".2" />
      <path d={track} fill="none" stroke="#567aa6" strokeWidth="2" />
      <path className="hs-signal-packet" d={track} pathLength="1" fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      <path className="hs-signal-trace" d={track} pathLength="1" fill="none" stroke={`url(#${uid}-track)`} strokeWidth="3" strokeLinecap="round" />
      <g className="hs-signal-endpoints" fill={accent}><circle cx="130" cy={kind === "whatsapp" ? 151 : kind === "enquiries" ? 180 : 112} r="5"/><circle cx="490" cy={kind === "whatsapp" ? 229 : kind === "enquiries" ? 240 : 136} r="5"/></g>
    <g className="hs-signal-toast" transform="translate(335 265)">
        <rect width="228" height="42" rx="14" fill="#10243c" stroke={accent} />
        <circle cx="23" cy="21" r="9" fill={accent}/>
        <path d="m19 21 3 3 5-6" fill="none" stroke="#0c1c30" strokeWidth="1.8"/>
        <text x="42" y="26" fill="#eef6ff" fontSize="15">{kind === "whatsapp" ? "Conversation started" : kind === "enquiries" ? "Brief ready for follow-up" : "Landing page opened"}</text>
      </g>
    </svg>
  );
}

export function HomepageSignals() {
  const [selected, setSelected] = useState(0);
  const scene = scenes[selected];
  return (
    <section className="hs-section hs-signals" aria-labelledby="hs-signals-title">
      <header className="hs-heading">
        <div><p className="hs-label">Connections that matter</p><h2 id="hs-signals-title">Make every visit <em>easier to act on.</em></h2></div>
        <p>See how a website connects the places customers find you with the ways they get in touch.</p>
      </header>
      <div className="hs-switch" role="group" aria-label="Explore website integrations">
        {scenes.map(({key,label,Icon}, index) => <button type="button" key={key} aria-pressed={index === selected} onClick={() => setSelected(index)}><Icon size={17} aria-hidden="true"/>{label}</button>)}
      </div>
      <div className="hs-signal-stage" key={scene.key}>
        <figure>
          <SignalGraphic kind={scene.key} accent={scene.accent}/>
          <figcaption>{scene.tags.map(tag => <span key={tag}>{tag}</span>)}</figcaption>
        </figure>
        <div className="hs-signal-copy" aria-live="polite">
          <h3>{scene.title}</h3><p>{scene.copy}</p><strong>{scene.outcome}</strong>
          {scene.key === "whatsapp"
            ? <a className="hs-link" href={company.whatsapp}>Try WhatsApp with Kabelo <ArrowUpRight size={16} aria-hidden="true"/></a>
            : <Link className="hs-link" href="/contact#enquiry">Discuss your setup <ArrowUpRight size={16} aria-hidden="true"/></Link>}
        </div>
      </div>
    </section>
  );
}

export function HeroConversation() {
  const uid = useId();
  return <svg className="hs-hero-chat" viewBox="0 0 162 238" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={uid + "-rim"} x2="1" y2="1"><stop stopColor="#fb7492"/><stop offset=".55" stopColor="#5d8fff"/><stop offset="1" stopColor="#b4d1ff"/></linearGradient>
    </defs>
    <rect x="1" y="1" width="160" height="236" rx="24" fill="#0d1429" stroke={`url(#${uid}-rim)`} strokeWidth="2"/>
    <rect x="9" y="10" width="144" height="216" rx="17" fill="#142941"/>
    <path d="M9 42h144" stroke="#49688a"/>
    <circle cx="25" cy="27" r="7" fill="#91e9bd" />
    <text x="39" y="31" fill="#f0f7ff" fontSize="12" fontWeight="650">WhatsApp</text>
    <g className="hs-chat-message">
      <rect x="18" y="58" width="119" height="33" rx="9" fill="#284361"/>
      <text x="26" y="79" fill="#edf5ff" fontSize="11">Can I book a consult?</text>
    </g>
    <g className="hs-chat-message hs-chat-reply">
      <rect x="27" y="101" width="116" height="33" rx="9" fill="#91e9bd"/>
      <text x="35" y="122" fill="#0a2c24" fontSize="11">How can we help?</text>
    </g>
    <g className="hs-chat-message hs-chat-result">
      <rect x="18" y="157" width="126" height="45" rx="11" fill="#142941" stroke="#82a8d6"/>
      <path d="m27 180 4 4 7-8" fill="none" stroke="#91e9bd" strokeWidth="2"/>
      <text x="45" y="185" fill="#e2edfc" fontSize="11">Enquiry received</text>
    </g>
  </svg>;
}

export function DeliveryGraphic() {
  const uid = useId();
  return <svg className="hs-delivery-svg" viewBox="0 0 500 330" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={uid + "-delivery"} x2="1" y2="1"><stop stopColor="#22192e"/><stop offset=".64" stopColor="#13284b"/><stop offset="1" stopColor="#121020"/></linearGradient>
    </defs>
    <rect x="44" y="30" width="412" height="270" rx="23" fill={`url(#${uid}-delivery)`} stroke="#829dca" />
    <path d="M44 78h412" stroke="#6388b6" />
    <g fill="#9fbbe0"><circle cx="66" cy="55" r="4"/><circle cx="80" cy="55" r="4"/><circle cx="94" cy="55" r="4"/></g>
    <g fill="none" stroke="#526f96" strokeWidth="2"><rect x="71" y="107" width="138" height="72" rx="10"/><rect x="71" y="196" width="138" height="73" rx="10"/><rect x="227" y="107" width="202" height="162" rx="10"/></g>
    <g fill="none" stroke="#9ebade" strokeWidth="3" strokeLinecap="round"><path d="M89 129h69m-69 17h88m-88 72h68m-68 17h88m70-101h99m-99 25h147m-147 25h88"/></g>
    <path className="hs-delivery-trace" pathLength="1" d="M249 231l15 15 28-37" fill="none" stroke="#93e7c8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}
