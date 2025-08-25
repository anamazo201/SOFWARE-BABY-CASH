import "./baby_card.css";
const Baby_card = ({producto}) => {
  return (
   <div className="card">
    <img   src={producto.FOTO} alt="Producto"/>
    <div className="card-content">
      <div className="title">
        {producto.DESCRIPCION}...
      </div>
      <div className="options">{producto.OPCIONES}</div>

      <div className="rating">
       
      
      </div>

      <div className="price">$ {producto.PRECIO} <small>({producto.DETALLEPRECIO})</small></div>

      <div className="button">Agregar al carrito</div>
    </div>
  </div>
  )
}

export default Baby_card;