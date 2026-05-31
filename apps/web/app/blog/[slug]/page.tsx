import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../lib/data';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: `${post.title} by Top Design. Practical guidance for local businesses seeking better leads.`, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { title: post.title, type: 'article' } };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <main className="px-4 py-16"><article className="mx-auto max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.25em] text-brand-600">{post.category}</p><h1 className="mt-3 text-5xl font-black tracking-tight text-ink">{post.title}</h1><div className="mt-5 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm">#{tag}</span>)}</div><p className="mt-8 text-lg leading-8 text-slate-700">This SEO-ready article template supports dynamic metadata, canonical URLs, related posts, social sharing, and CMS body content. Replace this placeholder with an expert guide, internal links, FAQs, schema, and conversion CTAs tailored to the target keyword.</p><div className="mt-8 rounded-3xl bg-brand-50 p-6"><h2 className="text-2xl font-bold text-ink">Need help implementing this?</h2><p className="mt-2 text-slate-600">Book a free strategy session with Top Design to turn website visitors into qualified leads.</p></div></article></main>;
}
