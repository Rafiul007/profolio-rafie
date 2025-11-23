/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

export default function FeaturedProjectsSection() {
  const projects = [
    {
      title: "Portfolio Platform",
      image: "/projects/project1.png",
      description:
        "A modern personal portfolio built with Next.js, GSAP animations, and glassmorphism.",
      tech: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
      link: "https://example.com",
      github: "https://github.com/example",
    },
    {
      title: "E-Commerce Dashboard",
      image: "/projects/project2.png",
      description:
        "Admin dashboard with analytics, charts, and product management.",
      tech: ["React", "Prisma", "Node.js", "MongoDB"],
      link: "https://example.com",
      github: "https://github.com/example",
    },
    {
      title: "AI Chat Interface",
      image: "/projects/project3.png",
      description:
        "Chat UI with streaming responses and intelligent UX interactions.",
      tech: ["Next.js", "OpenAI API", "Tailwind"],
      link: "https://example.com",
      github: "https://github.com/example",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-32">
      <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
        Featured{" "}
        <span className="bg-linear-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <div className="w-20 h-1 bg-linear-to-r from-purple-400 to-pink-400 rounded-full mb-16"></div>

      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
          >
            <div className="relative overflow-hidden h-56">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
              />
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-40 transition-all"></div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl text-white font-light">{p.title}</h3>
              <p className="text-gray-300 text-sm">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-3">
                <a
                  href={p.link}
                  target="_blank"
                  className="text-purple-300 text-sm hover:underline"
                >
                  Live →
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  className="text-purple-300 text-sm hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
