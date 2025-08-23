import React from "react";

const Boton = ({ texto, onClick, color = "#FFD6DC" }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: color,
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
        margin: "5px"
      }}
    >
      {texto}
    </button>
  );
};

export default Boton;