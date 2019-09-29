import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails';
import PersonalPosts from './PersonalPosts';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Redirect} from 'react-router-dom'
import UnAuthAccess from '../wrappers/UnAuthAccess';

class Profile extends Component {
    render() {
        return (
            <>
                {
                    !!sessionStorage.getItem('access_token') ? 
                    < Container >
                    <Row>
                        <Col md={12} className="my-3">
                            <PersonalDetails />
                        </Col>
                        <Col md={12} className="my-3">
                            <PersonalPosts />
                        </Col>
                    </Row>
                </Container> : <Redirect to="/" from="/profile" />
            }
            </>
        )
    }
}

export default Profile