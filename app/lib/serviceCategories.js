// src/lib/services.js
import { heroImages } from "./images";

const categories = [
  {
    title: "Car Detailing",
    slug: "car-detailing",
    imageSrc: `${heroImages.allServices.src}`,
    imageAlt: `${heroImages.allServices.alt}`,
    description: "Expert detailing for a spotless finish.",
    price: "Starting at $100",
    iconName: "LuCar",
    iconSet: "lui",
  },
  {
    title: "Ceramic Coating",
    slug: "ceramic-coating",
    imageSrc: `${heroImages.ceramicCoating.src}`,
    imageAlt: `${heroImages.ceramicCoating.alt}`,
    description: "Protect and enhance your vehicle's paint.",
    price: "Starting at $895",
    iconName: "LuShield",
    iconSet: "lui",
  },
  {
    title: "Paint Correction",
    slug: "paint-correction",
    imageSrc: `${heroImages.paintCorrection.src}`,
    imageAlt: `${heroImages.paintCorrection.alt}`,
    description: "Restore your car’s shine with precision correction.",
    price: "Starting at $600",
    iconName: "LuBrush",
    iconSet: "lui",
  },
  {
    title: "Window Tint",
    slug: "window-tinting",
    imageSrc: `${heroImages.windowTinting.src}`,
    imageAlt: `${heroImages.windowTinting.alt}`,
    description: "High-quality tint for privacy and comfort.",
    price: "Starting at $200",
    iconName: "LuSun",
    iconSet: "lui",
  },
  // You can add more services here as needed
];

export default categories;
