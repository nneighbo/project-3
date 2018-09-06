import React, { Component } from 'react';

import Container from './components/Container'

import NavColumn from './components/NavColumn'
import ContentColumn from './components/ContentColumn'

import NavSide from './components/NavSide'
import NavTop from './components/NavTop'

import navItems from './navItems.json'

import MyDashboard from './components/MyDashboard'

import './App.css';
// import API from "./utils/API.js"


class App extends Component {
  // state = {
  //   stocks: [],
  //   crypt: [],
  //   bto: [],
  //   amc: [],
  //   top: [],
  //   bot: []
  // };

  // loadStocks = sym => {
  //   API.getStock(sym)
  //     .then(res => {
  //       this.setState({
  //         stocks: {
  //          name: res.data.quote.companyName,
  //          latestPrice: res.data.quote.latestPrice,
  //          open: res.data.quote.open,
  //          prevClose: res.data.quote.previousClose,
  //          low: res.data.quote.low,
  //          high: res.data.quote.high,
  //          change: res.data.quote.change,
  //          changePerc: res.data.quote.changePercent
  //         }
  //       })
  //     })
  //     .catch(err => { console.log(err) })
  // };

  // loadCrpto = sym => {
  //   API.getCrypto(sym)
  //   .then(res => {
  //     this.setState({
  //       crypt: {
  //         name: res.data.quote.companyName,
  //         latestPrice: res.data.quote.latestPrice,
  //         open: res.data.quote.open,
  //         prevClose: res.data.quote.previousClose,
  //         low: res.data.quote.low,
  //         high: res.data.quote.high,
  //         change: res.data.quote.change,
  //         changePerc: res.data.quote.changePercent
  //       }
  //     })
  //   })
  //   .catch(err => {console.log(err)})
  // }

  // getBto = () => {
  //   API.getTodaysEarnings()
  //   .then(res => {
  //     res.data.bto.map((item,i) => {
  //       this.setState({
  //         bto: {
  //           name: item.quote.companyName,
  //           latestPrice: item.quote.latestPrice,
  //           open: item.quote.open,
  //           prevClose: item.quote.previousClose,
  //           low: item.quote.low,
  //           high: item.quote.high,
  //           change: item.quote.change,
  //           changePerc: item.quote.changePercent
  //         }
  //       }) 
  //     })
  //   })
  //   .catch(err => {console.log(err)})
  // }

  // getAmc = () => {
  //   API.getTodaysEarnings()
  //   .then(res => {
  //     res.data.amc.map((item,i) => {
  //       this.setState({
  //         amc: {
  //           name: item.quote.companyName,
  //           latestPrice: item.quote.latestPrice,
  //           open: item.quote.open,
  //           prevClose: item.quote.previousClose,
  //           low: item.quote.low,
  //           high: item.quote.high,
  //           change: item.quote.change,
  //           changePerc: item.quote.changePercent
  //         }
  //       })
  //     })
  //   })
  //   .catch(err => {console.log(err)})
  // }

  // botFive = () => {
  //   API.botFive()
  //   .then(res => {
  //     res.data.map((item,i) => {
  //       this.setState({
  //         bot: {
  //           name: item.companyName,
  //           latestPrice: item.latestPrice,
  //           open: item.open,
  //           prevClose: item.previousClose,
  //           low: item.low,
  //           high: item.high,
  //           change: item.change,
  //           changePerc: item.changePercent
  //         }
  //       })
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

  // topFive = () => {
  //   API.topFive()
  //   .then(res => {
  //     res.data.map((item,i) => {
  //       this.setState({
  //         top: {
  //           name: item.companyName,
  //           latestPrice: item.latestPrice,
  //           open: item.open,
  //           prevClose: item.previousClose,
  //           low: item.low,
  //           high: item.high,
  //           change: item.change,
  //           changePerc: item.changePercent
  //         }
  //       })
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

  // componentDidMount = () => {
  //   this.loadStocks("aapl");
  //   this.loadCrpto("btc"+"USDT")
  //   this.getBto()
  //   this.getAmc()
  //   this.botFive()
  //   this.topFive()
  // };

  render() {
    return (
      <Container>
        <NavColumn>
          <NavSide items={navItems} />
        </NavColumn>

        <ContentColumn>
          <NavTop />
          {/* My Dashboard is a page and currently is in components */}
          <MyDashboard />
        </ContentColumn>
      </Container>
    );
  }
}

export default App;
