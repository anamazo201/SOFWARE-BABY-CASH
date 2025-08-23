import React from "react";
import ProductoCard from "../components/ProductoCard";
import Boton from "../components/Boton";

const Inventario = () => {
  const productos = [
    { nombre: "Pañal X", precio: 5000, cantidad: 10 },
    { nombre: "Biberón Y", precio: 12000, cantidad: 5 },
    { nombre: "Ropita Z", precio: 20000, cantidad: 2 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventario</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productos.map((prod, index) => (
          <div key={index}>
            <ProductoCard {...prod} />
            <Boton texto="Agregar al carrito" onClick={() => alert(`Agregaste ${prod.nombre}`)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventario;