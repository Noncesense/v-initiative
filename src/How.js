import React, { Component } from 'react';

class How extends Component {
  render() {
    return (
      <div className='how'>
        <div className='container'>
          <div className='row section'>
            <div className='col-md-6 description'>
              <h3>HOW</h3>
              <h4>Decentralizing Security</h4>
              <p>Current systems of internet security have been based around a centralized system. A fortress if you will, who’s security lies in the size of its walls. And when attacked for long enough, with enough force, could be penetrated.<br /><br />V initiative looks at a concept of decentralizing this security to the public domain. And best of all, there is already cryptographic precedent!</p>
            </div>
            <div className='col-md-6 maze'>
              <img src={require('./images/security_icon.png')}/>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default How;
