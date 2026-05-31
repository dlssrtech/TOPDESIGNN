# Top Design Lead Generation Website

Premium, modern, SEO-optimized lead generation platform for Top Design services: website development, mobile app development, digital marketing, SEO, interior design, printing, branding, and business management solutions.

## Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS, Framer Motion-ready structure
- Backend: Node.js, Express REST API, JWT RBAC
- Database: PostgreSQL
- SEO: dynamic metadata, schema markup, sitemap, robots, canonical URLs, Open Graph

## Project Structure

```text
app/                 Next.js routes and metadata routes
components/          Shared UI and conversion components
lib/                 Content and SEO helpers
backend/src/         Express API, JWT auth, RBAC middleware
db/schema.sql        PostgreSQL schema
docs/blueprint.md    Wireframes, workflows, API, SEO, deployment blueprint
```

## Local Development

```bash
npm install
npm run dev
npm run api:dev
```

## Checks

```bash
npm run typecheck
npm run build
```

## Lead Fields

Name, Company, Phone, Email, Service, Budget, City, Project Details, Preferred Contact Method.

## Deployment

1. Create PostgreSQL database and run `db/schema.sql`.
2. Configure environment variables from `.env.example`.
3. Deploy Next.js frontend.
4. Deploy Express backend.
5. Connect Google Analytics, Search Console, WhatsApp API, SMTP, Google Maps, and Meta Pixel.
