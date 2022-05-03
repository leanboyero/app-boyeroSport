import React,{useEffect, useState} from 'react';
import { doc, getDoc } from 'firebase/firestore';

import Loading from '../Loading/Loading';
import { Modal } from 'react-bootstrap';
import OrderDetail from '../OrderDetail/OrderDetail';
import db from '../../firebase/config';

const OrderDetailContainer = ({orderSelected, modalVisible, setModalVisible}) => {

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
  

    useEffect(() => {
        setLoading(true);
        const orderRef = doc(db,'orders',orderSelected);
        getDoc(orderRef)
        .then(doc => {
            setOrder({id: doc.id, ...doc.data()});     
         })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false));
        
    }, [orderSelected]);


  return (
    <Modal show={modalVisible} onHide={()=>setModalVisible(!modalVisible)}  animation={false} centered scrollable="true" size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Detalle de la orden de compra</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
            {loading ?  <div className="row container col-12"><Loading text="" /></div> : 
             (
                order ? <OrderDetail order={order} /> : ''
            
            )}
        </Modal.Body>
                    
    </Modal>
  )
}

export default OrderDetailContainer;