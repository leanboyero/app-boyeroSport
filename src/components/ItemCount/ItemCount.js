import './ItemCount.css'

import * as Icon from 'react-bootstrap-icons';

import { Button } from 'react-bootstrap';

const ItemCount = ({stockMax=10, inicial, quantity, setQuantity, addToCart}) =>{


    const handleRestar = ()=>{
      if(quantity===inicial){
          return;
      }
      setQuantity(quantity - 1);
    };

    const handleSumar =() => {
      if(quantity===stockMax){
         return;
      }
      setQuantity(quantity + 1);
    }

    return (
      <div className="row mb-4">
          <div className="col-md-4 col-6 mb-2" >
           <label className="form-label">Cantidad</label>
           <div className="input-group input-spinner">
              <Button className="btn btn-icon btn-light" onClick={()=>handleRestar()} >-</Button>
               <input type="text" value={quantity} className='form-control text-center' inputMode="numeric" readOnly/>
               <Button className="btn btn-icon btn-light" onClick={()=>handleSumar()}>+</Button>
            </div>
            <div className="actions">
                <Button variant="primary" onClick={addToCart} ><Icon.Cart  color="#fff" size={18}/> Agregar al carrito</Button>
            </div>
          </div>   
    </div>
    );
}

export default ItemCount;