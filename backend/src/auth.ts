import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export type Role = "owner" | "admin" | "sales" | "marketing" | "editor" | "viewer";
export const permissions: Record<Role, string[]> = {
  owner: ["*"],
  admin: ["leads:*", "cms:*", "analytics:read"],
  sales: ["leads:read", "leads:update", "followups:*"],
  marketing: ["leads:read", "analytics:read", "seo:*", "campaigns:*"],
  editor: ["cms:*", "blog:*", "portfolio:*"],
  viewer: ["leads:read", "analytics:read"]
};

export function signToken(payload: { id: string; role: Role; email: string }) {
  return jwt.sign(payload, process.env.JWT_SECRET || "change-me", { expiresIn: "8h" });
}

export function requireAuth(permission: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ error: "Missing token" });
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET || "change-me") as { role: Role };
      const allowed = permissions[user.role]?.includes("*") || permissions[user.role]?.includes(permission) || permissions[user.role]?.some((p) => p.endsWith(":*") && permission.startsWith(p.replace("*", "")));
      if (!allowed) return res.status(403).json({ error: "Forbidden" });
      res.locals.user = user;
      return next();
    } catch {
      return res.status(401).json({ error: "Invalid token" });
    }
  };
}
