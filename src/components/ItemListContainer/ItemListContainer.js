import './ItemListContainer.css';

import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) =>{
    const {greeting} = props;
    const inicial = 1;
    const stock = 10;
    return (
    <div className="container">
        <div className="row">
             <h1>{greeting}</h1>
             <ItemCount stock={stock} inicial={inicial} />
       </div>
    </div>
    );
}

export default ItemListContainer;