import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import { useCartContext } from "../hooks/useCartContext";

const AddItemButton = ({ item, quantity }) => {
  const { addItem, items } = useCartContext();

  const cartItem = items.find((i) => i.item.id === item.id);
  const isInCart = cartItem !== undefined;

  const handleClick = () => {
    addItem(item, quantity);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-yellow-900 text-white px-4 py-2 w-full max-w-xs rounded-md flex gap-2 items-center justify-center hover:bg-yellow-950"
    >
      <FaCartPlus />
      {isInCart ? "Modificar cantidad" : "Agregar al carrito"}
    </button>
  );
};

AddItemButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
  quantity: PropTypes.number.isRequired,
};
export default AddItemButton;
