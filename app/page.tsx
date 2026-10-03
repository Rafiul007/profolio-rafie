"use client";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiRedux,
  SiDocker,
  SiExpress as SiExpressJs,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import HeroMainSection from "@/components/section/hero-section";
import TechStackSection from "@/components/section/tech-stack-section";
import HeroDetailsSection from "@/components/section/heroo-details";
import AboutMeSection from "@/components/section/about-me-section";
import ExperienceSection from "@/components/section/experience-section";
import SkillsSection from "@/components/section/skill-section";
import FeaturedProjectsSection from "@/components/section/project-section";
import ContactSection from "@/components/section/contract.section";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/section/newsletter-subscription";

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
    node: <SiRedux color="white" />,
    title: "Redux",
    href: "https://redux.js.org",
  },
  {
    node: <FaNodeJs color="white" />,
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiNestjs color="white" />,
    title: "NestJS",
    href: "https://nestjs.com",
  },
  {
    node: <SiExpressJs color="white" />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: <SiPostgresql color="white" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiMongodb color="white" />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiRedis color="white" />,
    title: "Redis",
    href: "https://redis.io",
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
      <HeroDetailsSection />
      <TechStackSection logos={techLogos} showTitle={false} />
      <AboutMeSection />
      <ExperienceSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
