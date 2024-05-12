import React from 'react';
import {Container} from "react-bootstrap";
import Skills from "../Skills/Skills";

const Hero = () => {
    return (
        <div>
            <section id="hero" className="py-3 text-white bg-dark">
                <Container className={'p-4'}>
                    <h2>Hi, I'm Ryan!</h2>
                    <p className={'lead'}>Full Stack Web Developer with a focus on
                         developing web & mobile applications with React & React Native.</p>
                    <Skills/>
                </Container>
            </section>
        </div>
    );
};

export default Hero;