"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Download, FileText, Layers3 } from "lucide-react";
import { websitePackages } from "../_lib/website-packages";

const scopes = [
  { id: "launch", label: "Up to 4 pages", reason: "Start with the essentials and one clear enquiry path." },
  { id: "business", label: "5–7 pages", reason: "Give your main services, projects and contact options room to breathe." },
  { id: "growth", label: "8–10 pages", reason: "Plan for a larger site with more content to organise and maintain." },
  { id: "custom", label: "More than 10 pages", reason: "We’ll map the pages and features before pricing the build." },
] as const;

export function WebsitePackageFinder() {
  const [scopeIndex, selectScope] = useState(0);
  const [editable, setEditable] = useState(false);
  const scope = scopes[scopeIndex];
  const choice = websitePackages.find(item => item.id === (editable && scope.id !== "custom" ? "growth" : scope.id));
  const reason = editable && choice ? "Carter Growth includes a CMS for up to three content types and 20 supplied entries." : scope.reason;
  const enquiry = new URLSearchParams({ service: "websites", brief: choice ? "the " + choice.name + " website package" : "a custom website with more than 10 pages" });
  if (choice) enquiry.set("package", choice.id);

  return (
    <section className="home-wrap home-section growth-section" id="package-finder" aria-labelledby="finder-heading">
      <div className="growth-heading">
        <span className="growth-icon"><Layers3 size={24} aria-hidden="true"/></span>
        <h2 id="finder-heading">Find the right <em>website package.</em></h2>
        <p>Choose your approximate page count and whether you need to edit content yourself. Get a practical starting point, guide price and delivery target. Final scope is confirmed together.</p>
      </div>
      <div className="growth-studio">
        <div className="growth-controls">
          <fieldset>
            <legend>How many pages do you need?</legend>
            <div className="growth-options">
              {scopes.map((item, index) => <label key={item.id}><input type="radio" name="website-page-count" checked={scopeIndex === index} onChange={() => selectScope(index)}/><span>{item.label}</span></label>)}
            </div>
          </fieldset>
          <label className="growth-check"><input type="checkbox" checked={editable} onChange={event => setEditable(event.target.checked)}/> I need to edit content after launch</label>
        </div>
        <div className="growth-result growth-result--dark">
          <div aria-live="polite">
            <span className="growth-label">Your starting point</span>
            <h3>{choice?.name ?? "Custom website scope"}</h3>
            <p className="growth-price">{choice ? choice.price : "Quote after scoping"}</p>
            <p>{reason}</p>
            {choice && <ul><li>{choice.scope}</li><li>{choice.timeline} target delivery</li><li>{choice.support}</li></ul>}
          </div>
          <Link className="growth-action" href={"/contact?" + enquiry.toString() + "#enquiry"}>Discuss this recommendation</Link>
          <Link className="growth-secondary" href="/pricing#websites">Compare all packages</Link>
        </div>
      </div>
    </section>
  );
}

const checks = [
  { title: "My homepage says what we do and who we help.", next: "Rewrite the first headline around your service and audience. Name your area if you serve a local market." },
  { title: "Someone can enquire easily from their phone.", next: "Open the site on your phone and try the full enquiry path. Put the right form, phone or WhatsApp action near the service." },
  { title: "We show relevant work, credentials or reviews.", next: "Add one proof point that answers a real buyer question. Use an approved project example, credential or review." },
  { title: "Our key services have pages people can find.", next: "Give each priority service a descriptive page title, helpful answers and a link from your site navigation." },
  { title: "We know which enquiries came from the site.", next: "Agree on what counts as an enquiry. Measure form submissions, and use distinct contact links where practical." },
];

export function WebsiteReadinessCheck() {
  const [selected, setSelected] = useState<number[]>([]);
  const openChecks = checks.filter((_, index) => !selected.includes(index));
  const brief = new URLSearchParams({ service: "websites", brief: `my website improvement plan (${selected.length} of ${checks.length} readiness checks marked complete)` });

  function downloadPlan() {
    const plan = [
      "MY WEBSITE IMPROVEMENT PLAN", "Prepared with Carter Digitals · carterdigitals.co.za", "",
      `${selected.length} of ${checks.length} checks marked complete by you.`, "",
      ...(openChecks.length ? ["WHAT TO IMPROVE", ...openChecks.map((item, index) => `${index + 1}. ${item.next}`)] : ["NEXT STEP", "Test the enquiry journey on a second device and review what visitors ask for most often."]),
      "", "PLAN A DEMO", "https://carterdigitals.co.za/contact#enquiry",
    ].join("\n");
    const url = URL.createObjectURL(new Blob([plan], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "carter-digitals-website-improvement-plan.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <section className="growth-check-section" id="website-check" aria-labelledby="check-heading">
      <div className="home-wrap home-section growth-section">
        <div className="growth-heading">
          <span className="growth-icon"><FileText size={24} aria-hidden="true"/></span>
          <h2 id="check-heading">See where your website <em>could work harder.</em></h2>
          <p>A quick self-assessment, not an automated scan. Tick what your website already does to create a free improvement plan you can keep and share.</p>
        </div>
        <div className="growth-studio">
          <div className="growth-controls"><fieldset className="readiness-checks">
            <legend>What’s already in place?</legend>
            {checks.map((item, index) => (
              <label className="growth-check" key={item.title}>
                <input type="checkbox" checked={selected.includes(index)} onChange={event => setSelected(current => event.target.checked ? [...current, index] : current.filter(value => value !== index))}/>
                {item.title}
              </label>
            ))}
          </fieldset></div>
          <div className="growth-result growth-result--paper">
            <div aria-live="polite">
              <span className="growth-label">Your self-assessment</span>
              <h3>{selected.length} of {checks.length} checks met</h3>
              <progress aria-label="Website checks met" max={checks.length} value={selected.length}/>
              <p>{openChecks.length ? <><strong>Start here.</strong> {openChecks[0].next}</> : <><Check size={17} aria-hidden="true"/> The basics are in place. Try the enquiry path on another phone and review the quality of enquiries it brings.</>}</p>
            </div>
            <button className="growth-action" type="button" onClick={downloadPlan}><Download size={17} aria-hidden="true"/> Download my free plan</button>
            <Link className="growth-secondary" href={"/contact?" + brief.toString() + "#enquiry"}>Discuss the plan with Kabelo</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
