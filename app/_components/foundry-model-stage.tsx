"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";
import { Box, Layers3, MousePointer2, Orbit, Sparkles } from "lucide-react";
import "./foundry-model-stage.css";

type StageMode = "diagnostic" | "search" | "service";

type Props = {
  className?: string;
  eyebrow?: string;
  title?: string;
  mode?: StageMode;
};

const MODE_CONTENT: Record<StageMode, { accent: string; accentTwo: string; label: string }> = {
  diagnostic: { accent: "#ff4b69", accentTwo: "#46d9ff", label: "BUSINESS SIGNAL" },
  search: { accent: "#5bd8ef", accentTwo: "#f2c858", label: "SEARCH SIGNAL" },
  service: { accent: "#f2c858", accentTwo: "#ff4b69", label: "SERVICE SIGNAL" },
};

export function FoundryModelStage({ className = "", eyebrow = "SIGNAL CORE", title = "CARTER / 3D", mode = "diagnostic" }: Props) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const content = MODE_CONTENT[mode];

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: x * 12, y: y * -10 });
  };

  const style = {
    "--fms-rotate-x": `${tilt.y}deg`,
    "--fms-rotate-y": `${tilt.x}deg`,
    "--fms-accent": content.accent,
    "--fms-accent-two": content.accentTwo,
  } as CSSProperties;

  return (
    <div
      className={`foundry-model-stage foundry-model-stage--${mode} ${className}`}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      role="img"
      aria-label={`${content.label} interactive 3D visual`}
    >
      <div className="foundry-model-stage__topline">
        <span><i aria-hidden="true" /> {eyebrow}</span>
        <b>LIVE / 3D</b>
      </div>

      <div className="foundry-model-stage__world" aria-hidden="true">
        <span className="foundry-model-stage__ring foundry-model-stage__ring--one" />
        <span className="foundry-model-stage__ring foundry-model-stage__ring--two" />
        <span className="foundry-model-stage__ring foundry-model-stage__ring--three" />
        <span className="foundry-model-stage__axis foundry-model-stage__axis--x" />
        <span className="foundry-model-stage__axis foundry-model-stage__axis--y" />
        <span className="foundry-model-stage__axis foundry-model-stage__axis--z" />

        <div className="foundry-model-stage__core">
          <div className="foundry-model-stage__core-face">
            <Sparkles size={16} />
            <strong>CD</strong>
            <small>FOUNDRY</small>
          </div>
          <span className="foundry-model-stage__core-glow" />
        </div>

        <div className="foundry-model-stage__float foundry-model-stage__float--a">
          <Box size={15} />
          <strong>SPATIAL</strong>
          <small>Depth + presence</small>
        </div>
        <div className="foundry-model-stage__float foundry-model-stage__float--b">
          <Layers3 size={15} />
          <strong>SYSTEM</strong>
          <small>Built to travel</small>
        </div>
        <div className="foundry-model-stage__float foundry-model-stage__float--c">
          <Orbit size={15} />
          <strong>ROUTED</strong>
          <small>Signal to action</small>
        </div>
      </div>

      <div className="foundry-model-stage__bottomline">
        <span><MousePointer2 size={12} /> MOVE TO ORBIT</span>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default FoundryModelStage;
