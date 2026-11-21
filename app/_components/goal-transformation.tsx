"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, Phone, MessageCircle } from "lucide-react";
import { GOAL_KEYS, PROJECT_GOALS, projectHref, assemblyProgress, type ProjectGoal } from "../_lib/project-goals";
import { readContext, rememberContext } from "../_lib/enquiry-context";
import { measure } from "../_lib/measurement";
import "./showcase-refinement.css";

export function GoalTransformation({ goal, onChange }: { goal: ProjectGoal; onChange: (goal: ProjectGoal) => void }) {
  const root = useRef<HTMLElement>(null);
  const current = PROJECT_GOALS[goal];
  const choose = (value: ProjectGoal) => { onChange(value); rememberContext({ ...readContext(), goal: value }); measure("goal_select"); };
  useEffect(() => {
    const el = root.current; if (!el) return;
    const media = matchMedia("(min-width: 1000px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => { frame = 0; const rect = el.getBoundingClientRect(); const stage = el.firstElementChild as HTMLElement; const fits = media.matches && stage.offsetHeight <= innerHeight - 100; const p = fits ? assemblyProgress(rect.top - 100, rect.height, innerHeight - 100) : 1; el.style.setProperty("--build-progress", String(p)); el.dataset.enhanced = String(fits); };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule); if (el.firstElementChild) observer.observe(el.firstElementChild);
    update(); addEventListener("scroll",schedule,{passive:true}); addEventListener("resize",schedule); media.addEventListener("change",schedule);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); removeEventListener("scroll",schedule); removeEventListener("resize",schedule); media.removeEventListener("change",schedule); };
  }, []);
  return <section ref={root} className="direction-studio" id="website-direction" aria-labelledby="direction-title"><div className="direction-stage"><header className="direction-heading"><div><p className="refine-eyebrow">ONE BUSINESS / THREE DIFFERENT PRIORITIES</p><h2 id="direction-title">What should your<br /><em>website do better?</em></h2></div><p>Choose the goal. Watch the website take a different shape.</p></header><div className="direction-layout"><aside className="direction-console"><div className="direction-options" role="group" aria-label="Your website priority">{GOAL_KEYS.map((key,index) => <button key={key} type="button" aria-pressed={goal === key} onClick={() => choose(key)}><span>0{index+1}</span><span><strong>{PROJECT_GOALS[key].label}</strong><small>{PROJECT_GOALS[key].description}</small></span>{goal === key ? <Check size={18} /> : <ArrowUpRight size={18} />}</button>)}</div><p className="direction-result" aria-live="polite">{current.result}</p><Link className="studio-button" href={projectHref(goal)} onClick={() => measure("direction_cta")}>Start a project <ArrowUpRight size={18} /></Link><a className="direction-preview-link" href="#direction-preview">See your direction <ArrowRight size={15} /></a><small className="direction-carried">Your chosen priority is included in your enquiry.</small></aside>
      <div className="direction-model" id="direction-preview" data-goal={goal}><div className="direction-model-bar"><img src="/carter-digitals-mark.png" alt="" width="30" height="30" /><strong>Carter Digitals</strong><span>ILLUSTRATIVE WEBSITE</span></div><div className="direction-model-content" key={goal}><div className="direction-model-intro"><span>DESIGNED AROUND YOUR GOAL</span><h3>{goal === "credibility" ? <>Confidence starts<br />with the people.</> : goal === "enquiries" ? <>A better website.<br />Let’s talk.</> : <>The right service.<br />Clearly explained.</>}</h3><p>{goal === "credibility" ? "Meet the person, see the work and understand the approach." : goal === "enquiries" ? "A clear offer and a direct route to the person who can help." : "Find what you need, understand the scope and take the next step."}</p></div><div className="direction-proof"><img src="/kabelo-kadiaka-founder.webp" alt="Kabelo Kadiaka, founder of Carter Digitals" width="1122" height="1402" loading="lazy" /><div><span>FOUNDER / PRETORIA</span><h4>Kabelo Kadiaka</h4><p>Your designer. Your developer.<br />Your direct point of contact.</p><Link href="/about">Meet the founder <ArrowUpRight size={15} /></Link></div></div><div className="direction-contact"><h4>Start with a conversation.</h4><nav aria-label="Contact Carter Digitals"><a href="tel:+27724026893"><Phone size={17} />Call Kabelo <ArrowUpRight size={16} /></a><a href="https://wa.me/27724026893" target="_blank" rel="noreferrer"><MessageCircle size={17} />WhatsApp <ArrowUpRight size={16} /></a></nav></div><div className="direction-services"><Link href="/offerings/premium-websites"><span>Websites<small>A clearer home for your business</small></span><ArrowRight size={18} /></Link><Link href="/offerings/creative-media"><span>Brand materials<small>A recognisable visual identity</small></span><ArrowRight size={18} /></Link></div></div><footer>One connected experience. A different first impression.</footer></div>
    </div></div></section>;
}
