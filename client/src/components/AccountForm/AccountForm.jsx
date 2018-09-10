import React from 'react';
import './AccountForm.css'

class AccountForm extends React.Component {
    render() {
        return (
            <div className="form-container">
                <form id="account-form" action="post">
                    <input id="username" className="textbox" type="text" name="username" placeholder="Username" />
                    <input id="password" className="textbox" type="password" name="password" placeholder="Password" />

                    {/* The CSS styling for this button is in /src/App.css */}
                    <input id="submit" type="submit" value="Log In"></input>
                </form>
            </div>
        )
    }
}

export default AccountForm;