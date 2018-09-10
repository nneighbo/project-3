import React from 'react';

class AccountForm extends React.Component {
    render() {
        return (
            <form id="account-form" action="post">
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password"/>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default AccountForm;