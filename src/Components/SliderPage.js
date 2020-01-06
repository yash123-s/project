import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class SliderPage extends Component {
  render() {
    return (
        <Carousel>
            <div>
               

                <p className="legend">Legend 1</p>
            </div>
            <div>
                
                <p className="legend">Legend 2</p>
            </div>
            <div>
                
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        );
    }
}

export default SliderPage;