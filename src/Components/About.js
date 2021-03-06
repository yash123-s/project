import React, { Component } from 'react';
import '../css/About.css';
import help from '../images/helping.jpeg';
import volunteer1 from '../images/v1.jpeg';
import volunteer2 from '../images/v2.jpeg';
import volunteer3 from '../images/v3.jpeg';
import volunteer4 from '../images/v4.jpg';
import NavComponents from './NavComponents';
import FooterComponents from '../Components/FooterComponents'

class About extends Component {
  render() {
    return (
      <div>
        <NavComponents/>
          <div className="row ">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
              <div className="col col-xs-5 col-sm-5 col-md-5 col-lg-5"><img className="helping" src={help} /></div> 
                <div className=" col col-xs-5 col-sm-5 col-md-5 col-lg-5 shade">
                  <h1 className="headingabout">A Very Lovely Welcome to Our Company</h1>
                  <p className="aboutpara">
                    Every Child In the School! Support Educational Projects For Underprivileged Children. 
                    Donate online for Mission Education. Educate a Child. Mission Education. Education for Girls. 
                    Sponsor Education. Amenities: Education for Poor, Nutrition for Children.
                  </p>  
                  <p className="aboutpara">
                    We support in educating orphan Children.
                    charity is a non-profit organization whose primary objectives are 
                    philanthropy and social well-being (e.g. educational, religious, or 
                    other activities serving the public interest or common good). ... 
                    Such donations to charitable organizations represent a major form of
                    corporate philanthropy.
                  </p>    
                  <p className="aboutpara">
                    Our organization is also focused on the concerns of elders.
                    This fund will provide assistance with relief activities in the 
                    aftermath of the floods including shelter, clean water, and food.
                    Funds will also help organizations rebuild their infrastructure and
                    replace destroyed equipment and supplies.
                  </p>
                  <p className="aboutpara">
                    Imagine that a charity is able to teach a farmer some basic, useful 
                    things about farming (like “crop rotation, dip irrigation and the 
                    planting of trees that enrich over worked soil” or “disease-resistant
                    cassava replication, distribution and sale; crop diversification; 
                    soil conservation; and expanding market opportunities”). 
                  </p>
                  <a href="/project"><button className="learnmore">Learn More -> </button></a>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div> 
          </div> 
        <div className="volunteer">
          <div className="our">OUR VOLUNTEERS</div> 
          <div className="row"> 
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>   
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 row">  
            <div className=" img__wrap col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <img className="img__img helping" src={volunteer1} />
              <p class="img__description">
                <p className="vname">ASHOK KUMAR</p>
                <p>Contact:9363544332</p>
                <p>Mysuru</p>
              </p> 
            </div>
            <div className=" img__wrap col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <img className="img__img helping" src={volunteer2} />
              <p class="img__description">
                <p className="vname">DIVYA SHREE</p>
                <p>Contact:9866244332</p>
                <p>Bangalore</p>
              </p> 
            </div>
            <div className=" img__wrap col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <img className="img__img helping" src={volunteer3} />
              <p class="img__description">
                <p className="vname">HARSHITHA</p>
                <p>Contact:998424332</p>
                <p>Mandya</p>
              </p> 
            </div>
            <div className=" img__wrap col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <img className="img__img helping" src={volunteer4} />
              <p class="img__description">
                <p className="vname">BALAJI</p>
                <p>Contact:9926244332</p>
                <p>Hospete</p>
              </p> 
            </div> 
            </div>  
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>   
            </div>  
        </div> 
        <FooterComponents />
    </div>
    );
  }
}

export default About;