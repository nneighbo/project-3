import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Container from './components/Container'
import NavColumn from './components/NavColumn'
import NavSide from './components/NavSide'
import NavTop from './components/NavTop'
import ContentColumn from './components/ContentColumn'

import navItems from './navItems.json'

import './App.css';

import Dashboard from "./pages/Dashboard/Dashboard";
import error from "./pages/error/errorpage"
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
        <Route exact path="/" component={Dashboard} />
        <Route component={error}/>
      </Switch>
        </ContentColumn>
      </Container>
    </div>
  </Router>
);

export default App;
