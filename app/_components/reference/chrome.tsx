import { closing, masthead } from "./chrome-markup";

const siteDirectory = [
  ["/services", "Services"],
  ["/pricing", "Pricing"],
  ["/contact#enquiry", "Contact"],
  ["/company-profile", "Company profile"],
  ["/insights", "Insights"],
  ["/privacy", "Privacy"],
  ["/terms", "Terms"],
] as const;

const searchDirectory = [
  ["/about", "About Carter Digitals"],
  ["/sectors/law-firms", "Law firm websites"],
  ["/sectors/construction", "Construction websites"],
  ["/sectors/dental-practices", "Dental practice websites"],
  ["/sectors/schools", "School websites"],
  ["/offerings/premium-websites", "Custom website development"],
  ["/offerings/web-applications", "Custom web applications"],
  ["/offerings/business-systems", "Business systems"],
  ["/offerings/creative-media", "Creative media"],
  ["/offerings/ai-clone-avatar-videos", "AI presenter videos"],
  ["/seo-geo-pretoria", "SEO and GEO in Pretoria"],
  ["/website-development-pretoria", "Pretoria websites"],
  ["/website-development-pretoria-east", "Pretoria East websites"],
  ["/website-development-soshanguve", "Soshanguve websites"],
  ["/website-development-mabopane", "Mabopane websites"],
  ["/website-development-centurion", "Centurion websites"],
  ["/website-development-johannesburg", "Johannesburg websites"],
  ["/web-application-development-pretoria", "Web apps in Pretoria"],
] as const;

export function ReferenceMasthead({ route }: { route?: string }) {
  const markup = route
    ? masthead.replace(
        /(<div class="links"[^>]*>)([\s\S]*?)(<\/div>)/,
        (_match, start: string, links: string, end: string) =>
          start +
          links.replace(
            `<a href="${route}">`,
            `<a href="${route}" class="on" aria-current="page">`,
          ) +
          end,
      )
    : masthead;
  return (
    <div
      className="reference-chrome"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

export function ReferenceFooter() {
  return (
    <div className="reference-chrome reference-closing">
      <div dangerouslySetInnerHTML={{ __html: closing }} />
      <nav
        className="wrap reference-links"
        aria-label="More from Carter Digitals"
      >
        {siteDirectory.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
        <details>
          <summary>Industries, services and locations</summary>
          {searchDirectory.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </details>
      </nav>
    </div>
  );
}
