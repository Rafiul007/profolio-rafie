"use client";

import { motion } from "framer-motion";
import { inViewOnce, reveal, spring } from "@/lib/motion";

// Scroll entrance: plays once when the element enters the viewport.
export default function FadeInWhenVisible({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  /** Delay in seconds */
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}
