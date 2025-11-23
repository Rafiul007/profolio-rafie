"use client";

import FadeIn from "@/components/FadeIn";
import LogoLoop from "@/components/LogoLoop";

interface ITechLogo {
  node: React.ReactNode;
  title: string;
  href: string;
}

interface ITechStackSectionProps {
  logos: ITechLogo[];
  showTitle?: boolean;
}

const TechStackSection = ({
  logos,
  showTitle = true,
}: ITechStackSectionProps) => {
  return (
    <FadeIn delay={800}>
      <div className="pt-8">
        {showTitle && (
          <h3 className="section-container text-4xl uppercase tracking-widest text-gray-300 mb-6">
            Tech Stack
          </h3>
        )}

        <LogoLoop
          logos={logos}
          speed={120}
          direction="left"
          logoHeight={64}
          gap={60}
          hoverSpeed={100}
          scaleOnHover
          fadeOut
          fadeOutColor="black"
          pauseOnHover
        />
      </div>
    </FadeIn>
  );
};

export default TechStackSection;
