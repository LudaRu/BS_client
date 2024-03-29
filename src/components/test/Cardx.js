import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import {Container, Row, Col} from "react-bootstrap";

class Cardx extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><>
                        <Card bg="primary" text="white" >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>

                        <Card bg="secondary" text="white" >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Secondary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>

                        <Card bg="success" text="white" >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Success Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>

                        <Card bg="danger" text="white" >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Danger Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>

                        <Card bg="warning" text="white" >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Warning Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>

                        <Card bg="info" text="white" >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Info Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>

                        <Card bg="dark" text="white" >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Dark Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>

                        <Card bg="light" >
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                                <Card.Title>Light Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br/>
                    </>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Cardx;
