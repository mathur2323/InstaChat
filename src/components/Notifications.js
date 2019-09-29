import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';

class Notifications extends Component {
    constructor() {
        super()

        this.state = {
            notify_type: 'n1',
            pending_notifications: 0
        }
    }

    render() {
        let summary;
        if (this.state.notify_type == 'n1') {
            summary = 'liked your photo'
        }
        else if (this.state.notify_type == 'n2a') {
            summary = 'commented on your photo'
        }
        else if (this.state.notify_type == 'n2b') {
            summary = 'mentioned you in a comment'
        }
        else if (this.state.notify_type == 'n3') {
            summary = 'requested to follow you'
        }
        else if (this.state.notify_type == 'n4') {
            summary = 'tagged you in a post'
        }
        return (
            <Container>
                <h1>Notifications</h1>
                <Row>
                    {/* Other Profile Picture */}
                    {
                        this.state.pending_notifications !==0 ?
                        <>
                            <Col>
                                <img src="" />
                            </Col>
                            <Col>
                                <a href="">Username</a> <span>{summary}</span>
                            </Col>
                        </>
                        :
                        <p>No Pending Notifications</p>
                    }
                </Row>
            </Container>
        )
    }
}

export default Notifications
