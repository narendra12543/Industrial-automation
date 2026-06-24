import type { ReactNode } from "react";

import Header from "@/components/layout/Header";
import { auth } from "@/lib/auth";

interface PublicLayoutProps {
  children: ReactNode;
}

export default async function PublicLayout({
  children,
}: PublicLayoutProps) {
  const session = await auth();

  const isAuthenticated =
    !!session?.user;

  const isAdmin =
    session?.user?.role ===
    "ADMIN";

  return (
    <>
      

      <main>
        {children}
      </main>
    </>
  );
}