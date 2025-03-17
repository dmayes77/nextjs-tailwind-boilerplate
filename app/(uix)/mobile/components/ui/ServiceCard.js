// src/components/mobileUi/ServiceCard.js
"use client";

import React from "react";
import ImageContainer from "@/components/global/ImageContainer";
import SysImage from "@/components/global/SysImage";

export default function ServiceCard({ imageSrc, imageAlt, title, description, price, containerClass = "", aspectRatio = "aspect-square" }) {
  return (
    <div className="flex w-full border shadow rounded overflow-hidden cursor-pointer">
      <div className="flex-shrink-0">
        <ImageContainer
          aspectRatio={aspectRatio}
          containerClass={`mr-2 ${containerClass}`}
          width="w-32"
          height="h-full" // Ensure both width and height are set consistently
        >
          <SysImage
            src={imageSrc}
            alt={imageAlt}
            objectFit="cover" // Ensures the image fills the container
          />
        </ImageContainer>
      </div>
      <div className="flex flex-col justify-center px-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        <p className="text-sm text-gray-600">{price}</p>
      </div>
    </div>
  );
}
