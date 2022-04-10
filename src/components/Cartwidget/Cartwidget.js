import './Cartwidget.css'

import * as Icon from 'react-bootstrap-icons';

import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const Cartwidget = () =>{

    const {cartQuantity} = useContext(CartContext);
    return (<>
              <Icon.Cart3  color="#149ad9" size={28}/>
              <span className='badge badge-warning' id='lblCartCount'> 
               {cartQuantity() || ''}
              </span>
            </>);
}

export default Cartwidget;