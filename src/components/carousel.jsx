import React, { Component } from 'react';
import capa1 from '../images/img1.jpg';
import capa2 from '../images/img2.jpg';
import capa3 from '../images/img3.jpg';
import capa4 from '../images/img4.jpg';
import capa5 from '../images/img5.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={capa1} alt="img"/>
          
        </div>
        <div>
        <img src={capa2} alt="img"/>
          
        </div>
        <div>
        <img src={capa3} alt="img"/>
          
        </div>
        <div>
        <img src={capa4} alt="img"/>
          
        </div>
        <div>
        <img src={capa5} alt="img"/>
         
        </div>
      </Carousel>
    );
  }
}

export { DemoCarousel };