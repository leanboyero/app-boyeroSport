import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const SliderHome = () => {
  return (
    <div className="row"><Carousel>
    <Carousel.Item interval={7000}>
     <Link to="/brand/nike">
       <img
        className="d-block w-100"
        src="/assents/images/home/nike_desktop.png"
        alt="nike_desktop" height="480px"
      />
      </Link> 
    </Carousel.Item>
    <Carousel.Item interval={7000}>
    <Link to="/brand/topper">
      <img
        className="d-block w-100"
        src="/assents/images/home/toppervrspeed_desktop.png"
        alt="Second slide"  height="480px"
      />
    </Link> 
    </Carousel.Item>
  </Carousel>
 </div>
  );
};

export default SliderHome;