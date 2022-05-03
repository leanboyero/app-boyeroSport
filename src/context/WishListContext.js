import { createContext, useEffect, useState } from "react";

export  const WishListContext = createContext([]);

export const WishListProvider = ({children}) => {

  const [wishList, setwishList] = useState([]);

  useEffect(() => {
    setwishList([]);
      try {
        const wishListItems = localStorage.getItem('wishListItems');
        if(wishListItems){
          setwishList(JSON.parse(wishListItems));
        }
      } catch (error) {
        alert(error);
      }
  }, []);

  const removeWish = (id) => {
        try {
          const newWishItem = wishList.filter(item => item.id !== id);
          setwishList(newWishItem);
          localStorage.setItem('wishListItems', JSON.stringify(newWishItem));
        }
        catch (error) {
             alert(error);
        }
  }
  
 const isInWishList = (id) => {
      return wishList.some(prod => prod.id === id);
 } 
  
  const addWishList = (item) => {
    
    let newItem = {};
    if(isInWishList(item.id)){
      newItem = wishList.map(prod => prod.id === item.id ? {...prod} : prod);
      setwishList(newItem);
    }
    else{
      newItem = [...wishList, {...item}];
      setwishList(newItem);
    }

    try {
      localStorage.setItem('wishListItems', JSON.stringify(newItem));
    }
    catch(e) {
      alert(e);
    }
    
  }
  
  const wishListQuantity = () => {
    return wishList.reduce((acc, prod) => acc + prod.quantity, 0);

}

  return (
        <WishListContext.Provider value={{wishList, addWishList, removeWish, isInWishList, wishListQuantity}}>
        {children}
        </WishListContext.Provider>
    );
};
