import React, { Component } from 'react'
import {ProfileInfo} from './Container';
import {Form, Button} from 'react-bootstrap';
import FormField from './FormField';

class ChangePassword extends Component {
    render() {
        const formFields = [{
            label:'Old Password',
        },
        {
            label:'New Password'
        },
        {
            label:'Confirm New Password'
        }
    ]
        return (
            <div>
                <ProfileInfo />
                <Form>
                {
                    formFields.map(formField => <FormField label={formField.label} type='password' />)
                }
  
  <Button variant="primary" type="submit">Change Password</Button>
</Form>
            </div>
        )
    }
}

export default ChangePassword
