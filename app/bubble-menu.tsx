"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./bubble-menu.css";
import { StudioNavigation } from "./_components/studio-navigation";

type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  eyebrow?: string;
  hoverStyles?: { bgColor?: string; textColor?: string };
};

type BubbleMenuProps = {
  logo: ReactNode | string;
  items: MenuItem[];
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
};

const CARTER_MENU_ITEMS: MenuItem[] = [
  { label: "Home", eyebrow: "CARTER / 00", href: "/", rotation: -3, hoverStyles: { bgColor: "#ffffff", textColor: "#062b5f" } },
  { label: "All services", eyebrow: "CAPABILITY OVERVIEW", href: "/services", rotation: -2, hoverStyles: { bgColor: "#67cef4", textColor: "#062b5f" } },
  { label: "Premium websites", eyebrow: "CAPABILITY / 01", href: "/offerings/premium-websites", rotation: 3, hoverStyles: { bgColor: "#e61f46", textColor: "#ffffff" } },
  { label: "Web applications", eyebrow: "CAPABILITY / 02", href: "/offerings/web-applications", rotation: -2, hoverStyles: { bgColor: "#075bbf", textColor: "#ffffff" } },
  { label: "Business systems", eyebrow: "CAPABILITY / 03", href: "/offerings/business-systems", rotation: 2, hoverStyles: { bgColor: "#e5ad3d", textColor: "#102b49" } },
  { label: "Brand content", eyebrow: "LOGOS · POSTERS · CAMPAIGNS", href: "/offerings/creative-media", rotation: 2, hoverStyles: { bgColor: "#ffd84a", textColor: "#102b49" } },
  { label: "AI avatar videos", eyebrow: "4 VIDEOS · R3,999", href: "/offerings/ai-clone-avatar-videos", rotation: -2, hoverStyles: { bgColor: "#ef5d83", textColor: "#ffffff" } },
  { label: "Selected work", eyebrow: "PROJECT ARCHIVE", href: "/work", rotation: -3, hoverStyles: { bgColor: "#f0cf72", textColor: "#102b49" } },
  { label: "Insights", eyebrow: "GUIDES + DECISIONS", href: "/insights", rotation: 2, hoverStyles: { bgColor: "#67cef4", textColor: "#062b5f" } },
  { label: "About the studio", eyebrow: "ENTITY / FOUNDER-LED", href: "/about", rotation: 2, hoverStyles: { bgColor: "#eaf5ff", textColor: "#075bbf" } },
  { label: "Company profile", eyebrow: "FOUNDER + PROCUREMENT", href: "/company-profile", rotation: -2, hoverStyles: { bgColor: "#f0cf72", textColor: "#102b49" } },
  { label: "Privacy", eyebrow: "POPIA + DATA CARE", href: "/privacy", rotation: 2, hoverStyles: { bgColor: "#eaf5ff", textColor: "#075bbf" } },
  { label: "How we work", eyebrow: "THE METHOD", href: "/services", rotation: -2, hoverStyles: { bgColor: "#dcecff", textColor: "#062b5f" } },
  { label: "Pricing", eyebrow: "PACKAGES", href: "/pricing", rotation: 3, hoverStyles: { bgColor: "#071f43", textColor: "#ffffff" } },
  { label: "Contact", eyebrow: "DIRECT ACCESS", href: "/contact", rotation: 2, hoverStyles: { bgColor: "#67cef4", textColor: "#062b5f" } },
  { label: "Start a project", eyebrow: "LET'S BUILD", href: "/contact", rotation: -3, hoverStyles: { bgColor: "#e61f46", textColor: "#ffffff" } },
];

const NAV_SHORTCUTS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function CarterBubbleMenu() { return <StudioNavigation />; }

