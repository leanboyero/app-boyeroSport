import React, {useState} from 'react';

import Item from '../Item/Item';
import PaginationBar from '../PaginationBar/PaginationBar';

const ItemList = ({productList, isRemoveItems}) => {

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
        {productList
         .slice((currentPage - 1) * 12, currentPage * 12)
        .map((product)=> 
         <Item product={product} key={product.id} isRemoveItem={isRemoveItems}/>)
         }  
        <PaginationBar itemsPerPage={12} currentPage={currentPage} setCurrentPage={(pageNumber) => setCurrentPage(pageNumber)} totalItems={productList.length}/>
   </>
  )
}

export default ItemList