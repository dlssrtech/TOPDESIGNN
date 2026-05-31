create extension if not exists pgcrypto;

create type user_role as enum ('admin', 'manager', 'sales', 'editor', 'viewer');
create type lead_status as enum ('new', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost');
create type contact_method as enum ('WhatsApp', 'Call', 'Email');

create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  password_hash text not null,
  role user_role not null default 'viewer',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  phone text not null,
  email text not null,
  service text not null,
  budget text,
  city text,
  project_details text,
  preferred_contact_method contact_method not null default 'WhatsApp',
  source text not null default 'website',
  status lead_status not null default 'new',
  assigned_to uuid references users(id),
  next_follow_up_at timestamptz,
  converted_value numeric(12,2),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index leads_search_idx on leads using gin (to_tsvector('english', coalesce(name,'') || ' ' || coalesce(company,'') || ' ' || coalesce(email,'') || ' ' || coalesce(phone,'')));
create index leads_status_idx on leads(status);
create index leads_service_idx on leads(service);
create index leads_assignee_idx on leads(assigned_to);

create table lead_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  note text not null,
  created_by uuid references users(id),
  created_at timestamptz not null default now()
);

create table cms_pages (id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, content jsonb not null default '{}', meta jsonb not null default '{}', published boolean not null default false, updated_at timestamptz not null default now());
create table services (id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, summary text not null, benefits jsonb not null default '[]', process jsonb not null default '[]', cta text not null, sort_order int not null default 0);
create table portfolio_items (id uuid primary key default gen_random_uuid(), title text not null, industry text not null, type text not null, result text, before_after jsonb not null default '{}', gallery jsonb not null default '[]', published boolean not null default true);
create table blog_posts (id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, category text not null, tags text[] not null default '{}', excerpt text, body text not null, meta jsonb not null default '{}', published_at timestamptz);
create table testimonials (id uuid primary key default gen_random_uuid(), name text not null, company text, quote text not null, rating int default 5, published boolean not null default true);
create table seo_settings (id uuid primary key default gen_random_uuid(), route text unique not null, title text not null, description text not null, canonical text, open_graph jsonb not null default '{}', schema_markup jsonb not null default '{}');
