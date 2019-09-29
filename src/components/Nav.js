import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutRequest } from './../actions';
import NavContainer from './wrappers/NavContainer';

class NavMenu extends Component {
    render() {
        return (
            <>
                {
                    !!this.props.userToken.accessToken ? <NavContainer logout={this.props.logoutRequest} /> : window.location.href.indexOf('unauthaccess') >= 0 ? null : <h1>InstaChat</h1>
                }
            </>
        )
    }
}



const mapStateToProps = state => ({
    userToken: state.userToken
})

const mapDispatchToProps = dispatch => ({
    logoutRequest: () => dispatch(logoutRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
