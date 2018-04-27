import React, { Component } from 'react';

class What extends Component {
  render() {
    return (
      <div className='what'>
        <div className='container'>
          <div className='row section'>
            <div className='col-md-5 description'>
              <h3>What</h3>
              <h4>The V initiative is about to building a better future.</h4>
              <p>At the V initiative we are pooling our knowledge on network based systems and security to tackle online digital voting for the masses.<br /><br />We are working on new open source security protocals that will help us move democracy into the digital age.<br /><br />We are currently working on these solutons with voter associations and the open source community to create transparency around the technology.<br /><br/>Our goal is to be able to distribute 100% fraud proof 100% anonymous digital votes so that we can re-imagine the way democarcy works in a digital age, where citizens can take a more active roll in the political process and build in further checks and balances to rid political coruption from modern society.</p>
            </div>
            <div className='col-md-7 icon-points'>
              <div className='row'>
                <div className='col-md-6 icon-point'>
                  <img src={require('./images/1.png')} />
                  <h4>Digital Voting Solutions</h4>
                  <p>Finding secure digital solutions for voting over the internet and via mobile devices.</p>
                </div>
                <div className='col-md-6 icon-point'>
                  <img src={require('./images/2.png')}/>
                  <h4>100% Fraud Proof</h4>
                  <p>Developing new authentication and cryptographic concepts to eliminate fraud, which riddles our current offline voting systems.</p>
                </div>
              </div>
              <div className='row bottom-row'>
                <div className='col-md-6 icon-point'>
                  <img src={require('./images/3.png')}/>
                  <h4>Open Source</h4>
                  <p>Working with open source software to place the verification and security in the  public domain and work with the open source community on tackling digital voting.</p>
                </div>
                <div className='col-md-6 icon-point'>
                  <img src={require('./images/4.png')} />
                  <h4>100% Anonymous</h4>
                  <p>Repurposing existing digital technology to guarantee voter anonymity during the online election process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      )
  }
}

export default What;
