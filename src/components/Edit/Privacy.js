import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import {Redirect} from 'react-router-dom';
class Privacy extends Component {
    render() {
        return (
            <>
                {
                    !!sessionStorage.getItem('access_token') ?
                        <div>
                            <h1>Privacy</h1>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Posts</Form.Label>
                                    <Form.Control as="select">
                                        <option>Everyone</option>
                                        <option>Friends</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Tags</Form.Label>
                                    <Form.Control as="select">
                                        <option>Everyone</option>
                                        <option>Friends</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Block</Form.Label>
                                    <Form.Control type="text" placeholder="Block User" />
                                </Form.Group>

                            </Form>

                        </div> : <Redirect to="/" from="/privacy" />
                }
            </>)
    }
}

export default Privacy
