import React, { useContext } from 'react';

import EmptyWishList from '../EmptyWishList/EmptyWishList';
import ItemList from '../ItemList/ItemList';
import { Link } from 'react-router-dom';
import { WishListContext } from '../../context/WishListContext';

const WishListContainer = () => {
    const {wishList}= useContext(WishListContext);

  if(wishList.length === 0){
    return(<EmptyWishList/>);
  }


  return (
    <div>
       <div className="section-header" style={{background: "url('/assents/images/contact/contact.jpg')center center no-repeat",
    backgroundSize: 'cover', paddingBottom: '50px'}}><h1><Link to={"/"} className="icon-back"></Link>Wish List</h1></div> 
        <div className="row container">
          <ItemList productList={wishList} isRemoveItems={true} /> 
        </div>
    </div>
  );
};

export default WishListContainer;
