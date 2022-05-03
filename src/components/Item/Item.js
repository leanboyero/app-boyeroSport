import './Item.css';

import React, { useContext } from 'react';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { WishListContext } from '../../context/WishListContext';

const Item = ({product, isRemoveItem}) => {
  const {removeWish} = useContext(WishListContext);
  const {id, name, price, images} = product;

  const handleMouseOver = (e) => {
    e.target.src = images[1] ? images[1].image : images[0].image;
  }
  const handleMouseLeave = (e) => {
    e.target.src = images[0].image;
  }

  const handleRemoveItem = (id) => {
    removeWish(id);
  }
  
  return (
    <div className='col-md-3 col-sm-4 col-12 item'>
    <Card>
    <Link to={`/detail/${id}`}>
    <Card.Img variant="top" src={images[0].image} max-width="240" max-height="320" onMouseOver={(e)=>handleMouseOver(e)} onMouseLeave={(e)=>handleMouseLeave(e)}/>
    <Card.Body>
      <Card.Text className='title text-truncate'>
       {name}
      </Card.Text>
      <Card.Title>${price}</Card.Title>
    </Card.Body>
    </Link>
  </Card>
  {isRemoveItem && <button className='btn btn-danger' onClick={()=>handleRemoveItem(id)}>Eliminar</button>} 
  </div>
  );
};

export default Item;