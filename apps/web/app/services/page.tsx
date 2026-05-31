import type { Metadata } from 'next';
import { LeadForm } from '../../components/LeadForm';
import { SectionTitle } from '../../components/Sections';
import { services } from '../../lib/data';

export const metadata: Metadata = { title: 'Services', description: 'Website development, app development, marketing, SEO, interiors, printing, branding, and management solutions.' };

export default function ServicesPage() {
  return <main className="px-4 py-16"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Services" title="Conversion-focused service pages with pricing CTAs" body="Each service is planned around clear benefits, delivery process, proof, and inquiry capture." /><div className="grid gap-8">{services.map((service) => <section key={service.slug} id={service.slug} className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1fr_380px]"><div><h2 className="text-3xl font-black text-ink">{service.title}</h2><p className="mt-3 text-lg text-slate-600">{service.summary}</p><div className="mt-6 grid gap-5 md:grid-cols-2"><div><h3 className="font-bold">Benefits</h3><ul className="mt-3 space-y-2 text-slate-600">{service.benefits.map((b) => <li key={b}>✓ {b}</li>)}</ul></div><div><h3 className="font-bold">Process</h3><ol className="mt-3 space-y-2 text-slate-600">{service.process.map((p, i) => <li key={p}>{i + 1}. {p}</li>)}</ol></div></div><a href="#service-inquiry" className="mt-6 inline-flex rounded-full bg-brand-600 px-6 py-3 font-bold text-white">{service.priceCta}</a></div><LeadForm compact /></section>)}</div><div id="service-inquiry" className="mt-10"><LeadForm /></div></div></main>;
}
