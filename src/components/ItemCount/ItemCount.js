import './ItemCount.css'

import { Button, Card } from 'react-bootstrap';

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

    const onchangeText = (contador) =>{
        setContador(contador);
    }

    const onAdd = ()=> {
            console.log(`Ha agregado al carrito cantidad ${contador}  del producto.`);
    }

    return (
    <Card className='item-count'>
        <Card.Body variant="right">
          <Card.Title>Detalle de producto</Card.Title>
          <Card.Text>
         </Card.Text>
         <div className="cart-info quantity">
            <Button className="btn-increment-decrement" onClick={()=>clickResta()}>-</Button>
            <input type="text" value={contador} className='input-quantity' inputMode="numeric" onChange={text => onchangeText(text)}/>
            <Button className="btn-increment-decrement" onClick={()=>clickSuma()}>+</Button>
         </div>
        <Button variant="success" onClick={()=>onAdd()}>Agregar al carrito</Button>
       </Card.Body>
    </Card>
    );
}

export default ItemCount;