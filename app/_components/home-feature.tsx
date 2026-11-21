"use client";

import { useState } from "react";
import Link from "next/link";
import { stories } from "../_lib/sector-stories";
import { sectors } from "../_lib/catalogue";

const featured = [
  { slug: "construction", label: "Construction", title: "From project portfolio to quote request." },
  { slug: "law-firms", label: "Law", title: "Give every matter a clear first step." },
  { slug: "dental-practices", label: "Dental", title: "Make it easier to plan a first visit." },
  { slug: "schools", label: "Schools", title: "One clear route into admissions." },
];

export function HomeFeature() {
  const [active, select] = useState(0);
  const feature = featured[active];
  const sector = sectors.find(item => item.slug === feature.slug);
  const story = stories[feature.slug];
  return (
    <section className="home-showcase" aria-label="Website concepts by industry">
      <div className="home-feature" id="featured-industry-concept">
        <img key={feature.slug} className="home-feature-photo" src={"/images/industry/" + feature.slug + ".webp"} width={950} height={633} fetchPriority={active === 0 ? "high" : "auto"} alt=""/>
        <span className="home-feature-label">Website concept</span>
        <div className="home-feature-caption" key={feature.slug + "-caption"} aria-live="polite">
          <span>{sector?.name}</span>
          <strong>{feature.title}</strong>
          <Link className="home-feature-open" href={"/sectors/" + feature.slug}>Try the {story.label.toLowerCase()}</Link>
        </div>
      </div>
      <div className="home-feature-options" role="group" aria-label="Choose an industry concept">
        {featured.map((item, index) => (
          <button key={item.slug} type="button" aria-pressed={index === active} aria-controls="featured-industry-concept" onClick={() => select(index)}>{item.label}</button>
        ))}
      </div>
    </section>
  );
}
