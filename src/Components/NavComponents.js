import React, { Component } from 'react';
import '../css/nav.css';
import image from '../images/logo.jpeg'

class NavComponents extends Component {
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
          <button className="logOut"><a href="/" >Log Out</a></button>
        </div>
      </div>
    );
  }
}
export default NavComponents;