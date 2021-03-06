import * as Icon from 'react-bootstrap-icons';

import { Button } from 'react-bootstrap';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {

    const navigate = useNavigate();

    const toProductsHandle = () => {
       navigate('/ofertas');
    }
    
  return (
    <div className="container">
    <Icon.CartX size={110} color="#ccc" />
    <h2>Tu carrito est&aacute; vac&iacute;o.</h2>
    <p>Antes de proceder al pago, deber&aacute;s agregar algunos productos al carrito de compras.</p>
    <Button variant="light" onClick={toProductsHandle}>Ir al cat&aacute;logo</Button>
  </div>
  )
};

export default EmptyCart;