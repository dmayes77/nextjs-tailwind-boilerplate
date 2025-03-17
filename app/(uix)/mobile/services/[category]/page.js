// src/app/uix/mobile/services/[category]/page.js
import { createMetadata } from "@/lib/metadata";
import React from "react";
import HeroSection from "../../components/sections/HeroSection";
import ServiceCard from "@/(uix)/mobile/components/ui/ServiceCard";
import services from "@/lib/services";
import serviceCategories from "@/lib/serviceCategories";
import SectionWrapper from "@/components/global/SectionWrapper";
import CustomLink from "@/components/global/CustomLink";
import { heroImages } from "@/lib/images";
import CustomButton from "@/components/global/CustomButton";

// Helper to normalize strings
const normalize = (str) => str.toLowerCase().replace(/-/g, "");

export async function generateMetadata({ params }) {
  const { category } = await Promise.resolve(params);
  // Optionally normalize the category if needed
  return createMetadata({
    title: `Mayes Auto Detailing | ${category.charAt(0).toUpperCase() + category.slice(1)} Services`,
    description: `Explore our expert ${category} services in Chattanooga, TN.`,
    slug: `/mobile/services/${category}`,
  });
}

export default async function ServiceCategoryPage({ params }) {
  const { category } = await Promise.resolve(params);
  
  // Look up the category object by id (normalize if necessary)
  const categoryObj = serviceCategories.find((cat) => normalize(cat.slug) === normalize(category));
  

  // Filter services based on the category string
  const filteredServices = services.filter((service) => normalize(service.category) === normalize(category));
  

  return (
    <>
      <HeroSection
        content={{
          title: categoryObj
            ? `${categoryObj.title} Services`
            : `${category.charAt(0).toUpperCase() + category.slice(1)} Services`,
          subtitle: categoryObj
            ? `Expert ${categoryObj.title} solutions`
            : `Expert ${category} solutions`,
          description: categoryObj
            ? `Discover our range of ${categoryObj.title.toLowerCase()} services in Chattanooga, TN.`
            : `Discover our range of ${category} services in Chattanooga, TN.`,
        }}
        imageSrc={categoryObj && categoryObj.imageSrc ? categoryObj.imageSrc : heroImages.allServices.src}
      />
      <SectionWrapper id="main" className="flex flex-col p-4 pb-12 space-y-4">
        <CustomButton
                  href="/mobile/services"
          className="w-full"
          iconName="MdArrowBackIos"
          iconSet="mdi"
                >Back to Categories</CustomButton>
        {filteredServices.length > 0 ? (
          filteredServices.map((service, i) => (
            <CustomLink key={i} href={`/mobile/services/${category}/${service.slug}`} title={service.title}>
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
