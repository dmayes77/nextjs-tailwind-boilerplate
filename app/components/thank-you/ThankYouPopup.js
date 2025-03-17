"use client";
import React from "react";
import { createPortal } from "react-dom";

export default function ThankYouPopup({ searchParams, onClose }) {
  // Process search parameters similarly to your page code.
  const sp = searchParams;
  const contactName = sp.contact || "Valued Customer";
  const additionalInterestParam = sp.additionalInterest;
  const additionalInterests = Array.isArray(additionalInterestParam)
    ? additionalInterestParam
    : additionalInterestParam
    ? [additionalInterestParam]
    : [];
  const enhancementsParam = sp.enhancements;
  const enhancements = Array.isArray(enhancementsParam)
    ? enhancementsParam
    : enhancementsParam
    ? [enhancementsParam]
    : [];
  const timeline = sp.timelinePreference || "Not Specified";
  const autoYear = sp.auto_year || "";
  const autoMake = sp.auto_make || "";
  const autoModel = sp.auto_model || "";
  const vehicleDetails =
    autoYear && autoMake && autoModel
      ? `for ${autoYear} ${autoMake} ${autoModel}`
      : "";

  const handleClose = () => {
    if (onClose) onClose();
    window.location.href = "/mobile";
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-1000 px-4">
      {/* Overlay: clicking closes the popup */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose} />
      {/* Modal Content */}
      <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-xl w-full">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-3xl font-bold p-2"
        >
          &times;
        </button>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank you {contactName}!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          You will receive an estimate within 1–4 hours.
        </p>
        <div className="border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Submission Details {vehicleDetails ? `${vehicleDetails}:` : ":"}
          </h2>
          <p className="text-gray-700">
            <span className="font-medium">Interest:</span>{" "}
            {additionalInterests.length > 0
              ? additionalInterests.join(", ")
              : "None"}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Enhancements:</span>{" "}
            {enhancements.length > 0 ? enhancements.join(", ") : "None"}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Timeline Preference:</span> {timeline}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
