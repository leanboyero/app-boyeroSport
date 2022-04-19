import React, {useEffect, useState} from 'react';
import { doc, getDoc } from 'firebase/firestore';

import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import db from  '../../firebase/config';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const {itemId} = useParams();

    useEffect(() => {
        setLoading(true)
        const productRef = doc(db,'products',itemId);
        getDoc(productRef)
        .then(doc => {
             setProduct({id: doc.id, ...doc.data()});
         })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false));
        
    }, [itemId]);

  return (
         <div className="row container detail">
           {loading ? <Loading  text="Cargando un producto" /> : <ItemDetail productDatail={product} />}
         </div>
  );
};

export default ItemDetailContainer;