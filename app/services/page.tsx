import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { ContactCTA } from "@/components/CTA";
import { services } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Services", "Explore Top Design services for websites, mobile apps, digital marketing, SEO, interiors, printing, branding, and business systems.", "/services");

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-ink py-20 text-white"><div className="container-pad"><p className="section-kicker !border-white/20 !bg-white/10 !text-cyan">Services</p><h1 className="max-w-4xl text-5xl font-black md:text-7xl">Integrated growth services for modern businesses.</h1><p className="mt-6 max-w-2xl text-white/70">Each service includes strategy, benefits, delivery process, pricing guidance, and a conversion-focused inquiry path.</p></div></section>
      <section className="py-16"><div className="container-pad grid gap-8">{services.map((service) => <article id={service.slug} key={service.slug} className="grid gap-8 rounded-4xl border border-slate-200 bg-white p-6 shadow-card lg:grid-cols-[1fr_380px] lg:p-8"><div><span className="text-sm font-black uppercase tracking-[.2em] text-royal">{service.price}</span><h2 className="mt-3 text-4xl font-black">{service.title}</h2><p className="mt-4 text-lg text-slate-600">{service.summary}</p><div className="mt-8 grid gap-6 md:grid-cols-2"><div><h3 className="font-black">Benefits</h3><ul className="mt-3 grid gap-2 text-slate-600">{service.benefits.map((b) => <li key={b}>• {b}</li>)}</ul></div><div><h3 className="font-black">Process</h3><ol className="mt-3 grid gap-2 text-slate-600">{service.process.map((p, i) => <li key={p}>{i + 1}. {p}</li>)}</ol></div></div></div><LeadForm compact /></article>)}</div></section>
      <ContactCTA />
    </main>
  );
}
