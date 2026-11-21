import Link from "next/link";
import type { Metadata } from "next";
import { addOns, company, packages, priceNote, proof, quoteLink, standardWebsite, type Family, type Package } from "../lib/data";
import { CarterNav, CarterFooter } from "./carter-frame";
import { Reveal } from "./carter-motion";
import type { ReactNode } from "react";
import { ServiceExperience } from "./service-experience";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = company.url + path;
  const image = { url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Carter Digitals" };
  return { title, description, alternates: { canonical: url }, openGraph: {title,description,url,images:[image]}, twitter:{card:"summary_large_image",title,description,images:[image.url]} };
}
export function CarterPage({children}: {children: ReactNode}) {
  return <><CarterNav/><main className="cd-cinematic cd-inner-new">{children}</main><CarterFooter/></>;
}
export function ProofCards() {
  return <div className="cd-tiles cd-tiles--three">{proof.map(item=><article className="cd-panel-new" key={item.name}><div className="cd-proof-slot">Project screenshot</div><p className="cd-kicker">{item.sector}</p><h3>{item.name}</h3><p>{item.summary}</p><small>Live link pending</small></article>)}</div>;
}
const comparisons = [
  ["Pages","Up to 4","Up to 7","Up to 10"],
  ["Copywriting","Refine supplied copy","Up to 7 pages","Confirm in written scope"],
  ["Forms","1, up to 6 fields","Up to 2, up to 10 fields each","Up to 2 standard forms"],
  ["CMS","—","—","3 content types, 20 supplied entries"],
  ["Signature interaction","—","—","1"],
  ["Analytics","Basic SEO foundations","GA4, Search Console and basic tracking where supported","Tracking for key events where supported"],
  ["Imagery","Up to 10","Up to 30 supplied gallery images","Optimised supplied hero imagery or video"],
  ["Revisions","2","2","3"],
  ["Delivery",...packages.websites.map(item=>item.timing)],
  ["Defect-fix window","14 days","14 days","30 days"],
  ["CMS training","—","—","60 minutes"],
];
export function PackagePage({family}: {family: Family}) {
  const items: readonly Package[] = packages[family];
  return <CarterPage>
    <ServiceExperience family={family}/>
    <Reveal><section className="cd-section-new" id="package-list"><h2>Choose your starting scope.</h2><div className="cd-tiles cd-tiles--three">{items.map(item=><article className="cd-panel-new cd-tilt-new" data-recommended={item.recommended||undefined} key={item.name}>{item.recommended&&<p className="cd-kicker">Recommended</p>}<h3>{item.name}</h3><p className="cd-money">From {item.price}</p><p>{item.scope}</p><ul>{item.features.map(feature=><li key={feature}>{feature}</li>)}</ul><p>{item.timing}</p><a className="cd-button-new" data-cta={`package-${family}`} href={quoteLink(item.name)}>Get a quote</a></article>)}</div><p className="cd-price-note">{priceNote}</p></section></Reveal>
    {family==="websites" && <Reveal><section className="cd-section-new cd-band-new"><h2>Included in every website package.</h2><div className="cd-chip-row">{standardWebsite.map(item=><span key={item}>{item}</span>)}</div><div className="cd-table-new" tabIndex={0} role="region" aria-label="Website package comparison"><table><caption>Compare website packages</caption><thead><tr><th scope="col">Scope</th>{items.map(item=><th key={item.name} scope="col">{item.name}</th>)}</tr></thead><tbody>{comparisons.map(([label,...values])=><tr key={label}><th scope="row">{label}</th>{values.map((value,i)=><td key={i}>{value}</td>)}</tr>)}</tbody></table></div></section></Reveal>}
    <Reveal><section className="cd-section-new"><h2>Optional add-ons.</h2><div className="cd-chip-row">{addOns[family].map(([name,price])=><span key={name}>{name} · from {price}</span>)}</div>{family==="stores"&&<p>Shopify plans, plugins, courier charges and payment fees are billed separately unless included in the written quotation.</p>}{family==="apps"&&<p>An application screen has its own data, permissions and workflow requirements. We agree the screen and module boundaries before quoting.</p>}<p className="cd-price-note">{priceNote}</p><Link className="cd-button-new" href="/contact#enquiry">Discuss your scope</Link></section></Reveal>
  </CarterPage>;
}
