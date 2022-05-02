import { createContext, useEffect, useState } from "react";

export  const CartContext = createContext([]);

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
      setCart([]);
      try {
        const cartItems = localStorage.getItem('cartItems');
        if(cartItems){
            setCart(JSON.parse(cartItems));
        }
      } catch (error) {
        alert(error);
      }
  }, []);

  const removeItem = (id) => {
        try {
          const newCart = cart.filter(item => item.id !== id);
          setCart(newCart);
          localStorage.setItem('cartItems', JSON.stringify(newCart));
        }
        catch (error) {
             alert(error);
        }
  }

  const clearCart = () => {
      try {
        localStorage.setItem('cartItems', []);
        setCart([]);
      } catch (error) {
        alert(error);
      }  
 }
  
 const isInCart = (id, selectedSize) => {
      return cart.some(prod => prod.id === id && prod.selectedSize === selectedSize);
 } 
  
 const cartQuantity = () => {
      return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  
  }

  const addItem = (item, quantity, selectedSize) => {
    
    let newItem = {};
    if(isInCart(item.id, selectedSize)){
      newItem = cart.map(prod => prod.id === item.id && prod.selectedSize === selectedSize ? {...prod, quantity: prod.quantity + quantity} : prod);
      setCart(newItem);
    }
    else{
      newItem = [...cart, {...item, quantity, selectedSize}];
      setCart(newItem);
    }

    try {
      localStorage.setItem('cartItems', JSON.stringify(newItem));
    }
    catch(e) {
      alert(e);
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
