import React, {useEffect, useState} from 'react';
import { collection, getDocs } from 'firebase/firestore';

import CarouserBrand from '../CarouserBrand/CarouserBrand';
import CarouserItems from 'react-elastic-carousel';
import Loading from '../Loading/Loading';
import db from  '../../firebase/config';

const CarouserBrandContainer = () => {

    const [brandList, setBrandList] = useState([]);
    const [loading, setLoading] = useState(false);

    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 750, itemsToShow: 5 },
        { width: 1000, itemsToShow: 5 },
        { width: 1500, itemsToShow: 5 },
        { width: 2000, itemsToShow: 5 },
      ];

    useEffect(() => {
        setLoading(true);
        const brandsCollection = collection( db,'brands');
        getDocs(brandsCollection)
        .then(resp => {
            const brands = resp.docs.map(doc =>
                ({
                    id: doc.id,
                    ...doc.data()
                })
            );
            setBrandList(brands);
            setLoading(false);
        })
        .catch((error) =>console.log(error))
        .finally(()=> setLoading(false));

    }, []);

    if(loading){
        return (<div className="mt-5 container"><Loading text="Cargando marcas recomendadas..." /></div>);
   }

   if(brandList.length === 0){
       return (
           <p>Uups!  Error al mostrar el slider de marcas.</p>
       );
   }

  return (
    <div className='mt-5 container'>
        <div className='row'>
            <div className='col-12'>
              
                <CarouserItems  breakPoints={breakPoints}  pagination={false}>
                    {brandList.map(brand => (
                        <CarouserBrand key={brand.id} brand={brand} />
                    ))}
                    </CarouserItems>
                </div>
   </div>
    </div>
  )
}

export default CarouserBrandContainer;