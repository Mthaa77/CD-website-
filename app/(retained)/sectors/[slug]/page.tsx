import { packages } from "../../../../lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell, SectorLinks } from "../../../_components/catalogue-shell";
import { SectorDemo } from "../../../_components/sector-demo";
import { stories } from "../../../_lib/sector-stories";
import { sectors } from "../../../_lib/catalogue";
import { sectorExperience } from "../../../_lib/sector-experience";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sectors.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sector = sectors.find(item => item.slug === slug);
  return { title: "Websites for " + (sector?.name || "businesses"), description: sector?.intro, alternates: { canonical: "/sectors/" + slug } };
}

export default async function Sector({ params }: Props) {
  const { slug } = await params;
  const sector = sectors.find(item => item.slug === slug);
  if (!sector) notFound();
  const story = stories[slug];
  const experience = sectorExperience[slug];
  const brief = new URLSearchParams({ service: "websites", brief: "a website for " + experience.business });

  return (
    <Shell>
      <div className={"sector-edition sector-edition--" + slug}>
        <section className="sector-opening" aria-labelledby="sector-title">
          <img src={"/images/industry/" + slug + ".webp"} width={950} height={633} fetchPriority="high" alt="" />
          <div className="sector-opening__copy">
            <Link className="studio-kicker" href="/#sectors">Industries / {sector.name}</Link>
            <h1 id="sector-title">{story.title}</h1>
            <p>{sector.intro}</p>
            <a className="studio-nav__cta" href="#experience">Try the {story.label.toLowerCase()}</a>
          </div>
        </section>
        <section className="sector-benefits" aria-labelledby="sector-benefits-heading">
          <h2 id="sector-benefits-heading">{experience.promise}</h2>
          <dl>
            {experience.benefits.map(([title, detail]) => <div key={title}><dt>{title}</dt><dd>{detail}</dd></div>)}
          </dl>
        </section>
        <SectorDemo key={slug} sector={sector} />
        <section className="sector-next" aria-labelledby="sector-next-heading">
          <div><h2 id="sector-next-heading">Find the right scope.</h2><p>{story.scope}</p><p><strong>Suggested starting point:</strong> {packages.websites[1].name}, from {packages.websites[1].price}. Final scope and price are confirmed in writing.</p></div>
          <div className="sector-next__actions">
            <Link className="studio-nav__cta" href={"/contact?" + brief.toString() + "#enquiry"}>Plan a website for {experience.business}</Link>
            <Link className="cd-text" href="/pricing#websites">Compare website packages</Link>
          </div>
        </section>
        <section className="cd-section"><h2>Explore another industry</h2><SectorLinks /></section>
      </div>
    </Shell>
  );
}
