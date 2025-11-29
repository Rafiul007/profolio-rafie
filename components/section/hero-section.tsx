"use client";

import FadeIn from "@/components/FadeIn";
import GradientText from "@/components/GradientText";
import TypingText from "@/components/TypingText";
import TiltedCard from "@/components/TiltedCard";
import TechStackSection from "./tech-stack-section";
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

export default function HeroMainSection() {
  return (
    <section className="section-container " id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <FadeIn>
            <h1 className="text-7xl md:text-9xl font-light tracking-tight text-white leading-[0.9]">
              M Rafiul <GradientText>Faisal</GradientText>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="max-w-2xl">
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                <TypingText
                  text="Software Engineer crafting elegant web experiences with modern technologies."
                  speed={50}
                />
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="flex justify-center md:justify-end">
            <TiltedCard
              imageSrc="/profile.png"
              altText="M Rafiul Faisal"
              captionText="Hello 👋"
              containerHeight="380px"
              containerWidth="380px"
              imageHeight="380px"
              imageWidth="380px"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              showMobileWarning={false}
              showTooltip={false}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
