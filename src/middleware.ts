import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { auth } from "@/lib/auth";
import { canAccessAdmin } from "@/lib/permissions";

const DASHBOARD_ROUTE = "/dashboard";
const ADMIN_ROUTE = "/admin";

export default auth((req) => {
  const pathname = req.nextUrl.pathname;

  const session = req.auth;

  const isDashboardRoute =
    pathname === DASHBOARD_ROUTE ||
    pathname.startsWith("/dashboard/");

  const isAdminRoute =
    pathname === ADMIN_ROUTE ||
    pathname.startsWith("/admin/");

  /**
   * Protected User Routes
   */
  if (isDashboardRoute) {
    if (!session?.user) {
      return NextResponse.redirect(
        new URL("/login", req.nextUrl)
      );
    }

    return NextResponse.next();
  }

  /**
   * Protected Admin Routes
   */
  if (isAdminRoute) {
    if (!session?.user) {
      return NextResponse.redirect(
        new URL("/login", req.nextUrl)
      );
    }

    if (!canAccessAdmin(session.user.role)) {
      return NextResponse.redirect(
        new URL("/unauthorized", req.nextUrl)
      );
    }

    return NextResponse.next();
  }

  /**
   * Public Routes
   */
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
  ],
};