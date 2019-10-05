import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/index';
import NotFound from './NotFound'
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import EditProfile from './Edit';
import Chat from './Chat';
import Notifications from './Notifications';
import {connect} from 'react-redux';
import UnAuthAccess from './wrappers/UnAuthAccess';
import { ChangePassword, Contacts, Privacy } from './Edit/Container';

class Router extends Component {
    render() {
        console.log('routes', this.props.userToken.accessToken)
        return (
            <Switch>
                <Route path="/" exact component={!!sessionStorage.getItem('access_token') ? Home : Login} />
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/edit/" component={EditProfile} />
                <Route path="/edit/account" component={EditProfile} />
                <Route path="/chat" component={Chat} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/unauthaccess" component={UnAuthAccess} />
                <Route component={NotFound} />
            </Switch>
            
        )
    }
}
const mapStateToProps = state => ({
    userToken:state.userToken
})

export default connect(mapStateToProps, null)(Router)
