// src/app/uix/mobile/services/page.js
import { createMetadata } from "@/lib/metadata";
import React from "react";
import HeroSection from "@/(uix)/mobile/components/sections/HeroSection";
import ServiceCard from "@/(uix)/mobile/components/ui/ServiceCard";
import categories from "@/lib/serviceCategories";
import { heroImages } from "@/lib/images";
import CustomLink from "@/components/global/CustomLink";
import SectionWrapper from "@/components/global/SectionWrapper";

export const metadata = createMetadata({
  title: "Mayes Auto Detailing | Services",
  description:
    "Discover professional car detailing, ceramic coatings, and window tinting services in Chattanooga, TN. Explore our range of services designed to protect and enhance your vehicle.",
  slug: "/uix/mobile/services",
});

export default function Services() {
  return (
    <>
      {/* Hero Section tailored for Services */}
      <HeroSection
        content={{
          title: "Our Services",
          subtitle: "Professional Car Detailing, Ceramic Coatings & More",
          description: "Explore our range of services designed to protect and enhance your vehicle in Chattanooga, TN.",
        }}
        imageSrc={heroImages.allServices.src}
      />

      {/* Main Content */}
      <SectionWrapper id="main" className="flex flex-col p-4 pb-12 space-y-4">
        <h2 className="text-xl font-semibold mb-4 text-center">Our Services</h2>
        <div className="space-y-4">
          {categories.map((category, i) => (
            <div key={i}>
              <CustomLink href={`/mobile/services/${category.title.toLowerCase().replace(/\s+/g, "-")}`} title={category.title}>
                <ServiceCard
                  imageSrc={category.imageSrc}
                  imageAlt={category.imageAlt}
                  title={category.title}
                  description={category.description || "Service description goes here."}
                  price={category.price || "Contact us for pricing"}
                />
              </CustomLink>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
