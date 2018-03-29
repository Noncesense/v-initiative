import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Cover from './Cover.js';
import What from './What.js';
import Why from './Why.js';
import How from './How.js';
import Merkle from './Merkle';
import Zeroknowledge from './Zeroknowledge';
import Ip from './Ip';
import Who from './Who';
import Help from './Help';
import Spread from './Spread';
import Contact from './Contact';
import Footer from './Footer';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToAnchor } from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({offset: -50})

class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <Cover />
          <ScrollableAnchor id={'sectionWhat'}>
            <What />
          </ScrollableAnchor>
          <ScrollableAnchor id={'sectionWhy'}>
            <Why />
          </ScrollableAnchor>
          <ScrollableAnchor id={'sectionHow'}>
            <How />
          </ScrollableAnchor>
          <Merkle />
          <Zeroknowledge />
          <Ip />
          <ScrollableAnchor id={'sectionWho'}>
            <Who />
          </ScrollableAnchor>
          <Help />
          <Spread />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
