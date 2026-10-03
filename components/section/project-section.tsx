/* eslint-disable @next/next/no-img-element */
"use client";

import ProjectCard from "../ProjectCard";

export default function FeaturedProjectsSection() {
  const projects = [
    {
      title: "ShadhinShop: POS + E-commerce",
      image: "/e-commerce.png",
      description:
        "A POS and e-commerce platform on a microservice backend, designed to grow into POS, CRM, and wholesaler applications.",
      tech: ["Next.js", "Express.js", "MongoDB", "Redis", "Zustand", "TanStack Query"],
    },
    {
      title: "Zipifly",
      image: "/e-commerce.png",
      description:
        "Final year project: a secure, anonymous parcel delivery system focused on privacy and efficient last-mile delivery.",
      tech: ["Full Stack", "Security", "Logistics"],
    },
    {
      title: "Portfolio Website",
      image: "/e-commerce.png",
      description:
        "This site: a personal portfolio built with Next.js, GSAP and Three.js animations, and a glassmorphism UI.",
      tech: ["Next.js", "TypeScript", "Tailwind", "GSAP", "Three.js"],
      link: "https://rafie007.vercel.app/",
      github: "https://github.com/Rafiul007/profolio-rafie",
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
