import React from 'react';
import ContentContainer from '../../components/ContentContainer';
import AccountForm from '../../components/AccountForm';
import './LogIn.css'

class LogIn extends React.Component {
    render(){
        return(
            <ContentContainer>
                {/* <h1 class="page-header">Log In</h1> */}
                <AccountForm />
            </ContentContainer>
        )
    }
}

export default LogIn;