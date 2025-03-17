// src/components/reusable/CustomLink.js
"use client";

import Link from "next/link";
import React from "react";

export default function CustomLink({ href, children, title, onClick, ...props}) {
  const handleClick = (e) => {
    if (href === "#") {
      e.preventDefault();
    }
    console.log(`Clicked: ${title}`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
