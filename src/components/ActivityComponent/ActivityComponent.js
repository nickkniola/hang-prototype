import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, FormGroup, Label, Input, Media } from 'reactstrap';

function Activity(props) {
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
                                <Button className="mr-1" color="primary">Accept</Button>
                                <Button className="ml-1" color="danger">Reject</Button>
                                <FormGroup className="py-5 px-5">
                                    <Label className="float-left" for="activityMessage">Message Them Directly</Label>
                                    <Input type="textarea" name="activityMessage" id="activityMessage"></Input>
                                    <Button type="submit" className="mt-2 float-right" color="secondary">Send</Button>
                                </FormGroup>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default Activity;