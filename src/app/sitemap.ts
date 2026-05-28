import type { MetadataRoute } from "next";

const baseUrl = "https://reconnectwellness.in";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/assessment", priority: 0.95, changeFrequency: "monthly" as const },
  { path: "/programs", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/programs/prevent", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/programs/manage", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/programs/recover", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/pricing", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/cgm", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
