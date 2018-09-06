import React from 'react';
import './ContentContainer.css'
class ContentContainer extends React.Component {
    render() {
        return (
            <div className="content-container">
            {this.props.children}
            </div>
        )
    }
}

export default ContentContainer;