import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authcontext'; // Hook de autenticación

// Componente que redirige al dashboard si el usuario ya está autenticado
const RedirectIfLoggedIn = ({ children }) => {
  const { currentUser } = useAuth(); // Verifica si el usuario está autenticado

  if (currentUser) {
    // Si el usuario ya está autenticado, redirige al Dashboard
    return <Navigate to="/inicio" />;
  }

  // Si no está autenticado, muestra el contenido (children)
  return children;
};

export default RedirectIfLoggedIn;
