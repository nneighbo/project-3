import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Container from './components/Container'
import NavColumn from './components/NavColumn'
import NavSide from './components/NavSide'
import NavTop from './components/NavTop'
import ContentColumn from './components/ContentColumn'

import navItems from './navItems.json'

import './App.css';

import MyDashboard from "./pages/MyDashboard/MyDashboard";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import PopularStocks from "./pages/PopularStocks/PopularStocks";

// import API from "./utils/API.js"

const App = () => (
  <Router>
    <div>
      <Container>
        <NavColumn>
          <NavSide items={navItems} />
        </NavColumn>
        <ContentColumn>
          <NavTop />
          <Switch>
            <Route exact path="/dashboard" component={MyDashboard} />
            <Route exact path="/popular" component={PopularStocks} />
            <Route component={ErrorPage} />
          </Switch>
        </ContentColumn>
      </Container>
    </div>
  </Router>
);

export default App;
