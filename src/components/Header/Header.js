import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
    <Navbar bg="primary" variant="dark" expand="lg">
    <Container> 
    <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" navbarScroll
      >
    <LinkContainer to='/'>
        <Nav.Link>Home</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/myproduct'>
        <Nav.Link>My Product</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/manageInventory'>
        <Nav.Link>Manage Inventory</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/blog'>
        <Nav.Link>Blog</Nav.Link>
    </LinkContainer>
       </Nav>
     <div className="d-flex nav-login">
        <LinkContainer to='/login'>
          <Nav.Link>Login/Register</Nav.Link>
        </LinkContainer>
        <Nav.Link>Logout</Nav.Link>
        <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
     </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;