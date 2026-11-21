"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import CircularGallery from "./react-bits/circular-gallery";
import "./project-case-gallery.css";

const CASES = [
  { category: "DENTAL PRACTICE / PROTOTYPE", title: "A brighter smile. A clearer booking journey.", description: "A calm, premium patient journey for a Centurion dental practice—built to establish confidence, explain care and move ready patients towards a consultation.", image: "/images/case-studies/refresh-dental.webp", alt: "Refresh Dental website prototype showing a premium dental practice hero", focus: "Dental websites", tone: "coral" },
  { category: "SCHOOL WEBSITE / PROTOTYPE", title: "Knowledge. Skill. A clear next step.", description: "A useful digital front door for a Gauteng technical high school, helping parents and learners understand the institution, admissions route and opportunities available.", image: "/images/case-studies/sj-van-der-merwe.webp", alt: "SJ Van der Merwe technical high school website prototype", focus: "School websites", tone: "gold" },
  { category: "SCHOOL WEBSITE / DIRECTION", title: "Seven decades. One clear next step.", description: "An institutional direction that turns heritage into a usable journey for families, learners and the wider school community.", image: "/images/case-studies/hillview-high.webp", alt: "Hillview High School website direction", focus: "Education", tone: "green" },
  { category: "LAW FIRM / CONCEPT STUDY", title: "Authority without the distance.", description: "An editorial law-firm direction using presence, clarity and restraint to make specialist expertise feel credible, understandable and easier to contact.", image: "/images/case-studies/legal-firm-direction.webp", alt: "Premium law firm website concept with lawyers in a modern office", focus: "Law firm websites", tone: "amber" },
  { category: "LAW FIRM / PROTOTYPE", title: "Counsel with clarity.", description: "A legal experience shaped around the moment a person needs help: recognise the matter, understand the route and make contact confidently.", image: "/images/case-studies/im-attorneys.webp", alt: "IM Attorneys website prototype with legal office and consultation call to action", focus: "Legal websites", tone: "ivory" },
  { category: "WEBSITE / CAMPAIGN POSTER", title: "Make the digital future visible.", description: "A Carter Digitals campaign visual showing how a website offer can be made instantly legible across a premium promotional format.", image: "/images/case-studies/carter-website-poster.webp", alt: "Carter Digitals custom website development campaign visual", focus: "Posters", tone: "blue" },
  { category: "PRODUCT INTERFACE / CONCEPT", title: "Turn the dashboard into a decision.", description: "A mobile product direction for teams that need their important numbers, tasks and next actions visible at a glance.", image: "/images/case-studies/mobile-product-concept.webp", alt: "Mobile product interface concept showing a business dashboard", focus: "App interfaces", tone: "sky" },
  { category: "3D LOGO / BRAND ASSET", title: "Give the mark some presence.", description: "A dimensional identity treatment for an education and training brand—made to hold its own in print, signage and digital spaces.", image: "/images/case-studies/lesias-logo.webp", alt: "Lesia's Educational Services dimensional logo artwork", focus: "3D logos", tone: "navy" },
] as const;

const galleryItems = CASES.map((item, index) => ({
  image: item.image,
  text: `${String(index + 1).padStart(2, "0")} / ${item.focus.toUpperCase()}`,
}));

export function ProjectCaseGallery() {
  const [active, setActive] = useState(0);
  const project = CASES[active];

  const handleIndexKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowDown" && event.key !== "ArrowLeft" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (index + direction + CASES.length) % CASES.length;
    setActive(nextIndex);
    document.getElementById("case-index-" + nextIndex)?.focus();
  };

  return (
    <section className={"project-cases project-cases--" + project.tone} id="project-cases" aria-labelledby="project-cases-title">
      <div className="project-cases__topline" data-reveal>
        <span>SELECTED WORK / CASE ROOM</span>
        <div><b>08</b><span>VISUAL DIRECTIONS / SOUTH AFRICAN SECTORS</span></div>
      </div>

      <div className="project-cases__intro" data-reveal>
        <span className="project-cases__kicker">THE DIGITAL FOUNDRY / PROOF BEFORE PROMISE</span>
        <h2 id="project-cases-title">See the thinking<br /><em>before you buy the build.</em></h2>
        <p>Every sector earns trust differently. Move through the room to see how we turn the first impression into a clearer journey for South African law firms, schools, dental practices, brands and ambitious businesses.</p>
        <div className="project-cases__manifest" aria-label="Selected work summary">
          <div><b>08</b><span>directions<br />in the room</span></div>
          <div><b>05</b><span>sectors<br />represented</span></div>
          <div><b>01</b><span>clear next<br />move</span></div>
        </div>
        <div className="project-cases__focus-list" aria-label="Industries represented"><span>Law firms</span><span>Schools</span><span>Dental</span><span>3D identity</span><span>Campaigns</span></div>
      </div>

      <div className="project-cases__spiral" data-reveal>
        <div className="project-cases__room-bar">
          <span><i aria-hidden="true" /> OPEN PROJECT ROOM</span>
          <b>01—08 / DRAG, WHEEL OR USE ARROWS</b>
        </div>
        <div className="project-cases__circular-gallery" aria-label="3D selected work gallery">
          <CircularGallery
            items={galleryItems}
            bend={-2.4}
            textColor="#d7eef2"
            borderRadius={0.06}
            font="600 24px Arial"
            scrollSpeed={2.1}
            scrollEase={0.06}
          />
        </div>
      </div>

      <article className="project-cases__detail" key={project.title} aria-live="polite">
        <div className="project-cases__detail-head">
          <span>CASE {String(active + 1).padStart(2, "0")} / OPEN DIRECTION</span>
          <b>{project.category}</b>
        </div>
        <div className="project-cases__detail-main">
          <div className="project-cases__detail-copy">
            <span className="project-cases__detail-kicker">THE MOVE</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="project-cases__detail-media">
            <Image src={project.image} alt={project.alt} fill sizes="(max-width: 720px) 92vw, 34vw" unoptimized onError={(event) => { event.currentTarget.src = "/images/homepage/carter-digital-foundry.webp"; }} />
            <span>VISUAL PROOF / {project.focus.toUpperCase()}</span>
          </div>
        </div>
        <div className="project-cases__detail-footer">
          <span>FOCUS / {project.focus}</span>
          <Link href="#project-route">Build something like this <ArrowUpRight size={16} /></Link>
        </div>
      </article>

      <nav className="project-cases__index" aria-label="Project case index" data-reveal>
        <div className="project-cases__index-head">
          <div><span>CASE INDEX / 08 DIRECTIONS</span><strong>Select a direction. The room follows.</strong></div>
          <b>ARROW KEYS / TOUCH / CLICK</b>
        </div>
        <div className="project-cases__index-track">
          {CASES.map((item, index) => (
            <button
              type="button"
              id={"case-index-" + index}
              key={item.title}
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
              onKeyDown={(event) => handleIndexKeyDown(event, index)}
              aria-label={"Show case " + (index + 1) + ": " + item.focus}
              aria-pressed={active === index}
            >
              <span className="project-cases__index-thumb"><Image src={item.image} alt="" fill sizes="8rem" unoptimized /></span>
              <span className="project-cases__index-number">0{index + 1}</span>
              <span className="project-cases__index-copy"><strong>{item.focus}</strong><small>{item.category.split(" / ")[0]}</small></span>
              <ChevronRight size={15} aria-hidden="true" />
            </button>
          ))}
        </div>
      </nav>
    </section>
  );
}

export default ProjectCaseGallery;
