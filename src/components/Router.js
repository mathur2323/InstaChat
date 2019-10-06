import React, { Component } from 'react'
import {BrowserRouter,Redirect, Route, Switch} from 'react-router-dom';
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
        return (
            <Switch>
                <Route path="/" exact component={!!this.props.userToken.accessToken || !!sessionStorage.getItem('access_token') ? Home : Login} />
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/edit/" component={EditProfile} />
                <Route path="/edit/account" component={EditProfile} />
                <Route path="/chat" component={Chat} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/unauthaccess" component={UnAuthAccess} />
                <Redirect to="/" from="/home" />
                <Route component={NotFound} />
            </Switch>
            
        )
    }
}
const mapStateToProps = state => ({
    userToken:state.userToken
})

export default connect(mapStateToProps, null)(Router)
