import Link from "next/link";
import { AppWindow, LifeBuoy, ShoppingBag, Workflow } from "lucide-react";
import { StudioMasthead } from "../_components/studio-masthead";
import { Shell, SectorLinks } from "../_components/catalogue-shell";
import { catalogue } from "../_lib/catalogue";

export const metadata = { title: "Website, store and application services", alternates: { canonical: "/services" } };

const serviceImages = ["/carter-legal-website.webp", "/images/homepage/carter-liquid-glass-website.webp", "/carter-digital-systems.webp", "/images/homepage/carter-workshop.webp"];

const serviceDetails = [
  { icon: AppWindow, title: "Make the case for choosing you.", detail: "Give a prospect clear service pages, relevant proof and a direct route to WhatsApp or an enquiry form." },
  { icon: ShoppingBag, title: "Take a buyer from browsing to checkout.", detail: "Turn your range into an organised catalogue with a purchase flow and order administration." },
  { icon: Workflow, title: "Give recurring work one place to happen.", detail: "Map a quote, approval or customer request into a workflow your staff can follow." },
  { icon: LifeBuoy, title: "Keep the build useful after launch.", detail: "Choose the checks and minor update allowance that fit your website, store or app." },
];

export default function Services() {
  return (
    <Shell>
      <StudioMasthead label="Design and development · Pretoria" title={<>Build around <em>what matters.</em></>} intro="Start with the job you need done. Launch a website, sell online or make a process easier for your team.">
        <Link className="cd-text" href="/contact#enquiry">Talk through your project</Link>
      </StudioMasthead>
      <div className="cd-service-index service-editions">
        {catalogue.map((group, index) => {
          const service = serviceDetails[index];
          return (
            <article key={group.id}>
              <img src={serviceImages[index]} alt="" width={900} height={650} loading="lazy" />
              <service.icon size={27} aria-hidden="true"/>
              <div><small>{group.title}</small><h2>{service.title}</h2><p>{service.detail}</p></div>
              <Link className="cd-button" href={"/pricing#" + group.id}>From {group.items[0][1]}{group.id === "care" ? " / month" : ""}</Link>
            </article>
          );
        })}
      </div>
      <section className="cd-section">
        <h2>Explore each service</h2>
        <nav className="cd-options" aria-label="Detailed service pages">
          <Link href="/offerings/premium-websites">Website development</Link>
          <Link href="/offerings/web-applications">Web application development</Link>
          <Link href="/offerings/business-systems">Business systems</Link>
          <Link href="/offerings/creative-media">Logo and brand design</Link>
          <Link href="/offerings/ai-clone-avatar-videos">Avatar video production</Link>
        </nav>
      </section>
      <section className="cd-section"><h2>Try a website for your industry.</h2><SectorLinks/></section>
    </Shell>
  );
}
