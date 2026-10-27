/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { inViewOnce, reveal, spring, springSnappy, springSoft } from "@/lib/motion";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  /** Client work: shows a badge and has no public repo link */
  client?: boolean;
  index: number;
};

export default function ProjectCard({
  title,
  image,
  description,
  tech,
  link,
  github,
  client,
  index,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={inViewOnce}
        whileHover={{ y: -6, transition: springSoft }}
        transition={{ ...spring, delay: index * 0.08 }}
        className="group bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/10 rounded-3xl overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-white/[0.07] hover:border-white/20 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)] transition-[background-color,border-color,box-shadow] duration-300"
      >
        <div className="relative overflow-hidden h-56">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-40 transition-all"></div>
          {client && (
            <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1 text-[11px] font-medium tracking-wide text-white">
              Client project
            </span>
          )}
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl text-white font-light tracking-[-0.01em]">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-3">
            {/* Real links when available, otherwise "Coming Soon" modal */}
            {[
              { label: "Live", href: link },
              ...(client ? [] : [{ label: "GitHub", href: github }]),
            ].map(({ label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 text-sm hover:text-purple-200 active:scale-[0.97] transition-[color,transform] duration-150"
                >
                  {label} →
                </a>
              ) : (
                <button
                  key={label}
                  onClick={() => setOpen(true)}
                  className="text-purple-300 text-sm hover:text-purple-200 active:scale-[0.97] transition-[color,transform] duration-150"
                >
                  {label} →
                </button>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
            transition={springSnappy}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)] text-white p-8 rounded-3xl max-w-sm w-full text-center">
            <h2 className="text-2xl font-light mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              This project is currently being updated — the live version will be
              available soon.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-2 bg-purple-500/40 hover:bg-purple-500/60 active:scale-[0.97] rounded-xl border border-white/20 transition-[transform,background-color] duration-150"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
