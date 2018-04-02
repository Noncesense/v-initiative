import React, { Component } from 'react';

class Help extends Component {
  render() {
    return (
      <div className='help'>
        <div className='container'>
          <div className='row section'>
            <div className='col-md-6 col-lg-push-6 description'>
              <h3>How can you help?</h3>
              <h4>Engineer? Advocate? Elected Official?</h4>
              <p>We are calling on any engineers in the open source community to help us with the conceptualisation and implimentation of these systems and to help us test the software in non political settings, in full view of the community.<br /><br />The roadmap to secure electronic elections is a long one and any organisations involved with the movement are welcome. Elected officals that wish to learn more about our technologies and how this may be implemented should also get in touch!</p>
            </div>
            <div className='col-md-6 col-lg-pull-6 help-form'>
              <form action="">
                <div class="form-group">
                  <label for="name"></label>
                  <input type="name" class="form-control" id="name" placeholder="Your name..." name="name"/>
                </div>
                <div class="form-group">
                  <label for="organisation"></label>
                  <input type="organisation" class="form-control" id="organisation" placeholder="Name of your organisation..." name="organisation"/>
                </div>
                <div class="form-group">
                  <label for="email"></label>
                  <input type="email" class="form-control email" id="email" placeholder="Your email..." name="email"/>
                </div>
                <button type="submit" class="btn btn-default submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Help;
