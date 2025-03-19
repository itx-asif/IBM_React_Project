import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || {};
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    if (updatedCart[product.id]) {
      updatedCart[product.id].quantity += 1;
    } else {
      updatedCart[product.id] = { ...product, quantity: 1 };
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = { ...cart };
    if (updatedCart[productId].quantity > 1) {
      updatedCart[productId].quantity -= 1;
    } else {
      delete updatedCart[productId];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
