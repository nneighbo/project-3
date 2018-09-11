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


class MyDashboard extends React.Component {
    state = {
        stocks: [],
        coins: [],
        stockSymbols: ["AAPL", "PRQR", "RMNI", "SIEB"],
        cryptoSymbols: ["BTCUSDT", "ETHUSDT", "EOSUSDT"],
        user: ""
    }

    getuser = ()=>{
        API.getuser().then(res=>{
            let user= res.data._id
            // console.log(res.data._id)
            if(this.state.user !== user && user !== undefined){
                this.setState({user:user})
            }
        }).then(res=>{
            if(this.state.user===""){
                this.props.history.push(`/login/`)
            }else{
                this.getSaved(this.state.user)
            }
        })
        .catch(err => console.log(err));
    }

    getSaved = (id) =>{
        API.getSaved(id).then(res=>{
            console.log(res.data)
        }).catch(err => console.log(err))
    }

    renderStocks = (stockSymbols) => {
        API.userStocks(stockSymbols)
            .then(res => {
                let info = []
                Object.keys(res.data).map((item, i) => {
                    info.push({
                        sym: res.data[item].quote.symbol,
                        name: res.data[item].quote.companyName,
                        latestPrice: res.data[item].quote.latestPrice,
                        open: res.data[item].quote.open,
                        prevClose: res.data[item].quote.previousClose,
                        low: res.data[item].quote.low,
                        high: res.data[item].quote.high,
                        change: res.data[item].quote.change,
                        changePerc: res.data[item].quote.changePercent,
                        isSaved: true
                    })
                })
                info.concat(this.state.stocks);
                this.setState({ stocks: info });
            })
            .catch(err => { console.log(err) })
    }

    renderCoins = (cryptoSymbols) => {
        API.userStocks(cryptoSymbols)
            .then(res => {
                let info = []
                Object.keys(res.data).map((item, i) => {
                    info.push({
                        sym: res.data[item].quote.symbol,
                        name: res.data[item].quote.companyName,
                        latestPrice: res.data[item].quote.latestPrice,
                        open: res.data[item].quote.open,
                        prevClose: res.data[item].quote.previousClose,
                        low: res.data[item].quote.low,
                        high: res.data[item].quote.high,
                        change: res.data[item].quote.change,
                        changePerc: res.data[item].quote.changePercent,
                        isSaved: true
                    })
                })
                info.concat(this.state.coins);
                this.setState({ coins: info });
            })
            .catch(err => { console.log(err) })
    }

    componentDidMount = () => {
        this.getuser()
        // this.getSaved(this.state.user.id)
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
                <ContentContainer>
                    <Table>
                        <TableHeadCrypto />
                        <TableBody>
                            {this.state.coins.map((stock, index) => {
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
            </div>
        )
    }

}

export default MyDashboard;