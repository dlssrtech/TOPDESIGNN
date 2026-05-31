import { randomUUID } from "node:crypto";
import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import { z } from "zod";
import { requireAuth, signToken } from "./auth";

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json());

const leadSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  phone: z.string().min(7),
  email: z.string().email(),
  service: z.string().min(2),
  budget: z.string().optional(),
  city: z.string().optional(),
  projectDetails: z.string().optional(),
  preferredContactMethod: z.enum(["WhatsApp", "Call", "Email", "Meeting"]).default("WhatsApp")
});

app.get("/health", (_req, res) => res.json({ ok: true, service: "top-design-api" }));
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });
  return res.json({ token: signToken({ id: "admin-demo", email, role: "admin" }) });
});

app.post("/leads", (req, res) => {
  const parsed = leadSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ errors: parsed.error.flatten() });
  return res.status(201).json({ id: randomUUID(), status: "new", ...parsed.data });
});

app.get("/admin/leads", requireAuth("leads:read"), (_req, res) => {
  res.json({ data: [], filters: ["service", "budget", "city", "status", "assignedTo", "source"] });
});

app.patch("/admin/leads/:id", requireAuth("leads:update"), (req, res) => {
  res.json({ id: req.params.id, ...req.body, updatedAt: new Date().toISOString() });
});

app.get("/admin/reports/conversions", requireAuth("analytics:read"), (_req, res) => {
  res.json({ leads: 0, won: 0, conversionRate: 0, revenuePipeline: 0 });
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`Top Design API running on ${port}`));
