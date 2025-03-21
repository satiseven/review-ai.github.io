import Link from "next/link";

// Define the props type with proper optional fields
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5",
    lg: "px-6 py-3 text-base",
  };

  const variantClasses = {
    primary: "btn-chrome btn-chrome-primary",
    secondary: "btn-chrome btn-chrome-secondary",
    outline: "btn-chrome btn-chrome-outline",
  };

  const classes = `${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`inline-flex items-center ${classes}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`inline-flex items-center ${classes}`} onClick={onClick}>
      {children}
    </button>
  );
}
