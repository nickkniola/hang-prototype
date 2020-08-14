import React, { Component } from 'react';
import Activity from './ActivityComponent/ActivityComponent';
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { USERDATA } from '../shared/userData.js';

class Pairing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            activity: '',
            numOfPeople: 2,
            location: '',
            name: '',
            userdata: USERDATA,
            shown: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.setState(state => ({
            location: state.userdata[0].location,
            name: state.userdata[0].name,
            shown: true
        }))
        event.preventDefault();
    }

    


    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col xs="12" md="7" className="d-flex flex-column justify-content-center p-3">
                                <h3 className="display-4 mb-1">Pairing</h3>
                                <p className="mb-4 lead">Select your activity and availability to get paired.</p>
                            </Col>
                            <Col xs="12" md="5" className="p-4">
                                <h3 className="mb-3">Pairing </h3>
                                <Form onSubmit={this.handleSubmit}>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label>Date</Label>
                                                <Input name="date" type="date" className="form-control" placeholder="0" draggable="true" value={this.state.date} onChange={this.handleChange} />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label>Time</Label>
                                                <Input name="time" type="time" className="form-control" placeholder="0" draggable="true" value={this.state.time} onChange={this.handleChange} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label for="activity">Activity</Label>
                                        <Input name="activity" type="select" className="form-control" id="activity" value={this.state.activity} onChange={this.handleChange}>
                                            <option value="Sports">Sports</option>
                                            <option value="Movie">Movie</option>
                                            <option value="Food">Food</option>
                                            <option value="Museum">Museum</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>People</Label>
                                        <Input name="numOfPeople" type="number" className="form-control" placeholder="2" value={this.state.numOfPeople} onChange={this.handleChange} />
                                    </FormGroup>
                                    <Button type="submit" value="submit" className="btn mt-4 btn-block btn-outline p-2" onSubmit={this.handleSubmit}><b>Select</b></Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>



                {this.state.shown && <Activity date={this.state.date} time={this.state.time} activity={this.state.activity} location={this.state.location} name={this.state.name} />}

            </React.Fragment>
        );
    }
}



export default Pairing;