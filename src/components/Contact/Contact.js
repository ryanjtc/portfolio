import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Contact = () => {
    return (
        <div>
            <section id="contact" className="py-5">
                <Container>
                    <h2 className="text-center mb-4 display-5">Contact</h2>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Form className={'text-left'}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className={'mb-4'} controlId="formBasicName">
                                            <Form.Control type="text" placeholder="Enter your name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group controlId="formBasicMessage">
                                    <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                                </Form.Group>

                                <Button className={'mt-4'} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Contact;