import './ShortCuts.css';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const ShortCuts = () => {
  return (
    <div className="row container figures">
    <Card className="col-md-3 col-sm-4 col-12 figure">
    <Link to="/category/hombre-indumentaria">
      <Card.Img variant="top" src="/assents/images/home/indumentaria-hombres.jpg" />
      <span className="home-img-block">HOMBRE</span>
      <div className="overlay"></div>
      </Link>
   </Card>
   <Card className="col-md-3 col-sm-4 col-12 figure">
   <Link to="/category/mujer-indumentaria">
      <Card.Img variant="top" src="/assents/images/home/indumentaria-mujeres.jpg" />   
      <span className="home-img-block">MUJER</span>
      <div className="overlay"></div>
      </Link>
   </Card>
   <Card className="col-md-3 col-sm-4 col-12 figure">
   <Link to="/discipline/running">
      <Card.Img variant="top" src="/assents/images/home/running.jpg" />
      <span className="home-img-block">RUNNING</span>
      <div className="overlay"></div>
      </Link>
   </Card>
   <Card className="col-md-3 col-sm-4 col-12 figure">
    <Link to="/discipline/fútbol">
      <Card.Img variant="top" src="/assents/images/home/futbol.jpg" />
      <span className="home-img-block">FÚTBOL</span>
      <div className="overlay"></div>
      </Link>
   </Card>
  </div>
  );
}

export default ShortCuts;