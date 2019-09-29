import React, { Component } from 'react'

class UnAuthAccess extends Component {
    render() {
        return (
            <div>
                <h1>Authentication Required !!</h1>
                <p>Go To Login</p>
            </div>
        )
    }
}

export default UnAuthAccess
