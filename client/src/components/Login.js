import React, { Component } from 'react'
import axios from 'axios'


export default class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        // console.log(this.state.credentials)
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        // console.log('onchange',this.state)
    }

    onSubmit = e => {
        e.preventDefault()
         console.log('submit',this.state.credentials)
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => 
                localStorage.setItem('token', res.data.payload))
               
            .catch(err => console.log(err.response))
    }
    
    render() {
        return (
            <>
              <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.handleChange}/>              
                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>             
            </>
        )
    }
}
