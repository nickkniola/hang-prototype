import React, { useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, FormGroup, Label, Input, Media, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Redirect } from 'react-router';


function Activity(props) {

    const [modal, setModal] = useState(false);
    const [linkToHome, setLinkToHome] = useState(false);

    const toggleModal = () => setModal(!modal);
    const userAccepts = () => {
        setLinkToHome(true);

    }
    if (linkToHome) { return (<Redirect push to="/home" />); }
    return (
        <div className="activity py-5">
            <Container>
                <Row>
                    <Col className="mx-auto" md={10} lg={8} >
                        <Card className="activity-card text-center">
                            <CardHeader>Activity Planned</CardHeader>
                            <CardBody>
                                <Media className="profile-image" top src={props.image} alt="Profile Image" />
                                <CardTitle className="activity-card-title">{props.restaurant} {props.activity} in {props.location}</CardTitle>
                                <CardText className="activity-card-text">{props.date} at {props.time} with {props.name}</CardText>
                                <Button className="mr-1" color="primary" onClick={toggleModal}>Accept</Button>
                                <Button className="ml-1" color="danger">Reject</Button>
                                <FormGroup className="py-5 px-5">
                                    <Label className="float-left" for="activityMessage">Message Them Directly</Label>
                                    <Input type="textarea" name="activityMessage" id="activityMessage"></Input>
                                    <Button type="submit" className="mt-2 float-right" color="secondary">Send</Button>
                                </FormGroup>
                                <Modal isOpen={modal} toggle={toggleModal}>
                                    <ModalHeader className="justify-content-center"><img src="/assets/images/hang_logo.png" height="30" width="30" alt="Hang Logo" />Hang</ModalHeader>
                                    <ModalBody>
                                        <br />You’re all set! You will be notified if the other user also accepts.<br /><br />
                                    </ModalBody>
                                    <Button className="mx-5 mb-5" color="secondary" onClick={userAccepts}>Cool</Button>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    );
}


export default Activity;