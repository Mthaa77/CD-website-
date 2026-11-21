import {catalogue} from './_lib/catalogue';
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DM_Serif_Display, Geist_Mono, Manrope, Sacramento } from "next/font/google";
import "./globals.css";
import "./sitewide-premium.css";
import "./scrollcraft-foundation.css";
import "./_components/studio-typography.css";
import "./_components/studio-wide.css";
import "./_components/studio-editions.css";
import "./carter-cinematic.css";
import SiteTransitions from "./_components/site-transitions";


const carterInter = localFont({ src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", weight: "100 900", variable: "--cd-inter", display: "swap" });
const carterSpace = localFont({ src: "../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2", weight: "300 700", variable: "--cd-space", display: "swap" });

const workhorse = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const editorial = DM_Serif_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const signature = Sacramento({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carterdigitals.co.za"),
  title: {
    default: "Website Development Pretoria & Gauteng | Carter Digitals",
    template: "%s | Carter Digitals",
  },
  description:
    "Premium website development, web apps and business systems in Pretoria and Gauteng. Carter Digitals builds clear, search-ready experiences that earn trust and enquiries.",
  applicationName: "Carter Digitals",
  manifest: "/manifest.webmanifest",
  category: "website development",
  formatDetection: {
    telephone: true,
  },
  authors: [{ name: "Carter Digitals", url: "https://carterdigitals.co.za" }],
  creator: "Carter Digitals",
  publisher: "Carter Digitals (Pty) Ltd",
  alternates: {
    canonical: "/",
    languages: {
      "en-ZA": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "/",
    siteName: "Carter Digitals",
    title: "Website Development Pretoria & Gauteng | Carter Digitals",
    description:
      "Premium, founder-led websites and digital systems that help South African businesses become easier to trust, choose and contact.",
    images: [{
      url: "/carter-social-preview-v2.jpg",
      width: 1200,
      height: 630,
      alt: "Carter Digitals — websites, apps and business systems from Pretoria, South Africa",
      type: "image/jpeg",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Pretoria & Gauteng | Carter Digitals",
    description: "Founder-led websites and digital systems for South African businesses ready to look credible, win better enquiries and work smarter.",
    images: ["/carter-social-preview-v2.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/carter-digitals-mark.png", type: "image/png", sizes: "256x256" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  other: {
    "msapplication-TileColor": "#061633",
    "msapplication-config": "none",
    "geo.region": "ZA-GP",
    "geo.placename": "Pretoria, Gauteng",
    "content-language": "en-ZA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#061633" },
    { media: "(prefers-color-scheme: dark)", color: "#03070d" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="Carter Digitals AI-readable site summary" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://carterdigitals.co.za/#organization",
                  name: "Carter Digitals",
                  legalName: "Carter Digitals (Pty) Ltd",
                  alternateName: "Carter Digitals Pretoria",
                  url: "https://carterdigitals.co.za",
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://carterdigitals.co.za/#logo",
                    url: "https://carterdigitals.co.za/carter-digitals-mark.png",
                    contentUrl: "https://carterdigitals.co.za/carter-digitals-mark.png",
                    width: 256,
                    height: 256,
                    caption: "Carter Digitals"
                  },
                  image: {
                    "@type": "ImageObject",
                    url: "https://carterdigitals.co.za/carter-social-preview-v2.jpg",
                    width: 1200,
                    height: 630,
                    caption: "Carter Digitals — websites, apps and business systems"
                  },
                  slogan: "Be clear. Be credible. Be chosen.",
                  description: "Founder-led digital studio based in Soshanguve, Pretoria, building custom websites, web applications, business systems, online stores and ongoing care for South African organisations.",
                  telephone: "+27724026893",
                  email: "kabelokadiaka4@gmail.com",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+27724026893",
                    email: "kabelokadiaka4@gmail.com",
                    contactType: "sales and project enquiries",
                    areaServed: "ZA",
                    availableLanguage: ["English"],
                  },
                  areaServed: [
                    { "@type": "City", name: "Pretoria" },
                    { "@type": "Place", name: "Soshanguve" },
                    { "@type": "Place", name: "Mabopane" },
                    { "@type": "City", name: "Centurion" },
                    { "@type": "City", name: "Midrand" },
                    { "@type": "City", name: "Johannesburg" },
                    { "@type": "AdministrativeArea", name: "Gauteng" },
                    { "@type": "Country", name: "South Africa" }
                  ],
                  serviceArea: [
                    { "@type": "City", name: "Pretoria" },
                    { "@type": "AdministrativeArea", name: "Gauteng" },
                    { "@type": "Country", name: "South Africa" }
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Soshanguve, Pretoria",
                    addressRegion: "Gauteng",
                    addressCountry: "ZA"
                  },
                  founder: { "@id": "https://carterdigitals.co.za/#kabelo-kadiaka" },
                  priceRange: "R4,999–R199,999+",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Carter Digitals services",
                    itemListElement: catalogue.map(group=>({"@type":"OfferCatalog",name:group.title,url:"https://carterdigitals.co.za/pricing#"+group.id}))

                  },
                  knowsAbout: ["Website development", "Web design", "Web application development", "Internal business systems", "Brand content", "AI avatar video production", "User experience design", "Local SEO", "Generative Engine Optimisation", "AI search visibility", "XML sitemaps", "Conversion strategy", "Mobile-first product design", "Digital transformation"]
                },
                {
                  "@type": "Person",
                  "@id": "https://carterdigitals.co.za/#kabelo-kadiaka",
                  name: "Kabelo Kadiaka",
                  jobTitle: "Founder and Full-Stack Developer",
                  image: "https://carterdigitals.co.za/kabelo-kadiaka-founder.jpg",
                  url: "https://carterdigitals.co.za/company-profile",
                  worksFor: { "@id": "https://carterdigitals.co.za/#organization" },
                  homeLocation: { "@type": "Place", name: "Pretoria, Gauteng" }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://carterdigitals.co.za/#website",
                  url: "https://carterdigitals.co.za",
                  name: "Carter Digitals",
                  alternateName: "Carter Digitals Pretoria",
                  description: "Premium websites, web applications and search-ready digital systems built in Pretoria for South African organisations.",
                  inLanguage: "en-ZA",
                  publisher: { "@id": "https://carterdigitals.co.za/#organization" }
                },
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${carterInter.variable} ${carterSpace.variable} ${workhorse.variable} ${geistMono.variable} ${editorial.variable} ${signature.variable} antialiased`}
      >
        <a className="global-skip-link" href="#main-content">Skip to main content</a>
        <SiteTransitions>{children}</SiteTransitions>
      </body>
    </html>
  );
}
