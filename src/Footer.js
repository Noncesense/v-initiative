import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div id="banner" className="text-left full-width footer-background footer">
        <div className="container">
          <div className="row section">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <h4>New York, NY</h4>
              <h4>USA</h4>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6 footer-buttons">
            <div>
              <button className="btn btn-defualt">Get Directions</button>
            </div>
            <div>
              <button className="btn btn-defualt">Check Out V-App</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Footer;
