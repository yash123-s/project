import React, { Component } from 'react';

class footerComponents extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="footer">
            @copyright
            <i class="fa fa-facebook-f"></i>
            <i class="fa fa-whatsapp"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-google-plus"></i>
            <div class="search-container">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default footerComponents;