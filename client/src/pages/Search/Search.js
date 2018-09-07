import React from 'react';
// import './MyDashboard.css'

import Table from '../../components/Table'
import TableHead from '../../components/TableHead'
import TableRow from '../../components/TableRow'
import TableBody from '../../components/TableBody'
import ContentContainer from '../../components/ContentContainer'

import API from "../../utils/API"

// The Search page is the exact same thing as the dashboard and popular pages

class Search extends React.Component {
    state = {
        stock: {},
        coin: {},
        news: []
    }

    componentDidMount = () => {
        let data = [
            API.getStock(this.props.match.params.symbol),
            API.getCrypto(this.props.match.params.symbol + "USDT")
        ];

        Promise.all(data).then(res => {
            let stock = res[0].data.quote;
            let crypto = res[0].data.quote;
            console.log(res[0].data);

            this.setState({
                stock: {
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
                }
            });

            this.setState({
                coin: {
                    sym: crypto.symbol,
                    name: crypto.companyName,
                    latestPrice: crypto.latestPrice,
                    open: crypto.open,
                    prevClose: crypto.previousClose,
                    low: crypto.low,
                    high: crypto.high,
                    change: crypto.change,
                    changePerc: crypto.changePercent,
                    isSaved: false
                }
            });

        });
    };
    render() {
        console.log(this.state.coin)
        return (
            <ContentContainer>
                <Table>
                    <TableHead />
                    <TableBody>
                        <TableRow
                            key={this.state.stock.sym}
                            stockNameShort={this.state.stock.sym}
                            stockNameLong={this.state.stock.name}
                            stockLastPrice={this.state.stock.latestPrice}
                            stockOpen={this.state.stock.open}
                            stockPrevClose={this.state.stock.prevClose}
                            stockDayRangeHigh={this.state.stock.high}
                            stockDayRangeLow={this.state.stock.low}

                            // The front end determines
                            // whether or not the number is
                            // positive or negative, so all
                            // you need to do is pass the
                            // data from the API through

                            stockDayChangeDollar={this.state.stock.change}
                            stockDayChangePercent={this.state.stock.changePerc}

                            // Whether or not the stock
                            // is saved determines the
                            // text and color of the button
                            stockSaved={this.state.stock.isSaved}
                        />
                    </TableBody>
                </Table>
            </ContentContainer>
        )
    }

}

export default Search;