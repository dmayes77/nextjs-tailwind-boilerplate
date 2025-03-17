// src/app/mobile/page.js
import HeroSection from "@/(uix)/mobile/components/sections/HeroSection";
import EstimateForm from "@/(uix)/mobile/components/ui/EstimateForm";
import SectionWrapper from "@/components/global/SectionWrapper";
import { heroImages } from "@/lib/images";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Mayes Auto Detailing | Booking",
  description: "Schedule your premium car detailing, ceramic coatings, and window tinting appointment in Chattanooga, TN. Book now for a flawless finish!",
  slug: "/booking",
});

export default function Booking() {
  return (
    <>
      <HeroSection
        content={{
          title: "Book Your Car Detailing Appointment Today",
          subtitle: "Schedule your detailing, ceramic coatings, and window tinting services now.",
          description: "Our expert team in Chattanooga is ready to transform your vehicle with a flawless finish.",
        }}
        imageSrc={heroImages.booking.src}
      />

      {/* Main Content */}
      <SectionWrapper id="main" className="flex flex-col p-4 pb-12 space-y-4 bg-mad-blue/10">
        <EstimateForm
          id="mobile-view-request"
          service="Car Detailing"
          interestOptions={[
            "Ceramic Coating",
            "Window Tinting",
            "Paint Correction",
            "MAD Elite Full Detail",
            "MAD Deluxe Full Detail",
            "MAD Essentials Full Detail",
            "Exterior Wash & Protect",
            "Exterior Decon & Protect",
            "Exterior Clay & Polish",
            "Full Interior Detail",
            "Total Interior Detail",
          ]}
          enhancementOptions={[
            "Headlight Restoration",
            "Headlight/Tail Light Wrap",
            "Pet Hair Removal",
            "Seats Out Service",
            "Interior Heavy Condition",
            "Interior Shampoo",
          ]}
        />
      </SectionWrapper>
    </>
  );
}
