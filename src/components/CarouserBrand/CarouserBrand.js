import { Link } from 'react-router-dom';
import React from 'react';

const CarouserBrand = ({brand}) => {
  const {key, image, name} = brand;
  
  return (
    <div><Link to={"/brand/"+key+""}>
         <img src={image} alt={name} width="80%" />
    </Link>
  </div>
  );
};

export default CarouserBrand;