import Image from "next/image";
import { CarterPage, ProofCards, pageMetadata } from "../../components/carter-pages";
import { Reveal } from "../../components/carter-motion";
import { care, company, paymentTerms, phases, priceNote, stack } from "../../lib/data";

export const metadata = pageMetadata("Company and credentials","Meet the Carter Digitals founder and explore the studio’s procurement credentials, delivery process, work and care plans.","/company");
const descriptions = ["Define the audience, outcome, scope and decision-makers.", "Map the journeys and review an early visual direction.", "Build the agreed interface, content structure and functionality.", "Check key journeys, devices and approved privacy requirements.", "Deploy, hand over agreed access and provide guidance."];
export default function Company() {
  return <CarterPage>
    <header className="cd-section-new cd-inner-hero"><h1>Digital credibility, engineered.</h1><p>{company.name} · CIPC {company.registration}</p><div className="cd-chip-row">{company.credentials.map(item=><span key={item}>{item}</span>)}</div></header>
    <Reveal><section className="cd-section-new cd-split-new"><div><h2>Meet Kabelo Kadiaka.</h2><p>Founder and Director of Carter Digitals, Kabelo leads design and development from Soshanguve, Pretoria. He brings product thinking, development and visual direction together with direct accountability for delivery.</p><h3>AI-accelerated, human-governed</h3><p>AI assists work on code and synthetic data during development. Human judgement guides strategy, design, security boundaries and final delivery.</p></div><Image unoptimized className="cd-founder-new" src="/kabelo-kadiaka-founder.webp" width={500} height={625} alt="Kabelo Kadiaka, founder and director of Carter Digitals"/></section></Reveal>
    <section className="cd-section-new cd-band-new"><h2>How we deliver.</h2><ol className="cd-timeline-new">{phases.map((phase,i)=><li key={phase}><Reveal><h3>{phase}</h3><p>{descriptions[i]}</p></Reveal></li>)}</ol></section>
    <Reveal><section className="cd-section-new"><h2>Proof of delivery.</h2><ProofCards/></section></Reveal>
    <Reveal><section className="cd-section-new cd-band-new"><h2>Care after launch.</h2><div className="cd-tiles cd-tiles--four">{care.map(([name,price,scope])=><article className="cd-panel-new" key={name}><h3>{name}</h3><strong>From {price}/mo</strong><p>{scope}</p></article>)}</div><p className="cd-price-note">{priceNote}</p></section></Reveal>
    <Reveal><section className="cd-section-new"><h2>Technology and commercial terms.</h2><div className="cd-chip-row">{stack.map(item=><span key={item}>{item}</span>)}</div><p>{paymentTerms}</p><p>{priceNote}</p><a className="cd-button-new cd-button-new--gold" href={company.whatsapp}>Talk to Kabelo</a></section></Reveal>
  </CarterPage>;
}
