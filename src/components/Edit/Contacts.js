import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
class Contacts extends Component {
    render() {
        return (
            <>
            {
            !!sessionStorage.getItem('access_token') ?
            <div>
                <h1>Contacts</h1>
                {/* Friendlist */}
            </div> : <Redirect to="/" from="/contacts" />
        }
        </>
        )
    }
}

export default Contacts
