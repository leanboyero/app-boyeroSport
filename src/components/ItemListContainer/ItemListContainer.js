import './ItemListContainer.css';

import React, {useEffect, useState} from 'react';

import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
    const {title} = props;
    
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    const products = [
        {id: '1',  name: 'Zapatillas Pony City Wings Ox', price: '$6.999,00', image: 'assents/images/01.jpg'},
        {id: '2',  name: 'Camiseta Nike Striped Disivion III Kids', price: '$2.499,00', image: 'assents/images/02.jpg'},
        {id: '3',  name: 'Camiseta Nike Striped Disivion III Kids', price: '$2.499,00', image: 'assents/images/03.jpg'},
        {id: '4',  name: 'Gorra Under Armour Estudiantes de la Plata', price: '$2.749,00', image: 'assents/images/04.jpg'},
        {id: '5',  name: 'Zapatillas Pony Turbulence Ox', price: '$6.999,0', image: 'assents/images/05.jpg'},
        {id: '6',  name: 'Short Kappa Aldosivi Player 2019/2020', price: '$2.799,00', image: 'assents/images/06.jpg'},
        {id: '7',  name: 'Camiseta y Short Adidas River Plate Home 2020/2021 Baby', price: '$7.999,00', image: 'assents/images/07.jpg'},
        {id: '8',  name: 'Zapatillas Kappa Giorgia', price: '$6.999,00', image: 'assents/images/08.jpg'},
        {id: '9',  name: 'Pantalón Nike Neymar Jr', price: '$4.999,00', image: 'assents/images/09.jpg'}
    ];

    const getProducts = new Promise ((resolve, reject) => {
        let condition = true;
        if (condition){
            setTimeout(()=>{
                    resolve(products);
            },2000);
        }else{
            reject('No se obtuvieron los productos.');
        }

    });
        console.log(getProducts);
    
        useEffect(() => {
            setLoading(true);
            getProducts()
            .then((response) => setProductList(response))
            .catch((error) =>console.log(error))
            .finally(()=> setLoading(false))

        }, []);

        console.log(productList);

    return (
    <div className="container">
        <div className="row">
        <h1>{title}</h1> 
        </div>
       {loading ?  <p>Cargando productos...</p>: <ItemList productList={productList} />   }
    </div>
    );
}

export default ItemListContainer