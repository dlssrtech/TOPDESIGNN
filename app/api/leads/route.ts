import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  phone: z.string().min(7),
  email: z.string().email(),
  service: z.string().min(2),
  budget: z.string().optional(),
  city: z.string().optional(),
  projectDetails: z.string().optional(),
  preferredContactMethod: z.string().optional()
});

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  const data = contentType.includes("application/json") ? await request.json() : Object.fromEntries((await request.formData()).entries());
  const parsed = leadSchema.safeParse(data);
  if (!parsed.success) return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  return NextResponse.json({ ok: true, message: "Lead captured", lead: parsed.data }, { status: 201 });
}
