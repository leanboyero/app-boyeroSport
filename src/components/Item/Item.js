import './Item.css';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react';

const Item = ({product}) => {
  const {id, name, price, images} = product;

  const handleMouseOver = (e) => {
    e.target.src = images[1] ? images[1].image : images[0].image;
  }
  const handleMouseLeave = (e) => {
    e.target.src = images[0].image;
  }

  return (
    <div className='col-md-3 col-sm-4 col-12'>
    <Card>
    <Link to={`/detail/${id}`}>
    <Card.Img variant="top" src={images[0].image} max-width="240" max-height="320" onMouseOver={(e)=>handleMouseOver(e)} onMouseLeave={(e)=>handleMouseLeave(e)}/>
    <Card.Body>
    <Card.Title>{price}</Card.Title>
      <Card.Text className='title text-truncate'>
       {name}
      </Card.Text>
    </Card.Body>
    </Link>
  </Card>
  </div>
  );
};

export default Item;