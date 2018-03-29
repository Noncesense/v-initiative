import React, { Component } from 'react';

class Merkle extends Component {
  render() {
    return (
      <div className='merkle'>
        <div className='container'>
          <div className='row section'>
            <div className='col-md-7 merkle-tree'>
              <img src={require('./images/InfoGraphic.png')} />
            </div>
            <div className='col-md-5 bitcoin-precedent'>
              <h4>The ‘Bitcoin’ precedent & repurposing of the blockchain methodology.</h4>
              <p>The invention of bitcoin was a true innovation in digital crypto currency. However it was also a magnificant step forward in decentralized security. The bitcoin blockchain is essentially a blueprint of verification by the masses. In essence there is no central authority or ‘fortress’ in bitcoin. It is cryptographically secured and verified by its community in full view of everyone. Transparency is its biggest form of security.<br /><br />If applied to other verticals, this technology could be the key to creating a publically verifiable, totally secure voting technology.<br /><br />One major issue with repurposing this totally open source code, is that bitcoin is not anonymous, its pseudonymous. This means that a user’s anonymity is safeguarded via that users chosen pseudonyms, or ‘usernames’ if you will. To fix this part a new protocal has been proposed.<br /><br />The ‘Zero Coin’ protocol and Zero Knowledge Proofs.</p>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Merkle;
