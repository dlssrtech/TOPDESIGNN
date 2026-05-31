import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export type Role = 'admin' | 'manager' | 'sales' | 'editor' | 'viewer';
export type AuthRequest = Request & { user?: { id: string; role: Role; email: string } };

export function requireAuth(roles: Role[] = []) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Missing token' });
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET || 'change-me') as AuthRequest['user'];
      if (!user || (roles.length && !roles.includes(user.role))) return res.status(403).json({ error: 'Forbidden' });
      req.user = user;
      return next();
    } catch {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}
