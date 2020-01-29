import React, { Component } from 'react';
import axios from 'axios';
import browserHistory from '../Utlis/browserHistory';

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id:'',
      password:''
      }
    }

    handlechange=(e)=>{
      this.setState({password:e.target.value})
    }
  changepassw = (e) => {e.preventDefault();
    const email=sessionStorage.getItem('change')
    const payload = {
      email: email,
      password: this.state.password
      }
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
      // axios.put(`http://localhost:4000/reset`,payload)
      //   .then=()=>{
      //     browserHistory.push('/')
      //   }
        // .catch(err => console.log(err))
      // window.location.reload();
      // browserHistory.push('/')
  } 
  render() {
    return (
      <div className="frgtpassw">
        <label>New Password</label><br/>
        <input type="text" onChange={this.handlechange} placeholder="enter new password"></input><br/>
      <button onClick={this.changepassw} name="password" className="btn btn-danger">change password</button>
      </div>
    )
  }
  }
export default Forgot;