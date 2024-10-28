'use client';

import { Package } from "lucide-react"; // Asegúrate de importar este ícono
import Header from '../../components/menu/Header'; // Importa el Header
import Sidebar from '../../components/menu/Sidebar'; // Importa el Sidebar
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/Table";

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Contenido principal */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Resto del contenido */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Productos</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" /> {/* Package está definido ahora */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+2% desde el último mes</p>
              </CardContent>
            </Card>
            {/* Otros cards */}
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Productos con Bajo Stock</CardTitle>
              <CardDescription>Lista de productos que necesitan reabastecimiento</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Producto</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead>Stock Actual</TableHead>
                    <TableHead>Stock Mínimo</TableHead>
                    <TableHead>Proveedor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Leche Entera 1L</TableCell>
                    <TableCell>Lácteos</TableCell>
                    <TableCell>15</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>Lácteos del Valle</TableCell>
                  </TableRow>
                  {/* Otros rows */}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
