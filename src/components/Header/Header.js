import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import linkedin_image from "../../Images/Linkedin/LI-In-Bug.png";
import github_image from "../../Images/Github/github-mark.png";

const Header = () => {
    return (
        <div className={'sticky-top text-center'}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#hero">Ryan's Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#hero">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#links">Links</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <a href={'https://www.linkedin.com/in/ryan-cunningham-a26618143'} target="_blank" rel="noopener noreferrer">
                            <img src={linkedin_image} alt={'LinkedIn Logo'} className="img-fluid m-2" style={{maxWidth: 35, height: "auto"}} />
                        </a>
                        <a href={'https://github.com/ryanjtc'} target="_blank" rel="noopener noreferrer">
                            <img src={github_image} alt={'GitHub Logo'} className="img-fluid m-2" style={{maxWidth: 34, height: "auto"}} />
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;