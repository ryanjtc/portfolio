import React from 'react';
import {Container} from "react-bootstrap";

const Hero = () => {
    return (
        <div>
            <section id="hero" className="py-5 text-white bg-dark">
                <Container className={'p-5'}>
                    <h2>Ryan James</h2>
                    <p>Frontend Web Developer with a strong focus on React!</p>
                </Container>
            </section>
        </div>
    );
};

export default Hero;