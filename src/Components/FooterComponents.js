import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class footerComponents extends Component {
  render() {
    return (
      <div className="footerbody">
        <div>@copyright</div>
          
            <SocialIcon url="http://twitter.com/jaketrent" className="icons" />                  
            <SocialIcon url="http://linkedin.com/in/jaketrent" className="icons" /> 
            <SocialIcon url="http://facebook.com/in/jaketrent"  className="icons"/> 
       
        <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
      </div>
    );
  }
}

export default footerComponents;