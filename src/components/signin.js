import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        axios.post('https://zakyproject-database.herokuapp.com/user/login', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }).then(data => {
            console.log(data)
            if (data.data.loggedIn === true) {
                this.props.history.push('/dashboard');
                alert("you are logged in");
            } else {
                alert("you are not logged in")
            }
            
        }).catch(error => {
            console.log(error);
        })
    };

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit} >
                    <div>Email</div>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <div>Password</div>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  />
                    <button type="submit">SIGN IN </button>
                </form>
                
            </div>
        )
    }
}

export default SignIn