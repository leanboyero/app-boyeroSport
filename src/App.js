import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import React from 'react';

const App = () => {

  return (
    <div className="App">
        <header id="header" className="fixed-top ">
          <NavBar fixed="top"/>
        </header>
    </div>

  );
}

export default App;
