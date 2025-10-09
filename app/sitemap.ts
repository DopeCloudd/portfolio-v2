import type { MetadataRoute } from "next";

const baseUrl = "https://valentin-lerouge.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/mentions-legales", "/politique-de-confidentialite"];

  return routes.map((path, index) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.5,
  }));
}
