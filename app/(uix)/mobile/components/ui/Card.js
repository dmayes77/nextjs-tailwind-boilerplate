// components/ui/Card.js
export default function Card({ children, className = '', ...props }) {
    return (
      <div {...props} className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
        {children}
      </div>
    );
  }
  