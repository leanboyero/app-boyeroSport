import 'react-pagination-bar/dist/index.css';

import React, {useState} from 'react';

import { Button } from 'react-bootstrap';
import OrderDetailContainer from '../OrderDetailContainer/OrderDetailContainer';
import PaginationBar from '../PaginationBar/PaginationBar';

function Orders({ordersList}) {
   
    const [currentPage, setCurrentPage] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [orderSelected, setOrderSelected] = useState(null);

    const handleOrderDetail = (id) => {
        setOrderSelected(id);
        setModalVisible(!modalVisible);
    };

  return (
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
                        {ordersList
                        .slice((currentPage - 1) * 10, currentPage * 10)
                        .map(order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.createdAt.toDate().toLocaleString()}</td>
                                <td>{order.buyer.payment}</td>
                                <td>{order.buyer.shipping}</td>
                                <td>${order.total}</td>
                                <td>
                                    <Button variant="primary" onClick={(id)=>handleOrderDetail(order.id)} >
                                        Ver detalle
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             <PaginationBar itemsPerPage={10} currentPage={currentPage} setCurrentPage={(pageNumber) => setCurrentPage(pageNumber)} totalItems={ordersList.length}/>
           {modalVisible && <OrderDetailContainer orderSelected={orderSelected} modalVisible={modalVisible} setModalVisible={setModalVisible}/>}
            
            </div>
  );
};

export default Orders;