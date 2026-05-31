# Top Design Lead Generation Platform

A premium, modern, SEO-optimized lead generation website and admin/API blueprint for Top Design.

## Stack
- Frontend: Next.js, React, TypeScript, Tailwind CSS, Framer Motion-ready UI patterns
- Backend: Node.js, Express REST API
- Database: PostgreSQL
- Auth: JWT with role-based access control
- Integrations: Google Analytics, Search Console, WhatsApp API, SMTP Email, Google Maps, Meta Pixel

## Project structure
```text
apps/web      Next.js marketing website and admin dashboard shell
apps/api      Express API with auth, leads, and CMS route structure
database      PostgreSQL schema
docs          UI/UX, content, workflow, API, and deployment blueprint
```

## Local development
```bash
npm install
npm run dev:web
npm run api:dev
```

## Environment variables
```bash
DATABASE_URL=postgres://user:password@localhost:5432/topdesign
JWT_SECRET=replace-with-secure-secret
WEB_ORIGIN=http://localhost:3000
PGSSL=false
```

## Key lead fields
Name, Company, Phone, Email, Service, Budget, City, Project Details, Preferred Contact Method.

## Admin modules
Secure JWT login, RBAC, lead management, CMS management, blog, portfolio, service management, testimonials, SEO settings, analytics dashboard, and email/WhatsApp notifications.
