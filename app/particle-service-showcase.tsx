"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, MousePointer2, Sparkles } from "lucide-react";

interface Vector2D {
  x: number;
  y: number;
}

type RGB = { r: number; g: number; b: number };

class Particle {
  pos: Vector2D = { x: 0, y: 0 };
  vel: Vector2D = { x: 0, y: 0 };
  acc: Vector2D = { x: 0, y: 0 };
  target: Vector2D = { x: 0, y: 0 };
  closeEnoughTarget = 110;
  maxSpeed = 6.2;
  maxForce = 0.32;
  size = 2.8;
  isKilled = false;
  startColor: RGB = { r: 215, g: 25, b: 63 };
  targetColor: RGB = { r: 215, g: 25, b: 63 };
  colorWeight = 0;
  colorBlendRate = 0.018;

  move() {
    const distance = Math.hypot(this.pos.x - this.target.x, this.pos.y - this.target.y);
    const proximity = distance < this.closeEnoughTarget ? distance / this.closeEnoughTarget : 1;
    let towardsTargetX = this.target.x - this.pos.x;
    let towardsTargetY = this.target.y - this.pos.y;
    const magnitude = Math.hypot(towardsTargetX, towardsTargetY);

    if (magnitude > 0) {
      towardsTargetX = (towardsTargetX / magnitude) * this.maxSpeed * proximity;
      towardsTargetY = (towardsTargetY / magnitude) * this.maxSpeed * proximity;
    }

    let steerX = towardsTargetX - this.vel.x;
    let steerY = towardsTargetY - this.vel.y;
    const steerMagnitude = Math.hypot(steerX, steerY);
    if (steerMagnitude > this.maxForce) {
      steerX = (steerX / steerMagnitude) * this.maxForce;
      steerY = (steerY / steerMagnitude) * this.maxForce;
    }

    this.acc.x += steerX;
    this.acc.y += steerY;
    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1);
    const r = Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight);
    const g = Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight);
    const b = Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight);
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);
  }

  kill(width: number, height: number) {
    if (this.isKilled) return;
    const angle = Math.random() * Math.PI * 2;
    const radius = (width + height) * 0.65;
    this.target = {
      x: width / 2 + Math.cos(angle) * radius,
      y: height / 2 + Math.sin(angle) * radius,
    };
    this.startColor = this.currentColor();
    this.targetColor = { r: 3, g: 11, b: 25 };
    this.colorWeight = 0;
    this.isKilled = true;
  }

  currentColor(): RGB {
    return {
      r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
      g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
      b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
    };
  }
}

const SERVICE_WORDS = ["CUSTOM WEBSITES", "3D LOGO DESIGN", "CAMPAIGN POSTERS"];
const SERVICE_COLORS: RGB[] = [
  { r: 244, g: 48, b: 81 },
  { r: 23, g: 126, b: 239 },
  { r: 228, g: 174, b: 62 },
];

const SERVICE_OFFERINGS = [
  {
    number: "01",
    label: "CUSTOM WEBSITES",
    title: "Give serious customers a reason to stay.",
    copy: "Fast, responsive websites that explain what you do, build trust in seconds and make the next enquiry obvious.",
    detail: "E-commerce, law firms, schools, healthcare, professional services and local businesses.",
    href: "/offerings/premium-websites",
    tone: "web",
  },
  {
    number: "02",
    label: "3D LOGO DESIGN",
    title: "Make the business recognisable before it is explained.",
    copy: "A distinctive identity system that gives your business presence across your website, social media, documents and physical touchpoints.",
    detail: "Primary logo direction, dimensional treatment, flat-use direction and organised exports.",
    href: "/offerings/creative-media",
    tone: "logo",
  },
  {
    number: "03",
    label: "POSTERS + CAMPAIGN VISUALS",
    title: "Put the right message in front of the right people.",
    copy: "Clear, persuasive campaign visuals for promotions, events, schools, organisations and businesses that cannot afford to be ignored.",
    detail: "Designed for WhatsApp, social media, print and the places your audience already pays attention.",
    href: "/offerings/creative-media",
    tone: "poster",
  },
] as const;

