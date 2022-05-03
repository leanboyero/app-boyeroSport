import * as Icon from 'react-bootstrap-icons';

import { Button } from 'react-bootstrap';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const EmptyWishList = () => {

    const navigate = useNavigate();

    const toProductsHandle = () => {
       navigate('/ofertas');
    }
    
  return (
    <div className="container">
    <Icon.Heart size={110} color="#ccc" />
    <h2>Tu lista de deseos est&aacute; vac&iacute;a.</h2>
    <p>Encontrarás muchos productos interesantes en nuestra "Tienda".</p>
    <Button variant="light" onClick={toProductsHandle}>Ir al cat&aacute;logo</Button>
  </div>
  )
};

export default EmptyWishList;