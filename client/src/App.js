import React, { Component } from 'react';

import Container from './components/Container'

import NavColumn from './components/NavColumn'
import ContentColumn from './components/ContentColumn'

import NavSide from './components/NavSide'
import NavTop from './components/NavTop'

import navItems from './navItems.json'

// import MyDashboard from './components/MyDashboard'

import './App.css';


class App extends Component {
  render() {
    return (
      <Container>
        <NavColumn>
          <NavSide items={navItems} />
        </NavColumn>

        <ContentColumn>
          <NavTop />
          {/* My Dashboard is a page and currently is in components */}
          {/* <MyDashboard /> */}
        </ContentColumn>
      </Container>
    );
  }
}

export default App;
