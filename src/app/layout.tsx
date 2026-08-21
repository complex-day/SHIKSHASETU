import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHIKSHASETU | J&K One-Stop Career & Education Advisor",
  description:
    "Official Government of Jammu & Kashmir Agentic AI-powered career discovery, college matching, PMSSS scholarship finder, skill gap analyzer, and interactive roadmap advisor.",
  keywords: [
    "ShikshaSetu",
    "Jammu and Kashmir Education",
    "PMSSS Scholarship",
    "Career Guidance J&K",
    "Mission Youth Parvaaz",
    "NIT Srinagar",
    "IIT Jammu",
    "JKCET 2026",
    "AI Career Counselor"
  ],
  authors: [{ name: "Department of Higher & School Education, Govt of J&K" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-gov-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
