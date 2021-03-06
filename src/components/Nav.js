import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutRequest } from './../actions';
import NavContainer from './wrappers/NavContainer';
import {Redirect} from 'react-router-dom';
class NavMenu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             accessToken:''
        }
    }
    
    componentDidMount(){
        this.setState({
            accessToken:sessionStorage.getItem('access_token')
        })
    }

    logout= ()=>{
        this.props.logoutRequest();
    }
    render() {
        console.log(this.props, "Navbar")
        return (
            <>
                {
                    !!this.props.userToken.accessToken || 
                    !!sessionStorage.getItem('access_token') ? <NavContainer history={this.props.history} logout={this.logout} /> : window.location.href.indexOf('unauthaccess') >= 0 ? null : <h1 style = {{textDecoration : 'none'}}><img src="https://i0.wp.com/www.somictech.com/wp-content/uploads/2018/02/INSTA-MESSENGER-REVIEW.png?resize=300%2C300&ssl=1" style={styles.image}></img>InstaChat</h1>
                }
            </>
        )
    }
}
const styles = {
    // divs :{
    //     display : 'inline-block',
    // },
    image: {
        height: '30px',
        width: '30px',
        margin : '0px 5px'
    },
}


const mapStateToProps = state => ({
    userToken: state.userToken
})

const mapDispatchToProps = dispatch => ({
    logoutRequest: () => dispatch(logoutRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
