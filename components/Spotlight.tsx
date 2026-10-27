"use client";

import { useEffect, useRef } from "react";

type SpotlightProps = {
  /** Fill glow colour */
  color?: string;
  /** Rim glow colour (the border catching the light) */
  rimColor?: string;
  size?: number;
};

// Drop inside any `relative group overflow-hidden` glass card (backdrop-filter
// makes it a stacking context, so -z-10 sits above the card's background but
// beneath its content). It tracks the pointer
// on its parent and writes CSS variables directly, so moving the mouse never
// re-renders React.
export default function Spotlight({
  color = "rgba(192, 132, 252, 0.18)",
  rimColor = "rgba(233, 213, 255, 0.6)",
  size = 420,
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host || window.matchMedia("(hover: none)").matches) return;

    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - r.left}px`);
      el.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    host.addEventListener("pointermove", move);
    return () => host.removeEventListener("pointermove", move);
  }, []);

  const at = `${size}px circle at var(--x, 50%) var(--y, 0%)`;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    >
      <div className="absolute inset-0 rounded-[inherit]" style={{ background: `radial-gradient(${at}, ${color}, transparent 70%)` }} />
      {/* 1px rim: same gradient, masked to the border only */}
      <div
        className="absolute inset-0 rounded-[inherit] p-px"
        style={{
          background: `radial-gradient(${size * 0.6}px circle at var(--x, 50%) var(--y, 0%), ${rimColor}, transparent 70%)`,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0)",
        }}
      />
    </div>
  );
}
