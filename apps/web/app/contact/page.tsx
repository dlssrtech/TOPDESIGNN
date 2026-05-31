import type { Metadata } from 'next';
import { LeadForm } from '../../components/LeadForm';
import { SectionTitle } from '../../components/Sections';

export const metadata: Metadata = { title: 'Contact', description: 'Contact Top Design for a quote, callback, WhatsApp chat, meeting, or free consultation.' };

export default function ContactPage() {
  return <main className="px-4 py-16"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div><SectionTitle eyebrow="Contact" title="Tell us what you want to grow next" body="Use the form, call, WhatsApp, email, or schedule a meeting. Leads can trigger SMTP email and WhatsApp notifications." /><div className="grid gap-3"><a className="rounded-2xl bg-green-500 px-5 py-4 font-bold text-white" href="https://wa.me/919000000000">WhatsApp chat</a><a className="rounded-2xl bg-ink px-5 py-4 font-bold text-white" href="tel:+919000000000">Call +91 90000 00000</a><a className="rounded-2xl border border-slate-200 px-5 py-4 font-bold" href="mailto:hello@topdesign.example">hello@topdesign.example</a></div><div className="mt-6 min-h-64 rounded-3xl bg-slate-100 p-6 text-slate-600">Google Maps embed placeholder with office location, directions, and service area markup.</div></div><LeadForm /></div></main>;
}
