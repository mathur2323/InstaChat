import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import {Switch, Route, NavLink, Redirect} from 'react-router-dom'
import {Account, Contacts, ChangePassword, Privacy, Donate}from './Container';

class EditProfile extends Component {
    render() {
        return (
            <>
            {
                !!sessionStorage.getItem('access_token') ?
            <Container>
                <Row>
                    <Col md={3}>
                        <ListGroup>
                            <ListGroup.Item style={{padding:0}}>
                                <NavLink style={{display:'block',padding:'10px 15px', borderRadius:'4px'}}
                                    activeStyle={{color:'#fff', backgroundColor:'#123abc'}} to="/edit/account">
                                    Edit Profile
                                    </NavLink>
                                </ListGroup.Item>
                            <ListGroup.Item><NavLink activeStyle={{color:'red'}}  to="/edit/change_password">Change Password</NavLink></ListGroup.Item>
                            <ListGroup.Item><NavLink  activeStyle={{color:'red'}} to="/edit/contacts">Contacts</NavLink></ListGroup.Item>
                            <ListGroup.Item><NavLink  activeStyle={{color:'red'}} to="/edit/privacy">Privacy & Security</NavLink></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Switch>
                            <Route path="/edit/account" component={Account} />
                            <Route path="/edit/change_password" component={ChangePassword} />
                            <Route path="/edit/contacts" component={Contacts} />
                            <Route path="/edit/privacy" component={Privacy} />
                        </Switch>
                    </Col>
                </Row>  
            </Container> : <Redirect to = "/" from = "/index"/>
            }
            </>
        
        )
    }
}

export default EditProfile