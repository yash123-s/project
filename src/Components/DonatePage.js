import React, { Component } from 'react';
import NavComponents from '../Components/NavComponents';
import browserHistory from '../Utlis/browserHistory';
import '../css/donate.css';
import card1 from '../images/paypal.png';
import card2 from '../images/mastercard.png';
import card3 from '../images/Gold_Card.png';
import card4 from '../images/discover.png';

class DonatePage extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      fnameError:'',
      lnameError:'',
      emailError:'',
    // modal: false,login_modal: false, 
    }
    }
    handleSubmit = () => {
    // const { firstname,lastname,email,password,mobile } = this.state
    // const payload = { firstname,lastname,email,password,mobile }
    
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
    if(t>4) {
    console.log(this.state)
//  .signup(payload).then(res => {
//     this.setState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password:'',
//     mobile:''
//     })
    // console.log('hello')
    // browserHistory.push("/");
    // });
    
    } 
  }
    
    handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }
    handleSignin=()=>{
    const { firstname,lastname,email} = this.state;
    const payload = { firstname,lastname,email }
    // const signinRes = await api.signin(payload)
    // sessionStorage.setItem('authentication', signinRes.data.token)
    // sessionStorage.setItem('userEmail', signinRes.data.email)
    // .then(res => {
    // const token = res.data.token;
    // localStorage.setItem('jwtToken',token);
    // setAuthorizationToken(token);
    // })
    browserHistory.push("/title");
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
              <select className="donateoptions">
                  <option>Children Education</option>
                  <option>Funds for Flood effected region</option>
                  <option>Old age orphanage</option>
                  <option>Orphan's shelter</option>
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
              <input className="inputdonation" type="text" placeholder="Donation amount(USD)"></input>
              <select className="rupees">
                <option>Rupees</option>
                <option>$</option>
              </select>
            </div>
              <div>
                <input className="textfield" type="text" name="message" placeholder="type what you feel about donation"></input>
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

export default DonatePage;