// src/lib/services.js

function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

function createService(service) {
  // Automatically generate slug from title.
  return { ...service, slug: slugify(service.title) };
}

const services = [
  {
    title: "MAD Elite Full Detail",
    slug: "mad-elite-full-detail", // You could generate this automatically from the title if desired
    bestFor:
      "Ideal for a current owner who wants a like-new appearance, an owner selling their vehicle, or someone who recently purchased a pre-owned vehicle.",
    category: "car-detailing",
    serviceType: "Full Detail",
    exteriorServiceList: [
      "Thorough Exterior Spot-Free Car Wash",
      "Chemical Decontamination with Iron Remover",
      "Clay Towel Wash for Mechanical Decontamination",
      "Paint Enhancement Polish (Corrects up to 50% of imperfections)",
      "MAD HyperSlick Ceramic Spray Coating (Up to 9 months protection)",
      "Detail and Shine Tires and Wheels",
      "Weather Stripping Cleaned",
      "Door Jambs Fully Cleaned",
      "Engine Bay Detail",
      "Ceramic Windshield Coating",
    ],
    interiorServiceList: [
      "Cleaning of All Interior Surfaces",
      "Interior Vacuum & Trunk Cleaning",
      "Vent Cleaning",
      "Spot Headliner Clean",
      "Floor Mat & Carpet Refresh",
      "Upholstery / Leather Refresh",
      "UV Protectant Interior Dressing",
    ],
    recommendedTimeframe: "Every 6 to 12 months.",
    description: "Our most advanced full detail, featuring a paint enhancement polish and premium protection.",
    imageSrc: "/images/serv-images/mad-elite-full-detail.webp",
    servicePricing: [500, 575, 650, 725],
    price: "Starting at $500",
  },
  {
    title: "MAD Deluxe Full Detail",
    slug: "mad-deluxe-full-detail", // You could generate this automatically from the title if desired
    bestFor: "Ideal for vehicles that haven't been detailed in over 12 months, needing decontamination and protection, but paint that still has its shine.",
    category: "car-detailing",
    serviceType: "Full Detail",
    exteriorServiceList: [
      "Thorough Exterior Spot-Free Car Wash",
      "Chemical Decontamination with Iron Remover",
      "Clay Towel Wash for Mechanical Decontamination",
      "MAD HyperSlick Ceramic Spray Coating (Up to 9 months protection)",
      "Detail and Shine Tires and Wheels",
      "Weather Stripping Cleaned",
      "Door Jambs Fully Cleaned",
      "Engine Bay Detail",
      "Ceramic Windshield Coating",
    ],
    interiorServiceList: [
      "Cleaning of All Interior Surfaces",
      "Interior Vacuum & Trunk Cleaning",
      "Vent Cleaning",
      "Spot Headliner Clean",
      "Floor Mat & Carpet Refresh",
      "Upholstery / Leather Refresh",
      "UV Protectant Interior Dressing",
    ],
    recommendedTimeframe: "Every 3 to 6 months.",
    description: "A step above Essentials, this package includes decontamination and windshield ceramic coating for added protection.",
    imageSrc: "/images/serv-images/mad-deluxe-full-detail.webp",
    servicePricing: [300, 350, 400, 450],
    price: "Starting at $300",
  },
  {
    title: "MAD Essentials Full Detail",
    slug: "mad-essentials-full-detail", // Generated from the title if needed
    bestFor: "Ideal for vehicles that are regularly maintained, ensuring a consistent, fresh look through routine cleaning and protection.",
    category: "car-detailing",
    serviceType: "Full Detail",
    exteriorServiceList: [
      "Thorough Exterior Spot-Free Car Wash",
      "Comprehensive Wheel & Tire Cleaning",
      "Clay Towel Wash for Light Decontamination",
      "MAD HyperSlick Ceramic Spray Coating (Up to 9 months protection)",
      "Detail and Shine Tires and Wheels",
      "Weather Stripping Cleaned",
      "Door Jambs Fully Cleaned",
      "FREE Engine Bay Detail",
    ],
    interiorServiceList: [
      "Cleaning of All Interior Surfaces",
      "Interior Vacuum & Trunk Cleaning",
      "Vent Cleaning",
      "Spot Headliner Clean",
      "Floor Mat & Carpet Refresh",
      "Upholstery / Leather Refresh",
      "UV Protectant Interior Dressing",
    ],
    recommendedTimeframe: "Every 4 to 6 months.",
    description: "A complete interior and exterior refresh with essential protection. Perfect for maintaining a clean, well-kept vehicle inside and out.",
    imageSrc: "/images/serv-images/mad-essentials-full-detail.webp",
    servicePricing: [225, 275, 325, 375],
    price: "Starting at $225",
  },
  {
    title: "Exterior Wash & Protect",
    slug: "exterior-wash-protect", // Generated from the title if desired
    bestFor: "New or well-maintained vehicles that are regularly cleaned.",
    category: "car-detailing",
    serviceType: "Exterior Only", // Customize this label as needed
    exteriorServiceList: [
      "Frictionless Wash: Removes surface contaminants like road traffic film.",
      "Wheel Well & Barrel Cleaning: Thorough attention to wheels and wheel wells.",
      "Tire & Wheel Detailing: Clean, dress, and shine tires for a polished look.",
      "Hand Wash: Gentle wash with deionized water to prevent water spots.",
      "Detailing Badges & Crevices: Removes dirt from hard-to-reach areas.",
      "Ceramic Spray Coating: Up to 9 months of hydrophobic protection.",
      "Window Cleaning: Spotless, crystal-clear glass.",
    ],
    interiorServiceList: [],
    recommendedTimeframe: "Every 2 to 4 weeks.",
    description: "A maintenance-focused exterior wash designed for well-maintained vehicles that need a thorough, spot-free clean with lasting protection.",
    imageSrc: "/images/serv-images/exterior-wash-protect.webp",
    servicePricing: [100, 125, 150, 175],
    price: "Starting at $100",
  },
  {
    title: "Exterior Decon & Protect",
    slug: "exterior-decon-protect", // Generated from the title if desired
    bestFor: "First-time detailing or vehicles needing decontamination.",
    category: "car-detailing",
    serviceType: "Exterior Only", // You can adjust this label as needed
    exteriorServiceList: [
      "Frictionless Wash: Removes surface contaminants like road traffic film.",
      "Iron Remover: Breaks down bonded iron particles and fallout.",
      "Clay Towel Decontamination: Removes embedded contaminants for a smooth surface.",
      "Neutralizing Wash: Final wash to balance pH and remove residue.",
      "Ceramic Spray Coating: Up to 9 months of hydrophobic protection.",
    ],
    interiorServiceList: [],
    recommendedTimeframe: "Every 3 to 6 months.",
    description: "Designed for vehicles needing decontamination and long-term protection, this service removes bonded contaminants and prepares the surface.",
    imageSrc: "/images/serv-images/exterior-decon-protect.webp",
    servicePricing: [175, 200, 250, 300],
    price: "Starting at $175",
  },

  {
    title: "Exterior Clay & Polish",
    slug: "exterior-clay-polish", // Generated from the title if desired
    bestFor: "Vehicles that have never been detailed or are losing shine.",
    category: "car-detailing",
    serviceType: "Exterior Only", // You can adjust this label if needed
    exteriorServiceList: [
      "Frictionless Wash",
      "Iron Remover Treatment",
      "Clay Towel Wash for Mechanical Decontamination",
      "Paint Enhancement Polish (up to 30% correction)",
      "Ceramic Spray Coating (9 months protection)",
      "Wheel & Tire Detailing",
      "Window Cleaning"
    ],
    interiorServiceList: [], // No interior services for an exterior-only service
    recommendedTimeframe: "Every 6 to 12 months.",
    description: "A premium exterior detailing service including full decontamination and a paint enhancement polish to restore gloss and correct minor imperfections.",
    imageSrc: "/images/serv-images/exterior-clay-polish.webp",
    servicePricing: [250, 300, 350, 400],
    price: "Starting at $250"
  }
  ,
  {
    title: "Full Interior Detail",
    slug: "full-interior-detail", // Generated from the title if desired
    bestFor: "Vehicles that haven't had an interior detail in 6+ months.",
    category: "car-detailing",
    serviceType: "Interior Only", // Adjust this label if needed
    exteriorServiceList: [], // No exterior services for an interior-only service
    interiorServiceList: [
      "Interior Steam Cleaning of all Surfaces",
      "Interior Vacuum & Trunk Cleaning",
      "Vent Cleaning",
      "Headliner Spot Clean",
      "Floor Mat & Carpet Refresh",
      "Upholstery & Leather Refresh",
      "UV Protectant Interior Dressing",
      "Weather Stripping Cleaned",
      "Door Jambs Fully Cleaned (If paired with an exterior wash)"
    ],
    recommendedTimeframe: "Every 4 to 6 months.",
    description:
      "Deep cleaning for vehicles needing an interior refresh. Removes dirt, dust, and minor stains for a fresh cabin.",
    imageSrc: "/images/serv-images/full-interior-detail.webp",
    servicePricing: [125, 175, 225, 275],
    price: "Starting at $125"
  },
  
  {
    title: "Total Interior Detail",
    slug: "total-interior-detail", // Generated from the title if desired
    bestFor: "Vehicles with heavy stains, odors, or that have never had a full interior detail.",
    category: "car-detailing",
    serviceType: "Interior Only", // Adjust this label if needed
    exteriorServiceList: [], // No exterior services for an interior-only service
    interiorServiceList: [
      "Interior Steam Cleaning of all Surfaces",
      "Interior Vacuum & Trunk Cleaning",
      "Vent Cleaning",
      "Full Headliner Clean",
      "Enzyme Cleaner and Steam Treatment",
      "Floor Mat & Carpet Shampoo and Steam",
      "Upholstery Shampoo and Steam",
      "Leather Steam and Conditioning",
      "UV Protectant Interior Dressing",
      "Weather Stripping Cleaned",
      "Door Jambs Fully Cleaned & Protected (If paired with an exterior wash)"
    ],
    recommendedTimeframe: "Every 6 to 12 months.",
    description: "Deep cleaning and sanitization for heavily soiled interiors with stains and odors.",
    imageSrc: "/images/serv-images/total-interior-detail.webp",
    servicePricing: [275, 325, 375, 425],
    price: "Starting at $275"
  }
  ,
  {
    // Additional info about the service (fill in as desired)
    bestFor: "Vehicles with heavy stains, odors, or that have never had a full interior detail.",
    recommendedTimeframe: "Every 6 to 12 months.",
    category: "ceramic-coating",
    serviceType: "Exterior Only",
    additionalInfo: [
      "Expert installation ensures optimal protection.",
      "Pre-application vehicle wash included."
    ],
    // Key benefits of the service
    benefits: [
      "Enhanced Clarity: Maintains the clarity and vibrancy of your car’s paint.",
      "Smooth",
      "Silky Finish: Resists dirt and grime",
      "making your car easier to clean and maintain",
      "No Warranty: Offers cost-effective coverage with 2-3 year longevity."
    ],
    brand: "crystal",
    dateCreated: "2025-02-15T04:54:14.122Z",
    description: "Application of SystemX Crystal+ to paint, body, headlights/tail Lights",
    imagePosition: "left",
    imageSrc: "/images/serv-images/mad-classic-ceramic-coating.webp",
    includes: "includes wash, decontamination, and prep",
    servicePricing: "$895 - $1795",
    price: "Starting at $895",
    slug: "mad-classic-ceramic-coating",
    subtitle: "Crystal Clear Protection – 2-3 Year Longevity, No Warranty",
    title: "MAD Classic Ceramic Coating"
  },
];

export default services;
