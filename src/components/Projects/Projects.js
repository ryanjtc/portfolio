import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import HRGO_IMG from '../../Images/ProjectPhotos/HRGO.png';
import quizBuilder_IMG from '../../Images/ProjectPhotos/quiz-builder.png';
import reactTODO_IMG from '../../Images/ProjectPhotos/react-todo.png';
import letterleClone_IMG from '../../Images/ProjectPhotos/letterleClone.png';


const Projects = () => {
    const xs_num = 12;
    const sm_num = 6;
    const md_num = 4;
    const lg_num = 4;
    const xl_num = 4;

    return (
        <div>
            <section id="projects" className="py-5">
                <Container>
                    <h1 className="text-center mb-4 display-4">Projects</h1>
                    <Row>
                    <Col xs={xs_num} sm={sm_num} md={md_num} lg={lg_num} xl={xl_num} className="mb-4">
                            <Card className={'card shadow-lg'}>
                                <Card.Img src={letterleClone_IMG}/>
                                <Card.Body>
                                    <Card.Title>LetterLe Clone</Card.Title>
                                    <Card.Text>Guess the randomly generated letter and get a score of how many attempts were taken.</Card.Text>
                                    <ul className="styled-list">
                                        <li>React</li>
                                        <li>CSS</li>
                                    </ul>
                                    <Button style={{backgroundColor: "black", color: "white"}} className={'m-2'} href='https://github.com/ryanjtc/letterle-clone' target='_blank' rel="noopener noreferrer">GitHub</Button>
                                    <Button style={{backgroundColor: "blue", color: "white"}} className={'m-2'} href='https://ryanjtc.github.io/letterle-clone/' target='_blank' rel="noopener noreferrer">Demo</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={xs_num} sm={sm_num} md={md_num} lg={lg_num} xl={xl_num} className="mb-4">
                            <Card className={'card shadow-lg'}>
                                <Card.Img src={reactTODO_IMG}/>
                                <Card.Body>
                                    <Card.Title>Task Manager</Card.Title>
                                    <Card.Text>Create a list of tasks and mark them as they are completed.</Card.Text>
                                    <ul className="styled-list">
                                        <li>React</li>
                                        <li>SCSS</li>
                                    </ul>
                                    <Button style={{backgroundColor: "black", color: "white"}} className={'m-2'} href='https://github.com/ryanjtc/react-todo' target='_blank' rel="noopener noreferrer">GitHub</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={xs_num} sm={sm_num} md={md_num} lg={lg_num} xl={xl_num} className="mb-4">
                            <Card className={'card shadow-lg'}>
                                <Card.Img src={quizBuilder_IMG}/>
                                <Card.Body>
                                    <Card.Title>Quiz Builder</Card.Title>
                                    <Card.Text>Create custom quizzes and share them with your friends to play.</Card.Text>
                                    <ul className="styled-list">
                                        <li>React</li>
                                        <li>SCSS</li>
                                    </ul>
                                    <Button style={{backgroundColor: "black", color: "white"}} className={'m-2'} href='https://github.com/ryanjtc/quiz-builder' target='_blank' rel="noopener noreferrer">GitHub</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={xs_num} sm={sm_num} md={md_num} lg={lg_num} xl={xl_num} className="mb-4">
                            <Card className={'card shadow-lg'}>
                                <Card.Img src={HRGO_IMG}/>
                                <Card.Body>
                                    <Card.Title>HR Dashboard</Card.Title>
                                    <Card.Text>A way for HR Admins to keep track of employee information.</Card.Text>
                                    <ul className="styled-list">
                                        <li>React</li>
                                        <li>SCSS</li>
                                    </ul>
                                    <Button style={{backgroundColor: "black", color: "white"}} className={'m-2'} href='https://github.com/ryanjtc/hrgo' target='_blank' rel="noopener noreferrer">GitHub</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Projects;