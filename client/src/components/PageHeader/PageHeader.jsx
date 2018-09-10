import React from 'react'
import './PageHeader.css'

class PageHeader extends React.Component {
    render() {
        return (
            <div className="page-header">
                {this.props.children}
            </div>
        )
    }
}

export default PageHeader