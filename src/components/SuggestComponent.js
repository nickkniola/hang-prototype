import React, { useState } from 'react';
import Activity from './ActivityComponent/ActivityComponent';
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { USERDATA } from '../shared/userData.js';

function Suggest(props) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [activity, setActivity] = useState('');
    const [numOfPeople, setNumOfPeople] = useState(2);
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [userdata] = useState(USERDATA);
    const [shown, setShown] = useState(false);

    // this.state = {
    //     date: '',
    //     time: '',
    //     activity: '',
    //     numOfPeople: 2,
    //     location: '',
    //     name: '',
    //     userdata: USERDATA,
    //     shown: false
    // };



    // handleChange(event) {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     });
    // }

    const handleSubmit = event => {

        let today = new Date();
        let hours = today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + (today.getMinutes());

        setTime(`${hours}:${minutes}`);
        setActivity(userdata[1].activity);
        setLocation(userdata[1].location);
        setName(userdata[1].name);
        setShown(true);

        // setState(state => ({
        //     time: ,
        //     location: ,
        //     name: userdata[1].name,
        //     activity: userdata[1].activity,
        //     shown: true
        // }))
        event.preventDefault();
    }

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
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label>Date</Label>
                                    <Input name="date" type="date" className="form-control" placeholder="0" draggable="true" value={date} onChange={e => setDate(e.target.value)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>People</Label>
                                    <Input type="number" className="form-control" placeholder="2" value={numOfPeople} onChange={e => setNumOfPeople(e.target.value)} />
                                </FormGroup>
                                <Button type="submit" value="submit" className="btn mt-4 btn-block btn-outline p-2"><b>Select</b></Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            {shown && <Activity date={date} time={time} activity={activity} location={location} name={name} />}
        </React.Fragment>
    );
}

export default Suggest;