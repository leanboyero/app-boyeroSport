import Item from '../Item/Item'
import React from 'react'

const ItemList = ({productList}) => {
  return (
    <>
        {productList.map((product)=>  <Item product={product} key={product.id}/>)}  
   </>
  )
}

export default ItemList