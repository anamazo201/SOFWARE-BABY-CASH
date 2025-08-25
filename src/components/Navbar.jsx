import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🍼 Pañalera Soffi´s</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>🏠 Inicio</Link>
        <Link to="/productos" style={styles.link}>🧼 Productos</Link>
        <Link to="/ventas" style={styles.link}>🛒 Ventas</Link>
        <Link to="/inventario" style={styles.link}>📦 Inventario</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#ffd6dc", // rosado pastel
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  links: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "color 0.3s",
  },
};

export default Navbar;