import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/index';
import NotFound from './NotFound'
import Register from './Register';
import Profile from './Profile';
import EditProfile from './Edit';
import Chat from './Chat';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/edit" component={EditProfile} />
                <Route path="/chat" component={Chat} />
                <Route component={NotFound} />
            </Switch>
            
        )
    }
}

export default Router
