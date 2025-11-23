"use client";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiGraphql,
  SiDocker,
  SiExpress as SiExpressJs,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import HeroMainSection from "@/components/section/hero-section";
import TechStackSection from "@/components/section/tech-stack-section";

const techLogos = [
  {
    node: <SiReact color="white" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs color="white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript color="white" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss color="white" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <FaNodeJs color="white" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiExpressJs color="white" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <SiPrisma color="white" />,
    title: "Prisma",
    href: "https://www.prisma.io",
  },
  {
    node: <SiGraphql color="white" />,
    title: "GraphQL",
    href: "https://graphql.org",
  },
  {
    node: <SiDocker color="white" />,
    title: "Docker",
    href: "https://www.docker.com",
  },
];

export default function MinimalistHero() {
  return (
    <main className="min-h-screen relative">
      <HeroMainSection />
      <TechStackSection logos={techLogos} />
    </main>
  );
}
