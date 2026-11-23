import type { Metadata } from "next";

export function referenceMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const name = `${title} | Carter Digitals`;
  const image = {
    url: "/carter-social-preview-v2.jpg",
    width: 1200,
    height: 630,
    alt: "Carter Digitals",
  };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      siteName: "Carter Digitals",
      title: name,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
      images: [image.url],
    },
  };
}
