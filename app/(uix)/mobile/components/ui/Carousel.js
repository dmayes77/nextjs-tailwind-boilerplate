// components/ui/Carousel.js
"use client"

import React, { useState, useEffect } from 'react';

export default function Carousel({ slides = [], autoPlay = true, autoPlayInterval = 3000 }) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, total]);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8249;
      </button>
      <button
        onClick={goNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8250;
      </button>
      {/* Dot Indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${current === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
