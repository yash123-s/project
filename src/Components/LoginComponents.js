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
    email:'',
    emailError:'',
    passwordError:'',
    // error:''
    }
    }
    handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value});
      }
    confirmmail=(e)=>{
      sessionStorage.setItem('change',this.state.email)
      browserHistory.push('/forgot');
    }
    handleSubmit = () => {debugger;
    const {email,password} = this.state
    const payload = {email,password}
    
    let reg_pwd=/^[a-zA-Z0-9@*#]{8,15}$/;
    // let reg_mob=/^[0-9]{10}$/;
    let t=0;
    if (this.state.email.length === 0 && this.state.password.length === 0 ) {
      this.setState({
        emailError: "Email is required",
        passwordError: "Password is required"
      })
      }

    if(!this.state.password) this.setState({passwordError:'Password is required'});
    else if(!reg_pwd.test(this.state.password)) this.setState({passwordError:'Invalid Password'});
    else {
    t++;
    this.setState({passwordError:''});
    }

    if(!this.state.email) this.setState({emailError:'email is required'});
    else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
      this.setState({ emailError: "Please enter the valid email" })
    t++;
    this.setState({emailError:''});
    }
    this.props.loginHandle(payload);
    }
    
    render() {
    return ( 
    <div>
      <h1 className="loginhead">Login Here</h1>
      <form onSubmit={this.handleSubmit} className='signup_form'> 
        <div className=" row">
          <div>
          
          <div className="loginform">
            <label>E-mail:</label>
            <input type='text' name='email' onChange={this.handleChange}  placeholder='enter email'></input> 
          </div>
          <p className='red'>{this.state.emailError}</p> 
          
          <div className="loginform">
            <label>Password:</label>
            <input type='password' name='password' onChange={this.handleChange} className='input_box' placeholder='Password'></input>
          </div>
          <p className='red'>{this.state.passwordError}</p>
          <button type="button" onClick={this.handleSubmit} class="btn btn-success signup_btn">SIGN IN</button>
          </div> 
          
          <div>
            <a onClick={this.confirmmail}>Forgot Password</a>
          </div>
          <div>
            <label className="notregistered">Not registered before..?</label>
            <button type="button" class=" btn btn-success signup_btn"><a href="/second">SIGN UP</a></button> 
          </div>
        </div>
      </form>
    </div> 
);
}
}
 const mapStateToProps=(state)=>{
  const {password,email}=state.LoginReducer
  return {password,email}
}
export default connect(mapStateToProps,{loginHandle})  (LoginComponents);
