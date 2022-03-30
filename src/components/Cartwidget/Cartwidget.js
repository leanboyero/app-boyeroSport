import './Cartwidget.css'

import * as Icon from 'react-bootstrap-icons';

const Cartwidget = () =>{
    return (<><Icon.Cart3  color="#149ad9" size={28}/><span className='badge badge-warning' id='lblCartCount'> 0 </span></>);
}

export default Cartwidget;