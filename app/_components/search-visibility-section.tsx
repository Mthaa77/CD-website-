"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Bot, Check, Map, Search } from "lucide-react";
import { useState } from "react";
import SearchConstellation from "./search-constellation";
import type { SearchSurface } from "./foundry-search-stack";
import "./search-visibility-section.css";
import "./search-visibility-visuals.css";

const SEARCH_SIGNALS = [
  {
    key: "seo",
    number: "01",
    label: "SEO / GOOGLE",
    strap: "Be found by the right people",
    title: "Help the right customer find you.",
    copy: "SEO is not stuffing a page with keywords. It is making the right page, service and location obvious to Google. We shape your titles, headings, copy and local search language around the questions your customers actually type.",
    detail: "When someone in Pretoria, Centurion or Johannesburg searches for what you do, your website should make the answer plain—and make the next step easy.",
    checks: ["Clear page titles and headings", "Local search language that sounds human", "Useful service pages built around real questions"],
    icon: Search,
    tone: "cyan",
    status: "DISCOVERABLE",
  },
  {
    key: "geo",
    number: "02",
    label: "GEO / AI SEARCH",
    strap: "Be understood when AI answers",
    title: "Give AI a business it can explain.",
    copy: "GEO means Generative Engine Optimisation: structuring your content so AI search tools can understand what you do, who you serve and why someone should trust you.",
    detail: "Direct answers, consistent business details, useful FAQs and structured data give Google’s AI features and other answer engines better information to work with.",
    checks: ["Direct answers to customer questions", "Consistent facts about your business", "Structured data for clearer context"],
    icon: Bot,
    tone: "coral",
    status: "UNDERSTANDABLE",
  },
  {
    key: "sitemap",
    number: "03",
    label: "SITEMAP / CRAWL",
    strap: "Give every important page a route",
    title: "Make the whole site easy to explore.",
    copy: "An XML sitemap is a clean list of the pages you want search engines to discover. We pair it with sensible robots.txt rules, canonical URLs and internal links so crawlers can move through your site without guessing.",
    detail: "That technical groundwork does not replace good content. It makes sure the good content you publish can actually be found, understood and revisited.",
    checks: ["XML sitemap connected to the site", "Robots.txt and canonical URL foundations", "Internal links that lead people and crawlers"],
    icon: Map,
    tone: "gold",
    status: "WELL ROUTED",
  },
] as const;

export type SearchSignalKey = (typeof SEARCH_SIGNALS)[number]["key"];

const SEARCH_SURFACES: SearchSurface[] = SEARCH_SIGNALS.map((signal) => ({
  key: signal.key,
  label: signal.label,
  title: signal.status,
  accent: signal.tone === "cyan" ? "#5bd8ef" : signal.tone === "coral" ? "#f2637f" : "#f2c858",
  mark: signal.number,
}));

export function SearchVisibilitySection() {
  const [activeKey, setActiveKey] = useState<SearchSignalKey>("seo");
  const active = SEARCH_SIGNALS.find((signal) => signal.key === activeKey) ?? SEARCH_SIGNALS[0];

  return (
    <section className="search-visibility" id="search-visibility" aria-labelledby="search-visibility-title">
      <div className="search-visibility__intro" data-reveal>
        <div>
          <span className="search-visibility__kicker">SEARCH VISIBILITY / SEO + GEO</span>
          <h2 id="search-visibility-title">Be found on Google.<br /><em>Be understood by AI.</em></h2>
        </div>
        <div className="search-visibility__intro-copy">
          <span className="search-visibility__intro-index">03 / SEARCH FOUNDATION</span>
          <p>People search before they call. Now they ask AI what to choose, who to trust and where to go. We make your website easier for both to read—with page SEO, GEO-ready answers, an XML sitemap, robots.txt and clear internal links—so your business has a stronger chance of appearing when the right customer is looking.</p>
        </div>
      </div>

      <div className="search-visibility__shell" data-reveal>
        <div className="search-visibility__shell-head">
          <span><i aria-hidden="true" /> SEARCH VISIBILITY SYSTEM</span>
          <b>03 FOUNDATIONS <strong>·</strong> 01 CLEAR ROUTE</b>
        </div>

        <div className="search-visibility__workspace">
          <div className="search-visibility__selector" role="tablist" aria-label="Search visibility foundations">
            {SEARCH_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              const isActive = signal.key === activeKey;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="search-visibility-panel"
                  className={`search-visibility__tab search-visibility__tab--${signal.tone}${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveKey(signal.key)}
                  key={signal.key}
                >
                  <span className="search-visibility__tab-top"><small>{signal.number}</small><Icon size={19} aria-hidden="true" /></span>
                  <strong>{signal.label}</strong>
                  <em>{signal.strap}</em>
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <article
            className={`search-visibility__readout search-visibility__readout--${active.tone}`}
            id="search-visibility-panel"
            role="tabpanel"
            aria-live="polite"
            aria-labelledby="search-visibility-title"
            key={active.key}
          >
            <SearchConstellation surfaces={SEARCH_SURFACES} active={activeKey} onSelect={setActiveKey} />
            <div className="search-visibility__readout-copy">
              <span className="search-visibility__readout-label">{active.label} / {active.strap}</span>
              <h3>{active.title}</h3>
              <p>{active.copy}</p>
              <p className="search-visibility__readout-detail">{active.detail}</p>
              <ul>
                {active.checks.map((check) => <li key={check}><Check size={15} aria-hidden="true" />{check}</li>)}
              </ul>
            </div>
          </article>
        </div>

        <div className="search-visibility__route" aria-label="How search visibility works">
          <span className="search-visibility__route-node">YOUR BUSINESS</span>
          <i aria-hidden="true" />
          <span className="search-visibility__route-node search-visibility__route-node--active">CLEAR PAGE SIGNALS</span>
          <i aria-hidden="true" />
          <span className="search-visibility__route-node">GOOGLE / AI ANSWER</span>
        </div>

        <div className="search-visibility__technical-proof" data-reveal>
          <figure>
            <Image src="/images/homepage/carter-website-architecture.webp" alt="Illustrated website architecture with interface, server, code and cloud deployment signals" fill sizes="(max-width: 900px) 88vw, 38vw" loading="lazy" unoptimized />
            <figcaption><span>TECHNICAL FOUNDATION</span><strong>Good content needs a clean route.</strong></figcaption>
          </figure>
          <div>
            <span>THE PART PEOPLE DO NOT SEE</span>
            <h3>Make every useful page easier to reach.</h3>
            <p>Search visibility is part message, part structure. We connect the two so customers get a clear answer—and search engines get a clear path through your business.</p>
            <div><i aria-hidden="true" /> XML SITEMAP <b>·</b> INTERNAL LINKS <b>·</b> CLEAR CONTEXT</div>
          </div>
        </div>
      </div>

      <div className="search-visibility__foot" data-reveal>
        <div>
          <span>THE HONEST VERSION</span>
          <p>Nobody can honestly promise position one overnight. We build the technical foundation, then pair it with useful local content, proof and consistency so your visibility has room to compound.</p>
        </div>
        <Link href="/seo-geo-pretoria">Explore the SEO + GEO foundation <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}

export default SearchVisibilitySection;
