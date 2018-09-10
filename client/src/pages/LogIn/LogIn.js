import React from 'react';
import ContentContainer from '../../components/ContentContainer';
import LoginForm from '../../components/LoginForm';
import './LogIn.css'

class LogIn extends React.Component {
    render(){
        return(
            <ContentContainer>
                <LoginForm />
            </ContentContainer>
        )
    }
}

export default LogIn;