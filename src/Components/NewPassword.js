import React, { Component } from 'react';
import { connect } from 'react-redux';
import {passwordHandle} from '../Action/NewPasswordAction';
import '../css/new.css';

class NewPassword extends Component {
  constructor(props) {
   super(props);
    this.state = {
      email: '',
      uerr: '',
      usersview: []
      };
  }

onHandleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
}

onHandleClick = (e) => {
  e.preventDefault();
  const payload = {
  email: this.state.email
}
if (this.state.email.length === 0  ) {
  this.setState({
  uerr: "Email is required"
  })
}
else if (this.state.email.length === 0) {
  this.setState({ uerr: "mail is required" })
}
else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
  this.setState({ uerr: "Please enter the valid email" })
}
else{
  this.props.passwordHandle(payload);
}
 
}
   
 render() {
  return (
    <div className="confirmpage">  
      <h2 className="confirm">CONFIRM MAIL</h2>
      <label className="emailcolor"><b>Email: </b></label>
      <input className="inpu" type="text"  name="email" onChange={this.onHandleChange} /><br />
      <div className="errorMsg"> {this.state.uerr}</div>
      <button className="confirmbutton" onClick={this.onHandleClick}><b>Confirm</b></button>
    </div>
    );
  }
}

const mapStateToProps=(state)=>{
  const {email}=state.NewPasswordReducer
  return {email}
  }
  export default connect(mapStateToProps,{passwordHandle}) (NewPassword);