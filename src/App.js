import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/logins/logins'; 
import './App.css';// Componente de Login

const App = () => {
  return (
    <Router>
      
        <Routes>
          {/* Ruta pública para el login */}
          <Route path="/" element={<Login />} />
        </Routes>

    </Router>
  );
};

export default App;
