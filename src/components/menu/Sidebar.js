import React from "react";
import { LayoutDashboard, Package, ShoppingCart, Truck, Users, BarChart2 } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">SuperMercado XYZ</h2>
      </div>
      <nav className="mt-6">
        <a href="#dashboard" className="flex items-center px-6 py-3 text-gray-700 bg-gray-100">
          <LayoutDashboard className="mr-3 h-5 w-5" />
          Dashboard
        </a>
        <a href="#inventario" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <Package className="mr-3 h-5 w-5" />
          Inventario
        </a>
        <a href="#pedidos" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <ShoppingCart className="mr-3 h-5 w-5" />
          Pedidos
        </a>
        <a href="#proveedores" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <Truck className="mr-3 h-5 w-5" />
          Proveedores
        </a>
        <a href="#usuarios" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <Users className="mr-3 h-5 w-5" />
          Usuarios
        </a>
        <a href="#reportes" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
          <BarChart2 className="mr-3 h-5 w-5" />
          Reportes
        </a>
      </nav>
    </aside>
  );
}
