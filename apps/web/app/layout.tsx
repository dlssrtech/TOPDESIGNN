import type { Metadata } from 'next';
import './globals.css';
import { Footer, Header, StickyCtas } from '../components/Sections';

const siteUrl = 'https://topdesign.example';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Top Design | Websites, Apps, SEO, Branding & Business Growth', template: '%s | Top Design' },
  description: 'Premium lead generation websites, mobile apps, digital marketing, SEO, interior design, printing, branding, and business management solutions.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Top Design Growth Solutions', description: 'Conversion-focused digital and brand solutions for startups and local businesses.', url: siteUrl, siteName: 'Top Design', type: 'website' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Top Design',
    url: siteUrl,
    areaServed: 'India',
    serviceType: ['Website Development', 'Mobile App Development', 'Digital Marketing', 'SEO', 'Interior Design', 'Printing Services', 'Branding', 'Business Management Solutions']
  };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header />{children}<Footer /><StickyCtas /></body></html>;
}
