const services = ["Website Development", "Mobile App Development", "Digital Marketing", "SEO Services", "Interior Design", "Printing & Branding", "Business Management"];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className="rounded-4xl border border-white/15 bg-white p-5 text-ink shadow-glow md:p-7" action="/api/leads" method="post">
      <div className="mb-5">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-royal">Free consultation</p>
        <h3 className="mt-2 text-2xl font-black">Tell us about your project</h3>
        <p className="mt-2 text-sm text-slate-600">Get a callback, audit, or instant quote within one business day.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <input required name="name" placeholder="Name" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3" />
        <input name="company" placeholder="Company" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3" />
        <input required name="phone" placeholder="Phone" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3" />
        <input required type="email" name="email" placeholder="Email" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3" />
        <select required name="service" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3">
          <option value="">Service needed</option>
          {services.map((service) => <option key={service}>{service}</option>)}
        </select>
        <select name="budget" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3">
          <option value="">Budget range</option>
          <option>Under ₹50k</option><option>₹50k–₹2L</option><option>₹2L–₹5L</option><option>₹5L+</option>
        </select>
        <input name="city" placeholder="City" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3" />
        <select name="preferredContactMethod" className="focus-ring rounded-2xl border border-slate-200 px-4 py-3">
          <option>WhatsApp</option><option>Call</option><option>Email</option><option>Meeting</option>
        </select>
      </div>
      {!compact && <textarea name="projectDetails" placeholder="Project details" rows={4} className="focus-ring mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3" />}
      <button className="mt-4 w-full rounded-2xl bg-royal px-6 py-4 font-black text-white shadow-glow transition hover:bg-navy">Get Free Strategy Call</button>
      <p className="mt-3 text-center text-xs text-slate-500">No spam. Your enquiry goes to the Top Design growth team.</p>
    </form>
  );
}
