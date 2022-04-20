import React from 'react'

const  MessageOrderId = ({orderId}) => {

  return (
    <div className="container">    
    <h2>Orden generada</h2> 
    <p>Su orden ha sido generada con el número de orden {orderId}</p>     
    <p>Por favor, póngase en contacto con nosotros para cualquier duda.</p>    
    <p>Gracias por su compra!</p>    
    </div>
    );
};

export default MessageOrderId;