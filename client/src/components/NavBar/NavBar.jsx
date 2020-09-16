import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar className="NavBar" bg="primary" variant="dark">
      <Navbar.Brand className="brand" href="/products">FavAuthors</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link id="products" className="link" href="/authors">
          Authors
        </Nav.Link>
        <Nav.Link id="new-product" className="link" href="/authors/new">
          New Author
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
