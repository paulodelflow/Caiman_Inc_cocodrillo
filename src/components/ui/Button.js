import React from "react";

export function Button({ variant, size, className, children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded";
  const sizeStyles = size === "icon" ? "p-2" : "px-4 py-2";
  const variantStyles = variant === "ghost" ? "bg-transparent" : "bg-blue-500 text-white";

  return (
    <button className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
