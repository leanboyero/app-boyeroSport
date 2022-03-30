import React, {useEffect, useState} from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducts } from '../../mocks/fakeApi';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true)
        getProducts
        .then((res) => setProduct(res.find(product => product.id === itemId)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, []);

  return (
         <div className="row container detail">
           {loading ? <p>Cargando un producto...</p>: <ItemDetail productDatail={product} />}
         </div>
  );
};

export default ItemDetailContainer;