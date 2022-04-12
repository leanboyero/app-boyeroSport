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
    const {variable, id} = useParams();
 
    useEffect(() => {
            setLoading(true)
            getProducts
            .then((response) => {
                setText(id);
                switch (variable) {
                    case 'category':           
                        setProductList(response.filter(product => product.category === id));
                        break;
                    case 'discipline':
                        setProductList(response.filter(product => product.discipline === id));
                        break;
                    case 'brand':
                        setProductList(response.filter(product => product.brand === id));
                        break;
                    default:
                        setText(title);
                        setProductList(response);
                  }

            })
            .catch((error) =>console.log(error))
            .finally(()=> setLoading(false))

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