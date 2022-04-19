import './Checkout.css';

import * as Icon from 'react-bootstrap-icons';

import { Link, Navigate } from 'react-router-dom';
import React, {useContext, useState} from 'react';
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';

import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import db from  '../../firebase/config';

const Checkout = () => {

  const {cart, cartTotalPrice, clearCart} = useContext(CartContext);
  const {user} = useContext(UserContext);
  const [values, setValues] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    coments: '',
    payment: '',
    shipping: '',
  });

    const [orderId, setOrderId] = useState(null);

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const orden = {
            items: cart,
            total  : cartTotalPrice(),
            buyer: {
                ...values,
                email: user.email,
                name: user.name + '' + user.lastname
            },
            createdAt: Timestamp.fromDate(new Date()),
            status: 'generada',
            user: user
    };
    
    const batch = writeBatch(db);
    const ordersRef = collection(db, 'orders');
    const productsRef = collection(db, 'products');

    const q = query(productsRef, where(documentId() , 'in', cart.map(item => item.id)));

    const products = await getDocs(q);

    const outOfStock = [];

    products.docs.forEach(doc => {
        const itemIncart = cart.find(item => item.id === doc.id);

        if(doc.data().stock >= itemIncart.quantity){ 
          
            batch.update(
                doc.ref,{
                    stock: doc.data().stock - itemIncart.quantity
                }
            );
        }else{
            outOfStock.push(itemIncart);       
        }

    });

    if(outOfStock.length === 0){
      await batch.commit()
       addDoc(ordersRef, orden)
        .then((orden) => {
           setOrderId(orden.id);
           clearCart();
           alert('Orden enviada');
      })
      .catch(error => {
          alert('Error al enviar la orden');
         console.log(error);
      }
    );
    } else {
      
      if( outOfStock.length === 1){
        alert(`El producto ${outOfStock[0].name} no tiene suficiente stock`);
      }else{
        alert('No hay suficiente stock para los siguientes productos: ' + outOfStock.map(item => item.name).join(', '));
      }
      
    }

  } 

  if(orderId){
     return (   
     <div className="container">    
      <h2>Orden generada</h2> 
      <p>Su orden ha sido generada con el número de orden {orderId}</p>     
      <p>Por favor, póngase en contacto con nosotros para cualquier duda.</p>    
      <p>Gracias por su compra!</p>    
      </div>);
  }

  if(cart.length === 0 || user === null){
    return <Navigate to={"/"}/>;
  }
  
  return (
    <div className="row container">
       <h3>Checkout</h3>
       <div className="col-lg-7">
       <div className="form-group">
            <h4>Información del cliente</h4>
            <p>Comprar como <b>{user.email}</b></p>
            <p>Nombre y apellido:  <b>{user.name} {user.lastName}</b></p>
            </div>
            <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-group">
            <label>Dirección</label>
             <input type="text" className="form-control" id="address" name="address" required value={values.address} onChange={handleChangeInput} />
            </div>
            <div className="form-group">
            <label>Teléfono</label>
                <input type="text" className="form-control" id="phone" name="phone" required value={values.phone} onChange={handleChangeInput} />
            </div>
            <div className="form-group">
            <label>Forma de pago</label>
                <select className="form-control" id="payment" name="payment" required value={values.payment} onChange={handleChangeInput}>
                    <option value="">Seleccione una opción</option>
                    <option value="efectivo">Efectivo</option>
                    <option value="tarjeta">Tarjeta</option>
                </select>
            </div>
            <div className="form-group">
            <label>Método de envío</label>
                <select className="form-control" id="shipping" name="shipping" required value={values.shipping} onChange={handleChangeInput}>
                    <option value="">Seleccione una opción</option>
                    <option value="envio">Envío</option>
                    <option value="retiro">Retiro en tienda</option>
             </select>
            </div>
            <div className="form-group">
            <label>Comentarios</label>
                <textarea className="form-control" id="comments" name="comments" rows="3" value={values.coments} onChange={handleChangeInput} />
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
       <h4>Carrito actual</h4>
       <p><Link to="/cart"><Icon.ArrowLeft/>Volver al carrito</Link></p>
        <ul className="list-group ">
            {cart.map((item,index) => (
                <li className="list-group" key={index}>
                    <div className="row">
                        <div className="col-md-8">
                        <p className="text-left text-primary"><small>{item.name}</small></p>
                        <p className="text-left"><small> ({item.selectedSize}) x{item.quantity}</small></p>
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