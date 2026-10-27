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
          autoSpeed={0.3}
          autoIntensity={0.7}
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
        {/* Vignette: dims the fluid at the edges so content leads */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-1 bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.8)_100%)]"
        />
        {children}
        </MotionProvider>
      </body>
    </html>
  );
}
