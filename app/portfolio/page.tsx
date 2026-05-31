import type { Metadata } from "next";
import { ContactCTA } from "@/components/CTA";
import { portfolio } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("Portfolio", "Explore Top Design project gallery, case studies, before and after showcases, industry filters, and client results.", "/portfolio");

export default function PortfolioPage() {
  const industries = ["All", ...Array.from(new Set(portfolio.map((p) => p.industry)))];
  return <main><section className="bg-frost py-20"><div className="container-pad"><p className="section-kicker">Portfolio</p><h1 className="section-title max-w-4xl">Project gallery, case studies, before/after improvements, and measurable client results.</h1><div className="mt-8 flex flex-wrap gap-3">{industries.map((i) => <button key={i} className="rounded-full border border-slate-200 bg-white px-5 py-3 font-bold">{i}</button>)}</div></div></section><section className="py-16"><div className="container-pad grid gap-6 md:grid-cols-2 lg:grid-cols-3">{portfolio.map((item) => <article key={item.title} className="card-hover overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-card"><div className="grid h-48 place-items-center bg-gradient-to-br from-navy via-royal to-cyan p-6 text-center text-3xl font-black text-white">Before → After</div><div className="p-6"><span className="text-sm font-black text-royal">{item.industry}</span><h2 className="mt-2 text-2xl font-black">{item.title}</h2><p className="mt-3 text-slate-600">{item.type}</p><b className="mt-5 block text-emerald-600">{item.result}</b></div></article>)}</div></section><ContactCTA /></main>;
}
