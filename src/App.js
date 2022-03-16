import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import React from 'react';

const App = () => {

  return (
    <div className="App">
        <header id="header" className="fixed-top ">
          <NavBar fixed="top"/>
        </header>
        <section id="home" className="d-flex align-items-center">
          <ItemListContainer greeting="Bienvenido a Boyero Sport" />
        </section>
        <main id="main">
        </main>
    </div>

  );
}

export default App;
