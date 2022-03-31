import './ItemDetail.css';

import * as Icon from 'react-bootstrap-icons';

import React,{useState} from 'react';

import ImageList from '../ImageList/ImageList';
import ItemCount from '../ItemCount/ItemCount';
import ModalPaymentMethods from './ModalPaymentMethods/ModalPaymentMethods';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({productDatail}) => {
    const inicial = 1;
    const stock = 10;

    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();

    const modalHandle = ()=> {
      setModalVisible(!modalVisible);
    };

    const backHandle = ()=> {
      navigate(-1);
    }


  return (
    <>  <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
                   <li className="breadcrumb-item" onClick={backHandle}><h5><Icon.ArrowLeft size={27} />{ }Volver</h5></li>
        </ol>
     </nav>
         <div className='col-lg-6'>
             {productDatail.images ? (<ImageList images={productDatail.images} />) : ''}       
         </div>
         <div className='col-md-6'>
             <div className='product-content'>
                <h4 className="title text-dark">{productDatail.name}</h4>
                <p>
                {productDatail.description}
                </p>
                <div className="mb-3"> 
                    <div className="price h5">{productDatail.price}</div>
               </div>
               <div className='payments-link'>
               <button onClick={()=> modalHandle()}><Icon.CreditCard  className='credit-card' color="#000" size={15} /> Ver los medios de pago</button>
               </div>
                <ItemCount stock={stock} inicial={inicial} />
             </div>
         </div>
         <ModalPaymentMethods show={modalVisible} onHide={() => {setModalVisible(!modalVisible)}}  />
         </>
  )
}


export default ItemDetail;
