import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest, loginRequestSuccess } from './../actions';
import fire from './config';
import DotLoader from 'react-spinners/DotLoader';
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    formVal = e => this.setState({ [e.target.name]: e.target.value })

    loginUser = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log(user)
                this.props.loginRequestSuccess(user.user.uid);
                sessionStorage.setItem('access_token', user.user.uid)
                this.setState({
                    loading: false
                })
            })
            .catch((err) => {
                this.setState({
                    loading: false
                })
            })
    }
    render() {
        return (
            
            <Container style = {styles.container}>    
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <form onSubmit={this.loginUser}>
                            <input style = {styles.inpt} type="email" placeholder="Email"
                                onChange={this.formVal} name="email"
                                value={this.state.email} />
                            <input style = {styles.inpt} type="password" placeholder="Password"
                                onChange={this.formVal} name="password"
                                value={this.state.password} /><br/>
                            <button style = {styles.btn}>Sign In</button>
                        </form>
                        <NavLink to="/register">Create An Account?</NavLink>
                    </Col>
                </Row>
                
                <DotLoader
                    css = {styles.loader}
                    sizeUnit={"px"}
                    size={150}
                    
                    color={'#123abc'}
                    loading={this.state.loading}
                />
                

            </Container>
        )
    }
}



const styles = {
    loader : {
        position : 'absolute',
        top : '35%',
        left : '45%',
    },
    
    image: {
        height: '30px',
        width: '30px',
        margin : '0px 5px'
    },
    btn: {
        borderRadius: '5px',
        height: '35px',
        border: 'none',
        width: '150px',
        margin: '10px',
        background: '#1C00E9',
        color: 'white',
        fontWeight: 'bold'
},
container : {
    textAlign : "center",
},
inpt: {
    borderRadius: '10px',
    border: 'solid 1px grey',
    height: '40px',
    width: '300px',
    padding: '10px',
    margin: '10px'
},
}
const mapStateToProps = state => ({
    userToken: state.userInfo
})
const mapDispatchToProps = dispatch => ({
    loginRequest: (userCreds) => dispatch(loginRequest(userCreds)),
    loginRequestSuccess: (accessToken) => dispatch(loginRequestSuccess(accessToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
