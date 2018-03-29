import React, { Component } from 'react';

class Zeroknowledge extends Component {
  render() {
    return (
      <div className='zk'>
        <div className='container'>
          <div className='row section'>
            <div className='col-md-6 description'>
              <h3></h3>
              <h4>Zero Knowledge Proofs & Zero Coin</h4>
              <p>The Zero Knowledge proof is a mathematical function used in cryptography to solve a simple question; How do we prove you know a secret, without you ever actually telling us the secret. Its application to bitcoin would mean the ability to remove any form of identity or footprint from the equation, while maintaing the ability to verify validity. It’s implemnetation is currently being tested and if you wish to understand more there are numerous research articles on the topic.<br /><br />On a practical level the implementation of such open source code in a voting blockchain scheme would allow for a system that could both verify the authenticity of each vote belonging to a registered voter while totally anonymizing said voter.</p>
            </div>
            <div className='col-md-6 zk-maze'>
              <img src={require('./images/zk.png')}/>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Zeroknowledge;
