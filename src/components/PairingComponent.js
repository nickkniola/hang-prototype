import React, { useState } from 'react';
import Activity from './ActivityComponent/ActivityComponent';
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { USERDATA } from '../shared/userData.js';
import { LOCATIONDATA } from '../shared/locationData.js';

function Pairing(props) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [activity, setActivity] = useState('');
    const [location, setLocation] = useState('');
    const [restaurant, setRestaurant] = useState('');
    const [name, setName] = useState('');
    const [shown, setShown] = useState(false);
    const [image, setImage] = useState('');
    const [userdata] = useState(USERDATA);
    const [locationdata] = useState(LOCATIONDATA);

    const handleSubmit = event => {
        const selectUserIndex = randomNumber()
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        setShown(true);
        console.log(image);
        event.preventDefault();
    }

    const randomNumber = () => Math.floor(Math.random() * 4);



    const handleActivity = event => {
        switch (event.target.value) {
            case 'Food':
                handleFood();
                break;
            default:
                setRestaurant('');
                setActivity(event.target.value)
        }

    }

    const handleFood = () => {
        setRestaurant(
            locationdata.filter(obj => obj.city === location)[0]['name']
        );
    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
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
                                    <Input name="location" type="select" className="form-control" id="location" value={location} onChange={handleLocation}>
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
                                    <Input name="activity" type="select" className="form-control" id="activity" value={activity} onChange={handleActivity}>
                                        <option value="Sports">Sports</option>
                                        <option value="Movie">Movie</option>
                                        <option value="Food">Food</option>
                                        <option value="Museum">Museum</option>
                                    </Input>
                                </FormGroup>
                                <Button type="submit" value="submit" className="btn mt-4 btn-block btn-outline p-2" ><b>Select</b></Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

            {shown && <Activity date={date} time={time} activity={activity} location={location} name={name} restaurant={restaurant} image={image} />}

        </React.Fragment>
    );
}




export default Pairing;