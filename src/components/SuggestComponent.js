import React, { useState, useRef } from 'react';
import Activity from './ActivityComponent/ActivityComponent';
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { USERDATA } from '../shared/userData.js';

function Suggest(props) {

    const [date, setDate] = useState('');
    const [newDate, setNewDate] = useState('');
    const [time, setTime] = useState('');
    const [activity, setActivity] = useState('');
    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [userdata] = useState(USERDATA);
    const [shown, setShown] = useState(false);
    const [modalReject, setModalReject] = useState(false);

    const cardFocus = useRef(null);

    const userReject = () => {
        setModalReject(true);
        setTimeout(userReject2, 500)
    };
    const userReject2 = () => {
        activity === 'food' ? setActivity('') : console.log('');
        const selectUserIndex = randomNumber()
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        setActivity(userdata[randomNumber()].activity);
        setLocation(userdata[randomNumber()].location);
        setModalReject(false);
    }

    const handleSubmit = event => {
        let today = new Date();
        let hours = today.getHours();
        let minutes = (today.getMinutes() < 10 ? '0' : '') + (today.getMinutes());
        let month = today.getMonth() + 1;
        let day = today.getDate();

        activity === 'food' ? setActivity('') : console.log('');
        const selectUserIndex = randomNumber()
        setName(userdata[selectUserIndex].name);
        setImage(userdata[selectUserIndex].image);
        setTime(`${hours}:${minutes}`);
        setActivity(userdata[randomNumber()].activity);
        setLocation(userdata[randomNumber()].location);
        if (date.length > 5) {
            setNewDate(date.substr(5, 8));
        }
        if (!date) {
            setNewDate(`${month}-${day}`)
        }
        setShown(true);
        setTimeout(scrollToBottom, 0);
        event.preventDefault();
    }

    const scrollToBottom = () => {
        cardFocus.current.scrollIntoView({
            behavior: "smooth"
        })
    };


    const randomNumber = () => Math.floor(Math.random() * 4);


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
                                <Button type="submit" value="submit" className="btn mt-4 btn-block btn-outline p-2"><b>Select</b></Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <div ref={cardFocus} />
            {shown && <Activity date={newDate} time={time} activity={activity} location={location} name={name} image={image} userReject={userReject} modalReject={modalReject} />}
            <div className="height-div" />
        </React.Fragment>
    );
}

export default Suggest;