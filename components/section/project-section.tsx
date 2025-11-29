/* eslint-disable @next/next/no-img-element */
"use client";

import ProjectCard from "../ProjectCard";

export default function FeaturedProjectsSection() {
  const projects = [
    {
      title: "Portfolio Platform",
      image: "/e-commerce.png",
      description:
        "A modern personal portfolio built with Next.js, GSAP animations, and glassmorphism.",
      tech: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
      link: "https://example.com",
      github: "https://github.com/example",
    },
    {
      title: "E-Commerce Dashboard",
      image: "/e-commerce.png",
      description:
        "Admin dashboard with analytics, charts, and product management.",
      tech: ["React", "Prisma", "Node.js", "MongoDB"],
      link: "https://example.com",
      github: "https://github.com/example",
    },
    {
      title: "AI Chat Interface",
      image: "/e-commerce.png",
      description:
        "Chat UI with streaming responses and intelligent UX interactions.",
      tech: ["Next.js", "OpenAI API", "Tailwind"],
      link: "https://example.com",
      github: "https://github.com/example",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20" id="projects">
      <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
        Featured{" "}
        <span className="bg-linear-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <div className="w-20 h-1 bg-linear-to-r from-purple-400 to-pink-400 rounded-full mb-16"></div>

      <div className="grid md:grid-cols-3 gap-12">
        {projects.map((p, idx) => (
          <ProjectCard
            key={idx}
            index={idx}
            title={p.title}
            image={p.image}
            description={p.description}
            tech={p.tech}
            link={p.link}
            github={p.github}
          />
        ))}
      </div>
    </section>
  );
}
