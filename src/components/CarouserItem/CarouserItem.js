import '../Item/Item.css';

import * as Icon from 'react-bootstrap-icons';

import React, {useContext, useState} from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { WishListContext } from '../../context/WishListContext';

const CarouserItem = ({product, isRemoveItem}) => {
  const {removeWish, isInWishList, addWishList} = useContext(WishListContext);
  const {id, name, price, images} = product;
  const [addWish, setAddWish] = useState(false);

  const handleMouseOver = (e) => {
    e.target.src = images[1] ? images[1].image : images[0].image;
    if(!isRemoveItem){
       setAddWish(true);
    }
  }
  const handleMouseLeave = (e) => {
    e.target.src = images[0].image;
    setAddWish(false);
  }

  const handleRemoveItem = (id) => {
    removeWish(id);
  }

  const addToWishList = ()=> {
    const itemToAdd = {
      id,
      name,
      price,
      images  
    };
    addWishList(itemToAdd);

  }
  return (
    <div className='col-md-10 col-sm-10 col-12 item'>
    <Card onMouseOver={(e)=>handleMouseOver(e)} onMouseLeave={(e)=>handleMouseLeave(e)}>
    {addWish &&
      (isInWishList(id) ? <Icon.HeartFill size={20} color="#149ad9" onClick={()=>handleRemoveItem(id)} className="wish" />: <Icon.Heart size={20} color="#149ad9" onClick={addToWishList} className="wish"/>)
     }
    <Link to={`/detail/${id}`}>
    <Card.Img variant="top" src={images[0].image} max-width="240" max-height="320"/>
    <Card.Body>
      <Card.Text className='title text-truncate'>
       {name}
      </Card.Text>
      <Card.Title>${price}</Card.Title>
    </Card.Body>
    </Link>
  </Card>
  </div>
  );
};

export default CarouserItem;