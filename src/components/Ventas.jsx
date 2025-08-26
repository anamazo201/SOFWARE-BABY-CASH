import React, { useEffect, useState } from "react";
import Boton from "../components/Boton";

const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const ventasGuardadas = JSON.parse(localStorage.getItem("ventas")) || [];
    setVentas(ventasGuardadas);
  }, []);

  const totalVentas = ventas.reduce((acc, venta) => acc + Number(venta.PRECIO), 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ventas</h1>
      {ventas.length === 0 ? (
        <p>No hay ventas registradas.</p>
      ) : (
        <>
          {ventas.map((venta, index) => (
            <div key={index} style={{ margin: "10px 0" }}>
              <p>{venta.DESCRIPCION} - ${venta.PRECIO}</p>
              <Boton texto="Ver detalles" onClick={() => alert(`Detalles de ${venta.DESCRIPCION}`)} />
            </div>
          ))}
          <p style={{ fontWeight: "bold", marginTop: "2rem" }}>Total de ventas: ${totalVentas}</p>
        </>
      )}
    </div>
  );
};

export default Ventas;