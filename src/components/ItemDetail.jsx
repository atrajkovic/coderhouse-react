import PropTypes from "prop-types";
import { useState } from "react";
import AddItemButton from "./AddItemButton";
import Description from "./Description";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { useCartContext } from "../hooks/useCartContext";

export const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { items } = useCartContext();
  const itemsQuantity = items.find((i) => i.item.id === item.id)?.quantity;

  return (
    <div className="w-full my-2 bg-white p-4 rounded-xl shadow-md shadow-orange-950/20">
      <div className="flex flex-row gap-4 w-full">
        <img src={item.pictureUrl} className="rounded-lg w-full" />
        <div className="flex flex-col w-full max-w-md">
          <div>
            <h1 className="text-3xl font-black text-amber-950">{item.title}</h1>
            <h6 className="text-xl font-medium text-amber-900">
              $ {item.price}
            </h6>
            <Description text={item.description} />
            <div className="mt-6">
              <ItemQuantitySelector
                maxQuantity={item.stock}
                onChange={(v) => setQuantity(v)}
                initialQuantity={itemsQuantity}
              />
              <AddItemButton quantity={quantity} item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};