export default function BubbleMenu({
  logo,
  items,
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Toggle menu",
  menuBg = "#fff",
  menuContentColor = "#111",
  useFixedPosition = false,
  staggerDelay = 0.12,
}: BubbleMenuProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);
  const containerClassName = ["bubble-menu", useFixedPosition ? "fixed" : "absolute", className].filter(Boolean).join(" ");

  const setMenuState = useCallback((open: boolean) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    if (open) {
      setShowOverlay(true);
      window.requestAnimationFrame(() => setIsMenuOpen(true));
    } else {
      setIsMenuOpen(false);
      closeTimer.current = window.setTimeout(() => setShowOverlay(false), 280);
    }
    onMenuClick?.(open);
  }, [onMenuClick]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const focusTimer = window.setTimeout(() => {
      overlayRef.current?.querySelector<HTMLButtonElement>('[data-menu-close]')?.focus();
    }, 320);
    return () => window.clearTimeout(focusTimer);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab" && overlayRef.current) {
        const focusable = Array.from(overlayRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'));
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, setMenuState]);

  useEffect(() => () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      <nav className={containerClassName} style={style} aria-label="Primary navigation">
        <div className="bubble-nav-shell">
          <div className="bubble logo-bubble"><span className="logo-content">{typeof logo === "string" ? <Image src={logo} alt="Carter Digitals" width={120} height={32} className="bubble-logo" unoptimized /> : logo}</span></div>
          <span className="bubble-nav-divider" aria-hidden="true" />
          <div className="bubble-nav-links" aria-label="Quick navigation">
            {NAV_SHORTCUTS.map((item) => {
              const baseHref = item.href.split("#")[0];
              const active = baseHref === "/" ? pathname === "/" : pathname.startsWith(baseHref);
              return <Link key={item.href} href={item.href} className={active ? "active" : ""} aria-current={active ? "page" : undefined}>{item.label}</Link>;
            })}
          </div>
          <div className="bubble-nav-status"><i aria-hidden="true" /><span>Available</span></div>
          <button ref={menuButtonRef} type="button" className={`bubble toggle-bubble menu-btn ${isMenuOpen ? "open" : ""}`} onClick={() => setMenuState(!isMenuOpen)} aria-label={isMenuOpen ? "Close Carter Digitals navigation" : menuAriaLabel} aria-expanded={isMenuOpen} aria-controls="bubble-menu-overlay">
            <span className="menu-button-label">{isMenuOpen ? "Close" : "Menu"}</span><span className="menu-icon"><span className="menu-line" style={{ background: menuContentColor }} /><span className="menu-line short" style={{ background: menuContentColor }} /></span>
          </button>
        </div>
      </nav>
      {showOverlay ? (
        <div ref={overlayRef} id="bubble-menu-overlay" role="dialog" aria-modal="true" aria-label="Carter Digitals navigation" className={`bubble-menu-items ${useFixedPosition ? "fixed" : "absolute"} ${isMenuOpen ? "is-open" : ""}`} aria-hidden={!isMenuOpen} onMouseDown={(event) => { if (event.currentTarget === event.target) setMenuState(false); }}>
          <div className="bubble-menu-aura" aria-hidden="true" />
          <button data-menu-close type="button" className="bubble-menu-close" onClick={() => { setMenuState(false); menuButtonRef.current?.focus(); }} aria-label="Close navigation"><span>Close</span><b aria-hidden="true">×</b></button>
          <div className="bubble-menu-heading">
            <div>
              <small>CARTER DIGITALS / NAVIGATION</small>
              <h2>Where should we<br/><em>take your business?</em></h2>
              <p>Explore our work, compare capabilities, or start with a focused project conversation.</p>
            </div>
            <Link className="bubble-menu-feature" href="/contact" onClick={() => setMenuState(false)}>
              <span><i aria-hidden="true" /> ACCEPTING SELECT PROJECTS</span>
              <strong>Start a project brief</strong>
              <small>Tell us what you need. We’ll shape the smartest route forward.</small>
              <b aria-hidden="true">↗</b>
            </Link>
          </div>
          <ul className="pill-list" role="menu" aria-label="Carter Digitals pages">
            {items.map((item, index) => (
              <li key={item.href} role="none" className="pill-col">
                <a role="menuitem" href={item.href} aria-label={item.ariaLabel || item.label} aria-current={pathname === item.href ? "page" : undefined} className="pill-link" onClick={() => setMenuState(false)} style={{ "--item-rot": `${item.rotation ?? 0}deg`, "--item-delay": `${index * staggerDelay}s`, "--pill-bg": menuBg, "--pill-color": menuContentColor, "--hover-bg": item.hoverStyles?.bgColor || "#f3f4f6", "--hover-color": item.hoverStyles?.textColor || menuContentColor } as CSSProperties}>
                  <span className="pill-label"><small>{item.eyebrow}</small><strong>{item.label}</strong><i aria-hidden="true">↗</i></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="bubble-menu-foot"><span><i aria-hidden="true" /> PRETORIA · SOUTH AFRICA</span><div><a href="mailto:kabelokadiaka4@gmail.com">EMAIL US</a><a href="tel:+27724026893">072 402 6893</a></div></div>
        </div>
      ) : null}
    </>
  );
}
