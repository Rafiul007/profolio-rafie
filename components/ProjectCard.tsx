/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  index: number;
};

export default function ProjectCard({
  title,
  image,
  description,
  tech,
  link,
  github,
  index,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
      >
        <div className="relative overflow-hidden h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-40 transition-all"></div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl text-white font-light">{title}</h3>
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
            {/* Instead of real links → open modal */}
            <button
              onClick={() => setOpen(true)}
              className="text-purple-300 text-sm hover:underline"
            >
              Live →
            </button>
            <button
              onClick={() => setOpen(true)}
              className="text-purple-300 text-sm hover:underline"
            >
              GitHub →
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 border border-white/20 text-white p-8 rounded-2xl max-w-sm w-full text-center">
            <h2 className="text-2xl font-light mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              This project is currently being updated — the live version will be
              available soon.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="px-6 py-2 bg-purple-500/40 hover:bg-purple-500/60 rounded-lg border border-white/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
