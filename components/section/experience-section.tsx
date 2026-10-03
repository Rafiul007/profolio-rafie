"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "GetOnNet AS",
      role: "Junior Full Stack Engineer",
      period: "June 2026 – Present",
      points: [
        "Build and maintain full-stack web applications for clients across the Norwegian and Swedish markets.",
        "Develop enterprise websites on Sitevision CMS with reusable components, integrations, and responsive UIs.",
        "Integrate HubSpot for CRM, marketing automation, and lead management workflows.",
        "Contribute to in-house SaaS products for the European market, including Tixio.",
      ],
      tech: ["React", "Node.js", "NestJS", "TypeScript", "PostgreSQL", "Sitevision", "HubSpot"],
    },
    {
      company: "Hubar Tech Limited",
      role: "Junior Software Engineer",
      period: "October 2024 – Present",
      points: [
        "Design and develop telecom software for UK-based clients.",
        "Contributed to a major monorepo upgrade, refactoring code and optimizing frontend performance.",
        "Built and maintained cross-platform mobile apps with React Native.",
        "Test, debug, and fix issues for higher-quality releases.",
      ],
      tech: ["React", "Redux Toolkit", "Material UI", "TanStack Query", "React Native"],
    },
    {
      company: "BongoBrain IT",
      role: "Full Stack Engineer · Freelance",
      period: "April 2026 – Present",
      points: [
        "Developed SaaS products including a School Management System and an Accounting Management System.",
        "Built features and improved performance on Hulkestein, a large-scale EdTech platform.",
      ],
      tech: ["Next.js", "TypeScript", "Node.js"],
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20" id="experience">
      <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
        Work{" "}
        <span className="bg-linear-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>
      <div className="w-20 h-1 bg-linear-to-r from-purple-400 to-pink-400 rounded-full mb-16"></div>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6">
              <div>
                <h3 className="text-2xl font-light text-white">{exp.company}</h3>
                <p className="text-purple-300">{exp.role}</p>
              </div>
              <span className="text-sm text-gray-400">{exp.period}</span>
            </div>

            <ul className="space-y-3 mb-6">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-pink-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
