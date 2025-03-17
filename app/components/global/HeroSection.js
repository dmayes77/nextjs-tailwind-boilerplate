"use client";

import React from "react";
import Head from "next/head";
import CustomButton from "./CustomButton";
import ButtonGroup from "./ButtonGroup";

export default function HeroSection({
  content = { title: "", subtitle: "", description: "" },
  imageSrc = "",
  button1 = { variant: "primary", label: "", href: "#", icon: "", iconSet: "" },
  button2 = { variant: "ghost", label: "", href: "#", icon: "", iconSet: "" },
}) {
  return (
    <>
      <Head>
        {imageSrc && <link rel="preload" as="image" href={imageSrc} />}
      </Head>
      <section className="relative isolate">
        {/* Hero Background */}
        <div
          className="relative w-full h-[50vh] md:h-[60vh] lg:h-[75vh] flex flex-col items-center justify-center text-center bg-cover bg-center px-6"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-mad-blue/60"></div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            {content.subtitle && (
              <p className="text-base sm:text-lg md:text-xl text-mad-white max-w-4xl mx-auto">
                {content.subtitle}
              </p>
            )}
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-mad-white drop-shadow-lg uppercase">
              {content.title}
            </h1>
            {content.description && (
              <p className="text-base sm:text-lg md:text-xl text-mad-white max-w-4xl mx-auto">
                {content.description}
              </p>
            )}

            {/* Buttons */}
            <ButtonGroup>
              {button1.label && (
                <CustomButton
                  variant={button1.variant}
                  href={button1.href}
                  iconName={button1.icon}
                  iconSet={button1.iconSet}
                >
                  {button1.label}
                </CustomButton>
              )}
              {button2.label && (
                <CustomButton
                  variant={button2.variant}
                  href={button2.href}
                  iconName={button2.icon}
                  iconSet={button2.iconSet}
                >
                  {button2.label}
                </CustomButton>
              )}
            </ButtonGroup>
          </div>
        </div>
      </section>
    </>
  );
}
