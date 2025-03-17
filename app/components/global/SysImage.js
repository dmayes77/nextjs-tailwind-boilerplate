import Image from "next/image";

export default function SysImage({
  src,
  alt = "",
  width = 800,
  height = 450,
  objectFit = "cover",
  sizes = "(max-width: 768px) 100vw, 50vw", // Adjust based on your layout
  priority = false, // default to false if not specified
}) {
  if (!src) {
    console.warn("⚠️ CloudinaryImage: Missing src!");
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={90}
      style={{ objectFit }}
      className="w-full h-full"
      sizes={sizes}
      priority={priority}
    />
  );
}
