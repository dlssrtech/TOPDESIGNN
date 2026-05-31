# Top Design Lead Generation Website Blueprint

## UX objective
Top Design needs a premium, mobile-first lead generation platform that builds trust with startups, salons, parlours, restaurants, retailers, offices, and local businesses. The core conversion paths are free consultation, instant quote, callback, WhatsApp, schedule meeting, website audit, SEO consultation, marketing strategy session, newsletter, exit-intent offer, and company profile download.

## Responsive design system
- **Theme:** deep navy `#08111f`, electric blue `#1479ff`, white, slate neutrals, and green for WhatsApp intent.
- **Typography:** large, bold hero headlines; readable 16–18px body copy; strong uppercase section eyebrows.
- **Layout:** 12-column desktop grid, two-column tablet service layouts, single-column mobile cards, sticky bottom CTA bar on small screens.
- **Components:** rounded 24–32px cards, high-contrast CTAs, compact forms, service cards, proof stats, portfolio cards, accordions, filters, dashboard modules.
- **Motion:** lightweight hover lifts and Framer Motion-ready reveal points; animations should be transform/opacity only to protect Core Web Vitals.
- **Performance:** server-rendered metadata, image placeholders ready for optimized `next/image`, static sitemap/robots, minimal client JavaScript, compressed assets, and form-first loading.

## Page wireframes
### 1. Home
1. Sticky header with logo, navigation, and quote CTA.
2. Hero with headline, subheadline, primary/secondary CTA, and consultation form.
3. Services overview with six cards and pricing CTAs.
4. Why choose us proof through benefits and delivery model.
5. Stats and achievements.
6. Portfolio showcase.
7. Industries served pills.
8. Process workflow.
9. Testimonials.
10. FAQ accordion.
11. Contact/instant quote CTA.
12. Sticky call, WhatsApp, and quote controls.

### 2. Services
Each service section includes positioning copy, benefits, delivery process, pricing CTA, and an embedded inquiry form. Services covered: Website Development, Mobile App Development, Digital Marketing, SEO Services, Interior Design, and Printing & Branding.

### 3. Portfolio
Project gallery with industry filters, case-study cards, before/after summaries, service type, and client result metrics. Designed to later connect to CMS-managed portfolio records.

### 4. Blog
SEO content hub with categories, tags, search UI, social sharing placeholders, related post prompts, and slug-based URL strategy.

### 5. About Us
Company story, mission, vision, team/certification placeholders, and achievements to increase trust.

### 6. Contact
Full lead form, Google Maps embed placeholder, WhatsApp, call button, email link, and notification architecture notes.

## Conversion copy library
- **Hero headline:** Build a brand, website, and growth engine that turns visitors into customers.
- **Subheadline:** Top Design helps startups, salons, parlours, restaurants, retailers, offices, and local businesses launch fast websites, apps, SEO, campaigns, interiors, print, branding, and management systems.
- **Primary CTA:** Get Instant Quote.
- **Secondary CTA:** View Results.
- **Form CTA:** Request Free Consultation.
- **Lead magnets:** Free Website Audit, Free SEO Consultation, Free Marketing Strategy Session, Schedule Meeting, Download Company Profile.

## Testimonials
- “Top Design rebuilt our online presence and our WhatsApp bookings became consistent within weeks.” — Aarav Mehta, Urban Trim Studio
- “The team connected branding, print, website, and campaigns into one polished launch plan.” — Neha Kapoor, Bloom Retail Co.
- “Professional execution, clear reporting, and a website that finally converts mobile visitors.” — Rohan Shah, Spice Route Cafe

## FAQs
- How fast can we launch a website? Most lead generation websites launch in 2–5 weeks depending on content, integrations, and approval speed.
- Do you handle SEO and marketing after launch? Yes. We offer SEO, paid campaigns, analytics, content, and conversion optimization retainers.
- Can you support salons, restaurants, and local retailers? Yes. Our workflows include booking, menu, map, WhatsApp, callback, and quote funnels.
- Do you provide admin dashboards? Yes. The blueprint includes JWT login, RBAC, CMS, leads, notes, follow-ups, and analytics.
- Can I get an instant estimate? Yes. Submit the quote form with service, budget, city, and project details.

## Admin workflow
1. Admin logs in with JWT credentials.
2. Leads enter from website forms with name, company, phone, email, service, budget, city, details, and preferred contact method.
3. Sales manager searches, filters, assigns leads, changes status, adds notes, and schedules follow-ups.
4. Editors manage pages, services, portfolio, blog posts, testimonials, and SEO settings.
5. Analytics dashboard tracks lead source, service demand, follow-up SLA, conversion status, and converted value.
6. Notifications trigger via SMTP and WhatsApp API; conversion events can be forwarded to GA4 and Meta Pixel.

## API architecture
- `POST /api/auth/login` issues JWTs for dashboard users.
- `POST /api/leads` accepts public website inquiries and queues notifications.
- `GET /api/leads` supports search, service, status, and assignee filters for authenticated sales roles.
- `PATCH /api/leads/:id` updates assignment, status, and follow-up date.
- `POST /api/leads/:id/notes` records sales notes.
- `/api/cms/*` contains role-gated CMS placeholders for services, portfolio, posts, testimonials, and SEO settings.

## Integrations plan
- **Google Analytics/Search Console:** add GA4 measurement ID and verify domain/property in production.
- **WhatsApp API:** create notification job for new lead and follow-up reminders.
- **SMTP Email:** send lead summaries to sales and confirmation emails to prospects.
- **Google Maps:** replace placeholder with official embed and LocalBusiness schema geo coordinates.
- **Meta Pixel:** send `Lead` and `Schedule` events after consent.

## Deployment structure
- `apps/web`: Next.js, React, TypeScript, Tailwind CSS website.
- `apps/api`: Express REST API with JWT middleware and PostgreSQL access.
- `database/schema.sql`: normalized PostgreSQL schema for users, leads, CMS, blog, portfolio, testimonials, and SEO.
- Production recommendation: deploy web to Vercel/Netlify, API to Render/Fly/Railway, PostgreSQL to managed Supabase/Neon/RDS, and configure environment variables for `DATABASE_URL`, `JWT_SECRET`, `WEB_ORIGIN`, SMTP, WhatsApp, GA4, Search Console, Maps, and Meta Pixel.
