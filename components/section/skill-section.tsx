"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiGithub,
} from "react-icons/si";

export default function SkillsSection() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Docker", icon: <SiDocker /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <SiGithub /> },
      ],
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20" id="skills">
      <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
        Skills{" "}
        <span className="bg-linear-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
          / Expertise
        </span>
      </h2>
      <div className="w-20 h-1 bg-linear-to-r from-purple-400 to-pink-400 rounded-full mb-16"></div>

      <div className="grid md:grid-cols-3 gap-12">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all"
          >
            <h3 className="text-2xl font-light text-white mb-6">{cat.title}</h3>

            <div className="grid grid-cols-2 gap-6">
              {cat.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <span className="text-2xl text-purple-300">{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
