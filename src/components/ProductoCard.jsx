import React from "react";

const ProductoCard = ({ nombre, precio, cantidad }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", margin: "10px", width: "200px", backgroundColor: "#FFF0F5" }}>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>Cantidad: {cantidad}</p>
    </div>
  );
};

export default ProductoCard;