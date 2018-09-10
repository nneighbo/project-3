import React from 'react';
import './LoginForm.css'
import { withRouter } from "react-router-dom";
import API from "../../utils/API"

class LoginForm extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault(); 
        if (this.state.email && this.state.password) {
            console.log("working1")
            API.login({
                email: this.state.email,
                password: this.state.password
            })
                .then(res => this.props.history.push(`/dashboard`))
                .catch(err => console.log(err));
                console.log("aaaaaaaaa")
        }
      };

    render() {
        return (
            <div className="form-container">
                <form id="account-form" action="post">
                    <input className="textbox" value={this.state.email} onChange={this.handleInputChange} type="text" name="email" placeholder="Email" />
                    <input className="textbox" value={this.state.password} onChange={this.handleInputChange} type="password" name="password" placeholder="Password" />

                    {/* The CSS styling for this button is in /src/App.css */}
                    <input onClick={this.handleFormSubmit} id="submit" type="submit" value="Log In"></input>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);