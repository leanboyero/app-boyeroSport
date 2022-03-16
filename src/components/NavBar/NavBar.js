import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

import Cartwidget from '../Cartwidget/Cartwidget';
import logo from '../../logo.png';

const NavBar = () =>{
    return(
<Navbar collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src={logo} width="100%" height="55" className="align-top" alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Hombre"> 
        <NavDropdown.Item href="#hombre/calzado">Calzado</NavDropdown.Item>
        <NavDropdown.Item href="#hombre/indumentaria">Indumentaria</NavDropdown.Item>
        <NavDropdown.Item href="#hombre/accesorios">Accesorios</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Mujer"> 
        <NavDropdown.Item href="#mujer/calzado">Calzado</NavDropdown.Item>
        <NavDropdown.Item href="#mujer/indumentaria">Indumentaria</NavDropdown.Item>
        <NavDropdown.Item href="#mujer/accesorios">Accesorios</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Niños"> 
        <NavDropdown.Item href="#niños/calzado">Calzado</NavDropdown.Item>
        <NavDropdown.Item href="#niños/indumentaria">Indumentaria</NavDropdown.Item>
        <NavDropdown.Item href="#niños/accesorios">Accesorios</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Disciplina"> 
        <NavDropdown.Item href="#disciplina/running">Running</NavDropdown.Item>
        <NavDropdown.Item href="#disciplina/futbol">Fútbol</NavDropdown.Item>
        <NavDropdown.Item href="#disciplina/training">Training</NavDropdown.Item>
        <NavDropdown.Item href="#disciplina/rugby">Rugby</NavDropdown.Item>
        <NavDropdown.Item href="#disciplina/basquet">Básquet</NavDropdown.Item>
        <NavDropdown.Item href="#disciplina/training">Tenis</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#marcas">Marcas</Nav.Link>
      <Nav.Link href="#ofertas">Ofertas</Nav.Link>
      <Nav.Link href="#contacto">Contacto</Nav.Link>
    </Nav>
    <Nav>
    </Nav>
    <Nav className="me-auto">
      <Nav.Link href="#login" className='buttonLogin'>Iniciar sesión</Nav.Link>
      </Nav>
      <Nav className="me-auto">
      <Nav.Link href="#carrito">
      <Cartwidget/>
      </Nav.Link>
      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default NavBar;