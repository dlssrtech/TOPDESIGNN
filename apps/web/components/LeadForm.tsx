'use client';

const services = ['Website Development', 'Mobile App Development', 'Digital Marketing', 'SEO Services', 'Interior Design', 'Printing & Branding', 'Business Management Solutions'];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className="grid gap-3 rounded-3xl border border-white/15 bg-white p-5 text-ink shadow-2xl" aria-label="Free consultation form">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">Free consultation</p>
        <h3 className="mt-1 text-2xl font-bold">Get a growth plan in 24 hours</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input required name="name" placeholder="Name" className="rounded-2xl border border-slate-200 px-4 py-3" />
        <input name="company" placeholder="Company" className="rounded-2xl border border-slate-200 px-4 py-3" />
        <input required name="phone" placeholder="Phone" className="rounded-2xl border border-slate-200 px-4 py-3" />
        <input required name="email" type="email" placeholder="Email" className="rounded-2xl border border-slate-200 px-4 py-3" />
      </div>
      <select name="service" className="rounded-2xl border border-slate-200 px-4 py-3" defaultValue="">
        <option value="" disabled>Service needed</option>
        {services.map((service) => <option key={service}>{service}</option>)}
      </select>
      {!compact && (
        <div className="grid gap-3 sm:grid-cols-3">
          <input name="budget" placeholder="Budget" className="rounded-2xl border border-slate-200 px-4 py-3" />
          <input name="city" placeholder="City" className="rounded-2xl border border-slate-200 px-4 py-3" />
          <select name="preferredContactMethod" className="rounded-2xl border border-slate-200 px-4 py-3" defaultValue="WhatsApp">
            <option>WhatsApp</option><option>Call</option><option>Email</option>
          </select>
        </div>
      )}
      <textarea name="projectDetails" placeholder="Project details" rows={compact ? 2 : 4} className="rounded-2xl border border-slate-200 px-4 py-3" />
      <button className="rounded-2xl bg-brand-600 px-5 py-4 font-bold text-white shadow-glow transition hover:bg-brand-700">Request Free Consultation</button>
      <p className="text-xs text-slate-500">By submitting, you agree to be contacted by Top Design about your project.</p>
    </form>
  );
}
