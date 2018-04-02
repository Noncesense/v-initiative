import React, { Component } from 'react';

class Why extends Component {
  render() {
    return (
      <div className='why'>
        <div className='container'>
          <div className='row section'>
            <div className='col-md-6 description'>
              <h3>Why</h3>
              <h4>The current voting systems are obsolete and democracy is in its current form is being gamed by the modern era.</h4>
              <p>The freedom of information afforded by large scale internet access in modern society permits a great deal more possiblities for self governance than was the case several hundred years ago when the modern representative democratic system was conceived. This combined with the information age and tech revolution has provided society with the technological tools to tackle politics.</p>
              <img src={require('./images/why_graph.png')}/>
            </div>
            <div className='col-md-6 description-right'>
              <p>These developments come at a time when there are more constituents per congressman than ever before and record lobbying and campaign contributions pushing for special interests, all of which undermine the inherent weaknesses of the current democratic model.<br/><br/>The result of this is a record low voter turnout demonstrating a general disengagement and public disenfranchisement towards the political system.<br/><br/>The V initiative proposes that by providing voters with a more direct influence over the decision making process, as well as achieving greater efficiency and transparency regarding the tools used to measure that influence, will result in a more accountable and credible system and therefore a more active and engaged electorate. An important part of building this future is a secure open source online voting system which guarentees voter anonymity.</p>
            </div>
          </div>
        </div>
      </div>

      )
  }
}

export default Why;
