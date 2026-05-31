import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Admin Dashboard', robots: { index: false, follow: false } };

const modules = ['Lead management', 'CMS management', 'Blog management', 'Portfolio management', 'Service management', 'Testimonial management', 'SEO settings', 'Analytics dashboard', 'Email & WhatsApp notifications'];

export default function AdminPage() {
  return <main className="min-h-screen bg-slate-100 px-4 py-10"><div className="mx-auto max-w-7xl"><div className="mb-8 rounded-3xl bg-ink p-6 text-white"><p className="text-sm font-bold text-brand-100">Secure JWT + RBAC dashboard blueprint</p><h1 className="mt-2 text-4xl font-black">Top Design Admin</h1></div><div className="grid gap-5 md:grid-cols-3">{modules.map((m) => <section key={m} className="rounded-3xl bg-white p-6 shadow-sm"><h2 className="text-xl font-bold">{m}</h2><p className="mt-3 text-slate-600">Role-gated workflow with audit history, search, filters, assignments, notes, follow-ups, and reporting.</p></section>)}</div></div></main>;
}
