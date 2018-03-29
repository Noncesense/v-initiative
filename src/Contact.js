import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className='contact'>
        <div className='container'>
          <div className='row section'>
            <div className='col-md-6 newsletter'>
              <h5>Signup For Our Newsletter.</h5>
              <form action="">
                <div class="form-group">
                  <label for="name"></label>
                  <input type="name" class="form-control" id="name" placeholder="Type in your email..." name="name"/>
                  <button type="submit" class="btn btn-default submit">Submit</button>
                </div>
              </form>
            </div>
            <div className='col-md-6 description'>
              <h5>Contact Us.</h5>
              <h5>ask@v-initiative.com</h5>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Contact;
