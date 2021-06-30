import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

// images
import ClockImg1 from '../assets/clock-1.jpg';
import ClockImg12 from '../assets/clock-12.jpg';
import photoCollagImag2 from '../assets/collage-2.jpg';



function CarouselBox() {
  const heightCarousel = {
    height: '100vh'
  }

  return (
    <Carousel className="mt-1">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photoCollagImag2}
          alt="First slide"
          style={ heightCarousel }
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ClockImg1}
          alt="Second slide"
          style={ heightCarousel }
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ClockImg12}
          alt="Third slide"
          style={ heightCarousel }
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBox; 

