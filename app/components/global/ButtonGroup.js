import React from "react";

export default function ButtonGroup({ children, className = "", ...props }) {
  return (
    <div className={`flex flex-col w-full sm:flex-row justify-center items-center gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
