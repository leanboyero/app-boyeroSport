import React from 'react';

const OrderDetail = ({order}) => {

    const {items} = order;

    if (items.length === 0) {
        return (
            <div className="row container">
                <h2>No hay items en el pedido</h2>
            </div>
        );
    }

  return (
    <div className="row container col-12">
        <div className="col-12">
            <div className="row">
                <div className="col-12">
                    <table className="table cart-items">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.images[0].image} width={90} alt={item.name}/>
                                        <span>{item.name}</span>
                                        </td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OrderDetail;