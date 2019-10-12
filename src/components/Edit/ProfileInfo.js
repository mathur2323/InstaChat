import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import fire from './../config';

class ProfileInfo extends Component {
    
    render() {
        return (
            <>
                {
                    !!sessionStorage.getItem('access_token') ?
                        <div>
                            <div>
                                <img src="" />
                            </div>
                            <div>
                                <h3>Username</h3>
                            </div>
                        </div> : <Redirect to="/" from="/profileinfo" />

                }</>
        )
    }
}

export default ProfileInfo
