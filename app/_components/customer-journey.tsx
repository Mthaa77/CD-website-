"use client";

import { useState } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { Check, Globe2, MessageCircle, Search, ShieldCheck, Smartphone } from "lucide-react";

const chapters = [
  { id: "find", label: "Get found", title: "Be easy to find.", detail: "Show what you do and where you work. Give Google clear service pages and give people a useful answer when they land.", icon: Search, scene: "Service search" },
  { id: "trust", label: "Earn trust", title: "Make the decision easier.", detail: "Put your people, credentials and relevant work where a buyer can check them. A clear mobile layout lets them do it between meetings.", icon: ShieldCheck, scene: "Business website" },
  { id: "enquire", label: "Turn interest into action", title: "Get a brief you can use.", detail: "Collect what matters before the first call. A focused form or WhatsApp link helps customers tell you what they need.", icon: MessageCircle, scene: "Project enquiry" },
] as const;

function WebsiteScene({ index }: { index: number }) {
  const chapter = chapters[index];
  return (
    <div className="journey-display" data-stage={chapter.id}>
      <div className="journey-display-bar"><Globe2 size={17} />{chapter.scene}<span>Illustrative example</span></div>
      <svg key={chapter.id} viewBox="0 0 640 400" className="journey-svg" aria-hidden="true" fill="none">
        <defs>
          <pattern id="journey-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" stroke="#b6c9ff" opacity=".13" /></pattern>
          <linearGradient id="journey-surface" x2="100%" y2="100%"><stop stopColor="#26303d" /><stop offset="1" stopColor="#101419" /></linearGradient>
          <linearGradient id="journey-chrome"><stop stopColor="#9cb6ff" /><stop offset=".48" stopColor="#f7f9ff" /><stop offset="1" stopColor="#5478e5" /></linearGradient>
        </defs>
        <rect width="640" height="400" fill="url(#journey-grid)"/>
        <path d="M24 68V24H68M572 24h44v44M616 332v44h-44M68 376H24v-44" stroke="#9aafd8" opacity=".45"/>
        {index === 0 && <>
          <path className="journey-trace" pathLength="1" d="M58 200H119M520 200h60m-75 0 52-92h52m-104 92 52 92h52" stroke="url(#journey-chrome)" strokeWidth="2.5"/>
          <rect className="journey-layer" x="108" y="66" width="424" height="268" rx="24" fill="url(#journey-surface)" stroke="#8393af"/>
          <rect x="133" y="91" width="374" height="53" rx="26" fill="#151a24" stroke="#747e94"/>
          <Search x="151" y="105" size="23" stroke="#bdcaff"/>
          <text x="186" y="124" className="journey-svg-label">Commercial renovations Pretoria</text>
          <g className="journey-layer journey-delay" transform="translate(133 165)">
            <rect width="374" height="143" rx="16" fill="#e7efff"/>
            <text x="23" y="45" className="journey-svg-title" fill="#182548">Renovation services</text>
            <text x="23" y="80" className="journey-svg-body" fill="#38496d">Project types · Service areas</text>
            <path d="M23 111h140" stroke="#4474ec" strokeWidth="3" strokeLinecap="round"/>
          </g>
        </>}
        {index === 1 && <>
          <path className="journey-trace" pathLength="1" d="M50 282H117l52-76h57m180-33h100l55-54h40" stroke="url(#journey-chrome)" strokeWidth="2.5"/>
          <g className="journey-layer" transform="translate(89 62)">
            <rect width="374" height="270" rx="24" fill="url(#journey-surface)" stroke="#9199ab"/>
            <path d="M0 42h374" stroke="#596270"/>
            {[18,31,44].map(x => <circle key={x} cx={x} cy="21" r="3.5" fill="#aebad2"/>)}
            <text x="23" y="82" className="journey-svg-label">Capabilities</text>
            <rect x="23" y="102" width="180" height="111" rx="12" fill="#a64048"/>
            <path d="m37 191 37-59 30 34 27-41 53 66" stroke="#ffc2c7" strokeWidth="2"/>
            <text x="227" y="133" className="journey-svg-body" fill="#f5f5f8">Relevant work</text>
            <text x="227" y="172" className="journey-svg-body" fill="#f5f5f8">Expert team</text>
            <text x="227" y="210" className="journey-svg-body" fill="#f5f5f8">Credentials</text>
          </g>
          <g className="journey-layer journey-delay" transform="translate(435 126)">
            <rect width="121" height="214" rx="18" fill="#f3eef0" stroke="#f5cad0"/>
            <Smartphone x="45" y="27" size="31" stroke="#96363e"/>
            <rect x="16" y="77" width="89" height="58" rx="10" fill="#b5293f"/>
            <path d="M19 157h82m-82 19h63" stroke="#535b67" strokeWidth="3" strokeLinecap="round"/>
          </g>
        </>}
        {index === 2 && <>
          <path className="journey-trace" pathLength="1" d="M53 210h54m326 0h74l39-48" stroke="url(#journey-chrome)" strokeWidth="2.5"/>
          <g className="journey-layer" transform="translate(100 51)">
            <rect width="399" height="299" rx="24" fill="url(#journey-surface)" stroke="#989cad"/>
            <text x="25" y="53" className="journey-svg-title" fill="#f4f5fa">Request a site visit</text>
            <text x="35" y="91" className="journey-svg-body" fill="#bac7dd">Project type</text>
            <text x="35" y="165" className="journey-svg-body" fill="#bac7dd">Location</text>
            <rect x="23" y="102" width="352" height="43" rx="8" fill="#393f47"/>
            <rect x="23" y="176" width="352" height="43" rx="8" fill="#393f47"/>
            <text x="38" y="129" className="journey-svg-body" fill="#fff">Commercial renovation</text>
            <text x="38" y="204" className="journey-svg-body" fill="#fff">Centurion, Gauteng</text>
            <rect x="23" y="239" width="186" height="40" rx="20" fill="#f2d698"/>
            <text x="46" y="264" className="journey-svg-body" fill="#242328">Prepare enquiry</text>
          </g>
          <g className="journey-layer journey-delay"><circle cx="533" cy="151" r="39" fill="#f2d698"/><Check x="514" y="132" size="38" stroke="#30271d" /></g>
        </>}
      </svg>
    </div>
  );
}

