CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE user_role AS ENUM ('owner', 'admin', 'sales', 'marketing', 'editor', 'viewer');
CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'qualified', 'proposal_sent', 'follow_up', 'won', 'lost');
CREATE TYPE contact_method AS ENUM ('WhatsApp', 'Call', 'Email', 'Meeting');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'viewer',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  company TEXT,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  budget TEXT,
  city TEXT,
  project_details TEXT,
  preferred_contact_method contact_method DEFAULT 'WhatsApp',
  source TEXT DEFAULT 'website',
  status lead_status NOT NULL DEFAULT 'new',
  assigned_to UUID REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE lead_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  author_id UUID REFERENCES users(id),
  note TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE follow_ups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  owner_id UUID REFERENCES users(id),
  due_at TIMESTAMPTZ NOT NULL,
  channel contact_method NOT NULL,
  completed_at TIMESTAMPTZ,
  outcome TEXT
);

CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  benefits JSONB NOT NULL DEFAULT '[]',
  process JSONB NOT NULL DEFAULT '[]',
  pricing_cta TEXT,
  seo JSONB NOT NULL DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE portfolio_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  industry TEXT NOT NULL,
  service_tags TEXT[] NOT NULL DEFAULT '{}',
  before_summary TEXT,
  after_summary TEXT,
  result_metric TEXT,
  gallery JSONB NOT NULL DEFAULT '[]',
  published BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  body TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  meta_title TEXT,
  meta_description TEXT,
  canonical_url TEXT,
  published_at TIMESTAMPTZ
);

CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  client_role TEXT,
  quote TEXT NOT NULL,
  rating INT DEFAULT 5,
  published BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE seo_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  path TEXT UNIQUE NOT NULL,
  meta_title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  open_graph JSONB NOT NULL DEFAULT '{}',
  schema_markup JSONB NOT NULL DEFAULT '{}',
  robots_directive TEXT DEFAULT 'index,follow'
);

CREATE INDEX leads_search_idx ON leads USING GIN (to_tsvector('english', name || ' ' || coalesce(company,'') || ' ' || phone || ' ' || email || ' ' || service || ' ' || coalesce(city,'')));
CREATE INDEX leads_status_idx ON leads(status);
CREATE INDEX leads_service_idx ON leads(service);
CREATE INDEX follow_ups_due_idx ON follow_ups(due_at) WHERE completed_at IS NULL;
