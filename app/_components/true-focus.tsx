"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type TrueFocusProps = {
  sentence: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
};

type FocusRect = { left: number; top: number; width: number; height: number };

export default function TrueFocus({
  sentence,
  manualMode = false,
  blurAmount = 5,
  borderColor = "red",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className = "",
}: TrueFocusProps) {
  const words = useMemo(() => sentence.trim().split(/\s+/).filter(Boolean), [sentence]);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const visibleRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusRect, setFocusRect] = useState<FocusRect>({ left: 0, top: 0, width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container || manualMode || words.length < 2) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => {
        visibleRef.current = Boolean(entry?.isIntersecting);
      }, { rootMargin: "160px 0px" })
      : null;

    if (observer) observer.observe(container);
    else visibleRef.current = true;

    const interval = window.setInterval(
      () => {
        if (visibleRef.current && !document.hidden && !reducedMotion.matches) {
          setActiveIndex((current) => (current + 1) % words.length);
        }
      },
      Math.max(500, (animationDuration + pauseBetweenAnimations) * 1000),
    );

    return () => {
      window.clearInterval(interval);
      observer?.disconnect();
    };
  }, [animationDuration, manualMode, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    const container = containerRef.current;
    const activeWord = wordRefs.current[activeIndex];
    if (!container || !activeWord) return;

    let frame = 0;
    const updateFrame = () => {
      const containerBounds = container.getBoundingClientRect();
      const wordBounds = activeWord.getBoundingClientRect();
      const nextRect = {
        left: wordBounds.left - containerBounds.left,
        top: wordBounds.top - containerBounds.top,
        width: wordBounds.width,
        height: wordBounds.height,
      };
      setFocusRect((current) => (
        current.left === nextRect.left &&
        current.top === nextRect.top &&
        current.width === nextRect.width &&
        current.height === nextRect.height
          ? current
          : nextRect
      ));
    };

    const scheduleFrame = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateFrame);
    };

    scheduleFrame();
    const resizeObserver = new ResizeObserver(scheduleFrame);
    resizeObserver.observe(container);
    resizeObserver.observe(activeWord);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
    };
  }, [activeIndex, words]);

  const style = {
    "--true-focus-blur": `${blurAmount}px`,
    "--true-focus-border": borderColor,
    "--true-focus-duration": `${animationDuration}s`,
  } as CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`true-focus ${className}`.trim()}
      style={style}
      role="text"
      aria-label={sentence}
    >
      {words.map((word, index) => (
        <span
          ref={(node) => { wordRefs.current[index] = node; }}
          className={`true-focus__word${activeIndex === index ? " is-active" : ""}`}
          key={`${word}-${index}`}
          aria-hidden="true"
          onMouseEnter={() => manualMode && setActiveIndex(index)}
          onFocus={() => manualMode && setActiveIndex(index)}
          tabIndex={manualMode ? 0 : -1}
        >
          {word}
        </span>
      ))}
      <span
        className="true-focus__frame"
        aria-hidden="true"
        style={{
          width: focusRect.width,
          height: focusRect.height,
          transform: `translate3d(${focusRect.left}px, ${focusRect.top}px, 0)`,
        }}
      />
    </div>
  );
}
