import { Router } from 'express';
import { requireAuth } from '../middleware/auth';

export const cmsRouter = Router();

const resources = ['services', 'portfolio', 'posts', 'testimonials', 'seo-settings'];
for (const resource of resources) {
  cmsRouter.get(`/${resource}`, requireAuth(['admin', 'manager', 'editor', 'viewer']), (_req, res) => res.json({ resource, items: [] }));
  cmsRouter.post(`/${resource}`, requireAuth(['admin', 'manager', 'editor']), (_req, res) => res.status(201).json({ resource, status: 'created' }));
}
