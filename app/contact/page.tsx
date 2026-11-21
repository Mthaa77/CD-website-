import { CarterPage, pageMetadata } from "../../components/carter-pages";
import { QuoteForm } from "../../components/carter-quote";
import { company } from "../../lib/data";

export const metadata = pageMetadata("Contact Carter Digitals","Request a quote for a website, online store or web application. Speak directly with Kabelo in Pretoria.","/contact");

export default async function ContactPage({searchParams}: {searchParams: Promise<Record<string,string|string[]|undefined>>}) {
  const query = await searchParams;
  const text = (key: string) => typeof query[key] === "string" ? query[key] : "";
  const service = ({ websites: "Website", stores: "Online store", apps: "Web application" } as Record<string,string>)[text("service")] || "";
  const brief = [text("brief"),text("package") && `Package: ${text("package")}`].filter(Boolean).join("\n").slice(0,2000);
  return <CarterPage>
    <header className="cd-section-new cd-inner-hero"><h1 id="enquiry-title">Let’s discuss your project.</h1><p>Tell Kabelo what you need and what you’d like the project to achieve.</p></header>
    <section id="enquiry" className="cd-section-new cd-split-new">
      <div><h2>Speak directly with Kabelo.</h2><div className="cd-actions-new"><a className="cd-button-new cd-button-new--gold" href={company.whatsapp}>WhatsApp</a><a className="cd-button-new" href={company.call}>Call {company.phone}</a><a className="cd-button-new" href={`mailto:${company.email}`}>Email Kabelo</a></div><p>{company.location}</p><iframe className="cd-map-new" title="Map of Soshanguve, Pretoria" loading="lazy" referrerPolicy="no-referrer" src="https://maps.google.com/maps?q=Soshanguve%2C%20Pretoria%2C%20South%20Africa&output=embed"/></div>
      <QuoteForm initialBrief={brief} initialService={service}/>
    </section>
  </CarterPage>;
}
