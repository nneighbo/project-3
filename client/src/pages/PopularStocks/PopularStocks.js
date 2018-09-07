import React from 'react';
// import './MyDashboard.css'

import Table from '../../components/Table'
import TableHead from '../../components/TableHead'
import TableRow from '../../components/TableRow'
import TableBody from '../../components/TableBody'
import ContentContainer from '../../components/ContentContainer'
import API from "../../utils/API"

class PopularStocks extends React.Component {
    state = {
        stocks: []
    }

    getBto = () => {
        API.getTodaysEarnings()
            .then(res => {
                res.data.bto.map((item, i) => {
                    // this.setState({
                    //   stocks: [{
                    //     name: item.quote.companyName,
                    //     latestPrice: item.quote.latestPrice,
                    //     open: item.quote.open,
                    //     prevClose: item.quote.previousClose,
                    //     low: item.quote.low,
                    //     high: item.quote.high,
                    //     change: item.quote.change,
                    //     changePerc: item.quote.changePercent
                    //   }]
                    // }) 
                    console.log(item)
                })
            })
            .catch(err => { console.log(err) })
    }

    getAmc = () => {
        API.getTodaysEarnings()
            .then(res => {
                res.data.amc.map((item, i) => {
                    // this.setState({
                    //     stocks: [{
                    //         name: item.quote.companyName,
                    //         latestPrice: item.quote.latestPrice,
                    //         open: item.quote.open,
                    //         prevClose: item.quote.previousClose,
                    //         low: item.quote.low,
                    //         high: item.quote.high,
                    //         change: item.quote.change,
                    //         changePerc: item.quote.changePercent
                    //     }]
                    // })
                })
            })
            .catch(err => { console.log(err) })
    }

    botFive = () => {
        API.botFive()
            .then(res => {
                let data = [];
                res.data.map((item, i) => {
                    data.push({
                        name: item.companyName,
                        latestPrice: item.latestPrice,
                        open: item.open,
                        prevClose: item.previousClose,
                        low: item.low,
                        high: item.high,
                        change: item.change,
                        changePerc: item.changePercent
                    });
                });
                data.concat(this.state.stocks);
                this.setState({ stocks: data });
            })
            .catch(err => console.log(err))
    }


    topFive = () => {
        return API.topFive();
    }

    componentDidMount = () => {

        // this.getBto()
        // this.getAmc()
        let data = [
            API.topFive(),
            API.botFive()
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

    };

    render() {
        console.log(this.state)
        return (
            <ContentContainer>
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
                        })}
                    </TableBody>
                </Table>
            </ContentContainer>
        )
    }

}

export default PopularStocks;