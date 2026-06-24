import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { auth } from "@/lib/auth";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Industrial Automation Platform",
  description:
    "Automatic Door Motors, Gate Automation Systems, Rolling Shutter Motors, Boom Barriers and Entrance Automation Solutions",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  const isAuthenticated =
    !!session?.user;

  const isAdmin =
    session?.user?.role ===
    "ADMIN";

  return (
    <html
      lang="en"
      className="h-full scroll-smooth"
    >
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white antialiased`}
      >
        <Header
          isAuthenticated={
            isAuthenticated
          }
          isAdmin={isAdmin}
        />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}