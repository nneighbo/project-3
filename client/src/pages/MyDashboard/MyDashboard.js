import React from 'react';
// import './MyDashboard.css'

import Table from '../../components/Table'
import TableHead from '../../components/TableHead'
import TableRow from '../../components/TableRow'
import TableBody from '../../components/TableBody'
import PageHeader from '../../components/PageHeader'
import ContentContainer from '../../components/ContentContainer'
import TableHeadCrypto from "../../components/TableHeadCrypto"
import API from "../../utils/API"
import { throws } from 'assert';

class MyDashboard extends React.Component {
    state = {
        stocks: [],
        coins: [],
        stockSymbols: ["aapl", "PRQR", "RMNI", "SIEB"],
        cryptoSymbols: ["BTCUSDT", "ETHUSDT", "EOSUSDT", "TLRY"]
    }

    renderStocks = (stockSymbols) => {
        API.userStocks(stockSymbols)
            .then(res => {
                let items = []
                // res.data.forEach(element => {
                //     items.push({
                //         sym: element.symbol,
                //         name: element.companyName,
                //         latestPrice: element.latestPrice,
                //         open: element.open,
                //         prevClose: element.previousClose,
                //         low: element.low,
                //         high: element.high,
                //         change: element.change,
                //         changePerc: element.changePercent,
                //         isSaved: true
                //     })
                // });
                console.log(res.data)
            })
            .catch(err => { console.log(err) })
    }

    renderCoins = (cryptoSymbols) => {
        API.userStocks(cryptoSymbols)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => { console.log(err) })
    }

    componentDidMount = () => {
        this.renderCoins(this.state.cryptoSymbols.join(","));
        this.renderStocks(this.state.stockSymbols.join(","));
    }

    render() {
        return (
            <div>
                <ContentContainer>
                    <PageHeader>
                        <h1>My Dashboard</h1>
                        <div></div>
                    </PageHeader>
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
                <ContentContainer>
                    <Table>
                        <TableHeadCrypto />
                        <TableBody>
                            <TableRow
                                stockNameShort="BTCUSDT"
                                stockNameLong="BitCoin"
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
            </div>
        )
    }

}

export default MyDashboard;