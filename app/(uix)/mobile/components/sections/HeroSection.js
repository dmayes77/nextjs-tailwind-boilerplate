"use client";

import MobileHeader from "@/components/MobileHeader";
import SectionWrapper from "@/components/global/SectionWrapper";

export default function HeroSection({ content = { title: "", subtitle: "" }, imageSrc = "" }) {
  return (
    <SectionWrapper className="relative isolate">
      {/* Hero Background Container */}
      <div className="relative w-full h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${imageSrc})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-mad-blue/75"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-2 !space-y-2">
          <MobileHeader />
          <h1 className="text-mad-white drop-shadow-lg uppercase">{content.title}</h1>
          {content.subtitle && <p className="text-mad-white">{content.subtitle}</p>}
          {content.description && <p className="text-mad-white mx-auto">{content.description}</p>}
        </div>
      </div>
    </SectionWrapper>
  );
}
