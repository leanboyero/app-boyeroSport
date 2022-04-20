import './Checkout.css';

import * as Icon from 'react-bootstrap-icons';

import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = (props) => {

const {user, onSubmit, valuesForm, setValuesForm} = props;

const {cart, cartTotalPrice} = useContext(CartContext);

const handleChangeInput = (e) => {
  const {name, value} = e.target;
  setValuesForm({...valuesForm, [name]: value});
}

  return (
    <div className="row">
       <div className="col-lg-7">
       <div className="form-group">
            <h4>Información del cliente</h4>
            <p>Comprar como <b>{user.email}</b></p>
            <p>Nombre y apellido:  <b>{user.name} {user.lastName}</b></p>
            </div>
            <form onSubmit={onSubmit} className="checkout-form">
            <div className="form-group">
            <label>Dirección</label>
             <input type="text" className="form-control" id="address" name="address" required value={valuesForm.address} onChange={handleChangeInput} />
            </div>
            <div className="form-group">
            <label>Teléfono</label>
                <input type="text" className="form-control" id="phone" name="phone" required value={valuesForm.phone} onChange={handleChangeInput} />
            </div>
            <div className="form-group">
            <label>Forma de pago</label>
                <select className="form-control" id="payment" name="payment" required value={valuesForm.payment} onChange={handleChangeInput}>
                    <option value="">Seleccione una opción</option>
                    <option value="efectivo">Efectivo</option>
                    <option value="tarjeta">Tarjeta</option>
                </select>
            </div>
            <div className="form-group">
            <label>Método de envío</label>
                <select className="form-control" id="shipping" name="shipping" required value={valuesForm.shipping} onChange={handleChangeInput}>
                    <option value="">Seleccione una opción</option>
                    <option value="envio">Envío</option>
                    <option value="retiro">Retiro en tienda</option>
             </select>
            </div>
            <div className="form-group">
            <label>Comentarios</label>
                <textarea className="form-control" id="comments" name="comments" value={valuesForm.comments} onChange={handleChangeInput}></textarea>
            </div>
            <div className="form-group">
            <Button variant="success" type="submit" className="btn-block">
                Enviar
            </Button>
            </div>
        </form>
       </div>
       <div className="col-lg-4">
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
    </div>
  </div>
  );
  
};

export default Checkout;