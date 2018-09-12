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
        tableHead: <TableHead />,
        user: {
            id: "",
            savedCoins: [],
            savedStocks: []
        }
    }

    componentDidMount = () => {
        this.renderStock()
    };

    // getuser = () => {
    //     API.getuser()
    //         .then(res => {
    //             let user = res.data._id
    //             if (this.state.user !== user && user !== undefined) {
    //                 this.setState({ user: user })
    //             }
    //         })
    //         .then(res => {
    //             if (this.state.user === "") {
    //                 this.props.history.push(`/login/`)
    //             } else {
    //                 this.getSaved(this.state.user)
    //             }
    //         })
    //         .catch(err => console.log(err));
    // }

    // checkSaved = (arr1, arr2) => {
    //     // pull in and sort arrays
    //     let saved = arr1.sort()
    //     let unsorted = []
    //     Object.keys(arr2).map((item, i) => {
    //         unsorted.push(arr2[item].sym)
    //     })
    //     let data = unsorted.sort()
    //     // pull in and sort arrays

    //     // go through sorted array
    //     data.forEach((item, i) => {
    //         // check if matches other array
    //         if (data.includes(saved[i])) {
    //             // sets match to variable
    //             let current = saved[i]
    //             // maps state object
    //             console.log
    //             Object.keys(arr2).map((item, z) => {
    //                 console.log("fsadd")
    //                 if (current === arr2[item].sym) {
    //                     let newStock = Object.assign({}, this.state.stocks[z])
    //                     newStock.isSaved = true;
    //                     console.log("fjdsal")

    //                     this.setState({
    //                         stocks: newStock
    //                     })
    //                 }
    //             })
    //         }
    //     })
    // }


    // getSaved = (id) => {
    //     API.getSaved(id)
    //         .then(res => {
    //             let symbols = res.data.stocks
    //             let coin = []
    //             let stock = []
    //             symbols.forEach((item, i) => {
    //                 if (symbols[i].includes('USDT')) {
    //                     coin.push(symbols[i])
    //                 } else {
    //                     stock.push(symbols[i])
    //                 }
    //             })

    //             coin.concat(this.state.user.savedCoins);
    //             stock.concat(this.state.user.savedStocks);
    //             this.setState({
    //                 user: {
    //                     savedCoins: coin,
    //                     savedStocks: stock
    //                 }
    //             });
    //             this.renderStock()
    //         }).catch(err => console.log(err))
    // }

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
        this.setState({ tableHead: <TableHead /> })

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
            })
            .catch(err => { console.log(err) })

        this.setState({ buttonText: "Switch To Stock", })
        this.setState({ switchFunction: () => this.renderStock() })
        this.setState({ tableHead: <TableHeadCrypto /> })
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