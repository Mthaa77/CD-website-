import Link from "next/link";
import { ArrowRight, Home, MessageCircle, Search } from "lucide-react";
import { CarterBubbleMenu } from "./bubble-menu";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <CarterBubbleMenu />
      <section>
        <div className="not-found-code" aria-hidden="true"><span>4</span><i><Search /></i><span>4</span></div>
        <small>THE PAGE MOVED OR NEVER EXISTED</small>
        <h1>Wrong route.<br /><em>Clear next move.</em></h1>
        <p>The link may be outdated, but the useful parts of Carter Digitals are still one decision away.</p>
        <div><Link href="/"><Home /> Return home <ArrowRight /></Link><Link href="/services">Explore services <ArrowRight /></Link><Link href="/contact"><MessageCircle /> Contact Kabelo <ArrowRight /></Link></div>
      </section>
    </main>
  );
}
