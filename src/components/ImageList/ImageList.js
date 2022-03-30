import './ImageList.css';

import { Carousel } from 'react-carousel-minimal';
import React from 'react';

const ImageList = ({images}) => {

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  
  return (
    <Carousel
             data={images}
             time={0}
             width="100%"
             height="500px"
             captionStyle={captionStyle}
             radius="10px"
             slideNumber={false}
             slideNumberStyle={slideNumberStyle}
             captionPosition="bottom"
             automatic={false}
             dots={true}
             pauseIconColor="white"
             pauseIconSize="40px"
             slideBackgroundColor="white"
             slideImageFit="cover"
             thumbnails={true}
             thumbnailWidth="100px"
             style={{
               textAlign: "center",
               margin: "40px auto",
             }}
           />
  )
};

export default ImageList;