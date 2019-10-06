import React, { Component } from 'react'
import { ProfileInfo } from './Container'
import { Form, Button, ButtonGroup, FormGroup } from 'react-bootstrap';
import FormField from './FormField';
import { Redirect } from 'react-router-dom';
import fire from './../config';
class Account extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            username: '',
            website: '',
            bio: '',
            number: '',
            gender: ''
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name, username, website, bio, number, gender} = this.state
        const uid = sessionStorage.getItem("access_token")
        fire.database().ref('users/' + uid).update({
            name,username,website,bio,number,gender
        });
    }

    render() {
        const formFields = [{
            label: 'Name',
            type: 'text',
            name: 'name'
        },
        {
            label: 'Username',
            type: 'text',
            name: 'username'
        },
        {
            label: 'Website',
            type: 'url',
            name: 'website'
        },
        {
            label: 'Bio',
            type: 'textarea',
            name: 'bio'
        },
        {
            label: 'Number',
            type: 'number',
            name: 'number'
        }
        ]
        return (
            <>

                {
                    !!sessionStorage.getItem('access_token') ?
                        <div>
                            <ProfileInfo />
                            <Form onSubmit={this.handleSubmit}>
                                {
                                    formFields.map(formField => <FormField
                                        label={formField.label}
                                        type={formField.type}
                                        name={formField.name}
                                        handleInput={this.handleInput}
                                        value={this.state[formField.name]}
                                    />)
                                }
                                <FormGroup>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="secondary" name="gender" value="Male" onClick={this.handleInput}>Male</Button>
                                        <Button variant="secondary" name="gemder" value="Female" onClick={this.handleInput}>Female</Button>

                                    </ButtonGroup>
                                </FormGroup>
                                <Button variant="primary" type="submit">Update</Button>

                            </Form>
                        </div> : <Redirect to="/" from="/account" />
                }
            </>
        )
    }
}

export default Account
