# Top Design Lead Generation Platform Blueprint

## UI/UX Wireframes

### Home
1. Sticky header: logo, services, portfolio, blog, about, contact, admin, WhatsApp, free audit CTA.
2. Hero: premium blue/dark gradient, trust badge, headline, subheadline, primary CTA, portfolio CTA, consultation form.
3. Services overview: seven service cards with benefits and deep links.
4. Why Choose Us: strategy copy, Core Web Vitals, SEO schema, WhatsApp funnels, CRM tracking.
5. Stats & achievements: delivery count, conversion lift, rating, launch timeline.
6. Portfolio showcase: three proof cards with results.
7. Industries served: startups, salons, parlours, restaurants, retailers, offices, clinics, local services.
8. Process workflow: Discover, Wireframe, Design, Build, Launch, Optimize.
9. Testimonials, FAQ, and final contact CTA.

### Services
- Hero with service positioning.
- Repeating service detail blocks for Website Development, Mobile App Development, Digital Marketing, SEO Services, Interior Design, Printing & Branding, and Business Management Solutions.
- Each block includes benefits, delivery process, pricing CTA, and compact inquiry form.

### Portfolio
- Hero with project gallery positioning.
- Industry filter chips.
- Cards showing before/after placeholder, service type, industry, and client result metric.
- Case study structure: Challenge, Solution, Before, After, Result, Services Used, CTA.

### Blog
- Hero, category navigation, tag cloud, search input, article cards, related posts and social sharing controls.
- SEO-friendly URL pattern: `/blog/{slug}`.

### About Us
- Company story, mission, vision, certifications, team pods, achievements, and trust-building CTA.

### Contact
- Lead form, WhatsApp, call, email, free audit, instant quote, schedule meeting, and Google Maps embed placeholder.

### Admin Dashboard
- Secure login card.
- Lead pipeline kanban: New, Contacted, Proposal, Won.
- Lead fields: Name, Company, Phone, Email, Service, Budget, City, Project Details, Preferred Contact Method.
- RBAC modules: leads, CMS, blog, portfolio, services, testimonials, SEO, analytics, notifications.

## Responsive Design System
- Mobile-first layout with single-column forms and stacked cards below 768px.
- `container-pad` max-width system for consistent desktop spacing.
- Blue/white/dark palette: `ink`, `navy`, `royal`, `cyan`, `frost`.
- Rounded `4xl` premium cards, glow/card shadows, high-contrast CTAs.
- Native details/summary FAQ for accessibility and low JavaScript.
- Performance-first Next.js server components and metadata routes.

## Conversion Architecture
- Sticky CTA with quote and WhatsApp actions.
- Free consultation form on hero and every service.
- Contact page sections for Free Website Audit, Free SEO Consultation, Free Marketing Strategy Session, Instant Quote, Schedule Meeting, Download Company Profile.
- Project estimation fields mapped directly to lead schema.
- Exit intent popup should be added as a small client component that offers a free audit or company profile download.
- Newsletter signup can post to the same lead endpoint with source `newsletter`.

## API Architecture
- Public: `POST /leads`, `POST /api/leads` for lead capture.
- Auth: `POST /auth/login` issues JWT.
- Admin: `GET /admin/leads`, `PATCH /admin/leads/:id` with RBAC.
- Reports: `GET /admin/reports/conversions`.
- CMS endpoints to add next: `/admin/services`, `/admin/blog`, `/admin/portfolio`, `/admin/testimonials`, `/admin/seo-settings`.

## Admin Workflow
1. Owner creates users and assigns roles.
2. Marketing reviews source, campaign, and SEO landing page performance.
3. Sales filters new leads by service, budget, city, and preferred contact method.
4. Sales assigns lead owner, adds notes, schedules follow-ups, and changes status.
5. Admin views conversion reports by source, service, budget range, city, and sales owner.
6. Editors update services, blog, portfolio, testimonials, and SEO settings.
7. Notifications send lead alerts via SMTP and WhatsApp API.

## Database Schema
- PostgreSQL schema is in `db/schema.sql`.
- Main entities: users, leads, lead_notes, follow_ups, services, portfolio_projects, blog_posts, testimonials, seo_settings.
- Search/filter indexes support lead management, status tracking, follow-ups, and conversion reports.

## SEO Implementation
- Dynamic metadata helper for title, description, canonical, Open Graph, and Twitter cards.
- Organization structured data in the root layout.
- XML sitemap through Next.js metadata route.
- Robots.txt through Next.js metadata route.
- Blog slugs, canonical URLs, schema storage, and SEO settings table are included.

## Integrations
- Google Analytics and Meta Pixel: add scripts in `app/layout.tsx` using environment variables.
- Search Console: verify domain and submit `/sitemap.xml`.
- WhatsApp API: connect lead alerts and chat deep link.
- SMTP Email: send lead notifications from Express API.
- Google Maps: replace contact placeholder with Maps embed URL.

## Deployment Structure
- Frontend: deploy Next.js app to Vercel, Netlify, or Docker.
- Backend: deploy Express API to Render, Railway, Fly.io, or a Node container.
- Database: managed PostgreSQL with SSL.
- Environment: use `.env.example` keys for URLs, JWT, database, SMTP, analytics, pixels, WhatsApp, and maps.
- CI checks: `npm run typecheck`, `npm run build`, API health smoke test.
