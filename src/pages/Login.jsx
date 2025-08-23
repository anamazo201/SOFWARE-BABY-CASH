import React, { useState } from "react";
import Boton from "../components/Boton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Por ahora solo un alert, luego puedes conectar con backend
    alert(`Usuario: ${email}\nContraseña: ${password}`);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      background: "linear-gradient(120deg, #FFD6DC, #B0E0E6)"
    }}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin} style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        backgroundColor: "#FFF",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        minWidth: "300px"
      }}>
        <input 
          type="email" 
          placeholder="Correo electrónico" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />
        <Boton texto="Iniciar Sesión" />
      </form>
    </div>
  );
};

export default Login;