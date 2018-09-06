import React from 'react';
import './TableHead.css'

class TableHead extends React.Component {
    render() {
        return (
            <thead>
                <tr className="table-heading">
                    <th>Stock Name</th>
                    <th>Last Price</th>
                    <th>Open</th>
                    <th>Previous Close</th>
                    <th>Day's Range</th>
                    <th>Day's Change ($)</th>
                    <th>Day's Change (%)</th>
                    <th>Save This Stock</th>
                </tr>
            </thead>
        )
    }
}

export default TableHead;