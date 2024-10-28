import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/logins/logins'; 
import Dashboard from './pages/all/inicio'; // Simulamos que existe un componente de dashboard
import PrivateRoute from './routes/private_routes'; // Importar la ruta privada
import { AuthProvider } from './context/authcontext'; // Importar el contexto de autenticación
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta pública para el login */}
          <Route path="/" element={<Login />} />

          {/* Ruta privada para el dashboard */}
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