export function ParticleServiceShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const frameCountRef = useRef(0);
  const wordIndexRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0, pressed: false });
  const visibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactCanvas = window.matchMedia("(max-width: 720px), (pointer: coarse)").matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = Boolean(connection?.saveData);
    const lowPowerDevice = saveData || (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4);
    const width = compactCanvas ? 640 : lowPowerDevice ? 960 : 1280;
    const height = compactCanvas ? 320 : 460;
    const sampleStep = saveData ? 15 : compactCanvas ? 10 : lowPowerDevice ? 9 : 6;
    const particleSize = compactCanvas ? 4.2 : 3.1;
    const targetFrameTime = saveData ? 1000 / 20 : compactCanvas ? 1000 / 36 : lowPowerDevice ? 1000 / 42 : 1000 / 60;
    let lastFrameTime = 0;
    let initialized = false;

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const offscreen = document.createElement("canvas");
    offscreen.width = width;
    offscreen.height = height;
    const offscreenCtx = offscreen.getContext("2d", { willReadFrequently: true });
    if (!offscreenCtx) return;

    const randomEdgePosition = (): Vector2D => {
      const angle = Math.random() * Math.PI * 2;
      const radius = (width + height) * 0.48;
      return {
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
      };
    };

    const formWord = (word: string, wordIndex: number) => {
      offscreenCtx.clearRect(0, 0, width, height);
      let fontSize = compactCanvas ? 72 : 126;
      offscreenCtx.font = `900 ${fontSize}px Arial, sans-serif`;
      while (offscreenCtx.measureText(word).width > width * 0.84 && fontSize > 48) {
        fontSize -= 4;
        offscreenCtx.font = `900 ${fontSize}px Arial, sans-serif`;
      }
      offscreenCtx.fillStyle = "#fff";
      offscreenCtx.textAlign = "center";
      offscreenCtx.textBaseline = "middle";
      offscreenCtx.fillText(word, width / 2, height / 2);

      const pixels = offscreenCtx.getImageData(0, 0, width, height).data;
      const coordinates: number[] = [];
      for (let y = 0; y < height; y += sampleStep) {
        for (let x = 0; x < width; x += sampleStep) {
          const index = (y * width + x) * 4;
          if (pixels[index + 3] > 120) coordinates.push(index);
        }
      }

      for (let i = coordinates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [coordinates[i], coordinates[j]] = [coordinates[j], coordinates[i]];
      }

      const particles = particlesRef.current;
      const targetColor = SERVICE_COLORS[wordIndex % SERVICE_COLORS.length];
      let particleIndex = 0;

      coordinates.forEach((pixelIndex) => {
        const x = (pixelIndex / 4) % width;
        const y = Math.floor(pixelIndex / 4 / width);
        let particle = particles[particleIndex];

        if (!particle) {
          particle = new Particle();
          particle.pos = randomEdgePosition();
          particle.maxSpeed = compactCanvas ? Math.random() * 3.1 + 5.2 : Math.random() * 4.2 + 4.8;
          particle.maxForce = particle.maxSpeed * 0.062;
          particle.colorBlendRate = Math.random() * 0.022 + 0.012;
          particle.size = particleSize;
          particles.push(particle);
        }

        particle.isKilled = false;
        particle.startColor = particle.currentColor();
        particle.targetColor = targetColor;
        particle.colorWeight = 0;
        particle.target = { x, y };
        particleIndex++;
      });

      for (let i = particleIndex; i < particles.length; i++) particles[i].kill(width, height);
    };

    const renderFrame = (advance = true) => {
      ctx.fillStyle = advance ? "rgba(2, 9, 22, 0.14)" : "#020916";
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        if (advance) particle.move();

        if (pointerRef.current.pressed && Math.hypot(particle.pos.x - pointerRef.current.x, particle.pos.y - pointerRef.current.y) < 62) {
          particle.kill(width, height);
        }

        particle.draw(ctx);
        if (particle.isKilled && (particle.pos.x < -24 || particle.pos.x > width + 24 || particle.pos.y < -24 || particle.pos.y > height + 24)) {
          particles.splice(i, 1);
        }
      }
    };

    const animate = (timestamp: number) => {
      if (!visibleRef.current || document.hidden) {
        animationRef.current = null;
        return;
      }

      if (timestamp - lastFrameTime >= targetFrameTime) {
        lastFrameTime = timestamp;
        renderFrame();
        frameCountRef.current++;
          const wordDuration = compactCanvas ? 150 : 210;
        if (frameCountRef.current % wordDuration === 0) {
          wordIndexRef.current = (wordIndexRef.current + 1) % SERVICE_WORDS.length;
          formWord(SERVICE_WORDS[wordIndexRef.current], wordIndexRef.current);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (reducedMotion || animationRef.current !== null || !visibleRef.current || document.hidden) return;
      animationRef.current = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      if (animationRef.current === null) return;
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    };

    const updatePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = ((event.clientX - rect.left) / rect.width) * width;
      pointerRef.current.y = ((event.clientY - rect.top) / rect.height) * height;
    };
    const onPointerDown = (event: PointerEvent) => {
      pointerRef.current.pressed = true;
      updatePointer(event);
      if (event.pointerType === "mouse") canvas.setPointerCapture(event.pointerId);
    };
    const onPointerUp = () => { pointerRef.current.pressed = false; };
    const onVisibilityChange = () => {
      if (document.hidden) stopAnimation();
      else startAnimation();
    };
    const initializeField = () => {
      if (initialized) return;
      initialized = true;
      formWord(SERVICE_WORDS[0], 0);
      if (reducedMotion) {
        particlesRef.current.forEach((particle) => {
          particle.pos = { ...particle.target };
          particle.colorWeight = 1;
        });
        renderFrame(false);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
      if (entry.isIntersecting) {
        initializeField();
        startAnimation();
      }
      else stopAnimation();
    }, { rootMargin: "80px" });

    observer.observe(canvas);
    document.addEventListener("visibilitychange", onVisibilityChange);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", updatePointer, { passive: true });
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    return () => {
      observer.disconnect();
      stopAnimation();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", updatePointer);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      particlesRef.current = [];
    };
  }, []);

  return (
    <section className="particle-services" id="capabilities" aria-labelledby="particle-services-title">
      <div className="particle-services__intro" data-reveal>
        <div>
          <span className="kicker">WHAT WE BUILD / BUILT IN PRETORIA</span>
          <h2 id="particle-services-title">The services that make your business <em>easier to choose.</em></h2>
        </div>
        <div className="particle-services__pitch">
          <Sparkles size={21} />
          <p>Choose the layer holding your business back. We turn it into a clearer, sharper and more credible experience for the South African customers already looking for you.</p>
        </div>
      </div>

      <div className="particle-services__frame" data-reveal>
        <div className="particle-services__chrome">
          <div><i /><i /><i /><span>CARTER / LIVE CAPABILITY SIGNAL</span></div>
          <small>03 CORE OFFERINGS <b>•</b> ONE CLEARER PRESENCE</small>
        </div>
        <div className="particle-services__stage">
          <canvas ref={canvasRef} aria-label="Animated Carter Digitals service offerings: custom websites, 3D logo design and campaign posters" />
          <div className="particle-services__instruction"><MousePointer2 size={14} /> Press the signal to disturb it</div>
        </div>
        <nav className="particle-services__links" aria-label="Explore Carter Digitals service offerings">
          {SERVICE_OFFERINGS.map((service) => (
            <Link className={`particle-services__service-card particle-services__service-card--${service.tone}`} href={service.href} key={service.number}>
              <small>{service.number}</small>
              <span>
                <strong>{service.label}</strong>
                <em>{service.title}</em>
                <b>{service.copy}</b>
                <i>{service.detail}</i>
              </span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>
      </div>

      <div className="particle-services__close" data-reveal>
        <div><small>NOT SURE WHAT TO ASK FOR?</small><strong>Tell us what is costing the business trust, time or enquiries. We’ll recommend the first move.</strong></div>
        <a href="/contact">Get a practical recommendation <ArrowUpRight size={17} /></a>
      </div>
    </section>
  );
}
