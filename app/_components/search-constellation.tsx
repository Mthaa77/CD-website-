"use client";

import { Bot, MapPinned, Search, Sparkles } from "lucide-react";
import { useMemo, type CSSProperties } from "react";
import type { SearchSignalKey } from "./search-visibility-section";
import type { SearchSurface } from "./foundry-search-stack";
import LogoLoop, { type LogoItem } from "./react-bits/logo-loop";
import "./search-constellation.css";

type Props = {
  surfaces: readonly SearchSurface[];
  active: SearchSignalKey;
  onSelect: (key: SearchSignalKey) => void;
};

const ICONS = { seo: Search, geo: Bot, sitemap: MapPinned } as const;

export function SearchConstellation({ surfaces, active, onSelect }: Props) {
  const loopItems = useMemo<LogoItem[]>(
    () =>
      surfaces.map((surface) => {
        const Icon = ICONS[surface.key];
        return {
          node: (
            <div className="search-constellation__loop-item" style={{ "--surface-accent": surface.accent } as CSSProperties}>
              <span className="search-constellation__loop-item-mark">{surface.mark}</span>
              <span className="search-constellation__loop-item-copy">
                <small>{surface.label}</small>
                <strong>{surface.title}</strong>
              </span>
              <Icon size={22} aria-hidden="true" />
            </div>
          ),
          title: surface.label,
          ariaLabel: surface.label + " search visibility surface",
        };
      }),
    [surfaces],
  );

  const activeIndex = Math.max(0, surfaces.findIndex((surface) => surface.key === active));
  const activeSurface = surfaces[activeIndex] ?? surfaces[0];

  return (
    <div className="search-constellation react-bits-logo-loop" role="group" aria-label="Autoplay search visibility surfaces">
      <div className="search-constellation__topline">
        <span><i aria-hidden="true" /> DISCOVERY SIGNAL LOOP</span>
        <b>SEARCH VISIBILITY</b>
      </div>

      <div className="search-constellation__field">
        <div className="search-constellation__halo" aria-hidden="true" />
        <div className="search-constellation__field-label"><span>SEARCH SURFACES</span><b>AUTOPLAY / HOVER TO SLOW</b></div>
        <LogoLoop
          logos={loopItems}
          className="search-constellation__logo-loop"
          speed={52}
          direction="left"
          logoHeight={118}
          gap={16}
          hoverSpeed={18}
          scaleOnHover
          fadeOut
          fadeOutColor="#061522"
          ariaLabel="Autoplay search visibility surfaces"
          renderItem={(item) => ("node" in item ? item.node : null)}
        />
        <div className="search-constellation__surface-controls" role="group" aria-label="Select a search visibility surface">
          {surfaces.map((surface, index) => (
            <button
              type="button"
              key={surface.key}
              className={surface.key === active ? "is-active" : ""}
              aria-pressed={surface.key === active}
              onClick={() => onSelect(surface.key)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{surface.label}</strong>
            </button>
          ))}
        </div>
        <div className="search-constellation__deck-status" aria-live="polite">
          <span>ACTIVE / {String(activeIndex + 1).padStart(2, "0")}</span>
          <b>{activeSurface?.label ?? "SEARCH"}</b>
        </div>
      </div>

      <div className="search-constellation__footer"><span><Sparkles size={13} /> SEARCH-READY STRUCTURE</span><b>3 SURFACES / 1 AUTOPLAY LOOP</b></div>
    </div>
  );
}

export default SearchConstellation;
