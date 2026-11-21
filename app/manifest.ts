import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Carter Digitals",
    short_name: "Carter Digitals",
    description: "Premium websites, web applications and business systems from Pretoria, South Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#03070d",
    theme_color: "#061633",
    lang: "en-ZA",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
