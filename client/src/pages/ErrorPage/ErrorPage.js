import React, { Component } from 'react';
import ContentContainer from '../../components/ContentContainer'
import './ErrorPage.css'

// import API from "./utils/API.js"

class ErrorPage extends Component {

  render() {
    return (
      <ContentContainer>
        <div className="error-page">
          <h1>Whoops! Looks like you're lost!</h1>
          <p>Use the buttons if you would like to navigate back.</p>
        </div>
      </ContentContainer>

    );
  }
}

export default ErrorPage;
