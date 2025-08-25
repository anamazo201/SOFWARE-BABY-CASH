import "./loading.css";

const Loading = () => {
    return(
         <div className="center" role="status" aria-live="polite" aria-label="Cargando">
    <div className="spinner" aria-hidden="true"></div>
  </div>
    )
}

export default Loading;