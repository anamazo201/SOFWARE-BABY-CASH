import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ userRole }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🍼 Pañalera Soffi´s</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="hamburger" style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>
        <div style={{ ...styles.links, ...(menuOpen ? styles.linksMobile : {}) }}>
          <Link to="/" style={styles.link} onClick={() => setMenuOpen(false)}>🏠 Inicio</Link>
          <Link to="/productos" style={styles.link} onClick={() => setMenuOpen(false)}>🧼 Productos</Link>
          <Link to="/categorias" style={styles.link} onClick={() => setMenuOpen(false)}>📂 Categoría</Link>
          {userRole === "admin" && (
            <>
              <Link to="/ventas" style={styles.link} onClick={() => setMenuOpen(false)}>🛒 Ventas</Link>
              <Link to="/inventario" style={styles.link} onClick={() => setMenuOpen(false)}>📦 Inventario</Link>
            </>
          )}
        </div>
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
    position: "relative",
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
  linksMobile: {
    position: "absolute",
    top: "60px",
    right: "30px",
    background: "#ffd6dc",
    flexDirection: "column",
    gap: "10px",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 10,
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    cursor: "pointer",
    marginRight: "10px",
    '@media (max-width: 600px)': {
      display: "flex",
    },
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#333",
    margin: "4px 0",
    borderRadius: "2px",
  },
};

export default Navbar;