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
        <div className="navbar row">
          <div className="col-sm-1 ">
            <img className="logoimage" src={image} />
          </div>
          <div className="col-sm-2 ">
            <h3 className="navhead">CHARITY</h3>
          </div>
          <div className="col-sm-1">
            <a href="/home">Home</a>
          </div>
          <div className="col-sm-1">
            <a href="/project">Projects</a>
          </div>
          <div className="col-sm-1">
            <a href="/about">About</a>
          </div>
          <div className="col-sm-1">
            <a href="/donate">Donate</a>  
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-1">
            <a hidden={this.state.visible} href="/admin"><button className="logOut">Admin</button></a>
          </div>
          <div className="col-sm-2">
            <button className="logOut"  onClick={this.logout}>Log Out</button>
          </div>
        </div>
      </div>
    );
  }
}
export default NavComponents;