import { useState } from "react";

export function DropdownMenu({ children }) {
  return <div className="relative">{children}</div>;
}

export function DropdownMenuTrigger({ children, onClick }) {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );
}

export function DropdownMenuContent({ children, className, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className={`absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 ${className}`}>
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, onClick }) {
  return (
    <div
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function DropdownMenuLabel({ children }) {
  return <div className="px-4 py-2 font-medium text-gray-600">{children}</div>;
}

export function DropdownMenuSeparator() {
  return <div className="border-t my-1"></div>;
}
