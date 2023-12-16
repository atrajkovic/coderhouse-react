import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  const itemPageLink = `/item/${item.id}`;

  return (
    <Link
      className="px-6 py-4 shadow-md shadow-orange-950/10 rounded-md flex flex-col gap-2 bg-white"
      to={itemPageLink}
    >
      <h6 className="font-semibold text-center text-lg">{item.title}</h6>
      <img src={item.pictureUrl} alt="" />
      <span className="text-lg font-medium text-orange-900">
        $ {item.price}
      </span>
      <span className="hover:underline text-center">Ver detalles</span>
    </Link>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    pictureUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};
