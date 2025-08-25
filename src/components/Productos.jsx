  import { useEffect, useState } from "react";
import { getProducto } from "../services/productosService";
import Baby_card from "./Baby_card";
import Loading from "./Loading";
import "./productos.css";

  const Productos = () => { 
      const [producto, setProducto] = useState(null);
      const [loading, setLoading] = useState(true);

      const opcionesFiltro = ["Todos", "Higiene", "Comida", "Otros"];
      const [filtro, setFiltro] = useState("Todos");
      const [filtados, setFiltrados] = useState(null);

      useEffect(() => {
      getProducto().then((data) => {
        //console.log(data)
        setProducto(data || []);
        setFiltrados(data || []);
        setLoading(false);
        console.log(filtro)
      });
    }, []);

       useEffect(() => {
         console.log(filtro);
         if (filtro === "Todos")
             setFiltrados(producto);
            else 
              setFiltrados(producto.filter((item) => item.CATEGORIA === filtro));
    }, [filtro]);
      
      

      return (
      <div className="productos">
       
       <div className="filtros">
        <label htmlFor="filtro">Filtrar por categoría: </label>
        <select
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
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
    filtados && filtados.map((item, index) => (
      <Baby_card key={index} producto={item} />
    ))
  )}
      </div>
      
      </div>
    );
  };

  export default Productos;


  //