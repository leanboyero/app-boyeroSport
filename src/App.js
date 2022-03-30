import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import Nosotros from './components/Nosotros/Nosotros';
import React from 'react';

const App = () => {
  
  const sampleLocation = useLocation();

  return (
    <div className="App">
        <header id="header" className="fixed-top ">
          <NavBar fixed="top"/>
        </header>

        <section id={sampleLocation.pathname==='/' ? 'home':'page'} className="align-items-center" >
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ofertas" element={<ItemListContainer title="Ofertas"/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/discipline/:disciplineId" element={<ItemListContainer />} />
        <Route path="/brand/:brandId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      </section>
      <Footer/>
  </div>

  );
}

export default App;
