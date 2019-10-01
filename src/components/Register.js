import React, { Component } from 'react'
import fire from './config'
class Register extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            name: '',
            number: ''
        }
    }

    submitData = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    }


    formVal = (e) => {
        if (e.target.name == 'number') {
            if (isNaN(e.target.value)) {
                console.log('Invalid')
            }
            else {
                this.setState({
                    [e.target.name]: e.target.value
                })
            }
        }
        else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

    }

    render() {
        console.log(this.state)
        return (
            
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.submitData}>
                    <input type="text" placeholder="Name" name="name" onChange={this.formVal} value={this.state.name} />
                    <input type="text" placeholder="Mobile Number" name="number" onChange={this.formVal} value={this.state.number} />
                    <input type="email" placeholder="Email" name="email" onChange={this.formVal} value={this.state.email} />
                    <input type="password" placeholder="Password" name="password" onChange={this.formVal} value={this.state.password} />
                    <button>Sign Up</button>

                </form>
                <a href="/">
                    <input type="button" value="Log In" />
                </a>
            </div>
        )
    }
}

export default Register
