import React from 'react'
import { Form, Button, ButtonGroup } from 'react-bootstrap';

const FormField = ({ label, type }) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            {
                label == 'Bio' ?
                    <Form.Control as="textarea" rows="3" />
                    :
                    <Form.Control type={type} placeholder={label} />
            }
        </Form.Group>
    )
}

export default FormField
