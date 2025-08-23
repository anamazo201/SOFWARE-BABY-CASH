import React from "react";
import Boton from "../components/Boton";

const Ventas = () => {
  const ventas = [
    { producto: "Pañal X", cantidad: 2 },
    { producto: "Biberón Y", cantidad: 1 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ventas</h1>
      {ventas.map((venta, index) => (
        <div key={index} style={{ margin: "10px 0" }}>
          <p>{venta.producto} - Cantidad: {venta.cantidad}</p>
          <Boton texto="Ver detalles" onClick={() => alert(`Detalles de ${venta.producto}`)} />
        </div>
      ))}
    </div>
  );
};

export default Ventas;