import React from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const Projects = () => {
    const xs_num = 12;
    const sm_num = 6;
    const md_num = 4;
    const lg_num = 4;
    const xl_num = 4;
    const image_link = 'https://picsum.photos/800';

    return (
        <div>
            <section id="projects" className="py-5">
                <Container>
                    <h1 className="text-center mb-4 display-6">Projects</h1>
                    <Row>
                        <Col xs={xs_num} sm={sm_num} md={md_num} lg={lg_num} xl={xl_num} className="mb-4">
                            <Card>
                                <Card.Img src={image_link}/>
                                <Card.Body>
                                    <Card.Title>Quiz Builder</Card.Title>
                                    <Card.Text>Create custom quizzes and share it with your friends.</Card.Text>
                                    <Button>Demo</Button>
                                    <Button style={{backgroundColor: "black", color: "white"}} className={'m-2'}>GitHub</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={xs_num} sm={sm_num} md={md_num} lg={lg_num} xl={xl_num} className="mb-4">
                            <Card>
                                <Card.Img src={image_link}/>
                                <Card.Body>
                                    <Card.Title>Task Manager</Card.Title>
                                    <Card.Text>Create a list of tasks and mark them as they are completed.</Card.Text>
                                    <Button>Demo</Button>
                                    <Button style={{backgroundColor: "black", color: "white"}} className={'m-2'}>GitHub</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={xs_num} sm={sm_num} md={md_num} lg={lg_num} xl={xl_num} className="mb-4">
                            <Card>
                                <Card.Img src={image_link}/>
                                <Card.Body>
                                    <Card.Title>HR Dashboard</Card.Title>
                                    <Card.Text>A way for HR Admins to keep track of employee information.</Card.Text>
                                    <Button>Demo</Button>
                                    <Button style={{backgroundColor: "black", color: "white"}} className={'m-2'}>GitHub</Button>
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