import React from 'react';
import { withRouter } from "react-router-dom";
import API from "../../utils/API"
import './AccountForm.css'

class AccountForm extends React.Component {
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
          API.createAccount({
            email: this.state.email,
            password: this.state.password
          })
            .then(res => this.props.history.push(`/dashboard`))
            .catch(err => console.log(err));
        }
      };

    render() {
        return (
            <div className="form-container">
                <form id="account-form" action="post">
                    <input className="textbox" value={this.state.email} onChange={this.handleInputChange} type="text" name="email" placeholder="Email" />
                    <input className="textbox" value={this.state.password} onChange={this.handleInputChange} type="password" name="password" placeholder="Password" />

                    {/* The CSS styling for this button is in /src/App.css */}
                    <input onClick={this.handleFormSubmit} type="submit" id ="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default withRouter(AccountForm);