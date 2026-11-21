"use client";

import { ArrowUpRight, Bot, MapPinned, Search, Sparkles } from "lucide-react";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import type { SearchSignalKey } from "./search-visibility-section";
import "./foundry-search-stack.css";

export type SearchSurface = {
  key: SearchSignalKey;
  label: string;
  title: string;
  accent: string;
  mark: string;
};

type Props = {
  surfaces: readonly SearchSurface[];
  active: SearchSignalKey;
  onSelect: (key: SearchSignalKey) => void;
};

const ICONS = { seo: Search, geo: Bot, sitemap: MapPinned } as const;

export function FoundrySearchStack({ surfaces, active, onSelect }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);

  const moveStage = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - .5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - .5) * 2;
    stageRef.current?.style.setProperty("--stack-tilt-x", `${(-y * 5).toFixed(2)}deg`);
    stageRef.current?.style.setProperty("--stack-tilt-y", `${(x * 7).toFixed(2)}deg`);
  };

  const resetStage = () => {
    stageRef.current?.style.setProperty("--stack-tilt-x", "0deg");
    stageRef.current?.style.setProperty("--stack-tilt-y", "0deg");
  };

  return (
    <div className="foundry-search-stack" ref={stageRef} onPointerMove={moveStage} onPointerLeave={resetStage}>
      <div className="foundry-search-stack__topline"><span><i /> SEARCH SURFACE / STACK</span><b>CLICK A LAYER</b></div>
      <div className="foundry-search-stack__scene" role="list" aria-label="Search visibility surfaces">
        <div className="foundry-search-stack__orbit foundry-search-stack__orbit--one" aria-hidden="true" />
        <div className="foundry-search-stack__orbit foundry-search-stack__orbit--two" aria-hidden="true" />
        {surfaces.map((surface, index) => {
          const Icon = ICONS[surface.key];
          const isActive = surface.key === active;
          return (
            <button
              type="button"
              key={surface.key}
              className={`foundry-search-stack__layer foundry-search-stack__layer--${index + 1}${isActive ? " is-active" : ""}`}
              style={{ "--stack-accent": surface.accent } as CSSProperties}
              aria-pressed={isActive}
              onClick={() => onSelect(surface.key)}
            >
              <span className="foundry-search-stack__layer-glow" aria-hidden="true" />
              <span className="foundry-search-stack__layer-head"><span>{surface.mark}</span><Icon size={18} aria-hidden="true" /></span>
              <span className="foundry-search-stack__layer-title"><strong>{surface.label}</strong><em>{surface.title}</em></span>
              <span className="foundry-search-stack__layer-foot"><Sparkles size={13} /> CLEAR SIGNAL <ArrowUpRight size={14} /></span>
            </button>
          );
        })}
        <div className="foundry-search-stack__core" aria-hidden="true"><span>CAR-<br />TER</span></div>
      </div>
      <div className="foundry-search-stack__hint"><span>01</span><i /><span>03</span><b>STACKED DISCOVERY / ONE CLEAR ROUTE</b></div>
    </div>
  );
}

export default FoundrySearchStack;
