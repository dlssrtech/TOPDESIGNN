import type { Metadata } from "next";
import { site } from "./content";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${site.url}${path}`;
  return {
    title: `${title} | ${site.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, type: "website" },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: site.address,
    areaServed: "India",
    serviceType: ["Website Development", "Mobile App Development", "Digital Marketing", "SEO", "Interior Design", "Printing", "Branding", "Business Management"]
  };
}
