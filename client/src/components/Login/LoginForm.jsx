import React from 'react';

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
            <form id="account-form" action="post">
                <input value={this.state.username} onChange={this.handleInputChange} type="text" name="username" placeholder="Username" />
                <input value={this.state.password} onChange={this.handleInputChange} type="password" name="password" placeholder="Password" />
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default LoginForm;