import { productoData } from "./datos";

// Simula una API usando una promesa
export const getProducto = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productoData);
    }, 1000); // simula 1 segundo de espera
  });
};