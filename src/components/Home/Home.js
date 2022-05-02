import './Home.css';

import { Card, Carousel } from 'react-bootstrap';

import CarouserBrandContainer from '../CarouserBrandContainer/CarouserBrandContainer';
import CarouserItemContainer  from '../CarouserItemContainer/CarouserItemContainer';
import { Link } from 'react-router-dom';
import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Home = (props) => {


  return (
    <><div  className="row"><Carousel>
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
  <CarouserItemContainer />
  <Link to="/brand/puma"><img src="https://ar.puma.com/media/contentmanager/content/22SS_Ecom_MF_TS_Football_Instinct-Pack_Q1_FullBleedHero-Large_Desktop_1440x500px_Player.jpg" alt="Puma" width="100%"/></Link>
  <CarouserBrandContainer />
  <div className="row container col-12 px-2">
  <div className="row figures col-12 px-2">
  <Card className="col-md-3 col-sm-4 col-12 figure">
  <Link to="/category/hombre-indumentaria">
    <Card.Img variant="top" src="/assents/images/home/indumentaria-hombres.jpg" />
    <span className="home-img-block">HOMBRE</span>
    </Link>
 </Card>
 <Card className="col-md-3 col-sm-4 col-12 figure">
 <Link to="/category/mujer-indumentaria">
    <Card.Img variant="top" src="/assents/images/home/indumentaria-mujeres.jpg" />
    <span className="home-img-block">MUJER</span>
    </Link>
 </Card>
 <Card className="col-md-3 col-sm-4 col-12 figure">
 <Link to="/discipline/running">
    <Card.Img variant="top" src="/assents/images/home/running.jpg" />
    <span className="home-img-block">RUNNING</span>
    </Link>
 </Card>
 <Card className="col-md-3 col-sm-4 col-12 figure">
  <Link to="/discipline/fútbol">
    <Card.Img variant="top" src="/assents/images/home/futbol.jpg" />
    <span className="home-img-block">FÚTBOL</span>
    </Link>
 </Card>
   
</div>
</div>
<VideoPlayer src="/assents/video/PUMA.mp4"/> 
</>
  )
};

export default Home;