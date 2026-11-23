import { priceNote } from "../../../lib/data";
import { pageMetadata } from "../../../components/carter-pages";
import Link from "next/link";
import { Shell } from "../../_components/catalogue-shell";
import { StudioMasthead } from "../../_components/studio-masthead";
import { catalogue } from "../../_lib/catalogue";

export const metadata = pageMetadata("Pricing","Compare Carter Digitals prices for websites, online stores, applications and ongoing care.","/pricing");

export default function Pricing() {
  return (
    <Shell>
      <StudioMasthead label="2026 pricing · South African rand" title={<>Know what <em>you’re buying.</em></>} intro="Compare the scope, delivery target and support before you request a quote. Every project starts with a written agreement on what we’ll build.">
        <Link className="cd-text" href="/#package-finder">Find my website package</Link>
      </StudioMasthead>
      <nav className="cd-options pricing-jumps" aria-label="Pricing categories">
        {catalogue.map(group => <a key={group.id} href={"#" + group.id}>{group.title}</a>)}
        <a href="#extras">Terms and inclusions</a>
      </nav>
      {catalogue.map(group => (
        <section className="cd-section pricing-edition" key={group.id} id={group.id}>
          <h2>{group.title}</h2><p>{group.benefit}</p>
          <div className="cd-grid cd-package-grid">
            {group.items.map(([name, price, scope]) => {
              const params = new URLSearchParams({ service: group.id, brief: name });
              if (group.id === "websites") params.set("package", name.split(" ")[1].toLowerCase());
              return (
                <article key={name} className={"cd-tile cd-tier" + (name === "Carter Growth" ? " cd-tier-featured" : "")}>
                  <h3>{name}</h3>
                  <strong>From {price}</strong>
                  <small>{group.id === "care" ? "Per month" : "Once-off starting price"}</small>
                  <p>{scope}</p>
                  <Link className="cd-text" href={"/contact?" + params.toString() + "#enquiry"}>Enquire about {name}</Link>
                </article>
              );
            })}
          </div>
        </section>
      ))}
      <section id="extras" className="cd-section pricing-terms">
        <h2>Before you book</h2><p>{priceNote}</p>
        <details><summary>Hosting, domain and third-party fees</summary><p>Website and store packages include one standard .co.za domain and agreed standard hosting for the first 12 months. Renewals, payment processing, premium licences and usage fees are separate unless included in writing.</p></details>
        <details><summary>Deposits, timelines and handover</summary><p>A 50% deposit reserves the project. Delivery targets begin after deposit, required content, access and approvals. The balance is due before production launch and final handover. Larger applications can have a separately agreed milestone schedule.</p></details>
        <details><summary>Add-ons and care allowances</summary><p>Brand identity, extra pages, booking integrations, catalogue uploads and application modules are priced separately. Find individual rates and exclusions in the full guide.</p></details>
        <Link className="cd-text" href="/carter-pricing-2026.pdf">Download the full pricing guide (PDF)</Link>
      </section>
    </Shell>
  );
}
