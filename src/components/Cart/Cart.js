import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

const Cart = () => {

  const {cart, cartQuantity, removeItem, clearCart} = useContext(CartContext);
  console.log(cart);
  return (
    <div className="row container">
      <h3>Carrito de compras ({cartQuantity()})</h3>
     <div className="cart">
     </div>
    </div>
  )
}

export default Cart;