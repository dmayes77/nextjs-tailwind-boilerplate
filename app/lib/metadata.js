// lib/metadata.js
/**
 * Creates a metadata object for a page.
 *
 * @param {Object} params
 * @param {string} [params.title] - The page title.
 * @param {string} [params.description] - The page description.
 * @param {string} [params.slug=''] - The page slug (e.g., "/services"). If empty, the home page is assumed.
 * @param {string} [params.imageUrl] - The URL for the image used in social sharing.
 *
 * @returns {Object} A metadata object that can be exported from a Next.js page.
 */

import { logoImages } from "./images";

export function createMetadata({
  city = "Chattanooga",
  title,
  description,
  slug = "",
}) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.getmadpro.com";
  const fullUrl = slug ? `${baseUrl}${slug}` : baseUrl;
  const defaultImage = "https://www.getmadpro.com/default-meta-image.jpg"; // Fallback image

  const businessInfo = {
    title: "Mayes Auto Detailing | Premium Car Detailing in Chattanooga, TN",
    description:
      "Mayes Auto Detailing provides premium car detailing services in Chattanooga, TN, including ceramic coatings, interior and exterior detailing. Experience quality over quantity.",
    keywords:
      "Car Detailing, Auto Detailing, Ceramic Coating, Interior Detail, Exterior Detail, Chattanooga, TN, Mayes Auto Detailing",
    image: "/images/mad-web-app/Chattanooga_TN_eo6h8x.webp",
    type: "website",
  };

  return {
    metadataBase: new URL("https://www.getmadpro.com"),
    title: title || businessInfo.title,
    description: description || businessInfo.description,
    keywords: businessInfo.keywords,
    authors: [{ name: "Mayes Auto Detailing" }],
    canonical: "https://www.getmadpro.com",
    openGraph: {
      title: title || businessInfo.title,
      description: description || businessInfo.description,
      url: fullUrl,
      siteName: "Mayes Auto Detailing",
      images: [
        {
          url: businessInfo.image || defaultImage,
          width: 1200,
          height: 630,
          alt: title || businessInfo.title,
        },
      ],
      type: businessInfo.type,
    },
    twitter: {
      card: "summary_large_image",
      title: title || businessInfo.title,
      description: description || businessInfo.description,
      images: [businessInfo.image || defaultImage],
      creator: "@MayesAutoDetail",
    },
    icons: {
      icon: `${logoImages.favicon.src}`,
      apple: `${logoImages.favicon.src}`,
    },
    robots: "index, follow",
    additionalMetaTags: [
      {
        name: "color-scheme",
        content: "light",
      },
    ],
  };
}
