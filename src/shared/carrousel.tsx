import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // breakpoint for screens larger than 4000px
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    // breakpoint for screens between 1024px and 3000px
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    // breakpoint for screens between 464px and 1024px
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    // breakpoint for screens smaller than 464px
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MyCarousel = () => (
  <Carousel responsive={responsive} className='py-5'>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
  </Carousel>
);

export default MyCarousel;
