import { createContext, useState } from "react";

export  const CartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const removeItem = (id) => {
      setCart(cart.filter(prod => prod.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }
  
    const isInCart = (id, selectedSize) => {
      return cart.some(prod => prod.id === id && prod.selectedSize === selectedSize);
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

  const addItem = (item, quantity, selectedSize) => {
    if(isInCart(item.id, selectedSize)){
      setCart(cart.map(prod => prod.id === item.id && prod.selectedSize === selectedSize ? {...prod, quantity: prod.quantity + quantity} : prod));
    }else{
      setCart([...cart, {...item, quantity, selectedSize}]);
    }
  }

  const cartTotalPrice = () => {
    return cart.reduce((acc, prod) => acc += prod.quantity * prod.price, 0);
  }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart, cartQuantity, cartTotalPrice}}>
        {children}
        </CartContext.Provider>
    );
};
