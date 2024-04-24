import React from 'react';
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <div>
            <footer className="py-4 bg-dark text-white text-center">
                <Container>
                    <p>&copy; 2024 Ryan Cunningham Portfolio.</p>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;