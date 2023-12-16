import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCartContext debe estar dentro del proveedor CartContext",
    );
  }
  return context;
}
