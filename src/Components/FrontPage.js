import React, { Component } from 'react';
import logo from '../images/charity.png';
import '../css/frontPage.css';
import DynamicWishes from './DynamicWishes';

class FrontPage extends Component {
    render() {
        return (
            <div className="bodyfront">
                <div><img src={logo} className="charity" alt="Logo" /></div>
                <div>Charity</div>
                <br></br>
                <div>
                    <h2>Welcome to Charity</h2>
                    {/* <div>save life, educate orphans,provide shelter</div> */}
                </div>
                <div>
                  <i class="fas fa-adjust"></i>             
                </div>
                <br></br>
                <div><DynamicWishes/></div>
            </div>
        );
    }
}

export default FrontPage;