import React from 'react';
import ContentContainer from '../../components/ContentContainer';
import AccountForm from '../../components/AccountForm';

class CreateAccount extends React.Component {
    render(){
        return(
            <ContentContainer>
                <AccountForm />
            </ContentContainer>
        )
    }
}

export default CreateAccount;