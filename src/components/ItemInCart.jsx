import PropTypes from "prop-types";

const ItemInCart = ({ item, quantity }) => {
  const { title, price } = item;
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md shadow-orange-950/20 flex flex-row justify-between items-center pr-8">
      <div className="flex flex-col">
        <span className="text-lg">{title}</span>
        <span className="text-yellow-950/80">${price} x unidad</span>
      </div>
      <span className="text-lg">{quantity}</span>
    </div>
  );
};

export default ItemInCart;

ItemInCart.propTypes = {
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
