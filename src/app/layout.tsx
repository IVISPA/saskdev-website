import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaskDev | IT Consulting for Startups",
  description: "SaskDev empowers startups with custom software, DevOps automation, and modern infrastructure — from code to cloud.",
  keywords: [
    "SaskDev",
    "DevOps",
    "IT Consulting",
    "Startups",
    "SaaS",
    "Cloud Infrastructure",
    "Custom Software",
    "Automation",
    "CI/CD",
    "Dokku",
  ],
  openGraph: {
    title: "SaskDev | IT Consulting for Startups",
    description: "Custom software, CI/CD, cloud infrastructure and technical support tailored for startup success.",
    url: "https://saskdev.com", // cámbialo en producción
    siteName: "SaskDev",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Navbar />
    {children}
    <Footer />
    </body>
    </html>
  );
}
