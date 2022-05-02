import 'react-pagination-bar/dist/index.css';

import { Pagination } from 'react-pagination-bar';
import React from 'react';

const PaginationBar = ({currentPage, itemsPerPage, setCurrentPage, totalItems}) => {
  return (
    <Pagination
    initialPage={currentPage}
    itemsPerPage={itemsPerPage}
    onPageСhange={setCurrentPage}
    totalItems={totalItems}
    pageNeighbours={2}
    startLabel={'<<'}
    endLabel={'>>'}
    nextLabel={'>'}
    prevLabel={'<'}
    />
  );
}

export default PaginationBar;
