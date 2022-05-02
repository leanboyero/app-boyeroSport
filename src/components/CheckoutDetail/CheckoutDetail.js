import * as Icon from 'react-bootstrap-icons';

import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CheckoutDetail = () => {
  
    const {cart, cartTotalPrice} = useContext(CartContext);

  return (
    <div className="card">
    <div className="card-body checkout">
    <h4>Detalle </h4>
    <p><Link to="/cart"><Icon.ArrowLeft/>Volver al carrito</Link></p>
     <ul className="list-group ">
         {cart.map((item,index) => (
             <li className="list-group" key={index}>
                 <div className="row">
                     <div className="col-md-8">
                     <p className="text-left text-primary"><small>{item.name}</small></p>
                     <p className="text-left"><small> {item.selectedSize ? 'Talle ' + item.selectedSize : ''} x{item.quantity}</small></p>
                     </div>
                     <div className="col-md-4">
                         <div className="d-flex">
                             <h6>${item.price*item.quantity}</h6>
                         </div>
                         </div>
                   </div>  
               </li>
         ))}
     </ul>
     <div>
         <h6>Total: ${cartTotalPrice()}</h6>
     </div>
      </div>
    </div>  
  );
};

export default CheckoutDetail;