"use client";

import FadeIn from "@/components/FadeIn";
import GradientText from "@/components/GradientText";
import BlurWords from "@/components/BlurWords";
import TiltedCard from "@/components/TiltedCard";

export default function HeroMainSection() {
  return (
    <section className="section-container " id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <FadeIn>
            <h1 className="text-7xl md:text-9xl font-light tracking-[-0.045em] text-white leading-[0.9]">
              M Rafiul <GradientText>Faisal</GradientText>
            </h1>
          </FadeIn>

          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              <BlurWords
                text="Full Stack Engineer building scalable web apps with React, Next.js, Node.js, and TypeScript."
                delay={0.35}
              />
            </p>
          </div>
        </div>

        <FadeIn delay={300}>
          <div className="relative flex justify-center md:justify-end">
            {/* Soft halo so the photo, not the background, holds the eye */}
            <div
              aria-hidden
              className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-purple-500/20 blur-[90px] md:-right-6"
            />
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
