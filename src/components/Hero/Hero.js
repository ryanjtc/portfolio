import React from 'react';
import {Container} from "react-bootstrap";
import Skills from "../Skills/Skills";

const Hero = () => {
    return (
        <div>
            <section id="hero" className="py-5 text-white bg-dark">
                <Container className={'p-5'}>
                    <h2>Hi, I'm Ryan!</h2>
                    <p className={'lead'}>Full Stack Developer with a strong focus on <br/>
                        building websites & internet applications with React!</p>
                    <Skills/>
                </Container>
            </section>
        </div>
    );
};

export default Hero;