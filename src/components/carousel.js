import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="../images/img1.jpg" alt="img" />
          <p className="legend"> Venha nos conhecer mais de perto.</p>
        </div>
        <div>
          <img src="../images/img2.jpg" alt="img" />
          <p className="legend">Venha nos conhecer mais de perto.</p>
        </div>
        <div>
          <img src="../images/img3.jpg" alt="img" />
          <p className="legend">Venha nos conhecer mais de perto.3</p>
        </div>
        <div>
          <img src="../images/img4.jpg" alt="img" />
          <p className="legend">Venha nos conhecer mais de perto.</p>
        </div>
      </Carousel>
    );
  }
}

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;
