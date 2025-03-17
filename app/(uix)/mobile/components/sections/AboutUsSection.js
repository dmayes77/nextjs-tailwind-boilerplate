// Example AboutUsSection component
import React from "react";
import SectionWrapper from "@/components/global/SectionWrapper";

export default function AboutUsSection() {
  return (
    <SectionWrapper>
      <h2 className="text-xl font-semibold mb-2 text-center">About Us</h2>
      <p className="text-sm text-gray-700 mb-4">
        Located in Chattanooga, TN, Mayes Auto Detailing specializes in professional car detailing, ceramic coatings, and window tinting. Our experienced team uses industry-leading techniques to restore and enhance your vehicle's appearance.
      </p>
      <p className="text-sm text-gray-700">
        We focus on delivering exceptional car detailing services that protect your investment and keep your vehicle looking its best. Whether you need a complete auto detail, advanced ceramic coating for lasting shine, or precision window tinting to improve comfort and style, our dedicated experts are here to help.
      </p>
    </SectionWrapper>
  );
}
