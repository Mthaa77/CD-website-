import localFont from "next/font/local";
import { Geist_Mono, Sacramento } from "next/font/google";
import "../globals.css";
import "../sitewide-premium.css";
import "../scrollcraft-foundation.css";
import "../_components/studio-typography.css";
import "../_components/studio-wide.css";
import "../_components/studio-editions.css";
import "../carter-cinematic.css";
import "../carter-type.css";
import SiteTransitions from "../_components/site-transitions";


const carterInter = localFont({ src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", weight: "100 900", variable: "--cd-inter", display: "swap" });
const carterSpace = localFont({ src: "../../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2", weight: "300 700", variable: "--cd-space", display: "swap" });

const workhorse = localFont({
  src: "../../public/fonts/instrument-sans.woff2",
  variable: "--font-geist-sans",
  weight: "400 700",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const editorial = localFont({
  src: [
    { path: "../../public/fonts/newsreader.woff2", style: "normal", weight: "200 800" },
    { path: "../../public/fonts/newsreader-italic.woff2", style: "italic", weight: "200 800" },
  ],
  variable: "--font-editorial",
  display: "swap",
});

const signature = Sacramento({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

import { SiteHead } from "../_lib/site-metadata";
import "../_components/reference/fonts.css";
import { ReferenceMasthead, ReferenceFooter } from "../_components/reference/chrome";
import "./reference-chrome.css";
import "./reference-theme.css";

export { metadata, viewport } from "../_lib/site-metadata";

export default function RetainedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <SiteHead />
      <body className={`reference-retained ${carterInter.variable} ${carterSpace.variable} ${workhorse.variable} ${geistMono.variable} ${editorial.variable} ${signature.variable} antialiased`}>
        <a className="global-skip-link" href="#main-content">Skip to main content</a>
        <ReferenceMasthead />
        <SiteTransitions>{children}</SiteTransitions>
        <ReferenceFooter />
        <script defer src="/reference/experience.js" />
      </body>
    </html>
  );
}
