import React, { Component } from 'react';
import '../css/register.css';
import browserHistory from '../Utlis/browserHistory';
import {Signup} from '../Components/UserFile'

class RegisterComponents extends  React.Component {
  constructor(props){
    super(props);
    this.state={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    mobile:'',
    fnameError:'',
    lnameError:'',
    emailError:'',
    passwordError:'',
    mobileError:'',
    // modal: false,login_modal: false, 
    }
    }
    handleSubmit = () => {debugger
    const { firstname,lastname,email,password,mobile } = this.state
    const payload = { firstname,lastname,email,password,mobile }
    
    let reg_user=/^[A-Za-z0-9]{2,10}$/;
    let reg_pwd=/^[A-Za-z0-9]{2,10}$/;
    let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let reg_mob=/^[0-9]{10}$/;
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
    
    if(!this.state.password) this.setState({passwordError:'Password is required'});
    else if(!reg_pwd.test(this.state.password)) this.setState({passwordError:'Invalid Password'});
    else {
    t++;
    this.setState({passwordError:''});
    }
    if(!this.state.mobile) this.setState({mobileError:'Mobile number is required'});
    else if(!reg_mob.test(this.state.mobile)) this.setState({mobileError:'Invalid Mobile number'});
    else {
    t++;
    this.setState({mobileError:''});
    }
    
    if(t>4) {
    console.log(this.state)
    .Signup(payload).then(res => {
    this.setState({
    firstname: '',
    lastname: '',
    email: '',
    password:'',
    mobile:''
    })
    console.log('hello')
    browserHistory.push("/");
    });
    
    } 
    }
    
    handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }
    handleSignin=()=>{
    const { email,password} = this.state;
    const payload = { email,password }
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
    
    // toggle=()=> {
    // this.setState({
    // modal: !this.state.modal
    // });
    // }
    // login_toggle=()=> {
    // this.setState({
    // login_modal: !this.state.login_modal
    // });
    // }
    
    render() {
    return ( 
    <div>
    {/* <div isOpen={this.state.modal}> */}
      <form onSubmit={this.handleSubmit} className='signup_form'> 
        <h1 className='registerhead' >To get registered fill the below form</h1>
        <div className="register">
        <div className="registerform">
          <label>First Name:</label>
          <input type='text' name='firstname' onChange={this.handleChange} className='input_box' placeholder='First Name..'></input>
        </div>
        <p className='red'>{this.state.fnameError}</p>
        
        <div className="registerform">
          <label>Last Name:</label>
          <input type='text' name='lastname' onChange={this.handleChange} className='input_box' placeholder='Last Name..'></input>
        </div>
        <p className='red'>{this.state.lnameError}</p>

        <div className="registerform"> 
          <label>Email:</label>
          <input type='text' name='email' onChange={this.handleChange} className='input_box' placeholder='Email..'></input>
        </div>
        <p className='red'>{this.state.emailError}</p>
        
        <div className="registerform">
          <label>Password:</label>
          <input type='password' name='password' onChange={this.handleChange} className='input_box' placeholder='Password..'></input>
        </div>
        <p className='red'>{this.state.passwordError}</p>
        
        <div className="registerform">
          <label>Contact:</label>
          <input type='number' name='mobile' onChange={this.handleChange} className='input_box' placeholder='Mobile Number..'></input> 
        </div>
        <p className='red'>{this.state.mobileError}</p> 
        
        <div className="radio">
          <label>Gender:</label>
          <input className="male" type="radio" name="gender" value="male" /> Male
          <input className="female" type="radio" name="gender" value="female" /> Female
          <input className="other" type="radio" name="gender" value="other" /> Other 
        </div>
        <div className="registergender">
          <label>Nation:</label>
          <select >
            <option>India</option>
            <option>U.S.A</option>
            <option>Srilanka</option>
            <option>Bangladesh</option>
          </select>
        </div>

        <div className="registeraddress">
          <label>Address:</label>
          <textarea></textarea>
        </div>
        <button type="button" onClick={this.handleSubmit} class="btn btn-success signup_btn">SIGN UP</button>
        <label>Already registered..?</label>
        </div>
        <div>
          <button type="button" class="btn link_btn">Login</button> 
          {/* <input type="submit" value="Submit" color="primary" className="btn btn-primary" /> */}
          <button color="danger" onClick={this.toggle}>Cancel</button>
        </div>
        
      </form>
    </div> 
    );
    }
    }
  
export default RegisterComponents;