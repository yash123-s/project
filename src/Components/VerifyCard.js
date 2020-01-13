import React, { Component } from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import browserHistory from '../Utlis/browserHistory';
class VerifyCard extends Component {
  throughcash=()=>{
    alert("Successfully Donated, Thank you. Donate Again")
    browserHistory.push('/donate')
  }
  render() {
    return (
      <div>
        <div>
          <h1>PAYMENT METHOD</h1>
        </div>
        <StripeCheckOut
        stripeKey="pk_test_5zoqdatw1nFz8qYKKzrsFCjH00Hdp0tacO"/>
        <div>
          <button type="button" class="btn btn-primary" onClick={this.throughcash}>Pay through cash</button>
        </div>
      </div>
    );
  }
}

export default VerifyCard;