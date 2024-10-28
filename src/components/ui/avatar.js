import React from "react";

export function Avatar({ src, alt, fallback }) {
  return (
    <div className="inline-block relative w-8 h-8">
      {src ? (
        <img src={src} alt={alt} className="rounded-full object-cover w-full h-full" />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full">
          <span className="text-xs text-gray-500">{fallback}</span>
        </div>
      )}
    </div>
  );
}

export function AvatarFallback({ children }) {
  return <span>{children}</span>;
}

export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="rounded-full" />;
}
