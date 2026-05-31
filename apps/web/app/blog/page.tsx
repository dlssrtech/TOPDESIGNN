import type { Metadata } from 'next';
import { SectionTitle } from '../../components/Sections';
import { blogPosts } from '../../lib/data';

export const metadata: Metadata = { title: 'Blog', description: 'SEO-friendly articles about websites, local SEO, branding, marketing, and business growth.' };

export default function BlogPage() {
  return <main className="px-4 py-16"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Blog" title="SEO content hub for high-intent business owners" /><div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto]"><input placeholder="Search articles" className="rounded-2xl border border-slate-200 px-5 py-4" /><button className="rounded-2xl bg-brand-600 px-6 py-4 font-bold text-white">Search</button></div><div className="grid gap-6 md:grid-cols-3">{blogPosts.map((post) => <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm font-bold text-brand-600">{post.category}</p><h2 className="mt-3 text-2xl font-black">{post.title}</h2><p className="mt-3 text-slate-600">SEO-friendly URL: /blog/{post.slug}</p><div className="mt-5 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm">#{tag}</span>)}</div><div className="mt-5 flex gap-3 text-sm font-bold text-brand-600"><span>Share</span><span>Related posts</span></div></article>)}</div></div></main>;
}
