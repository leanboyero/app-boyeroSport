import './Cart.css';

import * as Icon from 'react-bootstrap-icons';

import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';

import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import ConfirmAlert from '../ConfirmAlert/ConfirmAlert';
import EmptyCart from '../EmptyCart/EmptyCart';
import { UserContext } from '../../context/UserContext';

const Cart = () => {

  const {cart, removeItem, clearCart, cartTotalPrice}= useContext(CartContext);

  const {user} = useContext(UserContext);

  const navigate = useNavigate();

  const [showAlertItem, setShowAlertItem] = useState(false);

  const [showAlertCart, setShowAlertCart] = useState(false);

  const [itemSelected, setItemSelected] = useState(null);

  const onAlertItem = (id) => {
    setItemSelected(id);
    setShowAlertItem(!showAlertItem);
  }

  const handleRemoveItem = (id) => {
    setItemSelected(null);
    removeItem(id);
    setShowAlertItem(!showAlertItem);
  }

  const onAlertCart = () => {
    setShowAlertCart(!showAlertCart);
  }

  const clearCartHandle = () => {
    clearCart();
  }

  const toProductsHandle = () => {
    navigate('/ofertas');
  }
  
  const toCheckoutHandle = () => {
    if(user){
      navigate('/checkout');
    }
    else{
      navigate('/signin');
    }
  }

  if(cart.length === 0){
    return(<EmptyCart/>);
  }

  return (
    <><div className="section-header" style={{background: "url('/assents/images/contact/contact.jpg')center center no-repeat",
    backgroundSize: 'cover', paddingBottom: '50px'}}><h1>Carrito de compras</h1></div> 
    <div className="row container">
    <div className="col-lg-9">
     <div className=" cart">
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
              <td colSpan={2} className="cart-product"><Icon.X size={25}  color="#555" className="remove-item"  onClick={(id)=>onAlertItem(item.id)} /> 
                 <Link to={`/detail/${item.id}`}><img src={item.images[0].image} height="70" width="70" alt={item.name} />{item.name}</Link>
              </td>
              <td>{item.selectedSize ? item.selectedSize : '-'}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price*item.quantity}</td>
              </tr>)}
          </tbody>
       </table>       
       <ConfirmAlert show={showAlertCart} title="¿Desea vaciar el carrito?" text="Desaparecer&aacute;n todos los productos de tu carrito de compras."  onCancel={()=>setShowAlertCart(!showAlertCart)}  onConfirm={()=>clearCartHandle()}/> 
     </div>
     </div>
      <div className="col-lg-3">
      <div className="card">
        <div className="card-body">
        <h5>Total del carrito</h5>
        <div className="price text-center"><h5>${cartTotalPrice()}</h5></div>
        <div className="d-grid gap-2">
        <Button variant="light" onClick={toProductsHandle}>Volver al cat&aacute;logo</Button>
        <Button variant="danger" onClick={()=>onAlertCart()}>Vaciar carrito</Button>
        <Button variant="primary" onClick={toCheckoutHandle}>Checkout <Icon.ArrowRight/></Button>
        </div>
        </div>
      </div>
      </div>
    </div>
    <ConfirmAlert
    show={showAlertItem}
    title="¿Eliminar producto del carrito?"
    text="Este producto desaparecer&aacute; de tu carrito de compras."
    onCancel={()=>setShowAlertItem(!showAlertItem)}
    onConfirm={handleRemoveItem.bind(this,itemSelected)}/> 
  </>);
}

export default Cart;