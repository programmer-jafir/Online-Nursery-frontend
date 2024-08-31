import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id?: string;
  image: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  rating: number;
  category: string;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
});

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