export function CustomerJourney() {
  const [active, setActive] = useState(0);
  const [replay, setReplay] = useState(0);
  const chapter = chapters[active];

  return (
    <section className="journey-section wide-journey" id="website-benefits" aria-labelledby="journey-heading">
      <div className="home-wrap journey-inner">
        <div className="journey-intro">
          <p className="studio-kicker">Website activity · Interactive example</p>
          <h2 id="journey-heading" className="studio-display">Give buyers a clear <em>path to you.</em></h2>
          <p>Follow one customer from their first search to a useful enquiry.</p>
          <div className="journey-controls" role="group" aria-label="Choose a website benefit">
            {chapters.map((item, index) => (
              <button key={item.id} type="button" aria-pressed={active === index} aria-controls="journey-scene" onClick={() => setActive(index)}>
                <item.icon size={20} aria-hidden="true"/><span>{item.label}</span>
              </button>
            ))}
          </div>
          <div className="journey-copy" aria-live="polite">
            <h3>{chapter.title}</h3>
            <p>{chapter.detail}</p>
          </div>
        </div>
        <div className="journey-showcase" id="journey-scene">
          <WebsiteScene key={active + "-" + replay} index={active}/>
          <div className="journey-showcase-footer">
            <button className="journey-replay" type="button" onClick={() => setReplay(value => value + 1)}><RotateCcw size={17} aria-hidden="true"/> Replay animation</button>
            <Link href="/sectors/construction">Try the project brief builder</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
