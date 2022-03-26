import './Cartwidget.css'

import * as Icon from 'react-bootstrap-icons';

const Cartwidget = () =>{
    return (<><Icon.Cart  color="#149ad9" size={30}/><span className='badge badge-warning' id='lblCartCount'> 0 </span></>);
}

export default Cartwidget;