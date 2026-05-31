import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { authRouter } from './routes/auth';
import { cmsRouter } from './routes/cms';
import { leadsRouter } from './routes/leads';

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.WEB_ORIGIN?.split(',') || ['http://localhost:3000'] }));
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => res.json({ ok: true, service: 'top-design-api' }));
app.use('/api/auth', authRouter);
app.use('/api/leads', leadsRouter);
app.use('/api/cms', cmsRouter);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  return res.status(400).json({ error: 'Invalid request', detail: err instanceof Error ? err.message : 'Unknown error' });
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`Top Design API listening on :${port}`));
