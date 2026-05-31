import type { MetadataRoute } from "next";
import { blogPosts, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/portfolio", "/blog", "/about", "/contact", "/admin"].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.8 }));
  const blogRoutes = blogPosts.map((post) => ({ url: `${site.url}/blog/${post.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...staticRoutes, ...blogRoutes];
}
