import React, { Component } from 'react';
import NavComponents from '../Components/NavComponents';
import browserHistory from '../Utlis/browserHistory';
import '../css/donate.css';
import axios from 'axios'; 
import card1 from '../images/paypal.png';
import card2 from '../images/mastercard.png';
import card3 from '../images/Gold_Card.png';
import card4 from '../images/discover.png';
import { connect } from 'react-redux';
import {donateHandle} from '../Action/DonateAction';

class DonatePage extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      email:'',
      project:'Children Education',
      amounttype:'Rupees',
      message:'',
      amount:'',
      fnameError:'',
      lnameError:'',
      emailError:''
      }
      }
    handleSubmit = () => {
    const { firstname,lastname,email,project,amounttype,amount,message} = this.state
    const payload = {firstname,lastname,email,project,amounttype,amount,message}
    
    let reg_user=/^[A-Za-z0-9]{2,10}$/;
    let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let t=0;
    if(!this.state.firstname) this.setState({fnameError:'Firstname is required'});
    else if(!reg_user.test(this.state.firstname)) this.setState({fnameError:'Invalid Firstname'});
    else{
    t++;
    this.setState({fnameError:''});
    }
    
    if(!this.state.lastname) this.setState({lnameError:'Lastname is required'});
    else if(!reg_user.test(this.state.lastname)) this.setState({lnameError:'Invalid Lastname'}); 
    else {
    t++;
    this.setState({lnameError:''});
    }
    if(!this.state.email) this.setState({emailError:'Email is required'});
    else if(!reg_email.test(this.state.email)) this.setState({emailError:'Invalid Email'}); 
    else {
    t++;
    this.setState({emailError:''});
    }
    if(t>2) {
      this.props.donateHandle(payload);
      browserHistory.push('/card')
      // alert("Donated successfully, Thank you keep donating")
    } 
  }
    
    handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }
    
  render() {
    return (
      <div>
        <NavComponents />
        <div className="donatebg">
          <div className="donatebgcolor">
       
          <h1>Donate to THE CHARITY</h1>
          <h3>Visit to: Vinayakanagar 570001,Mysore </h3>
          <h4>Contact: 9036167656</h4>
       
        <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="donateleftpara">
          <p>
              A charitable donation is a gift made by an individual or an organization to a 
              nonprofit organization, charity, or private foundation. Charitable donations 
              are commonly in the form of cash, but they can also take the form of real 
              estate, motor vehicles, appreciated securities, clothing, and other assets or 
              services.
          </p>
          <p>
              1.Use Your Checkbook. Donating to a charity by writing a check is still the most
              common form of philanthropy in the world.
          </p>
          <p>
              2.To Give Online, fill the form and press <b>DONATE</b>.
          </p>

          <div className="cards">
            We accept:
            <img src={card1} className="cardimage"/>
            <img src={card2} className="cardimage"/>
            <img src={card3} className="cardimage"/>
            <img src={card4} className="cardimage"/>
          </div>
        </div>
        </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form>
              <select name='project' onChange={this.handleChange} className="donateoptions">
                  <option value="Children Education" >Children Education</option>
                  <option value="Flood effected region">Flood effected region</option>
                  <option value="Old age orphanage">Old age orphanage</option>
                  <option value="Orphan's shelter">Orphan's shelter</option>
              </select>
            </form>
            <div className="credentials">Note: *Enter the credentials to proceed the payment</div>
          <div>
            <form onSubmit={this.handleSubmit} className='signup_form'> 
             
            <div className="register">
              <input type='text' name='firstname' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter First Name'></input>
              <p className='red'>{this.state.fnameError}</p>
      
              <input type='text' name='lastname' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter Last Name'></input>
              <p className='red'>{this.state.lnameError}</p>

              <input type='text' name='email' onChange={this.handleChange} className='inputtran input_box' placeholder='Enter Email'></input>
              <p className='red'>{this.state.emailError}</p>
            <div>
              <input name="amount" onChange={this.handleChange} className="inputdonation" type="text" placeholder="Donation amount(USD)"></input>
              <select name="amounttype" onChange={this.handleChange} className="rupees">
                <option value="Rupees">Rupees</option>
                <option value="$">$</option>
              </select>
            </div>
              <div>
                <input name="message" onChange={this.handleChange} className="textfield" type="text" name="message" placeholder="type what you feel about donation"></input>
              </div>
              <button type="button" onClick={this.handleSubmit} class="donatebtn btn btn-success signup_btn">Donate</button>
              <button class="donatebtn btn btn-success signup_btn" color="danger" onClick={this.toggle}>Cancel</button>
            </div>
            <div>
             
            </div>
            </form>
          </div>
          </div>
          
          </div>
          </div>
      </div>
      </div>
  );
}
}
// class DonateGet extends Component{
//   state = { donars:[]}
//   componentDidMount(){
//       axios.get('http://localhost:8212/donate')
//       .then(res => {
//           this.setState({donars: res.data});
//           console.log(this.state.users);
//       });
//   }
// }

const mapStateToProps=(state)=>{
  const {firstname,lastname,email,project,amounttype,amount,message}=state.DonateReducer
  return {firstname,lastname,email,project,amounttype,amount,message}
}
export default connect(mapStateToProps,{donateHandle})  (DonatePage);
