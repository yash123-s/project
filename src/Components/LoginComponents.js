import React, { Component } from 'react';
import browserHistory from '../Utlis/browserHistory'

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
    handleSubmit = () => {debugger
    // const { firstname,lastname,email,password,mobile } = this.state
    // const payload = { firstname,lastname,email,password,mobile }
    
    let reg_pwd=/^[A-Za-z0-9]{2,10}$/;
    let reg_mob=/^(\+\d{1,3}[- ]?)?\d{10}$/;
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
      <h1 className="loginhead">Login Here</h1>
      <form onSubmit={this.handleSubmit} className='signup_form'> 
        <div className=" row signup_box">
      
          <div>
          <div className="loginform">
            <label>Password:</label>
            <input type='password' name='password' onChange={this.handleChange} className='input_box' placeholder='Password..'></input>
          </div>
          <p className='red'>{this.state.passwordError}</p>
          
          <div className="loginform">
            <label>Contact:</label>
            <input type='text' name='mobile' onChange={this.handleChange}  placeholder='Mobile Number..'></input> 
          </div>
          <p className='red'>{this.state.mobileError}</p> 
        
         
            <button type="button" onClick={this.handleSubmit} class="btn btn-success signup_btn">SIGN UP</button>
            
            <div>
              <label className="already">Already registered..?</label>
              <button type="button" class="btn btn-success signup_btn">Login</button> 
          </div>
          </div> 
        </div>
    
      {/* <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
      <button color="danger" onClick={this.toggle}>Cancel</button> */}
    
      </form>
    </div> 
);
}
}
export default LoginComponents;
