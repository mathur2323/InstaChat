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
            <div style={styles.outerdiv}>
                <h1 style={styles.h1}>Sign Up</h1>
                <form onSubmit={this.submitData} style={styles.form}>
                    <input style={styles.inpt} type="text" placeholder="Name" name="name" onChange={this.formVal} value={this.state.name} />
                    <br /><input style={styles.inpt} type="text" placeholder="Mobile Number" name="number" onChange={this.formVal} value={this.state.number} />
                    <br /><input style={styles.inpt} type="email" placeholder="Email" name="email" onChange={this.formVal} value={this.state.email} />
                    <br /><input style={styles.inpt} type="password" placeholder="Password" name="password" onChange={this.formVal} value={this.state.password} />
                    <br /><button style={styles.btn}>Sign Up</button>
                </form>
                <div style={styles.logindiv}>
                    <p>Already have an account ?</p>
                    <a href="/"><input style={styles.btn} type="button" value="Log In" /></a>
                </div>

            </div>

        )
    }
}
const styles = {
    inpt: {
        borderRadius: '10px',
        border: 'solid 1px grey',
        height: '40px',
        width: '300px',
        padding: '10px',
        margin: '10px'
    },
    form: {
        textAlign: 'center',
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
    h1: {
        textAlign: 'center',
        fontFamily: 'TimesNewRoman',
        fontWeight: 'bold'
    },
    logindiv: {
        margin: '20px',
        background: 'white',
        textAlign: 'center',
    },
    // outerdiv:{
    //     background:'red'
    // }
}

export default Register
