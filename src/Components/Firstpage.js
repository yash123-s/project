import React, { Component } from 'react';
import FrontPage from './FrontPage';
import LoginComponents from './LoginComponents';
import NavComponents from './NavComponents';

class Firstpage extends Component {
    render() {
        return (
            <div>
               <NavComponents/>
           
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <FrontPage />
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8"> 
                    <LoginComponents />
                </div>       
            </div>
            </div>
        );
    }
}

export default Firstpage;