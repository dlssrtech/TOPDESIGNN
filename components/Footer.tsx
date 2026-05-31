import Link from "next/link";
import { services, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-black">Top<span className="text-cyan">Design</span></h3>
          <p className="mt-4 text-white/65">Premium websites, apps, marketing, interiors, printing, branding, and business systems built to generate leads.</p>
        </div>
        <div><h4 className="font-black">Services</h4><div className="mt-4 grid gap-2 text-sm text-white/65">{services.slice(0,6).map((s) => <Link key={s.slug} href={`/services#${s.slug}`}>{s.title}</Link>)}</div></div>
        <div><h4 className="font-black">Lead Magnets</h4><div className="mt-4 grid gap-2 text-sm text-white/65"><Link href="/contact#audit">Free Website Audit</Link><Link href="/contact#quote">Instant Quote</Link><Link href="/contact#meeting">Schedule Meeting</Link><a href="/company-profile.pdf">Download Company Profile</a></div></div>
        <div><h4 className="font-black">Contact</h4><p className="mt-4 text-sm text-white/65">{site.phone}<br />{site.email}<br />{site.address}</p></div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">© 2026 Top Design. Built for speed, trust, and measurable growth.</div>
    </footer>
  );
}
