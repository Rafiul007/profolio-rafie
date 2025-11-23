"use client";

import { ReactNode } from "react";

export default function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-linear-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient">
      {children}
    </span>
  );
}
