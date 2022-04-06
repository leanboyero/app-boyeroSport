import { createContext, useState } from "react";

export  const CartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
      setCart([...cart, item]);
    };
  
    const removeItem = (id) => {
      setCart(cart.filter(prod => prod.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id);
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, cartQuantity}}>
        {children}
        </CartContext.Provider>
    );
};
