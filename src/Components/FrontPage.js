import React, { Component } from 'react';
import logo from '../images/charity.png';
import '../css/frontPage.css';
import DynamicWishes from './DynamicWishes';
import SliderPage from '../Components/SliderPage';

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
                <div style={{height:"150px",paddingTop:"30px"}}><SliderPage /></div>
                <div></div>
                <div>
                  <i class="fa fa-adjust" style={{fontSize:"30px"}}></i>             
                </div>
               
                <div><DynamicWishes/></div>
            </div>
        );
    }
}

export default FrontPage;