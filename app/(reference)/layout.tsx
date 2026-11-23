import { SiteMeasurement } from "../_components/site-transitions";
import { SiteHead } from "../_lib/site-metadata";
import "../_components/reference/fonts.css";
import "../_components/reference/reference.css";

export { metadata, viewport } from "../_lib/site-metadata";

export default function ReferenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <SiteHead />
      <body className="reference-site">
        <a className="btn reference-skip" href="#main-content">Skip to main content</a>
        <SiteMeasurement />
        {children}
        {/* The reference effects enhance the server-rendered page after parsing. */}
        <script defer src="/reference/experience.js" />
      </body>
    </html>
  );
}
