import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginRequest, loginRequestSuccess} from './../actions';
import fire from './config';
import ClipLoader from 'react-spinners/ClipLoader';

class Login extends Component {
    constructor() {
        super()
    
        this.state = {
             email:'',
             password:'',
             loading:false
        }
    }

    formVal = e =>this.setState({[e.target.name]:e.target.value})
    
    loginUser = (e)=>{
        e.preventDefault();
        this.setState({
            loading:true
        })
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user)=>{
            console.log(user)
            this.props.loginRequestSuccess(user.user.uid);
            sessionStorage.setItem('access_token',user.user.uid)
            this.setState({
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false
            })
        })
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{span:6, offset:3}}>
                        <form onSubmit={this.loginUser}>
                            <input type="email" placeholder="Email"
                            onChange={this.formVal} name="email"
                            value={this.state.email}/>
                            <input type="password" placeholder="Password"
                            onChange={this.formVal} name="password"
                            value={this.state.password} />
                            <button>Sign In</button>
                        </form>
                        <NavLink to="/register">Create An Account?</NavLink>
                    </Col>
                </Row>
                
                <ClipLoader
                    sizeUnit={"px"}
                    size={150}
                    color={'#123abc'}
                    loading={this.state.loading}
                    />
                
            </Container>
        )
    }
}

const mapStateToProps = state =>({
    userToken:state.userInfo
})
const mapDispatchToProps = dispatch => ({
    loginRequest:(userCreds)=>dispatch(loginRequest(userCreds)),
    loginRequestSuccess:(accessToken)=>dispatch(loginRequestSuccess(accessToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
