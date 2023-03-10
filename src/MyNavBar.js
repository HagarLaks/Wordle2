import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function MyNavbar() {

  return (
    
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WORDLE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
      
    </>
  );

  
}
