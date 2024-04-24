import React from 'react';
import {Container} from "react-bootstrap";
import linkedin_image from '../../Images/Linkedin/LI-In-Bug.png';
import github_image from '../../Images/Github/github-mark-white.png';


const Links = () => {
    return (
        <div>
            <section id="links" className="py-4 text-center text-white bg-dark">
                <Container className={'p-2'}>
                    <h2 className={'mb-2 display-4'}>Find me on</h2>
                    <p className={'lead'} style={{color: "lightgray"}}>Opens in a new tab</p>
                    <a href={'https://www.linkedin.com/in/ryan-cunningham-a26618143'} target="_blank" rel="noopener noreferrer">
                        <img src={linkedin_image} alt={'LinkedIn Logo'} className="img-fluid m-3" style={{maxWidth: 55, height: "auto"}} />
                    </a>
                    <a href={'https://github.com/ryanjtc'} target="_blank" rel="noopener noreferrer">
                        <img src={github_image} alt={'GitHub Logo'} className="img-fluid m-3" style={{maxWidth: 50, height: "auto"}} />
                    </a>
                </Container>
            </section>
        </div>
    );
};

export default Links;