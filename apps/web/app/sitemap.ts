import type { MetadataRoute } from 'next';
const routes = ['', '/services', '/portfolio', '/blog', '/about', '/contact'];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: `https://topdesign.example${route}`, lastModified: new Date(), changeFrequency: 'weekly', priority: route === '' ? 1 : 0.8 })); }
