"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, MoveUpRight, Sparkles } from "lucide-react";
import SpotlightCard from "./react-bits/spotlight-card";
import "./welcome-to-carter-section.css";
import "./welcome-to-carter-visuals.css";

const WELCOME_SIGNALS = [
  "Clear thinking before decoration",
  "Built for mobile-first South African audiences",
  "One direct route from attention to enquiry",
] as const;

export function WelcomeToCarterSection() {
  const logoVideoRef = useRef<HTMLVideoElement>(null);
  const [logoVideoState, setLogoVideoState] = useState<"loading" | "playing" | "blocked" | "error">("loading");

  useEffect(() => {
    const video = logoVideoRef.current;
    if (!video) return;

    let cancelled = false;
    const attemptPlay = () => {
      video.muted = true;
      const playback = video.play();
      if (!playback) return;
      playback
        .then(() => {
          if (!cancelled) setLogoVideoState("playing");
        })
        .catch(() => {
          if (!cancelled) setLogoVideoState("blocked");
        });
    };

    video.addEventListener("canplay", attemptPlay);
    if (video.readyState >= 2) attemptPlay();

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", attemptPlay);
      video.pause();
    };
  }, []);

  const handleLogoVideoPlay = () => {
    const video = logoVideoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play()
      .then(() => setLogoVideoState("playing"))
      .catch(() => setLogoVideoState("blocked"));
  };

  return (
    <section className="welcome-carter" id="welcome-to-carter" aria-labelledby="welcome-carter-title">
      <div className="welcome-carter__wash" aria-hidden="true" />
      <div className="welcome-carter__grid" aria-hidden="true" />

      <div className="welcome-carter__inner">
        <header className="welcome-carter__intro" data-reveal>
          <div>
            <span className="welcome-carter__kicker">WELCOME / CARTER DIGITALS</span>
            <h2 id="welcome-carter-title">Welcome to<br /><em>Carter Digitals.</em></h2>
          </div>
          <div className="welcome-carter__intro-copy">
            <span>THE DIGITAL FOUNDRY / PRETORIA</span>
            <p>We are a Pretoria-built digital studio for businesses and organisations that want to look credible, communicate clearly and make the next move obvious.</p>
          </div>
        </header>

        <div className="welcome-carter__feature">
          <SpotlightCard className="welcome-carter__frame-spotlight" spotlightColor="rgba(242, 201, 91, 0.28)">
            <figure className="welcome-carter__frame" data-reveal>
              <div className="welcome-carter__frame-bar">
                <span><i aria-hidden="true" /><i aria-hidden="true" /><i aria-hidden="true" /></span>
                <b>CD / BRAND SIGNATURE</b>
                <small>LOOP / 01</small>
              </div>
              <div className="welcome-carter__video-wrap">
                <video
                  ref={logoVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/carter-digitals-logo-dark-panel.webp"
                  aria-label="Carter Digitals animated company logo"
                  src="/videos/carter-digitals-logo-reveal.mp4"
                  onLoadedData={handleLogoVideoPlay}
                  onPlaying={() => setLogoVideoState("playing")}
                  onError={() => setLogoVideoState("error")}
                >
                  Your browser does not support the Carter Digitals logo animation.
                </video>
                <span className="welcome-carter__video-glass" aria-hidden="true" />
                <span className="welcome-carter__video-corner welcome-carter__video-corner--tl" aria-hidden="true" />
                <span className="welcome-carter__video-corner welcome-carter__video-corner--br" aria-hidden="true" />
                {logoVideoState === "blocked" && (
                  <button type="button" className="welcome-carter__video-play" onClick={handleLogoVideoPlay}>
                    <span>PLAY LOGO REVEAL</span><ArrowUpRight size={16} aria-hidden="true" />
                  </button>
                )}
                {logoVideoState === "error" && (
                  <span className="welcome-carter__video-fallback" role="status">STATIC SIGNATURE / VIDEO UNAVAILABLE</span>
                )}
              </div>
              <figcaption><span>01 / RECOGNITION</span><strong>A mark with a point of view.</strong></figcaption>
            </figure>
          </SpotlightCard>

          <aside className="welcome-carter__brief" data-reveal aria-label="Welcome to Carter Digitals">
            <div className="welcome-carter__brief-top"><span><Sparkles size={15} aria-hidden="true" /> FIRST IMPRESSION / INTENTIONAL</span><b>CD</b></div>
            <h3>The first impression is not decoration.<br /><em>It is the start of trust.</em></h3>
            <p>From Soshanguve to the wider Gauteng market, we turn what makes your business valuable into a digital presence people can understand, remember and act on.</p>
            <figure className="welcome-carter__brief-visual">
              <Image src="/images/homepage/carter-digital-directions.webp" alt="Website wireframe, city laptop and smartphone concept showing Carter Digitals visual direction" fill sizes="(max-width: 900px) 88vw, 27vw" loading="lazy" unoptimized />
              <figcaption><span>THE FOUNDRY / VISUAL DIRECTION</span><strong>Make the idea tangible.</strong></figcaption>
            </figure>
            <ul>
              {WELCOME_SIGNALS.map((signal) => <li key={signal}><Check size={15} aria-hidden="true" />{signal}</li>)}
            </ul>
            <Link href="#project-route">Start with your business problem <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </aside>
        </div>

        <div className="welcome-carter__foot" data-reveal>
          <span><i aria-hidden="true" /> 100% BLACK-OWNED / BUILT IN SOUTH AFRICA</span>
          <span>WEBSITES <b>·</b> BRAND IDENTITY <b>·</b> CAMPAIGN VISUALS</span>
          <MoveUpRight size={18} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default WelcomeToCarterSection;
