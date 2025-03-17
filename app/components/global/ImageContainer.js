import React from "react";

export default function ImageContainer({
  children,
  padding = "",
  containerClass = "",
  aspectRatio = "aspect-video",
  width = "w-full",
  height= ""
}) {
  const defaultClasses = "mx-auto";

  const positionClass = containerClass.includes("absolute") ? "" : "relative";

  return (
    <div
      className={`${defaultClasses} ${positionClass} ${containerClass} ${aspectRatio} ${padding} ${width} ${height}`}
    >
      {children}
    </div>
  );
}
