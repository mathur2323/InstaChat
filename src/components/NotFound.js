import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
class NotFound extends Component {
    render() {
        return (
            <>
                {
                    !!sessionStorage.getItem('access_token') ?
                    < div >
                        <h1>404</h1>
                    </div > :  <Redirect to="/" from="/notfound" />
                    }
        </>
        )
    }
}

export default NotFound
