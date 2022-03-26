import './Item.css';

import {Card} from 'react-bootstrap';
import React from 'react';

const Item = ({product}) => {
  return (
    <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6'>
    <Card>
    <Card.Img variant="top" src={product.images[0].image} max-width="240" max-height="320"/>
    <Card.Body>
    <Card.Title>{product.price}</Card.Title>
      <Card.Text className='title text-truncate'>
       {product.name}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  );
}

export default Item;