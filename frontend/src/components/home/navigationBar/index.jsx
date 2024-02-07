import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, FormControl, InputGroup } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import './index.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" variant="light" bg={scrolled ? "light" : "transparent"} className={scrolled ? "scrolled" : ""} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-center align-items-center flex-grow-1 mb-2 mb-lg-0">
            <Nav.Link href="#features" className='nav-middle-content'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='nav-middle-content'>Travel Guides</Nav.Link>
            <Nav.Link href="#pricing" className='nav-middle-content'>Hotels</Nav.Link>
            <Nav.Link href="#pricing" className='nav-middle-content'>About Us</Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center">
            <Button  className='me-4 login-btn'>Login</Button>
            <Button  className="signin-btn">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
