import React, { Component } from 'react';
import '../css/nav.css';
// import image from '../images/logo.png'

class NavComponents extends Component {
  render() {
    return (
      <div>        
        <div className="navbar">
          {/* <img src={image} /> */}
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <div className="dropdown">
            <button className="dropbtn">Donate Options </button>
            <div className="dropdown-content">
              <a href="#">Children Eduaction</a>
              <a href="#">Flood Donation</a>
              <a href="#">Orphanage</a>
            </div>
          </div> 
          <button className="logOut"><a href="/" >LogOut</a></button>
        </div>
      </div>
    );
  }
}
export default NavComponents;