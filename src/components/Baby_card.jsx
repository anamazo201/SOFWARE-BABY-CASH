import React, { useState } from "react";
import "./baby_card.css";
import Boton from "./Boton";

const Baby_card = ({ producto, onAddToCart }) => {
  return (
    <div className="card">
      <img src={producto.FOTO} alt="Producto" />
      <div className="card-content">
        <div className="title">{producto.DESCRIPCION}...</div>
        <div className="options">{producto.OPCIONES}</div>
        <div className="rating"></div>
        <div className="price">
          $ {producto.PRECIO} <small>({producto.DETALLEPRECIO})</small>
        </div>
        <Boton texto="Agregar al carrito" onClick={() => onAddToCart(producto)} color="#4caf50" />
      </div>
    </div>
  );
};

export default Baby_card;