import React, { Component } from 'react';
import '../css/Project.css';
import {Card} from 'react-bootstrap';
import flood from '../images/flood.jpg'
import physical from '../images/physical.jpg'
import orphan from '../images/orphan.jpg'
import children from '../images/children.jpg'
import FooterComponents from '../Components/FooterComponents';
import footerComponents from '../Components/FooterComponents';
import NavComponents from './NavComponents';


class ProjectPage extends Component {
    render() {
        return (
            <div className="projectbg">
               <NavComponents/>
                <div className="center_content">
                    <h1>CHARITY</h1>
                    <h3>Vinayakanagar 570001,Mysore </h3>
                    <h4>Contact: 9036167656</h4>
                    <p>
                        We are a trust which aims to provide support to under privileged children,old 
                        age citizens. We emphasis spreading spiritualism to people by teaching them 
                        yoga and meditation.The trust often conducts various fundraising activities 
                        in Mysore city. The volunteers involve themselves in a unique activity called 
                        paper empowerment in which they collect old newspapers from houses in Mysore 
                        and sell them to raise money, apart from setting up stalls, and designing and 
                        selling greeting cards.
                    </p>
                    
                    
                      <h2>Projects are mentioned below.</h2>
                    <div className="row">
                      <div className=" col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Card className=" mainheight li" >
                            <Card.Img variant="top" src={flood} />
                            <Card.Body>
                                <Card.Title>Flood</Card.Title>
                                <Card.Text>
                                <div> Donate food/meals,water facility</div>
                                <div> >Donate bedsheets</div>
                                <div> >pillows</div>
                                <a class="text-uppercase" href="#">read more</a>
                                </Card.Text>
                          </Card.Body>
                        </Card>
                          </div>
                          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <Card className="mainheight li" >
                                <Card.Img variant="top" src={physical}/>
                                <Card.Body>
                                    <Card.Title>Physically challenged/mentally retarded</Card.Title>
                                    <Card.Text>
                                        Home schooling,Care taking, feeding
                                    <a class="text-uppercase" href="#">read more</a>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                      </div>
                      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Card className="mainheight li" >
                            <Card.Img  variant="top" src={orphan} onmouseover={orphan} />
                            <Card.Body>
                                <Card.Title>Old Age Orphans</Card.Title>
                                <Card.Text>
                                    Providing food, health care
                                </Card.Text>
                                <a class="text-uppercase" href="#">read more</a> 
                              </Card.Body>
                        </Card>
                      </div>
                      <Card className=" mainheight li" >
                            <Card.Img variant="top" src={children}/>
                            <Card.Body>
                                <Card.Title>Orphans</Card.Title>
                                <Card.Text>
                                    Education/Schooling, food, shelter
                                </Card.Text>
                                <a class="text-uppercase" href="#">read more</a>                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <FooterComponents/>
            </div>
        );
    }
}

export default ProjectPage;