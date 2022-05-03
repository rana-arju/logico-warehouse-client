import { signOut } from 'firebase/auth';
import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  

    return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
    <Container>
    <LinkContainer to='/'>
        <img className="w-40 h-15 rounded-md mr-3 cursor-pointer" src="https://i.ibb.co/gj24c9g/logo.jpg" alt="site logo" />
    </LinkContainer>
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
    <LinkContainer to='/contact'>
        <Nav.Link>Contact Us</Nav.Link>
    </LinkContainer>
       </Nav>
     <div className="d-flex nav-login">
       {
         user ? <span className="d-flex"><Nav.Link onClick={logout}>Logout</Nav.Link>
         {
           user?.photoURL ? <img className="w-10 h-10 rounded-full" src={`${user?.photoURL}`}alt={`${user.displayName.split(" ")[0]}`} />
           : <img className="w-10 h-10 rounded-full" src= "https://i.ibb.co/kG6vXJx/default-avatar-placeholder-profile-icon-male-vector.jpg " alt={`${user.displayName}`} />
         }
         </span>
         :
         <LinkContainer to='/login'>
          <Nav.Link>Login/Register</Nav.Link>
        </LinkContainer>
       }
    
     </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;