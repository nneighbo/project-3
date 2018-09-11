import React from 'react';
// import './MyDashboard.css'

import Table from '../../components/Table'
import TableHead from '../../components/TableHead'
import TableRow from '../../components/TableRow'
import TableBody from '../../components/TableBody'
import PageHeader from '../../components/PageHeader'
import ContentContainer from '../../components/ContentContainer'
import API from "../../utils/API"
import TableHeadCrypto from "../../components/TableHeadCrypto"

class PopularStocks extends React.Component {
    state = {
        stocks: [],
        buttonText: "Switch To Crpyto",
        switchFunction: () => this.renderCrpto(),
        tableHead: <TableHead/>,
        userSavedStocks: [],
        userSavedCoins: [] 
    }

    componentDidMount = () => {
        this.renderStock()
    };

    renderStock = () => {
        let data = [
            API.topFive(),
            API.botFive(),
        ];

        Promise.all(data).then(res => {
            let info = []
            res.forEach((item, i) => {
                item.data.forEach(stock => {
                    info.push({
                        sym: stock.symbol,
                        name: stock.companyName,
                        latestPrice: stock.latestPrice,
                        open: stock.open,
                        prevClose: stock.previousClose,
                        low: stock.low,
                        high: stock.high,
                        change: stock.change,
                        changePerc: stock.changePercent,
                        isSaved: false
                    });
                });
                info.concat(this.state.stocks);
                this.setState({ stocks: info });
            })
        });

        this.setState({ buttonText: "Switch To Crypto", })
        this.setState({ switchFunction: () => this.renderCrpto() })
        this.setState({ tableHead: <TableHead/>})
    }

    renderCrpto = () => {
        API.getCrypto()
            .then(res => {
                let info = []
                res.data.forEach((item, i) => {
                    info.push({
                        sym: item.symbol,
                        name: item.companyName,
                        latestPrice: item.latestPrice,
                        open: item.open,
                        prevClose: item.previousClose,
                        low: item.low,
                        high: item.high,
                        change: item.change,
                        changePerc: item.changePercent,
                        isSaved: false
                    });
                    info.concat(this.state.stocks);
                    this.setState({ stocks: info });
                })
                console.log(info)
            })
            .catch(err => { console.log(err) })

        this.setState({ buttonText: "Switch To Stock", })
        this.setState({ switchFunction: () => this.renderStock() })
        this.setState({ tableHead: <TableHeadCrypto/>})
    }

    render() {
        return (
            <ContentContainer>
                <PageHeader>
                    <h1>Popular Stocks</h1>
                    <button
                        onClick={this.state.switchFunction}
                    >
                        {this.state.buttonText}
                    </button>
                </PageHeader>
                <Table>
                    <TableHead />
                    <TableBody>
                        {this.state.stocks.map((stock, index) => {
                            return (
                                <TableRow
                                    key={stock.sym}
                                    stockNameShort={stock.sym}
                                    stockNameLong={stock.name}
                                    stockLastPrice={stock.latestPrice}
                                    stockOpen={stock.open}
                                    stockPrevClose={stock.prevClose}
                                    stockDayRangeHigh={stock.high}
                                    stockDayRangeLow={stock.low}

                                    // The front end determines
                                    // whether or not the number is
                                    // positive or negative, so all
                                    // you need to do is pass the
                                    // data from the API through

                                    stockDayChangeDollar={stock.change}
                                    stockDayChangePercent={stock.changePerc}

                                    // Whether or not the stock
                                    // is saved determines the
                                    // text and color of the button
                                    stockSaved={stock.isSaved}
                                />
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </ContentContainer>
        )
    }

}

export default PopularStocks;