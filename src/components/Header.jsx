import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header({titulo}) {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light" class="fs-1 text-center">
        <Container>
          <Navbar.Brand href="#">{titulo} </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header
