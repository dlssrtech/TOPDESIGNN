import type { Metadata } from 'next';
import { SectionTitle } from '../../components/Sections';
import { industries, portfolio } from '../../lib/data';

export const metadata: Metadata = { title: 'Portfolio', description: 'Top Design project gallery, case studies, before-after showcases, filters, and client results.' };

export default function PortfolioPage() {
  return <main className="px-4 py-16"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Portfolio" title="Case studies, before/after proof, and client results" /><div className="mb-8 flex flex-wrap gap-3"><button className="rounded-full bg-ink px-5 py-2 font-bold text-white">All</button>{industries.map((i) => <button key={i} className="rounded-full border border-slate-200 px-5 py-2 font-bold">{i}</button>)}</div><div className="grid gap-6 md:grid-cols-3">{portfolio.map((project) => <article key={project.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"><div className="h-48 bg-gradient-to-br from-brand-600 via-ink to-slate-900" /><div className="p-6"><p className="text-sm font-bold text-brand-600">{project.industry} · {project.type}</p><h2 className="mt-3 text-2xl font-black">{project.title}</h2><p className="mt-3 text-slate-600">Result: {project.result}</p><div className="mt-5 grid grid-cols-2 gap-3 text-sm"><span className="rounded-2xl bg-slate-100 p-3">Before: fragmented journey</span><span className="rounded-2xl bg-brand-50 p-3">After: clear lead path</span></div></div></article>)}</div></div></main>;
}
