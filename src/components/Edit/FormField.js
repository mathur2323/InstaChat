import React from 'react'
import { Form, Button, ButtonGroup } from 'react-bootstrap';

const FormField = (props) => {
    const { label, type, name, value, handleInput, disabled } = props;
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            {
                label == 'Bio' ?
                    <Form.Control as="textarea" rows="3" name={name} placeholder={label} value={value} onChange={handleInput} disabled={disabled} />
                    :
                    <Form.Control type={type} placeholder={label} name={name} value={value} onChange={handleInput}
                    disabled = {disabled}
                     />
            }
        </Form.Group>
    )
}

export default FormField
