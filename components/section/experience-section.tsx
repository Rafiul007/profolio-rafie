"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { inViewOnce, reveal, spring, springSoft } from "@/lib/motion";

type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  current?: boolean;
  points: string[];
  projects?: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    company: "GetOnNet AS",
    role: "Junior Full Stack Engineer",
    type: "Full-time",
    period: "June 2026 – Present",
    current: true,
    points: [
      "Build and maintain full-stack web applications for clients across the Norwegian and Swedish markets.",
      "Develop enterprise websites on Sitevision CMS with reusable components, integrations, and responsive UIs.",
      "Integrate HubSpot for CRM, marketing automation, and lead management workflows.",
      "Contribute to in-house SaaS products for the European market, including Tixio.",
    ],
    tech: ["React", "Node.js", "NestJS", "TypeScript", "PostgreSQL", "Sitevision", "HubSpot"],
  },
  {
    company: "BongoBrain",
    role: "Full Stack Engineer",
    type: "Part-time",
    period: "April 2026 – Present",
    points: [
      "Work on EdgeCourse and built the Q&A publication site for Hulkenstein, a large-scale EdTech platform.",
      "Develop SaaS products including an ERP, a Learning Management System (LMS), and a Coaching Management System.",
    ],
    projects: ["EdgeCourse", "Hulkenstein Q&A", "ERP", "LMS", "Coaching Management"],
    tech: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    company: "Hubar Tech Limited",
    role: "Junior Software Engineer",
    type: "Full-time",
    period: "October 2024 – May 2026",
    points: [
      "Designed and developed telecom software for UK-based clients.",
      "Contributed to a major monorepo upgrade, refactoring code and optimizing frontend performance.",
      "Built and maintained cross-platform mobile apps with React Native.",
      "Tested, debugged, and fixed issues for higher-quality releases.",
    ],
    tech: ["React", "Redux Toolkit", "Material UI", "TanStack Query", "React Native"],
  },
];

export default function ExperienceSection() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  // The rail draws with scroll, smoothed by a critically damped spring
  const railScale = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20" id="experience">
      <SectionHeading eyebrow="Career" title="Work" highlight="Experience" className="mb-16" />

      <ol ref={listRef} className="relative space-y-8 pl-8 md:pl-12">
        {/* Timeline rail */}
        <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-white/10" aria-hidden />
        <motion.div
          aria-hidden
          style={{ scaleY: railScale, originY: 0 }}
          className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-linear-to-b from-purple-400 via-pink-300 to-purple-400/0"
        />

        {experiences.map((exp) => (
          <motion.li
            key={exp.company}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            variants={reveal}
            transition={spring}
            className="relative"
          >
            {/* Timeline node */}
            <span
              aria-hidden
              className={`absolute -left-8 md:-left-12 top-9 flex h-[15px] w-[15px] md:h-[23px] md:w-[23px] items-center justify-center rounded-full border ${
                exp.current
                  ? "border-purple-300/60 bg-purple-400/20 shadow-[0_0_24px_rgba(192,132,252,0.55)]"
                  : "border-white/20 bg-black"
              }`}
            >
              <span className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full ${exp.current ? "bg-purple-200" : "bg-white/40"}`} />
            </span>

            <motion.article
              whileHover={{ y: -4 }}
              transition={springSoft}
              className="group relative overflow-hidden p-6 md:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors duration-300 hover:bg-white/[0.07] hover:border-white/20"
            >
              {/* Light that catches the top edge of the material */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl md:text-[1.75rem] font-light tracking-[-0.02em] text-white">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-purple-300">
                    {exp.role} <span className="text-purple-300/50">·</span>{" "}
                    <span className="text-purple-200/70">{exp.type}</span>
                  </p>
                </div>
                <span className="text-sm tabular-nums text-gray-400 md:pt-2">{exp.period}</span>
              </header>

              <ul className="space-y-3 mb-6">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3 text-gray-300 leading-relaxed">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-pink-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {exp.projects && (
                <div className="mb-6">
                  <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-500">
                    Products
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.projects.map((p) => (
                      <span
                        key={p}
                        className="rounded-xl border border-purple-300/15 bg-linear-to-br from-purple-500/15 to-pink-500/10 px-3.5 py-1.5 text-sm text-white/90"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
