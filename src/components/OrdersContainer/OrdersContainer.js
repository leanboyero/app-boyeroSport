import 'react-pagination-bar/dist/index.css';

import React, {useContext, useEffect, useState} from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

import Loading from '../Loading/Loading';
import { Navigate } from 'react-router-dom';
import Orders from '../Orders/Orders';
import { UserContext } from '../../context/UserContext';
import db from '../../firebase/config';

const OrdersContainer = () => {

    const { user } = useContext(UserContext);

    const [ordersList, setOrdersList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if(user){
        const ordersCollection = collection(db, 'orders');
        const q = query(ordersCollection, where('user', '==', user), orderBy('createdAt', 'desc'));
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
        <Orders ordersList={ordersList}/>
    </div>
</div>
  );
};

export default OrdersContainer;