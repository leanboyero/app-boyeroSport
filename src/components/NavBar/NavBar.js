import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

import * as Icon from 'react-bootstrap-icons';

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import React, {useContext}  from 'react';

import Cartwidget from '../Cartwidget/Cartwidget';
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import Wishwidget from '../Wishwidget/Wishwidget';
import logo from '../../logo.png';

const NavBar = () =>{

   const {user, signOutUser} = useContext(UserContext);

   const iconGuest = user ? <><Icon.PersonCircle size={25}/> {user.name}</> : '';

   const signOutHandle = () => {
      signOutUser();
   }


  return(
<Navbar collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"><img src={logo} width="100%" height="44" className="align-top" alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Hombre"> 
        <NavDropdown.Item as={Link} to="/category/hombre-calzado">Calzado</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/hombre-indumentaria">Indumentaria</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/hombre-accesorios">Accesorios</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Mujer"> 
        <NavDropdown.Item as={Link} to="/category/mujer-calzado">Calzado</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/mujer-indumentaria">Indumentaria</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/mujer-accesorios">Accesorios</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Niños"> 
        <NavDropdown.Item as={Link} to="/category/niños-calzado">Calzado</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/niños-indumentaria">Indumentaria</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/category/niños-accesorios">Accesorios</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Disciplina"> 
        <NavDropdown.Item as={Link} to="/discipline/running">Running</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/discipline/fútbol">Fútbol</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/discipline/training">Training</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/discipline/rugby">Rugby</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/discipline/basquet">Básquet</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/discipline/tenis">Tenis</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Marcas">
      <NavDropdown.Item as={Link} to="/brand/adidas">Adidas</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/brand/nike">Nike</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/brand/puma">Puma</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/brand/topper">Topper</NavDropdown.Item>
      <NavDropdown.Item as={Link} to="/brand/under armour">Under Armour</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
      <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
    </Nav>
    <Nav>
       {user ? (
        <NavDropdown title={iconGuest}>
         <NavDropdown.Item as={Link} to="/orders" >Mis ordenes</NavDropdown.Item>
         <NavDropdown.Item as={Link} to="/signin" onClick={signOutHandle} >Cerrar sesión</NavDropdown.Item>
         </NavDropdown>)
             : (<Link as={Link}  to="/signin" className='buttonLogin'>Iniciar sesión</Link>) } 
    </Nav>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/wishList">
        <Wishwidget/>
     </Nav.Link>
      <Nav.Link as={Link} to="/cart">
      <Cartwidget/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default NavBar;