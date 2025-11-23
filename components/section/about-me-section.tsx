/* eslint-disable @next/next/no-img-element */
"use client";

import FadeInWhenVisible from "../FadeInWhenVisible";
import GradientText from "../GradientText";
import ScrollReveal from "../ScrollReveal";

export default function AboutMeSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <div className="space-y-8">
          <FadeInWhenVisible>
            <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </FadeInWhenVisible>

          {/* ONE ScrollReveal for all paragraphs */}
          <ScrollReveal
            containerClassName="space-y-6"
            textClassName="text-gray-300 text-[1.05rem] md:text-lg leading-relaxed"
            blurStrength={4}
            baseOpacity={0.2}
          >
            I&apos;m a passionate Full Stack Developer with a love for creating
            elegant and efficient web solutions. My journey began during my
            Computer Science studies at Daffodil International University. I
            specialize in React, Next.js, TypeScript, and enjoy building
            delightful user experiences. When I&apos;m not coding, I explore new
            tech, contribute to open-source, and help fellow developers.
          </ScrollReveal>

          <FadeInWhenVisible delay={0.4}>
            <div className="flex flex-wrap gap-4 pt-4">
              {["Problem Solver", "Team Player", "Lifelong Learner"].map(
                (label, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                  >
                    <span className="text-gray-400 text-sm">{label}</span>
                  </div>
                )
              )}
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Right Side */}
        <FadeInWhenVisible delay={0.3}>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>

            <div className="relative aspect-square rounded-2xl bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 overflow-hidden">
              <img
                src="/about.png"
                alt="About Me"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
