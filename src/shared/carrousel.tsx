import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';
import Graficas from './Graficas';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const MyCarousel: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (sectionId: string) => {
    navigate(`/aprende?section=${sectionId}`);
  };

  return (
    <Carousel responsive={responsive} className='py-5'>
      <div className='flex flex-col justify-center items-center'>
        <a href="#" onClick={() => handleNavigate('limitesFinito')}>
          <h1>Límites Finito</h1>
          <Graficas>3*x^2 + 2*x + 1</Graficas>
        </a>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <a href="#" onClick={() => handleNavigate('reglaLhopital')}>
          <h1>Regla de L'Hopital</h1>
          <Graficas>sin(x)/x</Graficas>
        </a>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <a href="#" onClick={() => handleNavigate('taylor')}>
          <h1>Expansión en series de Taylor</h1>
          <Graficas>(E^x-1)/(x)</Graficas>
        </a>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <a href="#" onClick={() => handleNavigate('continuidad')}>
          <h1>Relación entre límites y continuidad</h1>
          <Graficas>x^2</Graficas>
        </a>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <a href="#" onClick={() => handleNavigate('integrales')}>
          <h1>Integrales</h1>
          <Graficas>(x*(x+1)*(2*x+1))/(6)</Graficas>
        </a>
      </div>
    </Carousel>
  );
};

export default MyCarousel;