import React, { Component } from 'react';
import Activity from './ActivityComponent/ActivityComponent';
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { USERDATA } from '../shared/userData.js';

class Suggest extends Component {
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

        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();


        this.setState(state => ({
            time: `${hours}:${minutes}`,
            location: state.userdata[1].location,
            name: state.userdata[1].name,
            activity: state.userdata[1].activity,
            shown: true
        }))
        event.preventDefault();
    }



    // getDate() {

    // }

    render() {
        return (
            <React.Fragment>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col xs="12" md="7" className="d-flex flex-column justify-content-center p-3">
                                <h3 className="display-4 mb-1">Suggestion</h3>
                                <p className="mb-4 lead">Randomly get paired with an activity and partner.</p>
                            </Col>
                            <Col xs="12" md="5" className="p-4">
                                <h3 className="mb-3">Suggestion</h3>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label>Date</Label>
                                        <Input name="date" type="date" className="form-control" placeholder="0" draggable="true" value={this.state.date} onChange={this.handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>People</Label>
                                        <Input type="number" className="form-control" placeholder="2" value={this.state.numOfPeople} onChange={this.handleChange} />
                                    </FormGroup>
                                    <Button type="submit" value="submit" className="btn mt-4 btn-block btn-outline p-2" onSubmit={this.handleSubmit}><b>Select</b></Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                {this.state.shown && <Activity date={this.state.date} time={this.state.time} activity={this.state.activity} location={this.state.location} name={this.state.name} />}
            </React.Fragment>


        )
    }
}

export default Suggest;