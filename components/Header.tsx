import Link from "next/link";
import { site } from "@/lib/content";

const nav = [["Services", "/services"], ["Portfolio", "/portfolio"], ["Blog", "/blog"], ["About", "/about"], ["Contact", "/contact"], ["Admin", "/admin"]];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-xl">
      <div className="container-pad flex h-18 items-center justify-between py-4">
        <Link href="/" className="text-xl font-black tracking-tight">Top<span className="text-cyan">Design</span></Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="text-white/75 transition hover:text-white">{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={site.whatsapp} className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-ink sm:inline-flex">WhatsApp</a>
          <Link href="/contact" className="rounded-full bg-white px-4 py-2 text-sm font-black text-ink transition hover:bg-cyan">Free Audit</Link>
        </div>
      </div>
    </header>
  );
}
