import React, { Component } from 'react';
import '../css/footerComponents.css';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share";

class footerComponents extends Component {
  render() {
    var shareUrl = "http://localhost:3000/";
    return (
      <div className="footerbody">
        <div class="search-container">
        <div className="searchContainer">
            <input className="inputsearch" type="text" placeholder="Search.." name="search"/>
              <i style={{color:"white"}} class="fa fa-search"></i>
          </div>
        </div>
        <div className="copyright">
           @Copyright | All rights reserved 
        </div>
        <div className="copyright">
          share on 
          <FacebookShareButton className="share" url={shareUrl} children={<FacebookIcon size={32} round={true} />}/>
          <WhatsappShareButton url={shareUrl} children={<WhatsappIcon size={32} round={true} />}/>
          <LinkedinShareButton className="share" url={shareUrl} children={<LinkedinIcon size={32} round={true} />}/> 
          <TwitterShareButton url={shareUrl} children={<TwitterIcon size={32} round={true} />}/>
        </div>
      </div>
    );
  }
}

export default footerComponents;