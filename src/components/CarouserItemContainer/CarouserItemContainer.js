import  './CarouserItemContainer.css';

import React, {useEffect, useState} from 'react';
import { collection, getDocs } from 'firebase/firestore';

import CarouserItem from '../CarouserItem/CarouserItem';
import CarouserItems from 'react-elastic-carousel';
import Loading from '../Loading/Loading';
import db from  '../../firebase/config';

const CarouserItemContainer = () => {
    
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 750, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 },
        { width: 1500, itemsToShow: 4 },
        { width: 2000, itemsToShow: 4 },
      ];
 
    useEffect(() => {
            setLoading(true);
            const productsCollection = collection( db,'products');
            getDocs(productsCollection)
            .then(resp => {
                
                const products = resp.docs.map(doc => 
                    ({
                        id: doc.id,
                        ...doc.data()
                    })
                );
      
                setProductList(products);
                setLoading(false);
              
            })
            .catch((error) =>console.log(error))
            .finally(()=> setLoading(false));

    }, []);


    if(loading){
         return (<div className="mt-5 container"><Loading text="Cargando productos recomendados..." /></div>);
    }

    if(productList.length === 0){
        return (
            <p>Uups!  No se encontraron productos para recomendar.</p>
        );
    }

    return (
        <div className='mt-5 container'>
        <h3>Productos recomendados</h3>
        <CarouserItems  breakPoints={breakPoints} >
         {productList.map((product)=> <CarouserItem product={product} key={product.id}/>)}
        </CarouserItems>
        </div>
     );
}

export default CarouserItemContainer;