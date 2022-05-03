import './Home.css';

import CarouserBrandContainer from '../CarouserBrandContainer/CarouserBrandContainer';
import CarouserItemContainer  from '../CarouserItemContainer/CarouserItemContainer';
import { Link } from 'react-router-dom';
import React from 'react';
import ShortCuts from './ShortCuts/ShortCuts';
import SliderHome from './SliderHome/SliderHome';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Home = (props) => {


  return (
  <>
    <SliderHome/>
    <div className="row container col-12 px-2">
      <CarouserItemContainer />
      <Link to="/brand/puma" class="row container"><img src="https://ar.puma.com/media/contentmanager/content/22SS_Ecom_MF_TS_Football_Instinct-Pack_Q1_FullBleedHero-Large_Desktop_1440x500px_Player.jpg" alt="Puma" width="100%"/></Link>
   </div>
   <CarouserBrandContainer />
   <ShortCuts/>
   <VideoPlayer src="/assents/video/PUMA.mp4"/> 
 </>
  )
};

export default Home;