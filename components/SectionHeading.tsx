"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { inViewOnce, reveal, spring } from "@/lib/motion";
import GradientText from "./GradientText";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  highlight: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      transition={{ staggerChildren: 0.08 }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <motion.p
          variants={reveal}
          transition={spring}
          className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-purple-300/80"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={reveal}
        transition={spring}
        className="text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.05] text-white mb-5"
      >
        {title} <GradientText>{highlight}</GradientText>
      </motion.h2>
      <motion.div
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ ...spring, delay: 0.15 }}
        style={{ originX: centered ? 0.5 : 0 }}
        className={`h-1 w-20 rounded-full bg-linear-to-r from-purple-400 to-pink-400 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
