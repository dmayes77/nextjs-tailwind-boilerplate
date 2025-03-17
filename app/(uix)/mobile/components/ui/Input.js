// components/ui/Input.js
export default function Input({ className = '', ...props }) {
    return (
      <input
        {...props}
        className={`border-b border-gray-300 py-3 px-2 focus:border-[#007aff] focus:outline-none transition-colors ${className}`}
      />
    );
  }
  