import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contact Carter Digitals | Pretoria" },
  description: "Discuss website development, a web application or an internal business system directly with Carter Digitals founder Kabelo Kadiaka in Pretoria.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Start a Project with Carter Digitals",
    description: "Talk directly with founder and developer Kabelo Kadiaka about your website, application, business system or brand content project.",
    images: [{ url: "/carter-social-preview-v2.jpg", width: 1200, height: 630, alt: "Carter Digitals premium digital studio in Pretoria" }],
  },
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
