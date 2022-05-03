import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import Nosotros from './components/Nosotros/Nosotros';
import OrdersContainer from './components/OrdersContainer/OrdersContainer';
import React from 'react';
import ResetPassword from './components/ResetPassword/ResetPassword';
import ScrollToTop from 'react-scroll-to-top';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import { UserProvider } from './context/UserContext';
import WishListContainer from './components/WishListContainer/WishListContainer';
import { WishListProvider } from './context/WishListContext';

const App = () => {
  
  const sampleLocation = useLocation();
  
  // scroll to top
  window.scrollTo(0, 0);

  return (
    <UserProvider>
    <CartProvider>
    <WishListProvider>
    <div className="App">
        <ScrollToTop smooth />
        <header id="header" className="fixed-top ">
          <NavBar fixed="top"/>
        </header>
        <section id={sampleLocation.pathname==='/' ? 'home':'page'} className="align-items-center">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ofertas" element={<ItemListContainer title="Ofertas"/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/:variable/:id" element={<ItemListContainer isCarrucel={false} />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckoutContainer/>} />
        <Route path="/orders" element={<OrdersContainer/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
        <Route path="/wishList" element={<WishListContainer/>} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      </section>
      <Footer/>
  </div>
  </WishListProvider>
  </CartProvider>
</UserProvider>
  );
}

export default App;
