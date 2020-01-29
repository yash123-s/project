import React, { Component } from 'react';
import '../css/nav.css';
import axios from 'axios';
import image from '../images/logo.jpeg'
import browserHistory from '../Utlis/browserHistory';

class NavComponents extends Component {
  state={
    visible:false
  }

  logout =()=>{
    sessionStorage.removeItem('authentication')
    browserHistory.push('/')
  }
  componentDidMount=()=>{
    sessionStorage.getItem('role')=='admin' ? this.setState({visible: false}) : this.setState({visible: true})
  }
  render() {
    return (
      <div>        
        <div className="navbar">
          <img className="logoimage" src={image} />
          <h3 className="navhead">CHARITY</h3>
          <a href="/home">Home</a>
          <a href="/project">Projects</a>
          <a href="/about">About</a>
          <a href="/donate">Donate Options </a>  
          
          <a hidden={this.state.visible} href="/admin"><button className="logOut">Admin</button></a>
          <button className="logOut"  onClick={this.logout}>Log Out</button>
          
        </div>
      </div>
    );
  }
}
export default NavComponents;