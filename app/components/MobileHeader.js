// src/components/MobileHeader.js
import React from "react";
import Image from "next/image";
import { logoImages } from "@/lib/images";

export default function MobileHeader() {
  return (
    <header className="flex items-center justify-center shadow-lg">
      <Image
        src={logoImages.madBadge.src}
        alt={logoImages.madBadge.alt}
        width={125}  // adjust as needed
        height={125} // adjust as needed
        priority={true}
      />
    </header>
  );
}
