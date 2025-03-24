import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  shadow?: "none" | "sm" | "md" | "lg";
  padding?: "none" | "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  bgColor?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  bordered = true,
  shadow = "sm",
  padding = "md",
  rounded = "md",
  bgColor = "bg-white",
}) => {
  // Border styles
  const borderStyles = bordered ? "border border-gray-100" : "";

  // Shadow styles
  const shadowStyles = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
  };

  // Padding styles
  const paddingStyles = {
    none: "p-0",
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
  };

  // Rounded styles
  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  // Combined styles
  const combinedStyles = `${bgColor} ${borderStyles} ${shadowStyles[shadow]} ${paddingStyles[padding]} ${roundedStyles[rounded]} ${className}`;

  return <div className={combinedStyles}>{children}</div>;
};

export default Card;
