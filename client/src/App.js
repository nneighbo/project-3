import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

import Container from './components/Container'

import NavColumn from './components/NavColumn'
import ContentColumn from './components/ContentColumn'

import NavSide from './components/NavSide'
import NavTop from './components/NavTop'

import './App.css';

import navItems from './navItems.json'

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
      </Switch>
        </ContentColumn>
      </Container>
    </div>
  </Router>
);

export default App;
