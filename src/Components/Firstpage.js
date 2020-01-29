import React, { Component } from 'react';
import FrontPage from './FrontPage';
import LoginComponents from './LoginComponents';
import '../css/frontPage.css';
import FooterComponents from './FooterComponents'; 

class Firstpage extends Component {
    render() {
        return (
            <div>
                <div className="row ">
                    <div className="frontpagebg col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="frontpagecolor">
                            <FrontPage />
                        </div>
                    </div>
                    <div className="loginpagebg col-xs-8 col-sm-8 col-md-8 col-lg-8"> 
                        <div className="loginpagecolor">
                            <LoginComponents />
                        </div>
                    </div>       
                </div>
                {/* <FooterComponents /> */}
            </div>
        );
    }
}

export default Firstpage;