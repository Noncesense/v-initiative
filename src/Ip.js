import React, { Component } from 'react';

class Ip extends Component {
  render() {
    return (
      <div className='ip'>
        <div className='container'>
          <div className='row section'>
            <div className='col-md-6 ip-maze'>
              <img src={require('./images/Ip_icon.png')}/>
            </div>
            <div className='col-md-6 description'>
              <h3></h3>
              <h4>Ip Masking</h4>
              <p>The final piece of the puzzle would then consist of an IP masking software, such as the more famous ‘TOR’ program to make absolutely sure that no votes could be traced back to an IP address. This would ensure that large data mining attempts by any types of institutions or agencies would be impossible. Safe guarding voter anonymity is something we are serious about, and believe must be the taken into account if mass digital voting is to occur.</p>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Ip;
