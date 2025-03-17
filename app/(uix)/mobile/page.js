// src/app/mobile/page.js

import AboutUsSection from "@/(uix)/mobile/components/sections/AboutUsSection";
import HeroSection from "@/(uix)/mobile/components/sections/HeroSection";
import ReputationSection from "@/(uix)/mobile/components/sections/ReputationSection";
import ServiceCard from "@/(uix)/mobile/components/ui/ServiceCard";
import CustomLink from "@/components/global/CustomLink";
import SectionWrapper from "@/components/global/SectionWrapper";
import SysIcon from "@/components/global/SysIcon";
import { heroImages } from "@/lib/images";
import { createMetadata } from "@/lib/metadata";
import serviceCategories from "@/lib/serviceCategories";
import services from "@/lib/services";

export const metadata = createMetadata({
  title: "Mayes Auto Detailing | Home",
  description: "Experience premium car detailing and ceramic coatings in Chattanooga, TN. Over 200 five-star reviews. Book your appointment today!",
  slug: "/mobile",
});


export default function Home() {
 
  return (
    <>
      {/* Hero Section with introduction and primary CTA */}
      <HeroSection
        content={{
          title: "Experience Unmatched Car Detailing & Ceramic Coatings",
          subtitle: "Book your appointment today and enjoy a flawless finish.",
        }}
        imageSrc={heroImages.homePage.src}
      />

      {/* Main Content */}
      <div id="main" className="flex flex-col p-4 pb-12 space-y-12">
        {/* Trust & Reputation Section */}
        <ReputationSection />
        <AboutUsSection />

        {/* Service Categories */}
        <SectionWrapper>
          <h2 className="text-xl font-semibold mb-4 text-center">Our Services</h2>
          <div className="grid grid-cols-2 gap-4">
            {serviceCategories.map((service, index) => (
              <CustomLink key={index} href={`/mobile/services/${service.slug}`} className="flex flex-col items-center" title={service.title}>
                <div className="w-18 h-18 rounded-full flex items-center justify-center mb-2 bg-mad-blue/20 shadow-lg">
                  <SysIcon name={service.iconName} set={service.iconSet} size={32} className="text-mad-red" />
                </div>
                <p className="text-sm text-gray-700">{service.title}</p>
              </CustomLink>
            ))}
          </div>
        </SectionWrapper>

        {/* Most Popular Services */}
        <SectionWrapper>
          <h2 className="text-xl font-semibold mb-4 text-center">Popular Services</h2>
          <div className="space-y-4">
            {/* Popular service card example */}
            {services.slice(0, 3).map((service, index) => (
              <div key={index}>
                <CustomLink href={`/mobile/services/${service.category}/${service.slug}`} title={service.title}>
                  <ServiceCard
                    imageSrc={service.imageSrc}
                    imageAlt={service.imageAlt}
                    title={service.title}
                    description={service.descrition}
                    price={service.price}
                  />
                </CustomLink>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
