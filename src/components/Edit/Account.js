import React, { Component } from 'react'
import { ProfileInfo } from './Container'
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import FormField from './FormField';

class Account extends Component {
    render() {
        const formFields = [{
            label:'Name',
            type:'text',
        },
        {
            label:'Username',
            type:'text'
        },
        {
            label:'Website',
            type:'url'
        },
        {
            label:'Bio',
            type:'textarea'
        },
        {
            label:'Email Address',
            type:'email'
        },
        {
            label:'Number',
            type:'number'
        }
    ]
        return (
            <>

                <ProfileInfo />
                <Form>
                    {
                        formFields.map(formField => <FormField
                            label={formField.label}
                            type={formField.type} />)
                    }
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary">Male</Button>
                        <Button variant="secondary">Female</Button>

                    </ButtonGroup>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Update</Button>
                </Form>
            </>
        )
    }
}

export default Account
