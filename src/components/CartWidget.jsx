import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

export const CartWidget = () => {
  const { itemsQuantity } = useCartContext();

  return (
    <NavLink to={"/cart"} className="relative cursor-pointer">
      <span className="w-4 h-4 rounded-full text-xs bg-red-600 text-white absolute -top-1 -right-2 grid place-items-center">
        {itemsQuantity}
      </span>
      <CiShoppingCart className="text-3xl" />
    </NavLink>
  );
};
