import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
  <Navbar style={{lineHeight:'50px'}} bg="success" expand="lg">
  <Navbar.Brand href="#home"> <span style={{color:'white'}} >Finest-Foods</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
  <Nav.Link> <Link style={{color:'white'}} to="/home">Home</Link> </Nav.Link>
  <Nav.Link>  <Link style={{color:'white'}} to="/orders">Orders</Link></Nav.Link>
  <Nav.Link>  <Link style={{color:'white'}} to="/admin">Admin</Link></Nav.Link>
  <Nav.Link>  <Link style={{color:'white'}} to="/deals">Deals</Link></Nav.Link>
  <Nav.Link>  <Link style={{color:'white'}} to="/login">Login</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;