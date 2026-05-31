export type Service = {
  slug: string;
  title: string;
  summary: string;
  benefits: string[];
  process: string[];
  priceCta: string;
};

export const services: Service[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    summary: 'Conversion-focused websites, eCommerce stores, booking flows, and landing pages built for speed, trust, and measurable inquiries.',
    benefits: ['Core Web Vitals-first builds', 'SEO-ready structure', 'CMS and integrations', 'Lead capture funnels'],
    process: ['Discovery and sitemap', 'Premium UI/UX design', 'Next.js development', 'Launch, analytics, and optimization'],
    priceCta: 'Request website estimate'
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    summary: 'Scalable customer, staff, booking, delivery, loyalty, and operations apps for growing brands.',
    benefits: ['iOS and Android strategy', 'Secure API architecture', 'Admin workflows', 'Push notification journeys'],
    process: ['Product roadmap', 'Clickable prototype', 'Agile development', 'Store launch support'],
    priceCta: 'Plan my app'
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    summary: 'Performance campaigns across search, social, WhatsApp, and retargeting designed to turn local attention into qualified leads.',
    benefits: ['Full-funnel strategy', 'Creative testing', 'Lead quality tracking', 'Weekly optimization'],
    process: ['Audit', 'Campaign architecture', 'Creative launch', 'Conversion reporting'],
    priceCta: 'Get a strategy session'
  },
  {
    slug: 'seo-services',
    title: 'SEO Services',
    summary: 'Local SEO, technical SEO, content planning, schema, and authority building for long-term discoverability.',
    benefits: ['Local map visibility', 'Technical fixes', 'Keyword-led content', 'Monthly ranking reports'],
    process: ['SEO audit', 'Technical implementation', 'Content calendar', 'Authority growth'],
    priceCta: 'Book free SEO consultation'
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    summary: 'Branded retail, salon, office, restaurant, and commercial interiors that improve experience and sales.',
    benefits: ['Space planning', 'Moodboards and 3D concepts', 'Material guidance', 'Vendor coordination'],
    process: ['Site study', 'Concept direction', 'Execution drawings', 'Project handover'],
    priceCta: 'Discuss my space'
  },
  {
    slug: 'printing-branding',
    title: 'Printing & Branding',
    summary: 'Logo systems, signboards, menus, packaging, brochures, stationery, uniforms, and launch collateral.',
    benefits: ['Consistent brand identity', 'Premium print finishes', 'Fast campaign kits', 'Retail-ready collateral'],
    process: ['Brand brief', 'Design system', 'Print proofing', 'Delivery coordination'],
    priceCta: 'Get branding quote'
  }
];

export const industries = ['Startups', 'Salons', 'Parlours', 'Restaurants', 'Retailers', 'Offices', 'Clinics', 'Local Businesses'];

export const stats = [
  ['120+', 'projects planned and delivered'],
  ['35%', 'average inquiry lift after launch'],
  ['8', 'core growth services under one roof'],
  ['24h', 'lead response workflow target']
];

export const portfolio = [
  { title: 'Salon Growth Website', industry: 'Salon', result: '3.2x booking inquiries', type: 'Website + SEO' },
  { title: 'Restaurant Launch Kit', industry: 'Restaurant', result: '42% higher menu scans', type: 'Branding + Printing' },
  { title: 'Retail App Concept', industry: 'Retail', result: 'Loyalty MVP roadmap', type: 'Mobile App' },
  { title: 'Office Interior Refresh', industry: 'Office', result: 'Premium client-facing space', type: 'Interior Design' },
  { title: 'Local SEO Sprint', industry: 'Clinic', result: 'Top-3 map pack keywords', type: 'SEO' },
  { title: 'Startup Demand Engine', industry: 'Startup', result: 'Qualified demo pipeline', type: 'Digital Marketing' }
];

export const testimonials = [
  { name: 'Aarav Mehta', company: 'Urban Trim Studio', quote: 'Top Design rebuilt our online presence and our WhatsApp bookings became consistent within weeks.' },
  { name: 'Neha Kapoor', company: 'Bloom Retail Co.', quote: 'The team connected branding, print, website, and campaigns into one polished launch plan.' },
  { name: 'Rohan Shah', company: 'Spice Route Cafe', quote: 'Professional execution, clear reporting, and a website that finally converts mobile visitors.' }
];

export const faqs = [
  ['How fast can we launch a website?', 'Most lead generation websites launch in 2–5 weeks depending on content, integrations, and approval speed.'],
  ['Do you handle SEO and marketing after launch?', 'Yes. We offer SEO, paid campaigns, analytics, content, and conversion optimization retainers.'],
  ['Can you support salons, restaurants, and local retailers?', 'Yes. Our workflows include booking, menu, map, WhatsApp, callback, and quote funnels for local businesses.'],
  ['Do you provide admin dashboards?', 'Yes. The platform blueprint includes JWT login, role-based access, CMS, portfolio, services, leads, notes, follow-ups, and analytics.'],
  ['Can I get an instant estimate?', 'Yes. Submit the quote form with service, budget, city, and project details to receive a scoped consultation.']
];

export const blogPosts = [
  { slug: 'local-business-website-checklist', title: 'Local Business Website Checklist for Better Leads', category: 'Website Development', tags: ['Core Web Vitals', 'Lead Generation', 'Local SEO'] },
  { slug: 'seo-for-salons-restaurants-retailers', title: 'SEO for Salons, Restaurants, and Retailers', category: 'SEO', tags: ['Local SEO', 'Schema', 'Google Maps'] },
  { slug: 'brand-launch-kit', title: 'What to Include in a Premium Brand Launch Kit', category: 'Branding', tags: ['Printing', 'Identity', 'Launch'] }
];
