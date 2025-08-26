import React, { useState } from "react";
import "./baby_card.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [role, setRole] = useState("usuario");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin(role); // Envía el rol seleccionado
    } else {
      alert("Por favor ingresa tus credenciales");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (nombre && apellido && email) {
      alert("Cuenta creada exitosamente. Iniciando sesión...");
      setShowRegister(false);
      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setRole("usuario");
      onLogin(role); // Inicia sesión automáticamente después de crear cuenta
    } else {
      alert("Por favor completa todos los campos");
    }
  };

  return (
    <div className="login-page" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f7f7f7" }}>
      <form onSubmit={showRegister ? handleRegister : handleSubmit} style={{ background: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", minWidth: "300px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>{showRegister ? "Crear Cuenta" : "Iniciar Sesión"}</h2>
        {showRegister && (
          <>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
                style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
              />
            </div>
          </>
        )}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        {!showRegister && (
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
            />
          </div>
        )}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="role">Tipo de usuario</label>
          <select id="role" value={role} onChange={e => setRole(e.target.value)} style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}>
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <button type="submit" style={{ width: "100%", padding: "0.75rem", background: "#4caf50", color: "white", border: "none", borderRadius: "4px", fontWeight: "bold", marginBottom: "0.5rem" }}>
          {showRegister ? "Crear Cuenta" : "Entrar"}
        </button>
        <button type="button" onClick={() => setShowRegister(!showRegister)} style={{ width: "100%", padding: "0.5rem", background: "#e0e0e0", color: "#333", border: "none", borderRadius: "4px" }}>
          {showRegister ? "Ya tengo cuenta" : "Crear cuenta"}
        </button>
      </form>
    </div>
  );
}

export default Login;




