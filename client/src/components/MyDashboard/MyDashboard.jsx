import React from 'react';
import './MyDashboard.css'

class MyDashboard extends React.Component {

    render() {
        return (
            <div className="table-container">
                <table cellSpacing="0">
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

                    <tr className="table-row">
                        <td><span className="top-text">APPL</span><br></br>APPLE INC.</td>
                        <td>$224.32</td>
                        <td>$223.46</td>
                        <td>$222.91</td>
                        <td><span className="top-text">$324.32</span><br></br>$225.84</td>
                        <td><span className="neg-text">-$1.32</span></td>
                        <td><span className="pos-text">+0.74%</span></td>
                        {/* For each button, there is a .saved class for if the article is saved. */}
                        <td><button className="save-stock">Save</button></td>
                    </tr>
                    

                </table>

            </div>
        )
    }

}

export default MyDashboard;