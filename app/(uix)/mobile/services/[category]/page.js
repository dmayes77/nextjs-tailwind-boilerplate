// src/app/(uix)/mobile/services/[category]/page.js
import { createMetadata } from "@/lib/metadata";
import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import ServiceCard from "@/(uix)/mobile/components/ui/ServiceCard";
import services from "@/lib/services";
import { heroImages } from "@/lib/images";
import SectionWrapper from "@/components/global/SectionWrapper";
import CustomLink from "@/components/global/CustomLink";

// Generate metadata based on the category parameter
export async function generateMetadata({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const { category } = await resolvedParams;

  return createMetadata({
    title: `Mayes Auto Detailing | ${category.charAt(0).toUpperCase() + category.slice(1)} Services`,
    description: `Explore our expert ${category} services in Chattanooga, TN.`,
    slug: `/mobile/services/${category}`,
  });
}

// Accept params as a prop instead of using useParams()
export default async function ServiceCategoryPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const { category } =  resolvedParams;

  // Filter services based on the category
  const filteredServices = services.filter((service) => service.category === category);

  return (
    <>
      <HeroSection
        content={{
          title: `${category.charAt(0).toUpperCase() + category.slice(1)} Services`,
          subtitle: `Expert ${category} solutions`,
          description: `Discover our range of ${category} services in Chattanooga, TN.`,
        }}
        imageSrc={heroImages.allServices.src}
      />
      <SectionWrapper id="main" className="flex flex-col p-4 pb-12 space-y-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, i) => (
            <CustomLink key={i} href={`/mobile/services/${category}/${service.slug}`} title={`/mobile/services/${category}/${service.slug}`}>
              <ServiceCard
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            </CustomLink>
          ))
        ) : (
          <p className="text-center text-gray-700">No services found for this category.</p>
        )}
      </SectionWrapper>
    </>
  );
}
