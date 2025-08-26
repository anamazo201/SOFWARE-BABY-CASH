import React, { useState, useEffect } from "react";
import Baby_card from "./Baby_card";
import Loading from "./Loading";
import { getProducto } from "../services/productosService";
import "./productos.css";

const opcionesFiltro = ["Todos", "Higiene", "Comida", "Otros"];

const Categorias = ({ userRole }) => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("Todos");
  const [filtados, setFiltrados] = useState([]);

  useEffect(() => {
    getProducto().then((data) => {
      setProducto(data || []);
      setFiltrados(data || []);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (filtro === "Todos") {
      setFiltrados(producto);
    } else {
      setFiltrados(producto.filter((item) => item.CATEGORIA === filtro));
    }
  }, [filtro, producto]);

  return (
    <div className="categorias">
      <h2 style={{ textAlign: "center" }}>Filtrar por categoría</h2>
      <div className="filtros" style={{ textAlign: "center", marginBottom: "2rem" }}>
        <label htmlFor="filtro">Categoría: </label>
        <select
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          {opcionesFiltro.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>
      <div className="divider" role="separator" aria-hidden="true"></div>
      <div className="contenedor_productos">
        {loading ? (
          <Loading />
        ) : (
          filtados && filtados.map((item, index) => <Baby_card key={index} producto={item} />)
        )}
      </div>
    </div>
  );
};

export default Categorias;
