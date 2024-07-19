import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const Aprende: React.FC = () => {
  const expresiones =[`\\(\\epsilon - \\delta\\)`,`\\( f(x) \\)`,`\\( a \\)`,`\\( L \\)`,`\\( x \\)`,`\\( \\lim_{{x \\to a}} f(x) = L \\)`,`\\(\\epsilon > 0\\)`,`\\(\\delta > 0\\)`,`\\(0 < |x - a| < \\delta\\)`,`\\(|f(x) - L| < \\epsilon\\)`,`\\( \\lim_{{x \\to 3}} f(2x + 1) = 7 \\)`,`\\( 2x + 1\\)`]
  return (
    <div className='p-5'>
      <div>
        <div>
          <h1 className="text-[30px] font-medium">Limites</h1>
        </div>
        <div>
          <div>
            <h2 className="text-[25px]">Concepto de Límite</h2>
            <h3 className="text-[22px] font-semibold">Definición y tipos de límites: finitos, infinitos y en el infinito.</h3>
            <div>
              <h3 className='text-[19px] font-semibold'>Difinicion de Límite</h3>
              <h3 className="text-[17px]">El concepto de límite es fundamental en cálculo y análisis matemático. En término generales, un límite describre el comportamiento de un función a medida que su argumento se aproxima a un valor específico. La defenición formal se expresa utilizando la notación <Latex>{expresiones[0]}</Latex>.</h3>
              <h3>subtemas</h3>
              <h3 className="text-[17px]"><span className='font-bold'>Definición Intuitiva:</span> El límite de <Latex>{expresiones[1]}</Latex> cuando <Latex>{expresiones[4]}</Latex> tiende a <Latex>{expresiones[2]}</Latex> es <Latex>{expresiones[3]}</Latex> si, al acercarse <Latex>{expresiones[4]}</Latex> a <Latex>{expresiones[2]}</Latex>,<Latex>{expresiones[1]}</Latex> se acerca a <Latex>{expresiones[2]}</Latex>. Cuya notación es: <Latex>{expresiones[5]}</Latex>.</h3>
              <h3 className="text-[17px]"><span className='font-bold'>Definición <Latex>{expresiones[0]}</Latex>:</span> Para todo <Latex>{expresiones[6]}</Latex> existe un <Latex>{expresiones[7]}</Latex> tal que si <Latex>{expresiones[8]}</Latex>, entonces <Latex>{expresiones[9]}</Latex>.</h3>
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Límites Finito</h3>
              <h3 className='text-[17px]'>Estos límites ocurren cuando tanto el valor al que se aproxima <Latex>{expresiones[4]}</Latex> como el valor al que se aproxima <Latex>{expresiones[1]} son finitos.</Latex></h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones[10]}</Latex></h3>
              <h3 className='text-[12px]'> En este caso, a medida que <Latex>{expresiones[4]}</Latex> se acerca a 3, la función <Latex>{expresiones[11]}</Latex> se acerca a 7.</h3>
            </div>
            <div>

            </div>
          </div>
          <div>
            
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[30px] font-medium">Derivadas</h1>
        <h2 className="text-[20px]"></h2>
      </div>
    </div>

  );
};
export default Aprende;