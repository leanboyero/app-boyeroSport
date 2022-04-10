import './Cart.css';

import * as Icon from 'react-bootstrap-icons';

import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import EmptyCart from '../EmptyCart/EmptyCart';

const Cart = () => {

  const {cart, removeItem, clearCart, cartQuantity, cartTotalPrice}= useContext(CartContext);

  const navigate = useNavigate();

  const removeHandle = (id) => {
    removeItem(id);
  }

  const clearCartHandle = () => {
    clearCart();
  }

  const toProductsHandle = () => {
    navigate('/ofertas');
  }

  if(cart.length === 0){
    return(<EmptyCart/>);
  }

  return (
    <div className="row container">
      <h3>Carrito de compras ({cartQuantity()})</h3>
    <div className="col-lg-9">
     <div className="cart">
       <table className="table cart-items">
         <thead>
           <tr>
             <th colSpan={2}>Producto</th>  
             <th>Talle</th>
             <th>Precio</th>
             <th>Cantidad</th>
             <th>Subtotal</th>
           </tr>
         </thead>
          <tbody>
            {cart.map((item,index) =>
              <tr key={index}>
              <td colSpan={2} className="cart-product text-truncate"><Icon.X size={25} onClick={()=>removeHandle(item.id)} color="#555" className="remove-item" /> <Link to={`/detail/${item.id}`}><img src={item.images[0].image} height="70" width="70" alt={item.name} />{item.name}</Link></td>
              <td>{item.selectedSize ? item.selectedSize : '-'}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price*item.quantity}</td>
              </tr>)}
          </tbody>
       </table>
       <button className="btn btn-primary" onClick={clearCartHandle}>Vaciar carrito</button>       
     </div>
     </div>
      <div className="col-lg-3">
      <div className="card">
        <div className="card-body">
        <h5>Total del carrito</h5>
        <div className="price text-center"><h5>${cartTotalPrice()}</h5></div>
        <div className="d-grid gap-2">
        <Button variant="success">Finalizar compra</Button>
        <Button variant="light" onClick={toProductsHandle}>Volver al cat&aacute;logo</Button>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Cart;