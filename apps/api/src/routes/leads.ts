import { Router } from 'express';
import { z } from 'zod';
import { pool } from '../db/pool';
import { requireAuth } from '../middleware/auth';

const leadSchema = z.object({
  name: z.string().min(2), company: z.string().optional(), phone: z.string().min(7), email: z.string().email(),
  service: z.string().min(2), budget: z.string().optional(), city: z.string().optional(), projectDetails: z.string().optional(),
  preferredContactMethod: z.enum(['WhatsApp', 'Call', 'Email']).default('WhatsApp'), source: z.string().default('website')
});

export const leadsRouter = Router();

leadsRouter.post('/', async (req, res) => {
  const lead = leadSchema.parse(req.body);
  const { rows } = await pool.query(
    `insert into leads (name, company, phone, email, service, budget, city, project_details, preferred_contact_method, source)
     values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *`,
    [lead.name, lead.company, lead.phone, lead.email, lead.service, lead.budget, lead.city, lead.projectDetails, lead.preferredContactMethod, lead.source]
  );
  // Production hook: enqueue SMTP email, WhatsApp API notification, Meta/GA conversion event.
  return res.status(201).json(rows[0]);
});

leadsRouter.get('/', requireAuth(['admin', 'manager', 'sales']), async (req, res) => {
  const { search = '', service = '', status = '', assignee = '' } = req.query;
  const { rows } = await pool.query(
    `select * from leads
     where ($1 = '' or name ilike '%' || $1 || '%' or email ilike '%' || $1 || '%' or phone ilike '%' || $1 || '%')
       and ($2 = '' or service = $2) and ($3 = '' or status = $3) and ($4 = '' or assigned_to::text = $4)
     order by created_at desc limit 200`,
    [search, service, status, assignee]
  );
  return res.json(rows);
});

leadsRouter.patch('/:id', requireAuth(['admin', 'manager', 'sales']), async (req, res) => {
  const input = z.object({ status: z.string().optional(), assignedTo: z.string().uuid().nullable().optional(), nextFollowUpAt: z.string().datetime().nullable().optional() }).parse(req.body);
  const { rows } = await pool.query(
    `update leads set status = coalesce($2, status), assigned_to = coalesce($3, assigned_to), next_follow_up_at = coalesce($4, next_follow_up_at), updated_at = now() where id = $1 returning *`,
    [req.params.id, input.status, input.assignedTo, input.nextFollowUpAt]
  );
  return res.json(rows[0]);
});

leadsRouter.post('/:id/notes', requireAuth(['admin', 'manager', 'sales']), async (req, res) => {
  const input = z.object({ note: z.string().min(2) }).parse(req.body);
  const { rows } = await pool.query('insert into lead_notes (lead_id, note, created_by) values ($1,$2,$3) returning *', [req.params.id, input.note, req.user?.id]);
  return res.status(201).json(rows[0]);
});
