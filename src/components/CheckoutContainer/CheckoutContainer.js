import React, {useContext, useState} from 'react';
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore';

import { CartContext } from '../../context/CartContext';
import Checkout from '../Checkout/Checkout';
import MessageOrderId from '../MessageOrderId/MessageOrderId';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import db from  '../../firebase/config';

const CheckoutContainer = () => {

  const {cart, cartTotalPrice, clearCart} = useContext(CartContext);
  const {user} = useContext(UserContext);
  const [valuesForm, setValuesForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    coments: '',
    payment: '',
    shipping: '',
  });

    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (event) => {
    event.preventDefault();
    const orden = {
            items: cart,
            total  : cartTotalPrice(),
            buyer: {
                ...valuesForm,
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
            batch.update( doc.ref,{ stock: doc.data().stock - itemIncart.quantity});
            
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
    return <MessageOrderId orderId={orderId} />;
 }

  if(cart.length === 0 || user === null){
    return <Navigate to={"/"}/>;
  }
  
  return (
    <div className="row container">
        <h3>Checkout</h3>
        <Checkout onSubmit={handleSubmit} user={user} valuesForm={valuesForm} setValuesForm={setValuesForm}/>
    </div>
  );
}

export default CheckoutContainer;