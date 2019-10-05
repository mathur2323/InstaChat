import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutRequest } from './../actions';
import NavContainer from './wrappers/NavContainer';

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
    render() {
        return (
            <>
                {
                    !!sessionStorage.getItem('access_token') ? <NavContainer logout={this.props.logoutRequest} /> : window.location.href.indexOf('unauthaccess') >= 0 ? null : <div style={styles.divs}><h1><img src="https://i0.wp.com/www.somictech.com/wp-content/uploads/2018/02/INSTA-MESSENGER-REVIEW.png?resize=300%2C300&ssl=1" style={styles.image}></img>InstaChat</h1></div>
                }
            </>
        )
    }
}
const styles = {
    divs :{
        display : 'inline-block',
    },
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
