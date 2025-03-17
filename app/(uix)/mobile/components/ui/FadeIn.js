// components/ui/FadeIn.js
import React from 'react';

export default function FadeIn({ children, className = '', ...props }) {
  return (
    <div {...props} className={`animate-fadeIn ${className}`}>
      {children}
    </div>
  );
}
