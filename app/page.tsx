import Link from "next/link";
import { ContactCTA } from "@/components/CTA";
import { LeadForm } from "@/components/LeadForm";
import { MotionReveal } from "@/components/MotionReveal";
import { faqs, industries, portfolio, services, stats, testimonials } from "@/lib/content";

const process = ["Discover", "Wireframe", "Design", "Build", "Launch", "Optimize"];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(23,212,255,.28),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(23,105,255,.45),transparent_28%)]" />
        <div className="container-pad relative grid gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="mb-5 w-fit rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-cyan">Premium lead generation agency for growing local brands</span>
            <h1 className="text-5xl font-black leading-[.95] tracking-tight md:text-7xl">Build a digital presence that <span className="gradient-text">turns visitors into qualified leads.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Top Design offers website development, mobile apps, digital marketing, SEO, interior design, printing, branding, and business management solutions for startups, salons, restaurants, retailers, offices, and local businesses.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#quote" className="rounded-full bg-cyan px-6 py-4 font-black text-ink shadow-glow">Get Instant Quote</Link>
              <Link href="/portfolio" className="rounded-full border border-white/25 px-6 py-4 font-black text-white">View Results</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">{stats.map(([number, label]) => <div key={number} className="rounded-3xl border border-white/10 bg-white/5 p-4"><b className="text-3xl text-cyan">{number}</b><p className="mt-1 text-sm text-white/60">{label}</p></div>)}</div>
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-pad">
          <p className="section-kicker">Services overview</p><h2 className="section-title max-w-3xl">One partner for digital growth, physical brand presence, and operational systems.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <MotionReveal key={service.slug} delay={index * 0.04}><article className="card-hover h-full rounded-4xl border border-slate-200 bg-white p-6"><h3 className="text-xl font-black">{service.title}</h3><p className="mt-3 text-slate-600">{service.summary}</p><Link href={`/services#${service.slug}`} className="mt-5 inline-flex font-black text-royal">Explore service →</Link></article></MotionReveal>)}</div>
        </div>
      </section>

      <section className="bg-frost py-16 md:py-24">
        <div className="container-pad grid gap-10 lg:grid-cols-2">
          <div><p className="section-kicker">Why choose us</p><h2 className="section-title">Strategy, execution, and analytics under one premium workflow.</h2><p className="mt-5 text-lg text-slate-600">Every engagement is designed around customer intent, fast loading experiences, high-contrast CTAs, trustworthy proof, SEO foundations, and follow-up automation.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{["Mobile-first UX", "Core Web Vitals", "Lead tracking CRM", "SEO schema", "WhatsApp funnels", "Premium visual design"].map((item) => <div key={item} className="rounded-3xl bg-white p-6 font-black shadow-card">{item}</div>)}</div>
        </div>
      </section>

      <section className="py-16 md:py-24"><div className="container-pad"><p className="section-kicker">Portfolio showcase</p><h2 className="section-title">Proof across industries.</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{portfolio.slice(0,3).map((item) => <article key={item.title} className="rounded-4xl bg-ink p-6 text-white shadow-card"><span className="text-sm font-bold text-cyan">{item.industry}</span><h3 className="mt-4 text-2xl font-black">{item.title}</h3><p className="mt-4 text-white/65">{item.type}</p><b className="mt-6 block text-cyan">{item.result}</b></article>)}</div></div></section>

      <section className="bg-ink py-16 text-white md:py-24"><div className="container-pad"><p className="section-kicker !border-white/20 !bg-white/10 !text-cyan">Industries served</p><h2 className="max-w-3xl text-4xl font-black md:text-6xl">Specialized funnels for local businesses and premium service brands.</h2><div className="mt-10 flex flex-wrap gap-3">{industries.map((industry) => <span key={industry} className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-bold">{industry}</span>)}</div></div></section>

      <section className="py-16 md:py-24"><div className="container-pad"><p className="section-kicker">Process workflow</p><div className="grid gap-4 md:grid-cols-6">{process.map((step, index) => <div key={step} className="rounded-3xl border border-slate-200 p-5"><span className="text-sm font-black text-royal">0{index + 1}</span><h3 className="mt-4 font-black">{step}</h3></div>)}</div></div></section>

      <section className="bg-frost py-16 md:py-24"><div className="container-pad"><p className="section-kicker">Testimonials</p><div className="grid gap-5 md:grid-cols-3">{testimonials.map((t) => <blockquote key={t.name} className="rounded-4xl bg-white p-6 shadow-card"><p className="text-slate-700">“{t.quote}”</p><footer className="mt-5 font-black">{t.name}<span className="block text-sm font-medium text-slate-500">{t.role}</span></footer></blockquote>)}</div></div></section>

      <section className="py-16 md:py-24"><div className="container-pad"><p className="section-kicker">FAQ</p><div className="grid gap-4 md:grid-cols-2">{faqs.map(([q,a]) => <details key={q} className="rounded-3xl border border-slate-200 p-6"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-3 text-slate-600">{a}</p></details>)}</div></div></section>
      <ContactCTA />
    </main>
  );
}
