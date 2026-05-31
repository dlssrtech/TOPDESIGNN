import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/CTA";
import { organizationSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Website, App, SEO, Branding & Business Growth Agency",
  "Top Design builds premium websites, mobile apps, SEO campaigns, digital marketing funnels, interiors, printing, branding, and business management systems."
);

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
        <Header />
        {children}
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
