import './Checkout.css';

import { Button } from 'react-bootstrap';
import CheckoutDetail from '../CheckoutDetail/CheckoutDetail';
import React from 'react';

const Checkout = (props) => {

const {user, onSubmit, valuesForm, setValuesForm} = props;

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
       <CheckoutDetail />
    </div>
  </div>
  );
  
};

export default Checkout;