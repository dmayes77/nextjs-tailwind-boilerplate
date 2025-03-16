// components/ui/Button.js
export default function Button({ children, className = '', ...props }) {
    return (
      <button
        {...props}
        className={`bg-[#007aff] text-white rounded-lg px-4 py-3 shadow-sm hover:bg-[#0060df] focus:outline-none focus:ring-2 focus:ring-[#007aff] transition-colors min-h-[48px] min-w-[48px] ${className}`}
      >
        {children}
      </button>
    );
  }
  