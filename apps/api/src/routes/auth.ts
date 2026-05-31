import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { pool } from '../db/pool';

const loginSchema = z.object({ email: z.string().email(), password: z.string().min(8) });
export const authRouter = Router();

authRouter.post('/login', async (req, res) => {
  const input = loginSchema.parse(req.body);
  const { rows } = await pool.query('select id, email, password_hash, role from users where email = $1 and is_active = true', [input.email]);
  const user = rows[0];
  if (!user || !(await bcrypt.compare(input.password, user.password_hash))) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'change-me', { expiresIn: '8h' });
  return res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
});
