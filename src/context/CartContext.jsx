import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]); // ✅ Step 1: Add state for orders

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const checkout = () => {
    setOrders((prev) => [...prev, ...cartItems]); // ✅ Step 2: Move cart items to orders
    setCartItems([]); // ✅ Clear cart after checkout
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        orders, // ✅ Step 3: Provide orders to consumers
        checkout, // ✅ Step 4: Provide checkout function
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
