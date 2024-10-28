import React from "react";

export function Card({ children, className }) {
  return <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-medium">{children}</h3>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}

export function CardDescription({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}
