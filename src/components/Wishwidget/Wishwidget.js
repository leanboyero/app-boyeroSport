import './Wishwidget.css'

import * as Icon from 'react-bootstrap-icons';

import { WishListContext } from '../../context/WishListContext';
import { useContext } from 'react';

const Wishwidget = () => {
  const {wishListQuantity} = useContext(WishListContext);

  return (<>
            <Icon.Heart  color="#149ad9" size={28}/>
            <span className='badge badge-warning' id='lblCartCount'> 
              {wishListQuantity() || ''}
            </span>
          </>);
};

export default Wishwidget;
