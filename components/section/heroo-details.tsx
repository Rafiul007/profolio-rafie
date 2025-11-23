"use client";

import FadeIn from "@/components/FadeIn";

export default function HeroDetailsSection() {
  return (
    <section className="section-container pb-20 pt-2">
      <FadeIn delay={200}>
        <div className="flex items-center gap-3 text-sm text-gray-400 my-6">
          <span>Currently at</span>
          <span className="px-4 py-1.5 bg-white/5 backdrop-blur-sm text-white rounded-full border border-white/10">
            Hubar Tech Limited
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={400}>
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

      <FadeIn delay={600}>
        <div className="flex gap-4 pt-8">
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
    </section>
  );
}
