import React, { Component } from 'react';
import browserHistory from '../Utlis/browserHistory';
import '../css/loginComponents.css'
import { connect } from 'react-redux';
import {loginHandle} from '../Action/LoginAction';

class LoginComponents extends Component {
  constructor(props){
    super(props);
    this.state={
    password:'',
    mobile:'',
    passwordError:'',
    mobileError:'',
    // modal: false,login_modal: false, 
    }
    }
    handleSubmit = () => {
    const { password,mobile } = this.state
    const payload = { password,mobile }
    
    let reg_pwd=/^[@#][A-Za-z0-9]{7,13}$/;
    let reg_mob=/^[0-9]{10}$/;
    let t=0;
    
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
    
    if(t>1) {
    this.props.loginHandle(payload);
    } 
    }
    
    handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    }
    handleSignin=()=>{
    const { email,password} = this.state;
    const payload = { email,password }
    browserHistory.push("/title");
    }
    
    render() {
    return ( 
    <div>
      <h1 className="loginhead">Login Here</h1>
      <form onSubmit={this.handleSubmit} className='signup_form'> 
        <div className=" row">
          <div>
          <div className="loginform">
            <label>Contact:</label>
            <input type='text' name='mobile' onChange={this.handleChange}  placeholder='Mobile Number..'></input> 
          </div>
          <p className='red'>{this.state.mobileError}</p> 
          <div className="loginform">
            <label>Password:</label>
            <input type='password' name='password' onChange={this.handleChange} className='input_box' placeholder='Password..'></input>
          </div>
          <p className='red'>{this.state.passwordError}</p>
          <button type="button" onClick={this.handleSubmit} class="btn btn-success signup_btn">SIGN IN</button>
          </div> 
          <div>
            <label>Not registered before..?</label>
            <button type="button" class="btn btn-success signup_btn">SIGN UP</button> 
          </div>
        </div>
      </form>
      {/* <p>
      {this.props.password}
      {this.props.mobile}</p> */}
    </div> 
    
);
}
}
 const mapStateToProps=(state)=>{
  const {password,mobile }=state.LoginReducer
  return {password,mobile }
}
export default connect(mapStateToProps,{loginHandle})  (LoginComponents);
