import { Role } from "@prisma/client";

export function isAdmin(role?: Role | null): boolean {
  return role === Role.ADMIN;
}

export function isUser(role?: Role | null): boolean {
  return role === Role.USER;
}

export function canAccessAdmin(role?: Role | null): boolean {
  return role === Role.ADMIN;
}