import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const Aprende: React.FC = () => {
  const expresiones = [`\\(\\epsilon - \\delta\\)`,`\\( f(x) \\)`,`\\( a \\)`,`\\( L \\)`,`\\( x \\)`,`\\( \\lim_{{x \\to a}} f(x) = L \\)`,`\\(\\epsilon > 0\\)`,`\\(\\delta > 0\\)`,`\\(0 < |x - a| < \\delta\\)`,`\\(|f(x) - L| < \\epsilon\\)`,`\\( \\lim_{{x \\to 3}} f(2x + 1) = 7 \\)`,`\\( 2x + 1\\)`,`\\( \\lim_{{x \\to \\infty}} \\frac{1}{x} = 0\\)`,`\\(\\frac{1}{x}\\)`,`\\( \\lim_{{x \\to \\infty}} f(3x^2+2x + 1) = \\infty \\)`,`\\(3x^2 + 2x + 1\\)`]
  const expresiones1 = [`\\( \\lim_{{x \\to 3}} f(2x + 1) = 2(3) + 1 = 7 \\)`,`\\(\\frac{0}{0}\\)`,`\\( \\lim_{{x \\to 2}} \\frac{x^2-4}{x-2}\\)`,`\\(\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2}\\)`,`\\( \\lim_{{x+2 \\to 2}} = 2 + 2 = 4\\)`,`\\( \\lim_{{x+2 \\to 0}} \\frac{\\sqrt{x+1} - 1}{x}\\)`,`\\(\\frac{\\sqrt{x+1} - 1}{x} . \\frac{\\sqrt{x+1} + 1}{\\sqrt{x+1} + 1} = \\frac{(\\sqrt{x+1} - 1)(\\sqrt{x+1} + 1)}{x(\\sqrt{x + 1} + 1)} \\)`,`\\(\\frac{x-1+1}{x(\\sqrt{x + 1} + 1)}  = \\frac{x}{x(\\sqrt{x + 1} + 1)} = \\frac{1}{\\sqrt{x+1}+1} \\)`,`\\(\\lim_{{x \\to 0}}\\frac{1}{\\sqrt{x + 1} + 1}  = \\frac{1}{\\sqrt{0 + 1} + 1} = \\frac{1}{2} \\)`]
  const expresiones2 = [`\\( \\lim_{{x \\to a}} g(x) = M \\)`,`\\( \\lim_{{x\\to a}} f(x) + g(x) = L + M \\)`,`\\( \\lim_{{x\\to 2}}(3x+4) + \\lim_{{x\\to 2}} (2x-1) = (3(2)+4)+(2(2)-1)= 10 + 3 = 13 \\)`,`\\( \\lim_{{x\\to a}} f(x) - g(x) = L - M \\)`,`\\( \\lim_{{x\\to 3}}(x^2 - 4x) - \\lim_{{x\\to 3}} (x-1) = ((3)^2-4(3))-(3-1)= (9-12)-2 = -5 \\)`,`\\( \\lim_{{x\\to a}} f(x) . g(x) = L . M \\)`,`\\( \\lim_{{x\\to 1}}(x^2) . \\lim_{{x\\to 1}} (2x+3) = ((1)^2.(2(1)+3)= 1 . 5 = 5 \\)`,`\\( M \\neq 0 \\)`,`\\( \\lim_{{x\\to a}} \\frac{f(x)}{g(x)} = \\frac{L}{M} \\)`,`\\( \\lim_{{x\\to 1}}\\frac{x^2-1}{x-1}  = \\frac{(2)^2-1}{2-1} = \\frac{4-1}{1} = \\frac{3}{1} = 3 \\)`]
  const expresiones3 = [`\\( \\lim_{{x \\to a^+}} f(x) \\)`,`\\( \\lim_{{x \\to a^+}} f(x) = L \\)`,`\\( a < x < a + \\delta  \\)`,`\\( \\lim_{{x \\to 1^+}} (3x-2) = 1 \\)`,`\\( 3x - 2 \\)`,`\\( \\lim_{{x \\to a^-}} f(x) \\)`,`\\( \\lim_{{x \\to a^-}} f(x) = L \\)`,`\\( a - \\epsilon < x < a \\)`,`\\( \\lim_{{x \\to 1^-}} (3x-2) = 1 \\)`,`\\( 3x - 2 \\)`,`\\( \\lim_{{x \\to a}} f(x) = L-si - y - solo-si-\\lim_{{x \\to a^+}} = \\lim_{{x \\to a^-}} = L\\)`,`\\( f(x) = \\begin{cases}   x + 1 & \\text{si } x < 2 \\\\  3 - x & \\text{si } x \\geq 2   \\end{cases} \\)`,`\\( \\lim_{{x \\to 2^-}}(2-1) = 3 \\)`,`\\( \\lim_{{x \\to 2^+}} (3-2) = 1 \\)`,`\\( \\lim_{{x \\to 2}} f(x) no existe \\)`]
  const expresiones4 = [`\\( \\frac{0}{0} \\)`,`\\( \\frac{\\infty}{\\infty} \\)`,`\\( 0.\\infty \\)`,`\\( \\infty - \\infty  \\)`,`\\( 0^0 \\)`,`\\( \\infty^0 \\)`,`\\( 1^\\infty \\)`]
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
              <h3 className='text-[15px]'> En este caso, a medida que <Latex>{expresiones[4]}</Latex> se acerca a 3, la función <Latex>{expresiones[11]}</Latex> se acerca a 7.</h3>
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Límites Infinitos</h3>
              <h3 className='text-[17px]'>Los límites infinitos describen el comportamiento de una función cuando se aproxima a un valor infinito o cuando la funcion tiende a infinito.</h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones[12]}</Latex></h3>
              <h3 className='text-[15px]'> A medida que <Latex>{expresiones[4]}</Latex> crece sin límites, <Latex>{expresiones[13]}</Latex>se aproxima en 0.</h3>
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Límites en el Infinito</h3>
              <h3 className='text-[17px]'>Los límites en el infinito consideran el comportamiento de una función a medida que su argumento tiende a infinito.</h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones[14]}</Latex></h3>
              <h3 className='text-[15px]'> A medida que <Latex>{expresiones[4]}</Latex> tiende a infinito, la función <Latex>{expresiones[15]}</Latex> también tiende a infinito.</h3>
            </div>
          </div>
          <div>
            <h2 className="text-[25px]">Cálculo de Límites</h2>
            <h3 className="text-[22px] font-semibold">Métodos para calcular límites: evaluación directa, factoreo y racionalización</h3>
            <div>
              <h3 className='text-[19px] font-semibold'>Evaluación Directa</h3>
              <h3 className='text-[17px]'>La evaluación es el método más sencillo para calcular límites. Consiste en sustituir directament el valor al que se aproxima <Latex>{expresiones[4]}</Latex> en la función <Latex>{expresiones[1]}</Latex>. Si la función es continua en ese punto, el valor obtenido será el límite.</h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones1[0]}</Latex></h3>
              <h3 className='text-[15px]'>Sin embargo, este método solo funciona si la función es continua y no presenta indeterminaciones en el punto evaluado.</h3>
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Factoreo</h3>
              <h3 className='text-[17px]'>El método de factoreo se utiliza cuando la evaluación directa da lugar a una forma indeterminada, como <Latex>{expresiones1[1]}</Latex>. Consiste en factorizar el numerador y/o el denominador para simplificar la expresión.</h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones1[2]}</Latex></h3>
              <h3 className='text-[17px]'>Factorizamos el numerador:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones1[3]}</Latex></h3>
              <h3 className='text-[17px]'>Simplificamos cancelando el término común:</h3>
              <h3 className='text-[15px]'><Latex>{expresiones1[4]}</Latex></h3>
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Racionalización</h3>
              <h3 className='text-[17px]'>La racionalización se utiliza principalmente cuando las expresiones contienen raíces cuadradas. Consiste en multiplicar y dividir por el conjugado de la expresión que contiene la raíz para eliminar la raíz en el numerador o denominador.</h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones1[5]}</Latex></h3>
              <h3 className='text-[17px]'>Multiplicamos y dividimos por el conjugado:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones1[6]}</Latex></h3>
              <h3 className='text-[17px]'>Simplificamos:</h3>
              <h3 className='text-[15px]'><Latex>{expresiones1[7]}</Latex></h3>
              <h3 className='text-[17px]'>Ahora evaluamos el límite directamente:</h3>
              <h3 className='text-[15px]'><Latex>{expresiones1[8]}</Latex></h3>
            </div>
          </div>
          <div>
            <h2 className="text-[25px]">Propiedades de los Límites</h2>
            <h3 className="text-[22px] font-semibold">Suma, diferencia, producto y cociente de límites.</h3>
            <div>
              <h3 className='text-[19px] font-semibold'>Suma de límites</h3>
              <h3 className='text-[17px]'>Si <Latex>{expresiones[5]}</Latex> y <Latex>{expresiones2[0]}</Latex>, entonces:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones2[1]}</Latex></h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones2[2]}</Latex></h3>
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Diferencia de límites</h3>
              <h3 className='text-[17px]'>Si <Latex>{expresiones[5]}</Latex> y <Latex>{expresiones2[0]}</Latex>, entonces:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones2[3]}</Latex></h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones2[4]}</Latex></h3> 
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Producto de límites</h3>
              <h3 className='text-[17px]'>Si <Latex>{expresiones[5]}</Latex> y <Latex>{expresiones2[0]}</Latex>, entonces:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones2[5]}</Latex></h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones2[6]}</Latex></h3>
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Cociente de Límites</h3>
              <h3 className='text-[17px]'>Si <Latex>{expresiones[5]}</Latex> , <Latex>{expresiones2[0]}</Latex> y <Latex>{expresiones2[7]}</Latex> , entonces:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones2[8]}</Latex></h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones2[9]}</Latex></h3>
            </div>
          </div>
          <div>
            <h2 className="text-[25px]">Límites Laterales</h2>
            <h3 className="text-[22px] font-semibold">Límites por la derecha y por la izquiersa y su relación con la existencia de límites.</h3>
            <div>
              <h3 className='text-[19px] font-semibold'>Límite por la Derecha</h3>
              <h3 className='text-[17px]'>El límite de <Latex>{expresiones[1]}</Latex> cuando <Latex>{expresiones[4]}</Latex> se aproxima a <Latex>{expresiones[2]}</Latex> desde la derecha (es decir, para valores de<Latex>{expresiones[4]}</Latex> mayores pero cecanos a <Latex>{expresiones[2]}</Latex>) se denota como <Latex>{expresiones3[0]}</Latex>.</h3>
              <h3 className='text-[17px]'><span className='font-bold'>Definición formal:</span> <Latex>{expresiones3[1]}</Latex> significa que para todo <Latex>{expresiones[6]}</Latex>, existe <Latex>{expresiones[7]}</Latex> tal que si <Latex>{expresiones3[2]}</Latex>, entonces <Latex>{expresiones[9]}</Latex>.</h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones3[3]}</Latex></h3>
              <h3 className='text-[15px]'>A medida que <Latex>{expresiones[4]}</Latex> se aproxima a 1 desde la derecha, <Latex>{expresiones3[4]}</Latex> se aproxima a 1.</h3>
            </div>
            <div>
            <h3 className='text-[17px]'>El límite de <Latex>{expresiones[1]}</Latex> cuando <Latex>{expresiones[4]}</Latex> se aproxima a <Latex>{expresiones[2]}</Latex> desde la izquierda (es decir, para valores de<Latex>{expresiones[4]}</Latex> menores pero cecanos a <Latex>{expresiones[2]}</Latex>) se denota como <Latex>{expresiones3[5]}</Latex>.</h3>
              <h3 className='text-[17px]'><span className='font-bold'>Definición formal:</span> <Latex>{expresiones3[6]}</Latex> significa que para todo <Latex>{expresiones[6]}</Latex>, existe <Latex>{expresiones[7]}</Latex> tal que si <Latex>{expresiones3[7]}</Latex>, entonces <Latex>{expresiones[9]}</Latex>.</h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones3[8]}</Latex></h3>
              <h3 className='text-[15px]'>A medida que <Latex>{expresiones[4]}</Latex> se aproxima a 1 desde la izquierda, <Latex>{expresiones3[4]}</Latex> se aproxima a 1.</h3>
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Relación con la existencia de Límites</h3>
              <h3 className='text-[17px]'>Para que el límite de una función en un punto exista, los límites laterales por la derecha y por la irquierda deben existir y ser iguales.</h3>
              <h3 className='text-[17px]'>Condición:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones3[10]}</Latex></h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones3[11]}</Latex></h3>
              <h3 className='text-[17px]'>Ejemplos:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones3[12]}</Latex></h3>
              <h3 className='text-[17px]'><Latex>{expresiones3[13]}</Latex></h3>
              <h3 className='text-[17px]'>Los límites laterales no son iguales, por lo tantoÑ</h3>
              <h3 className='text-[17px]'><Latex>{expresiones3[14]}</Latex></h3>
            </div>
          </div>
          <div>
            <h2 className="text-[25px]">Límites Indeterminados</h2>
            <h3 className="text-[22px] font-semibold">Resolución de formas indeterminadas.</h3>
            <div>
              <h3 className='text-[19px] font-semibold'>Formas indeterminadas comunes</h3>
              <h3 className='text-[17px]'>Las formas indeterminadas más comunes son:</h3>
              <h3 className='text-[17px]'><Latex>{expresiones4[0]}</Latex></h3>
              <h3 className='text-[17px]'><Latex>{expresiones4[1]}</Latex></h3>
              <h3 className='text-[17px]'><Latex>{expresiones4[2]}</Latex></h3>
              <h3 className='text-[17px]'><Latex>{expresiones4[3]}</Latex></h3>
              <h3 className='text-[17px]'><Latex>{expresiones4[4]}</Latex></h3>
              <h3 className='text-[17px]'><Latex>{expresiones4[5]}</Latex></h3>
              <h3 className='text-[17px]'><Latex>{expresiones4[6]}</Latex></h3>
            </div>
            <div>
              <h3 className='text-[19px] font-semibold'>Métodos para resolver formas indeterminados</h3>
              <h3 className='text-[17px]'>Hay varios métodos para resolver estas formas indeterminadas, incluyendo:</h3>
              <div>
                <h3 className='text-[19px] font-semibold'>Factoreo</h3>
                <h3 className='text-[17px]'></h3>
                <h3 className='text-[17px]'>Ejemplos:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones[10]}</Latex></h3>
                <h3 className='text-[15px]'> En este caso, a medida que <Latex>{expresiones[4]}</Latex> se acerca a 3, la función <Latex>{expresiones[11]}</Latex> se acerca a 7.</h3>
              </div>
              <div>
                <h3 className='text-[19px] font-semibold'>Racionalización</h3>
                <h3 className='text-[17px]'>Estos límites ocurren cuando tanto el valor al que se aproxima <Latex>{expresiones[4]}</Latex> como el valor al que se aproxima <Latex>{expresiones[1]} son finitos.</Latex></h3>
                <h3 className='text-[17px]'>Ejemplos:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones[10]}</Latex></h3>
                <h3 className='text-[15px]'> En este caso, a medida que <Latex>{expresiones[4]}</Latex> se acerca a 3, la función <Latex>{expresiones[11]}</Latex> se acerca a 7.</h3>
              </div>
              <div>
                <h3 className='text-[19px] font-semibold'>Regla de L'Hopital</h3>
                <h3 className='text-[17px]'>Estos límites ocurren cuando tanto el valor al que se aproxima <Latex>{expresiones[4]}</Latex> como el valor al que se aproxima <Latex>{expresiones[1]} son finitos.</Latex></h3>
                <h3 className='text-[17px]'>Ejemplos:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones[10]}</Latex></h3>
                <h3 className='text-[15px]'> En este caso, a medida que <Latex>{expresiones[4]}</Latex> se acerca a 3, la función <Latex>{expresiones[11]}</Latex> se acerca a 7.</h3>
              </div>
              <div>
                <h3 className='text-[19px] font-semibold'>Expansión en series de Taylor</h3>
                <h3 className='text-[17px]'>Estos límites ocurren cuando tanto el valor al que se aproxima <Latex>{expresiones[4]}</Latex> como el valor al que se aproxima <Latex>{expresiones[1]} son finitos.</Latex></h3>
                <h3 className='text-[17px]'>Ejemplos:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones[10]}</Latex></h3>
                <h3 className='text-[15px]'> En este caso, a medida que <Latex>{expresiones[4]}</Latex> se acerca a 3, la función <Latex>{expresiones[11]}</Latex> se acerca a 7.</h3>
              </div>
              <div>
                <h3 className='text-[19px] font-semibold'>Simplificación algebraica</h3>
                <h3 className='text-[17px]'>Estos límites ocurren cuando tanto el valor al que se aproxima <Latex>{expresiones[4]}</Latex> como el valor al que se aproxima <Latex>{expresiones[1]} son finitos.</Latex></h3>
                <h3 className='text-[17px]'>Ejemplos:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones[10]}</Latex></h3>
                <h3 className='text-[15px]'> En este caso, a medida que <Latex>{expresiones[4]}</Latex> se acerca a 3, la función <Latex>{expresiones[11]}</Latex> se acerca a 7.</h3>
              </div>
            </div>
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