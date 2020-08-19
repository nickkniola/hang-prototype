import React, { useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, FormGroup, Label, Input, Media, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Redirect } from 'react-router';


function Activity(props) {

    const [acceptmodal, setAcceptModal] = useState(false);
    const [messagemodal, setMessageModal] = useState(false);
    const [linkToHome, setLinkToHome] = useState(false);

    const toggleAcceptModal = () => setAcceptModal(!acceptmodal);
    const toggleMessageModal = () => setMessageModal(!messagemodal);
    const userAccepts = () => setLinkToHome(true);

    if (linkToHome) {
        return (<Redirect push to="/home" />);
    }

    return (
        <div className="activity py-5">
            <Container>
                <Row>
                    <Col className="mx-auto" md={10} lg={8} >
                        <Card className="activity-card text-center">
                            <CardHeader>Activity Planned</CardHeader>
                            <CardBody>
                                <div className={props.modalReject ? 'change' : 'initial'}>
                                    <Media className="profile-image" top src={props.image} alt="Profile Image" />
                                    <CardTitle className="activity-card-title mb-0">{props.restaurant} {props.activity} in {props.location}</CardTitle>
                                    <CardText className="activity-card-text">{props.date} at {props.time} with {props.name}</CardText>
                                </div>
                                <Button className="mr-1 mt-3" color="primary" onClick={toggleAcceptModal}>Accept</Button>
                                <Button className="ml-1 mt-3" color="danger" onClick={props.userReject}>Reject</Button>
                                <FormGroup className="py-5 px-5">
                                    <Label className="float-left" for="activityMessage">Message Them Directly</Label>
                                    <Input type="textarea" name="activityMessage" id="activityMessage"></Input>
                                    <Button type="submit" className="mt-2 float-right" color="secondary" onClick={toggleMessageModal}>Send</Button>
                                </FormGroup>
                                <Modal isOpen={acceptmodal} toggle={toggleAcceptModal}>
                                    <ModalHeader className="justify-content-center"><img src="/assets/images/hang_logo.png" height="30" width="30" alt="Hang Logo" />Hang</ModalHeader>
                                    <ModalBody>
                                        <br />You’re all set! You will be notified if the other user also accepts.<br /><br />
                                    </ModalBody>
                                    <Button className="mx-5 mb-5" color="secondary" onClick={userAccepts}>Cool</Button>
                                </Modal>
                                <Modal isOpen={messagemodal} toggle={toggleMessageModal}>
                                    <ModalHeader className="justify-content-center"><img src="/assets/images/hang_logo.png" height="30" width="30" alt="Hang Logo" />Hang</ModalHeader>
                                    <ModalBody className="text-center">
                                        <br />Message Sent<br /><br />
                                    </ModalBody>
                                    <Button className="mx-5 mb-5" color="secondary" onClick={toggleMessageModal}>Cool</Button>
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