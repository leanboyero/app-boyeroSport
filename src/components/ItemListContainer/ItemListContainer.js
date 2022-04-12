import { Link, useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import NotFoundItems from '../NotFoundItems/NotFoundItems';
// import { getProducts } from '../../mocks/data';
import {db} from  '../../firebase/config';

const ItemListContainer = ({title='Ofertas'}) => {
    
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text,setText] = useState('');
    const {variable, id} = useParams();
 
    useEffect(() => {
            setLoading(true);

            // 1. armar la referencia a la coleccion que quiero consultar
            const productsCollection = collection( db,'products');
            // 2. armar la query
            const q = variable ? query(productsCollection, where(variable, '==', id)) : productsCollection;
            
            //3. llamar (asincronamente) a la coleccion
            getDocs(q)
            .then(resp => {
                
                setText(id ? id: title);
                
                //4. obtener los datos de la coleccion
                const products = resp.docs.map(doc => 
                    ({
                        id: doc.id,
                        ...doc.data()
                    })
                );
      
                // 5. actualizar el estado con el array de objetos   
                setProductList(products);
                setLoading(false);
              
            })
            .catch((error) =>console.log(error))
            .finally(()=> setLoading(false));

    }, [variable, id, title]);


    if(loading){
         return (<div className="row container"><Loading text="Cargando productos..." /></div>);
    }

    if(productList.length === 0){
        return (
        <div className="row container">
            <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/"}>Inicio</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{text}</li>
                       </ol>
                     </nav>
            <NotFoundItems text="Uups!  No se encontraron productos con la referencia seleccionada." />
        </div>);
    }

    return (
       <> <div className="section-header" style={{background: "url('/assents/images/home/disciplina_desktop_2.png')center center no-repeat",backgroundSize: 'cover'}}>
            <h1><Link to={"/"} className="icon-back"></Link>{text}</h1>
          </div>
            <div className="row container">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/"}>Inicio</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{text}</li>
                       </ol>
                     </nav>
                    <ItemList productList={productList} /> 
                    </div>
        </>);
}

export default ItemListContainer