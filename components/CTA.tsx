import Link from "next/link";
import { site } from "@/lib/content";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto flex w-[92%] max-w-xl items-center justify-between gap-2 rounded-full border border-white/30 bg-ink/90 p-2 text-white shadow-glow backdrop-blur md:bottom-6">
      <span className="pl-4 text-sm font-bold">Ready to grow leads?</span>
      <div className="flex gap-2">
        <a href={site.whatsapp} className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-black">WhatsApp</a>
        <Link href="/contact" className="rounded-full bg-royal px-4 py-2 text-sm font-black">Quote</Link>
      </div>
    </div>
  );
}

export function ContactCTA() {
  return (
    <section className="bg-frost py-16">
      <div className="container-pad rounded-4xl bg-gradient-to-br from-navy via-royal to-cyan p-8 text-white shadow-glow md:p-12">
        <p className="font-bold uppercase tracking-[.25em] text-white/70">Conversion sprint</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">Get a free strategy session for your website, SEO, app, interiors, or brand launch.</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-black text-ink">Schedule Meeting</Link>
          <a href={site.whatsapp} className="rounded-full border border-white/30 px-6 py-3 font-black text-white">Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
