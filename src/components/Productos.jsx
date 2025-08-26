import { useEffect, useState } from "react";
import { getProducto } from "../services/productosService";
import Baby_card from "./Baby_card";
import Loading from "./Loading";
import "./productos.css";
import Boton from "./Boton";

const Productos = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtados, setFiltrados] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducto().then((data) => {
      setProducto(data || []);
      setFiltrados(data || []);
      setLoading(false);
    });
  }, []);

  const handleAddToCart = (prod) => {
    setCart([...cart, prod]);
  };

  const handleRemoveFromCart = (idx) => {
    setCart(cart.filter((_, i) => i !== idx));
  };

  const handleConfirmVenta = () => {
    // Guardar ventas en localStorage para persistencia simple
    const ventasPrevias = JSON.parse(localStorage.getItem("ventas")) || [];
    localStorage.setItem("ventas", JSON.stringify([...ventasPrevias, ...cart]));
    setCart([]);
    alert("Venta confirmada y productos agregados a la pestaña de ventas");
  };

  const totalVenta = cart.reduce((acc, prod) => acc + Number(prod.PRECIO), 0);

  return (
    <div className="productos">
      <div className="divider" role="separator" aria-hidden="true"></div>
      <div className="contenedor_productos">
        {loading ? (
          <Loading />
        ) : (
          filtados &&
          filtados.map((item, index) => (
            <Baby_card key={index} producto={item} onAddToCart={handleAddToCart} />
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <h3>Carrito de compras</h3>
          <ul>
            {cart.map((prod, idx) => (
              <li key={idx}>
                {prod.DESCRIPCION} - ${prod.PRECIO}
                <Boton texto="Eliminar" onClick={() => handleRemoveFromCart(idx)} color="#e57373" />
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: "bold", marginTop: "1rem" }}>Total: ${totalVenta}</p>
          <Boton texto="Confirmar venta" onClick={handleConfirmVenta} color="#ff9800" />
        </div>
      )}
    </div>
  );
};

export default Productos;