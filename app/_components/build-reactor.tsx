"use client";

import { Layers3, MousePointer2, Sparkles } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import FlyingPosters from "./react-bits/flying-posters";
import { hasUsableWebGL } from "./webgl-support";
import "./build-reactor.css";

export type BuildReactorStep = {
  step: string;
  label: string;
  detail: string;
  canvasLabel: string;
  canvasTitle: string;
  canvasAccent: string;
  noteTitle: string;
  note: string;
};

type Props = {
  steps: readonly BuildReactorStep[];
  activeStep: number;
  onStepSelect?: (index: number) => void;
};

const POSTER_IMAGES = [
  "/images/homepage/carter-workshop.webp",
  "/images/homepage/carter-digital-directions.webp",
  "/images/homepage/carter-identity-poster-direction.webp",
  "/images/homepage/carter-website-architecture.webp",
];

export function BuildReactor({ steps, activeStep, onStepSelect }: Props) {
  const safeStep = Math.max(0, Math.min(steps.length - 1, activeStep));
  const active = steps[safeStep] ?? steps[0];
  const [webglState, setWebglState] = useState<"checking" | "ready" | "fallback">("checking");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setWebglState(window.matchMedia("(prefers-reduced-motion: reduce)").matches || !hasUsableWebGL() ? "fallback" : "ready");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handlePosterError = useCallback(() => setWebglState("fallback"), []);
  if (!active) return null;

  return (
    <div className="build-reactor react-bits-flying-posters" id="prototype-live-stage" aria-live="polite">
      <div className="build-reactor__chrome"><span><i /><i /><i /></span><b>CLIENT VIEW / 3D POSTER FIELD</b><small>LIVE / {active.step}</small></div>
      <div className="build-reactor__stage">
        <div className="build-reactor__stage-head"><span><Layers3 size={14} /> YOUR FIRST DIRECTION</span><b>{String(safeStep + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</b></div>
        <div className="build-reactor__stage-mark" aria-hidden="true">24H</div>
        <div className="build-reactor__poster-field" aria-label="Autoplay 3D prototype direction field">
          {webglState === "ready" ? (
            <FlyingPosters
              className="build-reactor__posters"
              items={POSTER_IMAGES}
              planeWidth={280}
              planeHeight={300}
              distortion={5}
              scrollEase={0.035}
              cameraFov={45}
              cameraZ={21}
              autoplay
              autoplaySpeed={0.00085}
              onError={handlePosterError}
              aria-hidden="true"
            />
          ) : (
            <div className="build-reactor__poster-fallback" aria-label="Prototype direction previews">
              {POSTER_IMAGES.slice(0, 3).map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className={index === safeStep ? "is-active" : ""}
                  onClick={() => onStepSelect?.(index)}
                  aria-label={`Show prototype direction ${steps[index]?.label ?? index + 1}`}
                >
                  <span style={{ backgroundImage: `url(${image})` }} />
                  <b>{steps[index]?.step ?? `0${index + 1}`}</b>
                </button>
              ))}
            </div>
          )}
          <div className="build-reactor__poster-overlay" aria-hidden="true">
            <span><i /> {webglState === "ready" ? "LIVE / AUTOPLAY 3D" : "PREVIEW THE DIRECTION"}</span>
            <b><MousePointer2 size={13} /> DRAG / WHEEL TO EXPLORE</b>
          </div>
        </div>
        <div className="build-reactor__stage-note">
          <span><Sparkles size={12} /> ACTIVE DIRECTION / {active.canvasLabel}</span>
          <strong>{active.canvasTitle} <em>{active.canvasAccent}</em></strong>
          <p>{active.detail}</p>
        </div>
      </div>
      <div className="build-reactor__footer"><span>REAL DIRECTION / REAL FEEDBACK / REAL BUILD</span><b>{active.note}</b></div>
    </div>
  );
}

export default BuildReactor;
