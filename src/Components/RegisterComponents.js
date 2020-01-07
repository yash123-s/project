import React, { Component } from 'react';
import '../css/register.css';
// import NavComponents from './NavComponents';
import { browserHistory } from 'react-history';
import api from '../Api/index';


class RegisterComponents extends Component {
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
  }
}
handleSubmit = async () => {
  const { firstname,lastname,email,password,mobile } = this.state
  const payload = { firstname,lastname,email,password,mobile }
  
  let reg_user=/^[A-Za-z0-9]{2,10}$/;
  let reg_pwd=/^[@#][A-Za-z0-9]{7,13}$/;
  let reg_email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let reg_mob=/^(\+\d{1,3}[- ]?)?\d{10}$/;
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
      this.setState({passwordError:''});
  }
  
  if(t>4) {
      console.log("hii")
      await api.signup(payload).then(res => {
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
}  
    

  

export default RegisterComponents;