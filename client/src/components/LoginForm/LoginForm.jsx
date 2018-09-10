import React from 'react';
import './LoginForm.css'

class LoginForm extends React.Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="form-container">
                <form id="account-form" action="post">
                    <input className="textbox" value={this.state.username} onChange={this.handleInputChange} type="text" name="username" placeholder="Username" />
                    <input className="textbox" value={this.state.password} onChange={this.handleInputChange} type="password" name="password" placeholder="Password" />

                    {/* The CSS styling for this button is in /src/App.css */}
                    <input id="submit" type="submit" value="Log In"></input>
                </form>
            </div>
        )
    }
}

export default LoginForm;