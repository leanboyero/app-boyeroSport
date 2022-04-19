import './ItemDetail.css';

import * as Icon from 'react-bootstrap-icons';

import { Link, useNavigate } from 'react-router-dom';
import React, {useContext, useState} from 'react';

import { CartContext } from '../../context/CartContext';
import ImageList from '../ImageList/ImageList';
import ItemCount from '../ItemCount/ItemCount';
import ModalPaymentMethods from './ModalPaymentMethods/ModalPaymentMethods';
import Select from '../Select/Select';

const ItemDetail = ({productDatail}) => {

    const {addItem} = useContext(CartContext);

    const inicial = 1;
    const {id, name, price, images, stock, description, sizes} = productDatail;

    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();

    const sizeInicial = sizes ? sizes[0] : '';
    const [selectedSize, setSelectedSize] = useState(sizeInicial);

    const modalHandle = ()=> {
      setModalVisible(!modalVisible);
    };

    const backHandle = ()=> {
      navigate(-1);
    }

    const [quantity, setQuantity] = useState(1);  

    const [isInCart, setIsInCart] = useState(false);

    const addToCart = ()=> {

      const itemToAdd = {
        id,
        name,
        price,
        quantity,
        selectedSize,
        images
      };
      addItem(itemToAdd, quantity, selectedSize);
      setIsInCart(true);
    }


  return (
    <>  <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
                   <li className="breadcrumb-item" onClick={backHandle}><h5><Icon.ArrowLeft size={27} />{ }Volver</h5></li>
        </ol>
     </nav>
         <div className='col-lg-6'>
             { images ? (<ImageList images={images} />) : ''}       
         </div>
         <div className='col-md-6'>
             <div className='product-content'>
                <h4 className="title text-dark">{name}</h4>
                <p>
                {description}
                </p>
                <div className="mb-3"> 
                    <div className="price h5">${price}</div>
               </div>
               <div className='payments-link'>
               <button onClick={()=> modalHandle()}><Icon.CreditCard  className='credit-card' color="#000" size={15} /> Ver los medios de pago</button>
               </div>
              { !isInCart ? 
                  (<>
                    {stock > 0 ? (<>
                                 {sizes ? <Select options={sizes} onSelect={setSelectedSize}/> : ''} <ItemCount  stockMax={stock} inicial={inicial} quantity={quantity} setQuantity={setQuantity} addToCart={addToCart} />
                                 </>) 
                        :(<div className="alert alert-danger" role="alert">
                            <h5 className="alert-heading">Lo sentimos!</h5>
                            <p>Este producto no esta disponible en stock.</p>
                            </div>)}
                  </>)
                  : (<>
                     <p>Talle: {selectedSize}</p>
                     <p>Cantidad: {quantity}</p>
                     <Link to={"/cart"} className="btn btn-success" >Terminar compra</Link></>
                  )
              }

             </div>
         </div>
         <ModalPaymentMethods show={modalVisible} onHide={() => {setModalVisible(!modalVisible)}}/>
         </>
  )
}

export default ItemDetail;
