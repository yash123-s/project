import React, { Component } from 'react';
import '../css/home.css';
import NavComponents from '../Components/NavComponents';
import FooterComponents from '../Components/FooterComponents';

class homeComponents extends Component {
  constructor(){
    super()
      this.state={
        showMe:false
      }
    }
  Operation()
{
  this.setState({
showMe:!this.state.showMe
  })
}
  render() {
    return (
      <div>
        <NavComponents/>
        <div className="backgroundhome">
          <div><h1 className="heading">Your Donation is others<br/> inspiration</h1></div>
          {
            this.state.showMe?
            <div className="hide">Experience More Pleasure,We don’t live in a perfect world, and there’s never going to be a perfect time to give—but there are always people out there in need of help. Whether interest rates are rising, the economy is in the doldrums, or even if you’re experiencing financial difficulties of your own, the reality is that when you donate your money, you help others who need it.</div>
            :null
          }
          <button className="readmore" onClick={()=>this.Operation()}>Read</button>
          
          <div className="para">
            Please help them and donate now
            <button className="donatenow"><a href="/donate">Donate Now  </a></button>
          </div>
        </div>
        <div><FooterComponents /></div>
      </div>
    );
  }
}


export default homeComponents;