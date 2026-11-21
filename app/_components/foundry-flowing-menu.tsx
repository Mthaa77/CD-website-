"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import type { ServiceKey } from "./business-signal-diagnostic";
import "./foundry-flowing-menu.css";

export type FlowingMenuItem = {
  id: ServiceKey;
  number: string;
  label: string;
  strap: string;
  image: string;
  imageAlt: string;
  accent: string;
};

type Props = {
  items: readonly FlowingMenuItem[];
  active: ServiceKey;
  onSelect: (service: ServiceKey) => void;
};

export function FoundryFlowingMenu({ items, active, onSelect }: Props) {
  const menuRef = useRef<HTMLElement>(null);

  const updatePointer = (event: PointerEvent<HTMLElement>) => {
    const row = event.currentTarget;
    const bounds = row.getBoundingClientRect();
    row.style.setProperty("--flow-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
    row.style.setProperty("--flow-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
  };

  return (
    <nav className="foundry-flowing-menu" aria-label="Carter Digitals service menu" ref={menuRef}>
      <div className="foundry-flowing-menu__caption"><span><i /> CHOOSE A BUILD SURFACE</span><b>HOVER / FOCUS / SELECT</b></div>
      <div className="foundry-flowing-menu__rows">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <div
              className={`foundry-flowing-menu__row${isActive ? " is-active" : ""}`}
              key={item.id}
              style={{ "--flow-accent": item.accent } as CSSProperties}
              onPointerMove={updatePointer}
            >
              <span className="foundry-flowing-menu__glow" aria-hidden="true" />
              <button
                type="button"
                className="foundry-flowing-menu__button"
                onClick={() => onSelect(item.id)}
                aria-pressed={isActive}
                aria-label={`Select ${item.label}`}
              >
                <span className="foundry-flowing-menu__number">{item.number}</span>
                <span className="foundry-flowing-menu__title">{item.label}</span>
                <span className="foundry-flowing-menu__strap">{item.strap}</span>
                <ArrowUpRight className="foundry-flowing-menu__arrow" size={24} aria-hidden="true" />
              </button>
              <div className="foundry-flowing-menu__marquee" aria-hidden="true">
                <div className="foundry-flowing-menu__marquee-track">
                  <strong>{item.label}</strong><span> / </span><em>{item.strap}</em><span> / </span>
                  <img src={item.image} alt="" loading="lazy" />
                  <strong>{item.label}</strong><span> / </span><em>{item.strap}</em><span> / </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default FoundryFlowingMenu;
