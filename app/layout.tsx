import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Franco Elias Inzerillo - Desarrollador Full Stack",
  description:
    "Portfolio profesional de Franco Elias Inzerillo - Desarrollador Full Stack especializado en Next.js, Flutter, TypeScript y tecnologías mainframe",
  keywords:
    "Franco Inzerillo, desarrollador, full stack, Next.js, Flutter, TypeScript, COBOL, React, portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
