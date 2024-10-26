import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/forms/login_forms'; // Importa el formulario
import BackgroundAnimation from '../../components/animations/BackgroundAnimation'; // Importa la animación de fondo
import { login } from '../../services/AuthService'; // Importa el servicio de autenticación
import { ToastContainer, toast } from 'react-toastify'; // Para las notificaciones
import 'react-toastify/dist/ReactToastify.css'; // Estilos de Toastify

const Login = () => {
  const navigate = useNavigate(); // Hook de React Router DOM para la redirección

  // Función que maneja el login
  const handleLogin = async (credentials) => {
    const response = await login(credentials); // Llama al servicio de login
    if (response.success) {
      toast.success('Inicio de sesión exitoso');
      navigate('/dashboard'); // Redirige al dashboard si el login es exitoso
    } else {
      toast.error(`Error: ${response.message}`); // Muestra un error en caso de fallo
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Animación de fondo */}
      <BackgroundAnimation />
      {/* Formulario de login */}
      <LoginForm onLogin={handleLogin} />
      {/* Contenedor de notificaciones */}
      <ToastContainer />
    </div>
  );
};

export default Login;
