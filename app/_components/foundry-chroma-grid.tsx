"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import type { ServiceKey, SignalKey } from "./business-signal-diagnostic";
import "./foundry-chroma-grid.css";

export type ChromaSignal = {
  key: SignalKey;
  number: string;
  label: string;
  short: string;
  service: ServiceKey;
  accent: string;
};

type Props = {
  items: readonly ChromaSignal[];
  active: SignalKey;
  onSelect: (key: SignalKey) => void;
};

export function FoundryChromaGrid({ items, active, onSelect }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);

  const moveSpotlight = (event: PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div className="foundry-chroma-grid" ref={gridRef} role="group" aria-label="Business signal choices">
      <div className="foundry-chroma-grid__rail" aria-hidden="true"><span>LIVE SURFACE / 05</span><i /><span>SELECT A FRICTION</span></div>
      <div className="foundry-chroma-grid__cards">
        {items.map((item) => {
          const isActive = item.key === active;
          return (
            <button
              type="button"
              key={item.key}
              className={`foundry-chroma-grid__card${isActive ? " is-active" : ""}`}
              style={{ "--chroma-accent": item.accent } as CSSProperties}
              aria-pressed={isActive}
              onPointerMove={moveSpotlight}
              onClick={() => onSelect(item.key)}
            >
              <span className="foundry-chroma-grid__spotlight" aria-hidden="true" />
              <span className="foundry-chroma-grid__card-top"><small>{item.number}</small><ArrowUpRight size={16} aria-hidden="true" /></span>
              <span className="foundry-chroma-grid__card-copy"><strong>{item.label}</strong><em>{item.short}</em></span>
              <span className="foundry-chroma-grid__card-foot"><Check size={14} /> ROUTE / {item.service.toUpperCase()}</span>
            </button>
          );
        })}
      </div>
      <div className="foundry-chroma-grid__signature" aria-hidden="true"><span /><span /><span /></div>
    </div>
  );
}

export default FoundryChromaGrid;
