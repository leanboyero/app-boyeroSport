import { Link, useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading';
import NotFoundItems from '../NotFoundItems/NotFoundItems';
import { getProducts } from '../../mocks/fakeApi';

const ItemListContainer = ({title='Ofertas'}) => {
    
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [text,setText] = useState('');
    const {categoryId, disciplineId, brandId} = useParams();
 
    useEffect(() => {
            setLoading(true)
            getProducts
            .then((response) => {
                if (categoryId){
                    setText(categoryId);
                    setProductList(response.filter(product => product.category === categoryId));
                }else {
                    if (disciplineId){
                        setText(disciplineId);
                         setProductList(response.filter(product => product.discipline === disciplineId));
                   }else {
                       if(brandId){
                        setText(brandId);
                        setProductList(response.filter(product => product.brand === brandId));
                       }else{
                        setText(title);
                        setProductList(response);
                       }

                  }
               }

            })
            .catch((error) =>console.log(error))
            .finally(()=> setLoading(false))

    }, [categoryId, disciplineId, brandId]);

    return (
        <> 
             {loading ?  <div className="row container"><Loading text="Cargando productos..." /></div>: 
                (<>{productList.length > 0 ? <div className="section-header" style={{background: "url('/assents/images/home/disciplina_desktop_2.png')center center no-repeat",backgroundSize: 'cover'}}>
                                                <h1><Link to={"/"} className="icon-back"></Link>{text}</h1>
                                           </div>
                    : ''}
                        <div className="row container">
                        <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{text}</li>
                       </ol>
                      </nav>
                   {productList.length > 0 ?   <ItemList productList={productList} /> 
                    : <NotFoundItems text="Uups!  No se encontraron productos con la referencia seleccionada."/>}
                    </div>
                </>)
             }
        </>
   
    );
}

export default ItemListContainer