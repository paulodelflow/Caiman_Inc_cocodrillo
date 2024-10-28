import React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`border px-4 py-2 rounded-md focus:ring focus:ring-opacity-50 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
}
