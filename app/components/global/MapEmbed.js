import React from "react";

export default function MapEmbed() {
  return (
    <div className="mt-4">
    

      {/* Embedded Map */}
      <div className="w-full rounded-md overflow-hidden" style={{ height: "450px" }}>
        <iframe
          title="Mayes Auto Detailing Map"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCVlsTEt0B7ZMpqIj0sbikxRFzMTzrsOto&q=Mayes+Auto+Detailing"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Optional: Link to Open in Google Maps */}
      <a
        href="https://www.google.com/maps/place/Mayes+Auto+Detailing+and+Ceramic+Coatings/@34.998327,-85.255599,16z/data=!3m2!4b1!5s0x8860608f81cfa427:0x487c4a2147bfeb4d!4m6!3m5!1s0x8860676fe8ecda1b:0x8fb853ee5d723514!8m2!3d34.998327!4d-85.2530241!16s%2Fg%2F11k76d90jp?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-mad-red hover:underline"
      >
        View Larger Map
      </a>
    </div>
  );
}
