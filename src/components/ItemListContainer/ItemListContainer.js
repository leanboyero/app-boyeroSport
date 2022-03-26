import './ItemListContainer.css';

import React, {useEffect, useState} from 'react';

import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mocks/fakeApi';

const ItemListContainer = (props) => {
    const {title} = props;
    
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    
        useEffect(() => {
            setLoading(true)
            getProducts
            .then((response) => setProductList(response))
            .catch((error) =>console.log(error))
            .finally(()=> setLoading(false))

        }, []);

    return (
    <div className="container">
        <div className="row">
        <h3>{title}</h3> 
        </div>
       {loading ?  <p>Cargando productos...</p>: <ItemList productList={productList} />   }
    </div>
    );
}

export default ItemListContainer