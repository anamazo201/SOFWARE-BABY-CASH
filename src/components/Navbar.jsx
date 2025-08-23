import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "15px", backgroundColor: "#FFD6DC", display: "flex", justifyContent: "space-around" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Inicio</Link>
      <Link to="/inventario" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Inventario</Link>
      <Link to="/ventas" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Ventas</Link>
    </nav>
  );
};

export default Navbar;