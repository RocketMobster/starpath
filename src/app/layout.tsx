import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LcarsFooter from "@/components/lcars/LcarsFooter";

const geist = Geist({
  subsets: ["latin"],
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
      <body className={`${geist.className} min-h-screen bg-black text-white antialiased flex flex-col`}>
        <main className="flex-1">{children}</main>
        <LcarsFooter />
      </body>
    </html>
  );
}
