"use client";

import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { inViewOnce, reveal, spring, springSoft } from "@/lib/motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiReactquery,
  SiNestjs,
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiCypress,
  SiMocha,
  SiPostman,
  SiHubspot,
  SiDocker,
  SiGithub,
  SiJira,
} from "react-icons/si";
import { LuLayoutTemplate } from "react-icons/lu";

export default function SkillsSection() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Material UI", icon: <SiMui /> },
        { name: "TanStack Query", icon: <SiReactquery /> },
        { name: "React Native", icon: <FaReact /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "NestJS", icon: <SiNestjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Socket.io", icon: <SiSocketdotio /> },
        { name: "Prisma", icon: <SiPrisma /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redis", icon: <SiRedis /> },
      ],
    },
    {
      title: "Testing",
      skills: [
        { name: "Cypress", icon: <SiCypress /> },
        { name: "Mocha", icon: <SiMocha /> },
        { name: "Postman", icon: <SiPostman /> },
      ],
    },
    {
      title: "CMS & Integrations",
      skills: [
        { name: "Sitevision CMS", icon: <LuLayoutTemplate /> },
        { name: "HubSpot", icon: <SiHubspot /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Jira", icon: <SiJira /> },
      ],
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20" id="skills">
      <SectionHeading eyebrow="Toolkit" title="Skills" highlight="/ Expertise" className="mb-16" />

      <div className="grid md:grid-cols-3 gap-12">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            whileHover={{ y: -4, transition: springSoft }}
            transition={{ ...spring, delay: (idx % 3) * 0.08 }}
            className="p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:bg-white/[0.07] hover:border-white/20 transition-colors duration-300"
          >
            <h3 className="text-2xl font-light tracking-[-0.02em] text-white mb-6">{cat.title}</h3>

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
