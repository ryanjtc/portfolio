import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";


const Header = () => {
    return (
        <div className={'sticky-top text-center'}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#hero">ryanjtc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#hero">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#links">Links</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;