import { Link, useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import NotFoundItems from '../NotFoundItems/NotFoundItems';
import db from  '../../firebase/config';

const ItemListContainer = ({title='Ofertas'}) => {
    
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text,setText] = useState('');
    const {variable, id} = useParams();
 
    useEffect(() => {
            setLoading(true);
            const productsCollection = collection( db,'products');
            const q = variable ? query(productsCollection, where(variable, '==', id)) : productsCollection;
            getDocs(q)
            .then(resp => {
                
                setText(id ? id: title);
                
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
                    <ItemList productList={productList} isRemoveItems={false} /> 
                    </div>
        </>);
}

export default ItemListContainer