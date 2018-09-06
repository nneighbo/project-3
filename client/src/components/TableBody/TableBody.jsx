import React from 'react';
import './TableBody.css'

class TableBody extends React.Component {
    render() {
        return (
            <tbody>
                {this.props.children}
            </tbody>
        )
    }
}

export default TableBody;