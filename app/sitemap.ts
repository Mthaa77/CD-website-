import {sectors} from './_lib/catalogue';
import type { MetadataRoute } from "next";
import { insightSlugs } from "./(retained)/insights/content";

const baseUrl = "https://carterdigitals.co.za";
const siteUpdated = new Date("2026-11-20T00:00:00+02:00");
const redesignUpdated = new Date("2026-11-23T00:00:00+02:00");
const redesignedPaths = new Set(["", "/websites", "/stores", "/apps", "/work", "/company"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    ...["/websites", "/stores", "/apps", "/company"].map(path => ({ path, priority: 0.9, changeFrequency: "monthly" as const })),
    { path: "/services", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/company-profile", priority: 0.88, changeFrequency: "monthly" as const },
    ...sectors.map(s=>({path:"/sectors/"+s.slug,priority:0.9,changeFrequency:"monthly" as const})),
    { path: "/work", priority: 0.9, changeFrequency: "monthly" as const },
    ...["premium-websites", "web-applications", "business-systems", "creative-media", "ai-clone-avatar-videos"].map(slug => ({
      path: "/offerings/" + slug, priority: 0.85, changeFrequency: "monthly" as const,
    })),
    { path: "/insights", priority: 0.9, changeFrequency: "weekly" as const },
    ...insightSlugs.map((slug, index) => ({ path: `/insights/${slug}`, priority: index === 0 ? 0.88 : 0.84, changeFrequency: "monthly" as const })),
    { path: "/privacy", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/seo-geo-pretoria", priority: 0.92, changeFrequency: "monthly" as const },
    { path: "/website-development-pretoria", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/website-development-soshanguve", priority: 0.92, changeFrequency: "monthly" as const },
    { path: "/website-development-mabopane", priority: 0.88, changeFrequency: "monthly" as const },
    { path: "/website-development-centurion", priority: 0.86, changeFrequency: "monthly" as const },
    { path: "/website-development-pretoria-east", priority: 0.86, changeFrequency: "monthly" as const },
    { path: "/web-application-development-pretoria", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/website-development-johannesburg", priority: 0.85, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, ...entry }) => ({
    url: `${baseUrl}${path}`,
    lastModified: redesignedPaths.has(path) ? redesignUpdated : siteUpdated,
    ...entry,
  }));
}
