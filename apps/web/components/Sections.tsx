import Link from 'next/link';
import { faqs, industries, portfolio, services, stats, testimonials } from '../lib/data';
import { LeadForm } from './LeadForm';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-white">
        <Link href="/" className="text-xl font-black tracking-tight">Top<span className="text-brand-500">Design</span></Link>
        <div className="hidden gap-6 text-sm font-medium md:flex">
          {['Services', 'Portfolio', 'Blog', 'About', 'Contact'].map((item) => <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-brand-100">{item}</Link>)}
        </div>
        <Link href="/contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink">Get Quote</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div><h3 className="text-2xl font-black">Top<span className="text-brand-500">Design</span></h3><p className="mt-3 text-slate-300">Websites, apps, marketing, interiors, print, branding, and business systems built to generate leads.</p></div>
        <div><h4 className="font-bold">Services</h4><ul className="mt-3 space-y-2 text-slate-300">{services.slice(0, 6).map((s) => <li key={s.slug}>{s.title}</li>)}</ul></div>
        <div><h4 className="font-bold">Lead magnets</h4><ul className="mt-3 space-y-2 text-slate-300"><li>Free Website Audit</li><li>Free SEO Consultation</li><li>Marketing Strategy Session</li><li>Download Company Profile</li></ul></div>
        <div><h4 className="font-bold">Contact</h4><p className="mt-3 text-slate-300">WhatsApp: +91 90000 00000<br />Email: hello@topdesign.example<br />Serving startups and local businesses.</p></div>
      </div>
    </footer>
  );
}

export function StickyCtas() {
  return <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-ink/90 p-2 shadow-2xl backdrop-blur"><a href="tel:+919000000000" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-ink">Call</a><a href="https://wa.me/919000000000" className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-white">WhatsApp</a><a href="/contact" className="rounded-full bg-brand-600 px-4 py-2 text-sm font-bold text-white">Quote</a></div>;
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,121,255,0.35),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-2 text-sm font-bold text-brand-100">Premium lead generation for ambitious local brands</p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Build a brand, website, and growth engine that turns visitors into customers.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Top Design helps startups, salons, parlours, restaurants, retailers, offices, and local businesses launch fast websites, apps, SEO, campaigns, interiors, print, branding, and management systems.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#quote" className="rounded-full bg-brand-600 px-7 py-4 font-bold text-white shadow-glow">Get Instant Quote</a><a href="/portfolio" className="rounded-full border border-white/20 px-7 py-4 font-bold text-white">View Results</a></div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

export function ServiceCards() {
  return <section className="px-4 py-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Services" title="One partner for digital, physical, and operational growth" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <article key={service.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><h3 className="text-2xl font-bold text-ink">{service.title}</h3><p className="mt-3 text-slate-600">{service.summary}</p><ul className="mt-5 space-y-2 text-sm text-slate-700">{service.benefits.map((b) => <li key={b}>✓ {b}</li>)}</ul><Link href="/services" className="mt-6 inline-block font-bold text-brand-600">{service.priceCta} →</Link></article>)}</div></div></section>;
}

export function SectionTitle({ eyebrow, title, body, inverted = false }: { eyebrow: string; title: string; body?: string; inverted?: boolean }) {
  return <div className="mb-10 max-w-3xl"><p className={inverted ? 'text-sm font-black uppercase tracking-[0.25em] text-brand-100' : 'text-sm font-black uppercase tracking-[0.25em] text-brand-600'}>{eyebrow}</p><h2 className={inverted ? 'mt-3 text-4xl font-black tracking-tight text-white md:text-5xl' : 'mt-3 text-4xl font-black tracking-tight text-ink md:text-5xl'}>{title}</h2>{body && <p className={inverted ? 'mt-4 text-lg text-slate-300' : 'mt-4 text-lg text-slate-600'}>{body}</p>}</div>;
}

export function TrustSections() {
  return (
    <>
      <section className="bg-slate-50 px-4 py-20"><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">{stats.map(([n, l]) => <div key={n} className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-4xl font-black text-brand-600">{n}</p><p className="mt-2 text-slate-600">{l}</p></div>)}</div></section>
      <section className="px-4 py-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Portfolio" title="Showcase built around measurable outcomes" /><div className="grid gap-5 md:grid-cols-3">{portfolio.map((p) => <div key={p.title} className="rounded-3xl bg-gradient-to-br from-ink to-brand-950 p-6 text-white"><p className="text-sm text-brand-100">{p.industry} · {p.type}</p><h3 className="mt-8 text-2xl font-bold">{p.title}</h3><p className="mt-3 font-bold text-brand-100">{p.result}</p></div>)}</div></div></section>
      <section className="bg-ink px-4 py-20 text-white"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Industries" title="Built for high-intent local buyers" body="We align offers, messaging, forms, WhatsApp, calls, maps, and follow-up flows for each market." inverted /><div className="flex flex-wrap gap-3">{industries.map((i) => <span key={i} className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-bold">{i}</span>)}</div></div></section>
      <section className="px-4 py-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Process" title="From strategy to launch to conversion reporting" /><div className="grid gap-5 md:grid-cols-4">{['Audit', 'Strategy', 'Design & Build', 'Launch & Optimize'].map((step, i) => <div key={step} className="rounded-3xl border border-slate-200 p-6"><p className="text-sm font-black text-brand-600">0{i + 1}</p><h3 className="mt-4 text-xl font-bold">{step}</h3><p className="mt-2 text-slate-600">Clear milestones, approvals, analytics, and lead-quality feedback loops.</p></div>)}</div></div></section>
      <section className="bg-slate-50 px-4 py-20"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Testimonials" title="Trusted by growth-minded business owners" /><div className="grid gap-5 md:grid-cols-3">{testimonials.map((t) => <blockquote key={t.name} className="rounded-3xl bg-white p-6 shadow-sm"><p className="text-lg text-slate-700">“{t.quote}”</p><footer className="mt-5 font-bold text-ink">{t.name}<span className="block text-sm font-medium text-slate-500">{t.company}</span></footer></blockquote>)}</div></div></section>
      <section className="px-4 py-20"><div className="mx-auto max-w-4xl"><SectionTitle eyebrow="FAQ" title="Answers before your consultation" />{faqs.map(([q, a]) => <details key={q} className="mb-3 rounded-2xl border border-slate-200 p-5"><summary className="cursor-pointer font-bold text-ink">{q}</summary><p className="mt-3 text-slate-600">{a}</p></details>)}</div></section>
      <section id="quote" className="bg-brand-600 px-4 py-20 text-white"><div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2"><div><SectionTitle eyebrow="Instant quote" title="Ready to improve lead quality?" body="Request a website audit, SEO consultation, marketing strategy session, meeting, company profile, or full project estimate." inverted /></div><LeadForm compact /></div></section>
    </>
  );
}
