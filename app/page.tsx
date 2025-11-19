"use client";
import React, { useEffect } from "react";
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
// Tech logos array - you'll need to provide the actual logo components or images
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

function TypingText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
}

// Gradient Text Animation
function GradientText({ children }) {
  return (
    <span className="bg-linear-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent animate-gradient bg-size-[200%_auto]">
      {children}
    </span>
  );
}

// Fade In Animation Component
function FadeIn({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

export default function MinimalistHero() {
  return (
    <main className="min-h-screen relative">
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-20">
        <div className="space-y-12">
          {/* Main Content */}
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

            <FadeIn delay={400}>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span>Currently at</span>
                <span className="px-4 py-1.5 bg-white/5 backdrop-blur-sm text-white rounded-full border border-white/10">
                  Hubar Tech Limited
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Stats Grid */}
          <FadeIn delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-light text-white mb-1">1+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white mb-1">2024</div>
                <div className="text-sm text-gray-400">CSE Graduate</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white mb-1">DIU</div>
                <div className="text-sm text-gray-400">University</div>
              </div>
              <div>
                <div className="text-3xl font-light text-white mb-1">
                  Full Stack
                </div>
                <div className="text-sm text-gray-400">Developer</div>
              </div>
            </div>
          </FadeIn>

          {/* Tech Stack with Logo Loop */}
          <FadeIn delay={800}>
            <div className="pt-8">
              <h3 className="text-4xl uppercase tracking-widest text-gray-300 mb-6">
                Tech Stack
              </h3>
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={64}
                gap={60}
                hoverSpeed={100}
                scaleOnHover
              />
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={1000}>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm rounded-full hover:bg-gray-200 transition-all"
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/5 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Profile Image - Minimal */}
        <FadeIn delay={1200}>
          <div className="mt-20 max-w-sm">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 overflow-hidden">
              {/* Replace this div with your actual image */}
              <div className="text-8xl font-light text-white/30">RF</div>
              {/* Or use: <img src="/profile.png" alt="Rafie" className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Scroll Indicator */}
      <FadeIn delay={1400}>
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
