import Link from "next/link";
import CustomIcon from "./CustomIcon";

export default function CustomButton({
  variant = "primary",
  type = "button", // default variant
  href = "",
  iconName = "",
  iconSize = 20,
  iconSet = "lui",
  className,
  children,
  ...props
}) {
  // Base button styling common to all variants
  const baseStyles = "flex px-6 py-3 rounded-md font-semibold shadow-md transition text-sm justify-center uppercase";

  // Define variant-specific styles
  const variantStyles = {
    primary: "bg-mad-red border-mad-red text-mad-white hover:bg-mad-red/90",
    secondary: "bg-mad-white text-mad-red hover:bg-mad-white/90",
    tertiary: "bg-mad-blue border-mad-blue text-mad-white hover:bg-mad-blue/90",
    ghost: "bg-transparent border border-mad-white text-mad-white hover:bg-mad-white/10",
    base: "bg-blue-600 border-blue-600 text-white hover:bg-blue-700",
    grey: "bg-gray-300 border-gray-300 text-gray-700 hover:bg-gray-500 hover:text-white",
  };

  // Combine the base styles and the variant-specific styles
  const finalClassName = `${baseStyles} ${variantStyles[variant] || ""} ${className}`;

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href}>
        <button type={type} {...props} className={finalClassName} style={{ cursor: "pointer" }}>
          {iconName && <CustomIcon name={iconName} size={iconSize} className="mr-2" set={iconSet} />}
          {children}
        </button>
      </Link>
    );
  }

  // Otherwise, just render a button
  return (
    <button type={type} {...props} className={finalClassName} style={{ cursor: "pointer" }}>
      {iconName && <CustomIcon name={iconName} size={iconSize} className="mr-2" set={iconSet} />}
      {children}
    </button>
  );
}
