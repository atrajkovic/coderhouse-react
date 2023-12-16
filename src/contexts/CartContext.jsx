import PropTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

export const CartContext = createContext({});

export default function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {
    const itemIndex = items.findIndex((i) => i.item.id === item.id);

    if (itemIndex === -1) {
      setItems([...items, { item, quantity }]);
      return;
    }

    const newItems = [...items];
    newItems[itemIndex].quantity = quantity;
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.item.id !== itemId);
    setItems(newItems);
  };

  const itemsQuantity = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const emptyCart = () => {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        itemsQuantity,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
