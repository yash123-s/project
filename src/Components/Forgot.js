import React, { Component } from 'react';
import axios from 'axios';
import browserHistory from '../Utlis/browserHistory';

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id:'',
      password:'',
      passwordError:''
      }
    }

    handlechange=(e)=>{
      this.setState({password:e.target.value})
    }
  changepassw = (e) => {
    e.preventDefault();

    const email=sessionStorage.getItem('change')
    const payload = {
      email: email,
      password: this.state.password
      }
      let reg_pwd=/^[a-zA-Z0-9@*#]{8,15}$/;
      if(!this.state.password) this.setState({passwordError:'Password is required'});
      else if(!reg_pwd.test(this.state.password)) this.setState({passwordError:'Invalid Password'});
      else
      {
      const options = {
        url: 'http://localhost:4000/reset',
        method: 'PUT',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json;charset=UTF-8'
        // },
        data: payload
      };
      axios(options)
      .then(response => {
        browserHistory.push("/");
      })
    }
  } 
  render() {
    return (
      <div className="confirmpage">
        <h3>CHANGE PASSWORD</h3>
        <label>New Password:</label>
        <input type="text" onChange={this.handlechange} placeholder="enter new password"></input>
    <p className="red">{this.state.passwordError}</p>
      <button onClick={this.changepassw} name="password" className="changep btn btn-danger">change password</button>
      </div>
    )
  }
  }
export default Forgot;