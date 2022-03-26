import './ItemCount.css'

import * as Icon from 'react-bootstrap-icons';

import { Button } from 'react-bootstrap';
import { useState } from 'react';

const ItemCount = ({stock, inicial}) =>{

    const [contador, setContador] = useState(inicial);

    const clickResta = ()=>{
      if(contador===inicial){
          return;
      }
      setContador(contador - 1);
    };

    const clickSuma =() => {
      if(contador===stock){
         return;
      }
      setContador(contador + 1);
    }

    const onAdd = ()=> {
            console.log(`Ha agregado al carrito cantidad ${contador}  del producto.`);
    }

    return (
      <div className="row mb-4">
          <div className="col-md-4 col-6 mb-2" >
           <label className="form-label">Cantidad</label>
           <div className="input-group input-spinner">
              <Button className="btn btn-icon btn-light" onClick={()=>clickResta()}>-</Button>
               <input type="text" value={contador} className='form-control text-center' inputMode="numeric" readOnly/>
               <Button className="btn btn-icon btn-light" onClick={()=>clickSuma()}>+</Button>
            </div>
            <div className="actions">
                <Button variant="primary" onClick={()=>onAdd()}><Icon.Cart  color="#fff" size={18}/> Agregar al carrito</Button>
            </div>
          </div>   
    </div>
    );
}

export default ItemCount;