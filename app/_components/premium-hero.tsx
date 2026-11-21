"use client";

import Link from "next/link";
import Image from "next/image";
import { Component, useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import Hyperspeed from "./Hyperspeed";
import { hasUsableWebGL } from "./webgl-support";
import "./premium-hero.css";

type PremiumHeroProps = {
  onStartProject?: () => void;
};

type HyperspeedBoundaryProps = { children: ReactNode; onFailure: () => void };

class HyperspeedBoundary extends Component<HyperspeedBoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onFailure();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const HYPERSPEED_OPTIONS = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: "turbulentDistortion",
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  motionScale: 0.62,
  carLightsFade: 0.34,
  totalSideLightSticks: 22,
  lightPairsPerRoadWay: 42,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5] as [number, number],
  lightStickHeight: [1.3, 1.7] as [number, number],
  movingAwaySpeed: [60, 80] as [number, number],
  movingCloserSpeed: [-120, -160] as [number, number],
  carLightsLength: [400 * 0.03, 400 * 0.2] as [number, number],
  carLightsRadius: [0.05, 0.14] as [number, number],
  carWidthPercentage: [0.3, 0.5] as [number, number],
  carShiftX: [-0.8, 0.8] as [number, number],
  carFloorSeparation: [0, 5] as [number, number],
  colors: {
    roadColor: 0x07111f,
    islandColor: 0x0a1424,
    background: 0x02060e,
    shoulderLines: 0xffffff,
    brokenLines: 0x8ecbff,
    leftCars: [0xd7193f, 0xf0445f, 0xffffff],
    rightCars: [0x0b63ce, 0x2f8cff, 0xffffff],
    sticks: 0xd7193f,
  },
};

export function PremiumHero({ onStartProject }: PremiumHeroProps = {}) {
  const [webglState, setWebglState] = useState<"checking" | "ready" | "fallback">("checking");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setWebglState(window.matchMedia("(prefers-reduced-motion: reduce)").matches || !hasUsableWebGL() ? "fallback" : "ready");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="premium-hero" id="route-launcher" aria-labelledby="premium-hero-title">
      <div className="premium-hero__hyperspeed" aria-hidden="true">
        <div className="premium-hero__fallback" />
        {webglState === "ready" && <HyperspeedBoundary onFailure={() => setWebglState("fallback")}><Hyperspeed effectOptions={HYPERSPEED_OPTIONS} /></HyperspeedBoundary>}
      </div>
      <div className="premium-hero__veil" aria-hidden="true" />
      <div className="premium-hero__grid" aria-hidden="true" />

      <div className="premium-hero__topline">
        <span><i aria-hidden="true" /> CARTER DIGITALS / FOUNDER-LED DIGITAL STUDIO</span>
        <span>PRETORIA <b>·</b> SOUTH AFRICA</span>
      </div>

      <div className="premium-hero__main">
        <div className="premium-hero__copy">
          <div className="premium-hero__kicker"><Sparkles size={14} /> THE FIRST IMPRESSION IS THE BUSINESS <i aria-hidden="true" /></div>
          <p className="premium-hero__location">CUSTOM WEBSITES / 3D BRAND IDENTITY / CAMPAIGN VISUALS</p>
          <h1 id="premium-hero-title">Look established. <em>Win the enquiry.</em></h1>
          <p className="premium-hero__lede">South African customers check you before they call, visit or send a WhatsApp. We build the website, identity or campaign that makes your value obvious, your business credible and the next move easy.</p>
          <div className="premium-hero__offerline" aria-label="Carter Digitals website offer"><strong>Websites from R2,799</strong><span>First visual direction in 24 hours · Focused builds in 5–7 working days</span></div>

          <div className="premium-hero__route" aria-label="Carter Digitals project route">
            <span><b>01</b> Make value obvious</span>
            <span><b>02</b> Build public trust</span>
            <span><b>03</b> Make action feel easy</span>
          </div>

          <div className="premium-hero__actions">
            <a className="premium-hero__cta premium-hero__cta--primary" href="/contact" onClick={onStartProject}>
              <span>Start with the business problem</span>
              <ArrowUpRight size={18} />
            </a>
            <Link className="premium-hero__cta premium-hero__cta--secondary" href="/work">
              <span>See the work before you commit</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <p className="premium-hero__reassurance">No bloated pitch. One clear scope, one visible direction and one team from the first brief to launch.</p>

          <div className="premium-hero__proofline" aria-label="Carter Digitals credentials">
            <span><Check size={13} /> B-BBEE LEVEL 1</span>
            <span><Check size={13} /> 100% BLACK-OWNED</span>
            <span><Check size={13} /> BUILT IN PRETORIA</span>
            <span><Check size={13} /> CSD REGISTERED</span>
            <span><Check size={13} /> POPIA ALIGNED</span>
          </div>
        </div>

        <aside className="premium-hero__stage" aria-label="Carter Digitals visual direction">
          <div className="premium-hero__stage-orbit premium-hero__stage-orbit--outer" aria-hidden="true" />
          <div className="premium-hero__stage-orbit premium-hero__stage-orbit--inner" aria-hidden="true" />
          <figure className="premium-hero__proof-card">
            <div className="premium-hero__proof-card-bar">
              <span><i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" /></span>
              <b>CD / FIRST IMPRESSION</b>
              <small>01 / 03</small>
            </div>
            <div className="premium-hero__proof-image">
              <Image
                src="/images/homepage/carter-liquid-glass-website.webp"
                alt="Premium Carter Digitals website direction shown on a mobile device"
                fill
                sizes="(max-width: 980px) 88vw, 38vw"
                priority
                unoptimized
              />
              <span aria-hidden="true" />
            </div>
            <figcaption>
              <span>VISIBLE DIRECTION / 24 HOURS</span>
              <strong>Make the value obvious.</strong>
            </figcaption>
          </figure>
          <div className="premium-hero__stage-note">
            <span><i aria-hidden="true" /> ROUTE FOUND</span>
            <strong>Website / trust / enquiries</strong>
            <small>One clear move from first look to first conversation.</small>
          </div>
        </aside>

      </div>

      <div className="premium-hero__bottomline" aria-hidden="true">
        <span>BUILT FOR DECISIVE BUSINESS MOVES</span>
        <div><b>WEB</b><i /><b>PRODUCT</b><i /><b>BRAND</b></div>
        <span>SCROLL TO SEE HOW <ArrowRight size={14} /></span>
      </div>
    </section>
  );
}
