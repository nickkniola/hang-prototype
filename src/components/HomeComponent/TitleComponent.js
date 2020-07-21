import React, { Component } from 'react';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../App.css';


function Title() {
    return (
        <div>
            <Jumbotron>
            <Container className="pt-1 my-4">
                <Row className="my-3">
                    <Col>
                        <h1>Hang</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="home-description lead text-justify">Pair up with people in your location based on your common interests in a variety of activities. The only app which makes plans for you!</p>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col>
                        <Button color="primary">
                            Learn More
                        </Button>
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
            
        </div>
    );
}

export default Title;