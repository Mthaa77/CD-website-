import { ReferenceFooter, ReferenceMasthead } from "./chrome";

type ReferencePageProps = {
  route: string;
  markup: string;
  service?: { name: string; description: string };
};

export function ReferencePage({ route, markup, service }: ReferencePageProps) {
  const url = `https://carterdigitals.co.za${route}`;
  const provider = { "@id": "https://carterdigitals.co.za/#organization" };
  const graph = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}#service`,
        url,
        name: service.name,
        description: service.description,
        provider,
        areaServed: { "@type": "Country", name: "South Africa" },
      }
    : undefined;
  return (
    <>
      <ReferenceMasthead route={route} />
      <main
        id="main-content"
        tabIndex={-1}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <ReferenceFooter />
      {graph && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(graph).replaceAll("<", "\\u003c"),
          }}
        />
      )}
    </>
  );
}
