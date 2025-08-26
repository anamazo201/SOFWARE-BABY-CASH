import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Productos from "./components/Productos.jsx";
import Inventario from "./components/Inventario.jsx";
import Ventas from "./components/Ventas.jsx";
import Inicio from "./components/Inicio.jsx";
import Categorias from "./components/Categorias.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Función para manejar el login exitoso y guardar el rol
  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  return (
    <div>
      {isAuthenticated && <Navbar userRole={userRole} />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Inicio />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/productos"
          element={
            isAuthenticated ? (
              <Productos />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/inventario"
          element={
            isAuthenticated && userRole === "admin" ? (
              <Inventario />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/ventas"
          element={
            isAuthenticated && userRole === "admin" ? (
              <Ventas />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/categorias"
          element={
            isAuthenticated ? (
              <Categorias userRole={userRole} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;