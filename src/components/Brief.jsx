import { useCartContext } from "../hooks/useCartContext";
import ItemInCart from "./ItemInCart";

const Brief = () => {
  const { items } = useCartContext();

  if (items.length === 0) {
    return (
      <div className="w-full px-6 py-4 shadow-md shadow-orange-950/10 rounded-md text-center gap-4 bg-white flex flex-col items-center max-w-7xl">
        <h3>No hay items en el carrito</h3>
      </div>
    );
  }

  const total = items.reduce((acc, i) => acc + i.item.price * i.quantity, 0);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        {items.map((i) => (
          <ItemInCart key={i.item.id} item={i.item} quantity={i.quantity} />
        ))}
      </div>
      <div className="w-full flex flex-row justify-end">
        <span className="text-xl font-semibold">Total: ${total}</span>
      </div>
    </div>
  );
};

export default Brief;
