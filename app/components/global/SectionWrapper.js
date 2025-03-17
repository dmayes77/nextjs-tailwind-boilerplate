import React from "react";

export default function SectionWrapper({ children, className = "", id = "",}) {
  return (
    
      <div id={id} className={className}>
        {children}
      </div>
    
  );
}
