import React, { Component } from 'react';
import Activity from './ActivityComponent/ActivityComponent';
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from'reactstrap';

class Suggest extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col className="col-md-7 d-flex flex-column justify-content-center p-3">
                                <h3 className="display-4 mb-1">Random Suggestion</h3>
                                <p className="mb-4 lead">Randomly get paired with an activity and partner.</p>
                            </Col>
                            <Col className="col-md-5 p-4">
                                <h3 className="mb-3">Suggestion</h3>
                                <Form>
                                    <FormGroup> 
                                        <Label>Time</Label> 
                                        <Input type="time" className="form-control" placeholder="13" draggable="true" /> 
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


        )
    }
}

export default Suggest;