import React, { Component } from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import browserHistory from '../Utlis/browserHistory';
import NavComponents from './NavComponents';
import FooterComponents from './FooterComponents';

class VerifyCard extends Component {
  throughcash=()=>{
    alert("Successfully Donated, Thank you. Donate Again")
    browserHistory.push('/donate')
  }
  render() {
    return (
      <div className="paymentbg">
        <NavComponents />
        <div>
          <h1 className="pmethod">PAYMENT METHOD</h1>
        </div>
          <StripeCheckOut stripeKey="pk_test_5zoqdatw1nFz8qYKKzrsFCjH00Hdp0tacO"/>
        <div>
          <button type="button" class="pay btn btn-primary" onClick={this.throughcash}>Pay through cash</button>
        </div>
        <div style={{position:"fixed",bottom:0, width:"100%"}}><FooterComponents /></div>
      </div>
    );
  }
}

export default VerifyCard;