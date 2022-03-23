import Item from '../Item/Item'
import React from 'react'

const ItemList = ({productList}) => {
  return (
    <div className='row'>
        {productList.map((product)=>  <Item product={product} key={product.id}/>)}     
    </div>
  )
}

export default ItemList