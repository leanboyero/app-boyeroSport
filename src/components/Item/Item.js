import './Item.css';

import {Card} from 'react-bootstrap';
import React from 'react';

const Item = ({product}) => {
  return (
    <div className='col-sm-3'>
    <Card>
    <Card.Img variant="top" src={product.image}  width='400' height='400'/>
    <Card.Body>
      <Card.Text>
       {product.name}
      </Card.Text>
      <Card.Title>{product.price}</Card.Title>
    </Card.Body>
  </Card>
  </div>
  );
}

export default Item;