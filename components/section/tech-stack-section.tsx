"use client";

import FadeIn from "@/components/FadeIn";
import LogoLoop from "@/components/LogoLoop";

export default function TechStackSection({
  logos,
}: {
  logos: Array<{
    node: React.ReactNode;
    title: string;
    href: string;
  }>;
}) {
  return (
    <FadeIn delay={800}>
      <div className="pt-8">
        <h3 className="section-container text-4xl uppercase tracking-widest text-gray-300 mb-6">
          Tech Stack
        </h3>

        <LogoLoop
          logos={logos}
          speed={120}
          direction="left"
          logoHeight={64}
          gap={60}
          hoverSpeed={100}
          scaleOnHover
        />
      </div>
    </FadeIn>
  );
}
