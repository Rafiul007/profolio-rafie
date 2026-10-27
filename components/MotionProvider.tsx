"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// Honour the OS "reduce motion" setting: transforms are dropped,
// opacity cross-fades remain so content still arrives gently.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
