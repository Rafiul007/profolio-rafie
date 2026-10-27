import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LiquidEther from "@/components/LiquidEther";
import GlassNavbar from "@/components/navbar";
import MotionProvider from "@/components/MotionProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Rafiul Faisal | Full Stack Engineer",
  description:
    "Portfolio of M Rafiul Faisal (Rafie007), a Full Stack Engineer working with React, Next.js, Node.js, NestJS, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionProvider>
        <GlassNavbar
          logoText="Rafie"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "#about" },
            { label: "Experience", href: "#experience" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ]}
          position="sticky"
          className="max-w-6xl m-auto top-2 z-50 mb-7"
        />
        <div className="fixed inset-0 bg-black -z-10" />
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={1}
          takeoverDuration={0.05}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
        {children}
        </MotionProvider>
      </body>
    </html>
  );
}
