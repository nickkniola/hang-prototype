import React, { Component } from 'react';
import Activity from './ActivityComponent/ActivityComponent';
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Pairing extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col className="col-md-7 d-flex flex-column justify-content-center p-3">
                                <h3 className="display-4 mb-1">Pairing</h3>
                                <p className="mb-4 lead">Select your activity and availability to get paired.</p>
                            </Col>
                            <Col className="col-md-5 p-4">
                                <h3 className="mb-3">Pairing</h3>
                                <Form>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label>Date</Label>
                                                <Input type="date" className="form-control" placeholder="0" draggable="true" />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label>Time</Label>
                                                <Input type="time" className="form-control" placeholder="0" draggable="true" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="exampleSelect">Activity</Label>
                                        <Input type="select" name="activity" id="exampleSelect">
                                            <option>Sports</option>
                                            <option>Movie</option>
                                            <option>Food</option>
                                            <option>Museum</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>People</Label>
                                        <Input type="number" className="form-control" placeholder="2" />
                                    </FormGroup>
                                    <Button type="submit" className="btn mt-4 btn-block btn-outline p-2"><b>Select</b></Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Activity />
            </React.Fragment>
        );
    }
}

export default Pairing;