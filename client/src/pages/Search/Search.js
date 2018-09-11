import React from 'react';
// import './MyDashboard.css'

import Table from '../../components/Table'
import TableHead from '../../components/TableHead'
import TableRow from '../../components/TableRow'
import TableBody from '../../components/TableBody'
import ContentContainer from '../../components/ContentContainer'
import NewsArticle from "../../components/NewsArticle"

import API from "../../utils/API"

// The Search page is the exact same thing as the dashboard and popular pages

class Search extends React.Component {
    state = {
        stock: {},
        coin: {},
        news: [],
        userSavedStocks: [],
        userSavedCoins: [] 
    }

    componentDidMount = () => {
        this.renderData()
    }

    testData = (params) => {
        let search = this.props.match.params.symbol;
        let symbol = this.state.stock.sym
        if (search.toUpperCase() !== symbol) {
            this.renderData()
        }
    }

    renderData = () => {
        let data = [
            API.getStock(this.props.match.params.symbol),
        ];

        Promise.all(data).then(res => {
            let stock = res[0].data.quote;
            let articles = res[0].data.news
            let news = []

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

            articles.forEach(element => {
                news.push({
                    news: {
                        date: element.datatime,
                        headline: element.headline,
                        url: element.url,
                        summary: element.summary,
                    }
                })
            });
            news.concat(this.state.news);
            this.setState({ news: news });
        });
    };
    render() {
        this.testData()

        return (
            <div>
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

                                stockDayChangeDollar={this.state.stock.change}
                                stockDayChangePercent={this.state.stock.changePerc}

                                stockSaved={this.state.stock.isSaved}
                            />
                        </TableBody>
                    </Table>
                </ContentContainer>
                {this.state.news.map((article, i) => {
                    return (
                        <ContentContainer
                            key={i}
                        >
                            <NewsArticle
                                key={i}
                                title={article.news.headline}
                                paragraph={article.news.summary}
                                link={article.news.url}
                            />
                        </ContentContainer>
                    );
                })}
            </div>
        )
    }

}

export default Search;