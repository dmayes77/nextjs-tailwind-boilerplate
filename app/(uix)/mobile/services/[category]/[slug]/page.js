// src/app/uix/mobile/services/[category]/[slug]/page.js
import { createMetadata } from "@/lib/metadata";
import React from "react";
import services from "@/lib/services";
import HeroSection from "@/(uix)/mobile/components/sections/HeroSection";
import SectionWrapper from "@/components/global/SectionWrapper";
import VehicleClassifierPopup from "@/components/vehicle-classifier/VehicleClassifierPopup";
import CustomButton from "@/components/global/CustomButton";

// Generate metadata dynamically using the dynamic route parameters.
export async function generateMetadata({ params }) {
  const { category, slug } = await Promise.resolve(params);
  const service = services.find((s) => s.slug === slug && s.category === category);
  return createMetadata({
    title: service ? `Mayes Auto Detailing | ${service.title}` : "Service Not Found",
    description: service ? service.description : "Service not found.",
    slug: `/services/${category}/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { category, slug } = await Promise.resolve(params);
  const service = services.find((s) => s.slug === slug && s.category === category);

  if (!service) {
    return (
      <SectionWrapper className="p-4">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
      </SectionWrapper>
    );
  }

  // Define labels for vehicle sizes corresponding to servicePricing indices.
  const sizeLabels = ["Small", "Medium", "Large", "X-Large"];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        content={{
          title: service.title,
          subtitle: `Service Type: ${service.serviceType}`,
          description: service.description,
        }}
        imageSrc={service.imageSrc}
      />

      {/* Main Content */}
      <SectionWrapper id="main" className="flex flex-col p-4 pb-12 space-y-6 bg-mad-blue/10">
        {/* Back Button */}
        <CustomButton
          href={`/mobile/services/${category}`}
          className="w-full"
          iconName="MdArrowBackIos"
          iconSet="mdi"
        >
          Back to Services
        </CustomButton>
        {/* Service Overview */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Service Overview</h2>
          <p className="text-sm text-gray-700">
            <strong>Ideal For:</strong> {service.bestFor}
          </p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Recommended Timeframe:</strong> {service.recommendedTimeframe}
          </p>
        </div>

        {/* Exterior Service List */}
        {service.exteriorServiceList?.length > 0 && <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Exterior Services</h2>
          <ul className="list-none ml-4 text-sm text-gray-700">
            {service.exteriorServiceList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>}

        {/* Interior Service List */}
        {service.interiorServiceList?.length > 0 && (
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Interior Services</h2>
            <ul className="list-none ml-4 text-sm text-gray-700">
              {service.interiorServiceList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Benefits List */}
        {service.benefits?.length > 0 && (
          
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Benefits</h2>
            <ul className="list-none ml-4 text-sm text-gray-700">
              {service.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Additional Info List */}
        {service.additionalInfo?.length > 0 && (
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Additional Info</h2>
            <ul className="list-none ml-4 text-sm text-gray-700">
              {service. additionalInfo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing Options for Different Vehicle Sizes */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2">Pricing Options</h2>
          <ul className="list-none ml-4 text-sm text-gray-700">
            {sizeLabels.map((label, index) => (
              <li key={index}>
                {label}: ${service.servicePricing[index] || "N/A"}
              </li>
            ))}
          </ul>
        </div>
        <VehicleClassifierPopup buttonTitle="Find My Vehicle Size" />
      <CustomButton href="/mobile/booking" className="w-full shine">Book Now</CustomButton>
      </SectionWrapper>
    </>
  );
}
