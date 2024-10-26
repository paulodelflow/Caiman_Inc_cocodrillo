import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple de que ambos campos no estén vacíos
    if (!email || !password) {
      alert('Por favor, complete ambos campos.');
      return;
    }
    // Llama a la función de login con las credenciales
    onLogin({ email, password });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg z-10">
      <h2 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo de correo electrónico */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
          <input
            type="email"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
            required
          />
        </div>
        {/* Campo de contraseña */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
