import React, {useEffect, useState} from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducts } from '../../mocks/fakeApi';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getProducts
        .then((res) => setProduct(res.find(item => item.id === '1')))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    }, []);

 console.log(product.images);

  return (
    <div className="container">
         <div className="row">
           {loading ? <p>Cargando un producto...</p>: <ItemDetail productDatail={product} />}
         </div>
    </div>
  );
};

export default ItemDetailContainer;