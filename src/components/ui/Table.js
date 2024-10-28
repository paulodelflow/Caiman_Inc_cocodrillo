import React from "react";

export function Table({ children }) {
  return <table className="min-w-full bg-white">{children}</table>;
}

export function TableHead({ children }) {
  return <th className="py-2 px-4 bg-gray-100 text-left">{children}</th>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }) {
  return <tr className="border-b">{children}</tr>;
}

export function TableCell({ children }) {
  return <td className="py-2 px-4">{children}</td>;
}

export function TableHeader({ children }) {
  return <thead>{children}</thead>;
}
