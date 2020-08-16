import React, { useState } from 'react';
import Activity from './ActivityComponent/ActivityComponent';
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { USERDATA } from '../shared/userData.js';
import { LOCATIONDATA } from '../shared/locationData.js';

function Pairing(props) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [activity, setActivity] = useState('');
    const [numOfPeople, setNumOfPeople] = useState(2);
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [shown, setShown] = useState(false);

    const [userdata] = useState(USERDATA);
    const [locationdata] = useState(LOCATIONDATA);

    const handleSubmit = event => {
        setName(userdata[0].name)
        setShown(true);
        event.preventDefault();
    }

    const handleFood = () => {
        setActivity()
    }

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
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Date</Label>
                                            <Input name="date" type="date" className="form-control" placeholder="0" draggable="true" value={date} onChange={e => setDate(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>Time</Label>
                                            <Input name="time" type="time" className="form-control" placeholder="0" draggable="true" value={time} onChange={e => setTime(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="location">Location</Label>
                                    <Input name="location" type="select" className="form-control" id="location" value={location} onChange={e => setLocation(e.target.value)}>
                                        <option value="Chicago">Chicago</option>
                                        <option value="Houston">Houston</option>
                                        <option value="Los Angeles">Los Angeles</option>
                                        <option value="New York City">New York City</option>
                                        <option value="Philadelphia">Philadelphia</option>
                                        <option value="San Francisco">San Francisco</option>
                                        <option value="San Jose">San Jose</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="activity">Activity</Label>
                                    <Input name="activity" type="select" className="form-control" id="activity" value={activity} onChange={e => setActivity(e.target.value)}>
                                        <option value="Sports">Sports</option>
                                        <option value="Movie">Movie</option>
                                        <option value="Food">Food</option>
                                        <option value="Museum">Museum</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>People</Label>
                                    <Input name="numOfPeople" type="number" className="form-control" placeholder="2" value={numOfPeople} onChange={e => setNumOfPeople(e.target.value)} />
                                </FormGroup>
                                <Button type="submit" value="submit" className="btn mt-4 btn-block btn-outline p-2" ><b>Select</b></Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            {shown && <Activity date={date} time={time} activity={activity} location={location} name={name} />}

        </React.Fragment>
    );
}




export default Pairing;