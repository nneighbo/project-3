import React from 'react';
import './Table.css'
class Table extends React.Component {
    render() {
        return (
            <div className="table-container">
                <table cellSpacing="0">
                    {this.props.children}
                </table>
            </div>
        )
    }
}

export default Table;