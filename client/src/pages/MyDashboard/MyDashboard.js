import React from 'react';
// import './MyDashboard.css'

import Table from '../../components/Table'
import TableHead from '../../components/TableHead'
import TableRow from '../../components/TableRow'
import TableBody from '../../components/TableBody'
import ContentContainer from '../../components/ContentContainer'

class MyDashboard extends React.Component {

    render() {
        return (
            <ContentContainer>
                <Table>
                    <TableHead />
                    <TableBody>
                        <TableRow
                            stockNameShort="APPL"
                            stockNameLong="APPLE INC."
                            stockLastPrice="224.32"
                            stockOpen="223.46"
                            stockPrevClose="222.91"
                            stockDayRangeHigh="324.32"
                            stockDayRangeLow="225.84"

                            // The front end determines
                            // whether or not the number is
                            // positive or negative, so all
                            // you need to do is pass the
                            // data from the API through

                            stockDayChangeDollar="-1.32"
                            stockDayChangePercent="-0.74"

                            // Whether or not the stock
                            // is saved determines the
                            // text and color of the button
                            stockSaved="true"
                        />
                    </TableBody>
                </Table>
            </ContentContainer>
        )
    }

}

export default MyDashboard;