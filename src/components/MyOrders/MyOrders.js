import React, {useContext, useEffect, useState} from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { Button } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import db from '../../firebase/config';

function MyOrders() {
    const { user } = useContext(UserContext);

    const [ordersList, setOrdersList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if(user){
        const ordersCollection = collection(db, 'orders');
        const q = query(ordersCollection, where('user', '==', user));
        getDocs(q)
            .then(resp => {
                const orders = resp.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setOrdersList(orders);
                setLoading(false);
            })
            .catch((error) => console.log(error))
            .finally(()=> setLoading(false));
        }
    }, [user]);

    if(user === null){
        return <Navigate to={"/"}/>;
    }

        
    if(loading){
        return (<div className="row container"><Loading text="Cargando ordenes..." /></div>);
    }
    

    if(ordersList.length === 0){
        return (
            <div className="row container">
                <h2>¡Todavia no tiene pedidos!</h2>
            </div>
        );       
    }
    
    
  return (
    <div>
        <div className="container">
        <h2>Mis ordenes</h2>
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Forma de pago</th>
                            <th>Método de envío</th>
                            <th>Total</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList.map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.createdAt.toDate().toLocaleString()}</td>
                                <td>{order.buyer.payment}</td>
                                <td>{order.buyer.shipping}</td>
                                <td>${order.total}</td>
                                <td>
                                    <Button variant="primary" >
                                        Ver detalle
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default MyOrders;