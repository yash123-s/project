import React, { Component } from 'react';
import NavComponents from './NavComponents';
import FrontPage from './FrontPage';
import RegisterComponents from './RegisterComponents';
import '../css/register.css';
import FooterComponents from '../Components/FooterComponents';

class RegisterPage extends Component {
    render() {
      return (
        <div>
          <div className="row">
              <div className="bgsecond col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <FrontPage />
              </div>
      
              <div className="bgthird col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <RegisterComponents />
              </div>       
          </div>
          {/* <FooterComponents /> */}
        </div>
        );
    }
}

export default RegisterPage;