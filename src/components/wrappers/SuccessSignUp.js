import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
class SuccessSignUp extends Component {
    render() {
        return (
            <div>
                <h1>Thank You for signing up!</h1>
                <NavLink to="/login">Login Now</NavLink>
            </div>
        )
    }
}

export default SuccessSignUp
