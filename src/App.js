import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import Nosotros from './components/Nosotros/Nosotros';
import React from 'react';

//import { addDoc, collection } from 'firebase/firestore';

//import {data} from './data/data';
//import {db} from  './firebase/config'

const App = () => {
  
  const sampleLocation = useLocation();

  /*const uploadProducts = () => {
    data.forEach(async product => {
     await addDoc(collection(db, "products"), product);
    });
  }*/

  return (
    <CartProvider>
    <div className="App">
        <header id="header" className="fixed-top ">
          <NavBar fixed="top"/>
          {/* <button className="btn btn-primary" onClick={uploadProducts}>Insertar productos</button> */}
        </header>
        <section id={sampleLocation.pathname==='/' ? 'home':'page'} className="align-items-center">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ofertas" element={<ItemListContainer title="Ofertas"/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/:variable/:id" element={<ItemListContainer/>} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      </section>
      <Footer/>
  </div>
  </CartProvider>
  );
}

export default App;
