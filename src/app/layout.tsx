import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LcarsFooter from "@/components/lcars/LcarsFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StarPath - LCARS Travel Planner",
  description: "A Star Trek-inspired travel planning application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased flex flex-col`}>
        <main className="flex-1">{children}</main>
        <LcarsFooter />
      </body>
    </html>
  );
}
