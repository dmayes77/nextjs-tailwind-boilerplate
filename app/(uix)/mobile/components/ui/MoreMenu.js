// src/components/mobileUi/MoreMenu.js
"use client";

import React, { useState } from "react";
import SysIcon from "@/components/global/SysIcon";

export default function MoreMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* More Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col items-center text-sm focus:outline-none relative z-50"
      >
        <SysIcon name="MdOutlineMenu" set="mdi" size={24} className="text-white" />
        <span>More</span>
      </button>
      {/* Sliding Panel positioned absolutely so its bottom is 80px from bottom */}
      <div
        className={`absolute left-0 right-0 bg-white transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          bottom: "80px", // Panel's bottom aligns with the top of the BottomNav (80px tall)
          height: "300px",
          zIndex: 40, // Lower than BottomNav's container z-index
        }}
      >
        <div className="p-4 border-t">
          <button
            onClick={toggleMenu}
            className="text-sm text-blue-500 mb-4 focus:outline-none"
          >
            Close
          </button>
          <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
          <p className="text-sm text-gray-700">Phone: 123-456-7890</p>
          <p className="text-sm text-gray-700">Email: info@mayesautodetailing.com</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Location</h2>
          <p className="text-sm text-gray-700">123 Main Street, Chattanooga, TN</p>
        </div>
      </div>
    </div>
  );
}
