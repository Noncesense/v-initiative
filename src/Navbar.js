import React, { Component } from 'react';

class Navbar extends Component {

  render() {

    return (
      <div className='navbar row'>
        <div className='container'>
          <div className='logo-col col-md-2 col-sm-2 col-xs-2'>
              <img src={require('./images/Logo_nav.png')}/>
          </div>
          <div className= 'anchors col-md-10 col-sm-10 col-xs-10'>
            <div className='col-md-8 col-sm-8 col-xs-8'>
            </div>
            <div className='anchor col-md-1 col-sm-1 col-xs-1'>
              <a href='#sectionWhat'><h5>What</h5></a>
            </div>
            <div className='anchor col-md-1 col-sm-1 col-xs-1'>
              <a href='#sectionWhy'><h5>Why</h5></a>
            </div>
            <div className='anchor col-md-1 col-sm-1 col-xs-1'>
              <a href='#sectionHow'><h5>How</h5></a>
            </div>
            <div className='anchor col-md-1 col-sm-1 col-xs-1'>
              <a href='#sectionWho'><h5>Who</h5></a>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Navbar;
