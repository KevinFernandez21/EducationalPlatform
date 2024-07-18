import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const Aprende: React.FC = () => {
  const expresiones =[`\\(\\epsilon - \\delta\\)`,`\\( f(x) \\)`,`\\( a \\)`,`\\( L \\)`,`\\( x \\)`,`\\( \\lim_{{x \\to a}} f(x) = L \\)`]
  return (
    <div className='p-5'>
      <div>
        <h1 className="text-[30px] font-medium">Limites</h1>
        <h2 className="text-[25px]">Concepto de Límite</h2>
        <h3 className="text-[20px] font-semibold">Definición y tipos de límites: finitos, infinitos y en el infinito.</h3>
        <h3 className="text-[17px]">El concepto de límite es fundamental en cálculo y análisis matemático. En término generales, un límite describre el comportamiento de un función a medida que su argumento se aproxima a un valor específico. La defenición formal se expresa utilizando la notación <Latex>{expresiones[0]}</Latex>.</h3>
        <h3>subtemas</h3>
        <h3 className="text-[17px]"><span className='font-bold'>Definición Intuitiva:</span> El límite de <Latex>{expresiones[1]}</Latex> cuando <Latex>{expresiones[4]}</Latex> tiende a <Latex>{expresiones[2]}</Latex> es <Latex>{expresiones[3]}</Latex> si, al acercarse <Latex>{expresiones[4]}</Latex> a <Latex>{expresiones[2]}</Latex>,<Latex>{expresiones[1]}</Latex> se acerca a <Latex>{expresiones[2]}</Latex>. Cuya notación es: <Latex>{expresiones[5]}</Latex> </h3>
        <h3 className="text-[17px]"><span>Definición:</span></h3>
      </div>
      <div>
        <h1 className="text-[30px] font-medium">Derivadas</h1>
        <h2 className="text-[20px]"></h2>
      </div>
    </div>

  );
};
export default Aprende;