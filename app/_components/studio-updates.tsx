"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { websitePackages } from "../_lib/website-packages";

const updates = [
  `Custom websites from ${websitePackages[0].price}`,
  `Carter Growth · ${websitePackages[2].price}`,
  "Free demo for suitable website projects",
  "Pretoria-based · Working across South Africa",
  "Level 1 B-BBEE · Supplier documents available",
];

export function StudioUpdates() {
  const [paused, setPaused] = useState(false);
  return (
    <aside className="studio-updates" aria-label="Carter Digitals studio updates">
      <span className="studio-updates-label">Studio updates</span>
      <div className="studio-updates-window" tabIndex={0}>
        <div className="studio-updates-track" data-paused={paused}>
          <ul>{updates.map(item => <li key={item}>{item}</li>)}</ul>
          <ul aria-hidden="true">{updates.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Resume studio updates" : "Pause studio updates"}>
        {paused ? <Play size={15} aria-hidden="true"/> : <Pause size={15} aria-hidden="true"/>}
      </button>
    </aside>
  );
}
