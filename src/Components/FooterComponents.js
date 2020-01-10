import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../css/footerComponents.css';

class footerComponents extends Component {
  render() {
    return (
      <div className="footerbody">
        <div className="footericons">
          <i class=" fa fa-facebook"></i>                
          <i class="fa fa-twitter"></i>            
          <i class="fa fa-dribbble"></i>
          <i class="fa fa-behance"></i>
        </div>  
        <div class="search-container">
          <form action="/action_page.php">
            <input className="inputsearch" type="text" placeholder="Search.." name="search"/>
              <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
        <div className="footericons">
           @Copyright | All rights reserved 
        </div>
      </div>
    );
  }
}

export default footerComponents;