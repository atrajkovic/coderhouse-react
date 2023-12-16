import PropTypes from "prop-types";
import { useState } from "react";

const ItemQuantitySelector = ({ onChange, maxQuantity, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity ?? 0);

  const handleChange = (value) => {
    const nwValue = quantity + value;
    if (nwValue < 0 || nwValue > maxQuantity) {
      return;
    }
    setQuantity(nwValue);
    onChange(nwValue);
  };

  return (
    <div>
      <span className="text-sm text-slate-400">{maxQuantity} disponibles</span>
      <div className="flex flex-row w-full max-w-xs bg-yellow-200 my-2 rounded-md">
        <button
          className="py-1 px-3 text-lg grid place-items-center bg-yellow-900 hover:bg-yellow-950 text-white font-bold rounded-l-md"
          onClick={() => handleChange(-1)}
        >
          -
        </button>
        <div className="w-full grid place-items-center">{quantity}</div>
        <button
          className="py-1 px-3 text-lg grid place-items-center bg-yellow-900 hover:bg-yellow-950 text-white font-bold rounded-r-md"
          onClick={() => handleChange(1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

ItemQuantitySelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  maxQuantity: PropTypes.number.isRequired,
  initialQuantity: PropTypes.number,
};

export default ItemQuantitySelector;
