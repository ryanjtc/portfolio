import React from 'react';
import {Container} from "react-bootstrap";

const Skills = () => {
    return (
        <div className={'text-black bg-light'}>
            <section id={'skills'}>
                <Container className={'p-5'}>
                    <h1>Languages</h1>
                    <p className={'lead'}>
                        Primarily focused on the following developer tools:
                    </p>
                    <ul className="styled-list">
                        <li>React JS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                        <hr/>
                        <p className={'lead'}>Database Tools:</p>
                        <li>SQL</li>
                        <li>Firebase</li>
                        <hr/>
                        <p className={'lead'}>Systems:</p>
                        <li>MacOS</li>
                        <li>Windows</li>
                        <li>Linux Virtual Machines</li>
                    </ul>
                </Container>
            </section>
        </div>
    );
};

export default Skills;