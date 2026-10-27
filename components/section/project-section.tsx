/* eslint-disable @next/next/no-img-element */
"use client";

import ProjectCard from "../ProjectCard";
import SectionHeading from "../SectionHeading";

export default function FeaturedProjectsSection() {
  const projects: {
    title: string;
    image: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    client?: boolean;
  }[] = [
    {
      title: "Somahaar: Handloom E-commerce",
      image: "/somahaar.jpg",
      description:
        "A bilingual (Bangla/English) online store for handloom lungis, gamchas, and panjabis sourced directly from weavers in Tangail and Sirajganj, with nationwide cash on delivery.",
      tech: ["Next.js", "E-commerce", "Bangla / English"],
      link: "https://www.somahaar.com/",
      client: true,
    },
    {
      title: "Sultan Overseas",
      image: "/sultan-overseas.jpg",
      description:
        "Website for a government-licensed (RL 906) overseas recruitment agency in Bangladesh, presenting its services, destination countries, gallery, and contact channels.",
      tech: ["React", "Responsive UI", "SEO"],
      link: "https://www.sultanoverseas.org/",
      client: true,
    },
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
      <SectionHeading eyebrow="Selected work" title="Featured" highlight="Projects" className="mb-16" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
            client={p.client}
          />
        ))}
      </div>
    </section>
  );
}
