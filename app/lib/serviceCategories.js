// src/lib/services.js
import { heroImages } from "./images";

const categories = [
  {
    title: "Car Detailing",
    imageSrc: `${heroImages.allServices.src}`,
    imageAlt: `${heroImages.allServices.alt}`,
    description: "Expert detailing for a spotless finish.",
    price: "Starting at $100",
  },
  {
    title: "Ceramic Coating",
    imageSrc: `${heroImages.ceramicCoating.src}`,
    imageAlt: `${heroImages.ceramicCoating.alt}`,
    description: "Protect and enhance your vehicle's paint.",
    price: "Starting at $895",
  },
  {
    title: "Paint Correction",
    imageSrc: `${heroImages.paintCorrection.src}`,
    imageAlt: `${heroImages.paintCorrection.alt}`,
    description: "Restore your car’s shine with precision correction.",
    price: "Starting at $600",
  },
  {
    title: "Window Tint",
    imageSrc: `${heroImages.windowTinting.src}`,
    imageAlt: `${heroImages.windowTinting.alt}`,
    description: "High-quality tint for privacy and comfort.",
    price: "Starting at $200",
  },
  // You can add more services here as needed
];

export default categories;
