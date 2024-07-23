import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './main.css';
import logo from './logo.png';

const CustomNavBar: React.FC = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'white' }}>
      <Container fluid>
        <Link className="navbar-brand-custom" href="/LandingPage" passHref>
          <Navbar.Brand>
            <Image src={logo} width="60" height="60" className="d-inline-block align-text-center" alt="Logo" />
            Locospace
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarNav" />
        
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
