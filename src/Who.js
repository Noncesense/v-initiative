import React, { Component } from 'react';

class Who extends Component {
  render() {
    return (
      <div className='who'>
        <div className='container'>
          <div className='row section'>
            <div className='col-md-6 description'>
              <h3>Who</h3>
              <h4>A Collaboration</h4>
              <p>The V initiative is a collaboration. We are working closely with the California Association of Voter Officials aswell as with the open source community. These solutions need to be discussed and scrutinized in public, which is why the input of the open source community is so important to us. For this technology to be effective and empower democracy its creation must also include as many organisations and individuals as possible. </p>
            </div>
            <div className='col-md-6 heart'>
              <img src={require('./images/Heart.png')}/>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Who;
