import type { Transition, Variants } from "framer-motion";

// Spring presets modelled on Apple's damping/response pairs.
// bounce: 0 is critically damped (no overshoot) — the default for UI.
export const spring: Transition = { type: "spring", bounce: 0, duration: 0.7 };
export const springSnappy: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.35,
};
// Only for things the user physically pushes (hover lift, press release).
export const springSoft: Transition = {
  type: "spring",
  bounce: 0.15,
  duration: 0.45,
};

// Content "materializes": rises, sharpens, and fades in together.
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const stagger = (step = 0.08, delayChildren = 0): Transition => ({
  staggerChildren: step,
  delayChildren,
});

export const inViewOnce = { once: true, margin: "-80px" } as const;
