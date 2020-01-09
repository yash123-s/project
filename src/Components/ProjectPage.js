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
    // constructor(){
    //     super()
    //       this.state={
    //         showMe:false
    //       }
    //     }
    //   Operation()
    // {
    //   this.setState({
    // showMe:!this.state.showMe
    //   })
    // }
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
                                <div> >Donate food/meals</div>
                                <div> >water facility</div>
                                <div> >Donate bedsheets</div>
                                <div> >pillows</div>
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                                {/* <div>
                                {this.state.showMe? <div className="hide">Experience More Pleasure,We don’t live in a perfect world, and there’s never going to be a perfect time to give—but there are always people out there in need of help. Whether interest rates are rising, the economy is in the doldrums, or even if you’re experiencing financial difficulties of your own, the reality is that when 
                                you donate your money, you help others who need it.</div>:null}
                                <button className="readmore" onClick={()=>this.Operation()}>Read more</button>
                                </div> */}
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
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
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
                                {/* <Button variant="primary">Go somewhere</Button> */}
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
                                
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <FooterComponents/>
            </div>
        );
    }
}

export default ProjectPage;