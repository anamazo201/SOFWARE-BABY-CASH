import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./app.css"; // importa los estilos aquí
import { BrowserRouter } from "react-router-dom"; // import para rutas

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);