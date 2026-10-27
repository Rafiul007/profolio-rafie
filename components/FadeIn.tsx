"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { reveal, spring } from "@/lib/motion";

type FadeInProps = {
  children: ReactNode;
  /** Delay in milliseconds */
  delay?: number;
  className?: string;
};

// Above-the-fold entrance: plays on mount.
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      animate="visible"
      transition={{ ...spring, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
