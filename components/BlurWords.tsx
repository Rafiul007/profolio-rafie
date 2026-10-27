"use client";

import { motion } from "framer-motion";
import { spring } from "@/lib/motion";

// Each word sharpens into place in reading order.
export default function BlurWords({
  text,
  delay = 0,
  step = 0.06,
}: {
  text: string;
  /** Seconds before the first word */
  delay?: number;
  /** Seconds between words */
  step?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      aria-label={text}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: step, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block will-change-[transform,filter,opacity]"
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={spring}
        >
          {word}
          {i < words.length - 1 && " "}
        </motion.span>
      ))}
    </motion.span>
  );
}
