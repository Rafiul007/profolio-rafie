"use client";

import FadeIn from "@/components/FadeIn";

export default function HeroDetailsSection() {
  return (
    <section className="section-container pb-20 pt-2">
      <FadeIn delay={200}>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 my-6">
          <span>Currently at</span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md text-white rounded-full border border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.8)]" />
            GetOnNet AS
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
          <div>
            <div className="text-3xl font-light tracking-[-0.02em] tabular-nums text-white mb-1">3</div>
            <div className="text-sm text-gray-400">Years Building Software</div>
          </div>

          <div>
            <div className="text-3xl font-light tracking-[-0.02em] tabular-nums text-white mb-1">3</div>
            <div className="text-sm text-gray-400">Companies</div>
          </div>

          <div>
            <div className="text-3xl font-light tracking-[-0.02em] tabular-nums text-white mb-1">2024</div>
            <div className="text-sm text-gray-400">CSE Graduate, DIU</div>
          </div>

          <div>
            <div className="text-3xl font-light tracking-[-0.02em] tabular-nums text-white mb-1">
              Full Stack
            </div>
            <div className="text-sm text-gray-400">Developer</div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={600}>
        <div className="flex gap-4 pt-8">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 active:scale-[0.97] transition-[transform,background-color] duration-150 ease-out"
          >
            View Projects
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 bg-white/[0.03] backdrop-blur-md text-white text-sm font-medium rounded-full hover:bg-white/10 hover:border-white/30 active:scale-[0.97] transition-[transform,background-color,border-color] duration-150 ease-out"
          >
            Get in Touch
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
