// src/app/uix/mobile/more/page.js
import { createMetadata } from "@/lib/metadata";
import React from "react";
import HeroSection from "@/(uix)/mobile/components/sections/HeroSection";
import SectionWrapper from "@/components/global/SectionWrapper";
import { heroImages } from "@/lib/images";
import SysIcon from "@/components/global/SysIcon";
import MapEmbed from "@/components/global/MapEmbed";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Mayes Auto Detailing | More",
  description:
    "Get in touch with Mayes Auto Detailing for expert car detailing, ceramic coatings, and window tinting in Chattanooga, TN. Contact us or visit our location for more information.",
  slug: "/more",
});

export default function More() {
  // Define your social media links and icon details
  const socialMedia = [
    {
      name: "Google",
      iconName: "FaGoogle", // Adjust icon names and sets as desired
      iconSet: "fa6",
      link: "https://www.google.com",
    },
    {
      name: "X",
      iconName: "FaXTwitter",
      iconSet: "fa6",
      link: "https://twitter.com",
    },
    {
      name: "Instagram",
      iconName: "FaInstagram",
      iconSet: "fa6",
      link: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      iconName: "FaLinkedinIn",
      iconSet: "fa6",
      link: "https://linkedin.com",
    },
    {
      name: "YouTube",
      iconName: "FiYoutube",
      iconSet: "fii",
      link: "https://youtube.com",
    },
  ];

  return (
    <>
      {/* Hero Section tailored for More */}
      <HeroSection
        content={{
          title: "Get in Touch",
          subtitle: "Contact Us & Visit Our Shop",
          description:
            "Reach out to schedule an appointment or get answers to your questions.",
        }}
        imageSrc={heroImages.contactUs.src} // Use an appropriate image if available
      />

      {/* Main Content */}
      <SectionWrapper
        id="main"
        className="flex flex-col p-4 pb-12 space-y-6 bg-mad-blue/10"
      >
        {/* Contact Information Section */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Contact Information
          </h2>
          <a
            href="tel:+14234970881"
            className="text-gray-700 text-center block"
          >
            <strong>Phone:</strong> (423) 497-0881
          </a>
          <a
            href="mailto:info@mayesautodetailing.com"
            className="text-gray-700 text-center block"
          >
            <strong>Email:</strong> info@mayesautodetailing.com
          </a>
        </div>

        {/* Location Information Section */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Our Location
          </h2>
          <p className="text-sm text-gray-700 text-center">
            123 Main Street, Chattanooga, TN
          </p>
          <MapEmbed />
        </div>

        {/* Hours of Operation Section */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Hours of Operation
          </h2>
          <p className="text-sm text-gray-700 text-center">
            Monday - Friday: 8:30 AM - 6:00 PM
          </p>
          <p className="text-sm text-gray-700 text-center">
            Saturday: 8:30 AM - 1:00 PM
          </p>
          <p className="text-sm text-gray-700 text-center">Sunday: Closed</p>
        </div>

        {/* More Navigation Section */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2 text-center">
            More Navigation
          </h2>
          <div className="flex justify-around">
            <Link href="/mobile/about" className="text-sm text-blue-500">
              Gallery
            </Link>
            <Link href="/mobile/faq" className="text-sm text-blue-500">
              FAQ
            </Link>
            <Link href="/mobile/policies" className="text-sm text-blue-500">
              Policies
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Follow Us
          </h2>
          <div className="flex justify-center space-x-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-sm text-gray-700"
              >
                <SysIcon
                  name={social.iconName}
                  set={social.iconSet}
                  size={24}
                />
        
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
