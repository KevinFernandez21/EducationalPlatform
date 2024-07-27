import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Graficas from './Graficas';

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
    <div className='flex flex-col justify-center items-center'><h1>Límites Finito</h1><Graficas>3*x^2 + 2*x + 1</Graficas></div>
    <div className='flex flex-col justify-center items-center'><h1>Regla de L'Hopital</h1><Graficas>sin(x)/x</Graficas></div>
    <div className='flex flex-col justify-center items-center'><h1>Expansión en series de Taylor</h1><Graficas>(E^x-1)/(x)</Graficas></div>
    <div className='flex flex-col justify-center items-center'><h1>Relación entre límites y continuidad</h1><Graficas>x^2</Graficas></div>
    <div className='flex flex-col justify-center items-center'><h1>Integrales</h1><Graficas>(x*(x+1)*(2*x+1))/(6)</Graficas></div>
  </Carousel>
);

export default MyCarousel;
