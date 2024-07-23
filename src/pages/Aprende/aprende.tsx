import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const Aprende: React.FC = () => {
  const expresiones = [`\\(\\epsilon - \\delta\\)`,`\\( f(x) \\)`,`\\( a \\)`,`\\( L \\)`,`\\( x \\)`,`\\( \\lim_{{x \\to a}} f(x) = L \\)`,`\\(\\epsilon > 0\\)`,`\\(\\delta > 0\\)`,`\\(0 < |x - a| < \\delta\\)`,`\\(|f(x) - L| < \\epsilon\\)`,`\\( \\lim_{{x \\to 3}} f(2x + 1) = 7 \\)`,`\\( 2x + 1\\)`,`\\( \\lim_{{x \\to \\infty}} \\frac{1}{x} = 0\\)`,`\\(\\frac{1}{x}\\)`,`\\( \\lim_{{x \\to \\infty}} f(3x^2+2x + 1) = \\infty \\)`,`\\(3x^2 + 2x + 1\\)`]
  const expresiones1 = [`\\( \\lim_{{x \\to 3}} f(2x + 1) = 2(3) + 1 = 7 \\)`,`\\(\\frac{0}{0}\\)`,`\\( \\lim_{{x \\to 2}} \\frac{x^2-4}{x-2}\\)`,`\\(\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2}\\)`,`\\( \\lim_{{x+2 \\to 2}} = 2 + 2 = 4\\)`,`\\( \\lim_{{x+2 \\to 0}} \\frac{\\sqrt{x+1} - 1}{x}\\)`,`\\(\\frac{\\sqrt{x+1} - 1}{x} . \\frac{\\sqrt{x+1} + 1}{\\sqrt{x+1} + 1} = \\frac{(\\sqrt{x+1} - 1)(\\sqrt{x+1} + 1)}{x(\\sqrt{x + 1} + 1)} \\)`,`\\(\\frac{x-1+1}{x(\\sqrt{x + 1} + 1)}  = \\frac{x}{x(\\sqrt{x + 1} + 1)} = \\frac{1}{\\sqrt{x+1}+1} \\)`,`\\(\\lim_{{x \\to 0}}\\frac{1}{\\sqrt{x + 1} + 1}  = \\frac{1}{\\sqrt{0 + 1} + 1} = \\frac{1}{2} \\)`]
  const expresiones2 = [`\\( \\lim_{{x \\to a}} g(x) = M \\)`,`\\( \\lim_{{x\\to a}} f(x) + g(x) = L + M \\)`,`\\( \\lim_{{x\\to 2}}(3x+4) + \\lim_{{x\\to 2}} (2x-1) = (3(2)+4)+(2(2)-1)= 10 + 3 = 13 \\)`,`\\( \\lim_{{x\\to a}} f(x) - g(x) = L - M \\)`,`\\( \\lim_{{x\\to 3}}(x^2 - 4x) - \\lim_{{x\\to 3}} (x-1) = ((3)^2-4(3))-(3-1)= (9-12)-2 = -5 \\)`,`\\( \\lim_{{x\\to a}} f(x) . g(x) = L . M \\)`,`\\( \\lim_{{x\\to 1}}(x^2) . \\lim_{{x\\to 1}} (2x+3) = ((1)^2.(2(1)+3)= 1 . 5 = 5 \\)`,`\\( M \\neq 0 \\)`,`\\( \\lim_{{x\\to a}} \\frac{f(x)}{g(x)} = \\frac{L}{M} \\)`,`\\( \\lim_{{x\\to 1}}\\frac{x^2-1}{x-1}  = \\frac{(2)^2-1}{2-1} = \\frac{4-1}{1} = \\frac{3}{1} = 3 \\)`]
  const expresiones3 = [`\\( \\lim_{{x \\to a^+}} f(x) \\)`,`\\( \\lim_{{x \\to a^+}} f(x) = L \\)`,`\\( a < x < a + \\delta  \\)`,`\\( \\lim_{{x \\to 1^+}} (3x-2) = 1 \\)`,`\\( 3x - 2 \\)`,`\\( \\lim_{{x \\to a^-}} f(x) \\)`,`\\( \\lim_{{x \\to a^-}} f(x) = L \\)`,`\\( a - \\epsilon < x < a \\)`,`\\( \\lim_{{x \\to 1^-}} (3x-2) = 1 \\)`,`\\( 3x - 2 \\)`,`\\( \\lim_{{x \\to a}} f(x) = L-si - y - solo-si-\\lim_{{x \\to a^+}} = \\lim_{{x \\to a^-}} = L\\)`,`\\( f(x) = \\begin{cases}   x + 1 & \\text{si } x < 2 \\\\  3 - x & \\text{si } x \\geq 2   \\end{cases} \\)`,`\\( \\lim_{{x \\to 2^-}}(2-1) = 3 \\)`,`\\( \\lim_{{x \\to 2^+}} (3-2) = 1 \\)`,`\\( \\lim_{{x \\to 2}} f(x) no existe \\)`]
  const expresiones4 = [`\\( \\frac{0}{0} \\)`,`\\( \\frac{\\infty}{\\infty} \\)`,`\\( 0.\\infty \\)`,`\\( \\infty - \\infty  \\)`,`\\( 0^0 \\)`,`\\( \\infty^0 \\)`,`\\( 1^\\infty \\)`]
  const expresiones5 = [`\\( \\lim_{{x \\to 2 }} (x+2)=4 \\)`,`\\( \\lim_{{x \\to 0 }} \\frac{sinx}{x} \\)`,`\\( \\lim_{{x \\to 0 }} \\frac{sinx}{x} = \\lim_{{x \\to 0 }} \\frac{cosx}{1} = 1 \\)`,`\\( \\lim_{{x \\to 0 }} \\frac{e^x-1}{x} \\)`,`\\( e^x \\)`,`\\( e^x\\approx 1 + x + \\frac{x^2}{2!}+.....\\)`,`\\(\\frac{e^x-1}{x} \\approx \\frac{1+x+\\frac{x^2}{2!}-1}{x} = \\frac{x+\\frac{x^2}{2!}}{x} = 1+ \\frac{x}{2!}\\)`,`\\(\\lim_{{x \\to 0}} (1+\\frac{x}{2!}) = 1\\)`,`\\(\\lim_{{x \\to 0}} \\frac{sin2x}{x} \\)`,`\\(\\frac{sin2x}{x}=2.\\frac{sin2x}{2x}\\)`,`\\(\\lim_{{x \\to 0}} \\frac{sinx}{x}\\)`,`\\(2\\lim_{{x \\to 0}} \\frac{sin2x}{2x} = 2 . 1 = 2\\)`]
  const expresiones6 = [`\\(f(x)\\leq g(x)\\leq h(x)\\)`,`\\(\\lim_{{x \\to a}} f(x) = \\lim_{{x \\to a}} h(x) = L \\)`,`\\(\\lim_{{x \\to a}} g(x) = L\\)`,`\\(\\lim_{{x \\to 0}} x^2 sin(\\frac{1}{x})\\)`,`\\(-1\\leq sin(\\frac{1}{x})\\leq 1 \\)`,`\\(-x^2 \\leq x^2sin(\\frac{1}{x})\\leq x^2\\)`,`\\(\\lim_{{x\\to0}}-x^2=0\\)`,`\\(\\lim_{{x\\to0}} x^2 = 0\\)`,`\\(\\lim_{{x\\to0}}x^2sin(\\frac{1}{x})=0\\)`,`\\(f\\)`,`\\([a,b]\\)`,`\\(f(x) = x^2 - x \\)`,`\\([0,2]\\)`,`\\(f(0)=0\\)`,`\\(f(2)=2\\)`,`\\(f'(x) = 2x-1\\)`,`\\(f'(x)=0\\)`,`\\(2x-1=0 \\Rightarrow x=\\frac{1}{2}\\)`,`\\(x=\\frac{1}{2}\\)`,`\\(f(\\frac{1}{2})=(\\frac{1}{2})^2-\\frac{1}{2}=\\frac{1}{4} -\\frac{1}{2} = - \\frac{1}{4}\\)`,`\\(-\\frac{1}{4}\\)`,`\\((a_n)\\)`,`\\(a_n=(-1)^n\\)`,`\\(|a_n|\\leq 1 \\)`,`\\(n\\)`,`\\(a_{2n} = 1\\)`,`\\(a_{2n+1}=-1\\)`]
  const expresiones7 = [`\\(x=a\\)`,`\\(f(a)\\)`,`\\(\\lim_{{x \\to a}} f(x) = f(a)\\)`,`\\(f(x) = x^2\\)`,`\\(x=2\\)`,`\\(f(2)=4\\)`,`\\(\\lim_{{x\\to 2}} x^2 = 4\\)`,`\\(f(2) = \\lim_{{x \\to 2}}x^2\\)`,`\\(f(x) = \\begin{cases}   \\frac{x^2-1}{x-1} & \\text{si } x \\neq 1 \\\\  2 & \\text{si } x = 1   \\end{cases}\\)`,`\\(\\lim_{{x \\to 1}} \\frac{x^2-1}{x-1} = \\lim_{{x\\to1}}\\frac{(x-1)(x+1)}{x-1}=\\lim_{{x\\to1}}(x+1)=2\\)`,`\\(\\lim_{{x\\to1}}f(x)=2\\)`,`\\(f(1)=2\\)`,`\\(x=1\\)`,`\\(f(x)=\\frac{1}{x-2}\\)`,`\\(\\lim_{{x\\to2^+}}=\\infty\\)`,`\\(\\lim_{{x\\to2^-}}\\frac{1}{x-2}=-\\infty\\)`,`\\(f(x) = \\begin{cases}  x+2 & \\text{si } x < 1 \\\\  x - 2 & \\text{si } x \\geq 1   \\end{cases}\\)`,`\\(\\lim_{{x\\to1^-}} f(x) = 3\\)`,`\\(\\lim_{{x\\to1^+}}f(x) = -1\\)`,`\\(x = 1\\)`]
  const expresiones8 = [`\\(f'(a) = \\lim_{{h\\to0}} \\frac{f(a+h)-f(a)}{h}\\)`,`\\(f(x)=x^2\\)`,`\\(f'(a)= \\lim_{{h\\to0}} \\frac{f(a+h)-f(a)}{h} = \\lim_{{h\\to0}}\\frac{a^2+2ah+h^2-a^2}{h} = \\lim_{{h\\to0}}\\frac{2ah+h^2}{h}=\\lim_{{h\\to0}} 2a\\)`,`\\(f'(x) = 2x\\)`,`\\(x=b\\)`,`\\(\\int_{a}^{b} f(x)\\,dx = \\lim_{{n\\to\\infty}}\\sum_{i=i}^{n} f(x_{i}^{*})\\Delta x\\)`,`\\(\\int_{1}^{0} x^2\\,dx\\)`,`\\(\\Delta x = \\frac{b-a}{n}\\)`,`\\(x_{i}^{*}\\)`,`\\(\\int_{1}^{2} \\,dx = \\lim_{{x\\to\\infty}} \\sum_{i=1}^{n} (\\frac{i}{n})^2 . \\frac{1}{n} = \\lim_{{n\\to\\infty}}\\frac{1}{n^3} \\sum_{i=i}^{n} i^2\\)`,`\\(\\sum_{i=1}^{n}i^2=\\frac{n(n+1)(2n+1))}{6}\\)`,`\\(\\int_{1}^{0}x^2\\,dx = \\lim_{{x\\to\\infty}} \\frac{1}{n^3} . \\frac{n(n+1)(2n+1)}{6}=\\lim_{{x\\to\\infty}} \\frac{(n+1)(2n+1)}{6n^2} = \\frac{1}{3}\\)`,`\\(S=\\sum_{n=1}^{\\infty} a_n = \\lim_{{x\\to\\infty}} \\sum_{n=1}^{N} a_n\\)`,`\\(\\sum_{n=0}^{\\infty} r^n\\)`,`\\(|r|<1\\)`,`\\(\\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r}\\)`,`\\(r=\\frac{1}{2}\\)`,`\\(\\sum_{n=0}^{\\infty} (\\frac{1}{2})^n = \\frac{1}{1-\\frac{1}{2}}=2\\)`]
  return (
    <div className='p-5'>
      <div className='px-40'>
        <div className='bg-black text-white py-4 px-4 justify-between flex items-center'>
          <h1 className="text-[35px] font-medium">Limites</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <div className='border-2 shadow-md shadow-gray-500'>
          <div>
            <div className='py-2 bg-slate-400 flex justify-between'>
              <h2 className="text-[25px] ">Concepto de Límite</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className='px-8 hidden'>
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
          </div>
          <div>
            <div className='py-2 bg-slate-400 flex justify-between'>
              <h2 className="text-[25px]">Cálculo de Límites</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className='px-8 hidden'>
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
          </div>
          <div>
            <div className='py-2 bg-slate-400 flex justify-between'>
              <h2 className="text-[25px]">Propiedades de los Límites</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className='px-8 hidden'>
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
          </div>
          <div>
            <div>
              <h2 className="text-[25px] py-2 bg-slate-400">Límites Laterales</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className='px-8 hidden'>
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
          </div>
          <div>
            <div>
              <h2 className="text-[25px] py-2 bg-slate-400">Límites Indeterminados</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className='px-8 hidden'>
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
                  <h3 className='text-[17px]'>Este método consiste en factorizar el numerador y/o el denominador para cancelar términos y simplificar la expresión.</h3>
                  <h3 className='text-[17px]'>Ejemplos:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones1[2]}</Latex></h3>
                  <h3 className='text-[17px]'>Factorizamos el numerador:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones1[3]}</Latex></h3>
                  <h3 className='text-[17px]'>Simplificamos cancelando el término común:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[0]}</Latex></h3>
                </div>
                <div>
                  <h3 className='text-[19px] font-semibold'>Racionalización</h3>
                  <h3 className='text-[17px]'>Este método se utiliza cuando las expresiones contienen raíces cuadradas. Consiste en multiplicar y dividir por el conjugado de la expresión que contiene la raíz para eliminar la raíz en el numerador o denominador.</h3>
                  <h3 className='text-[17px]'>Ejemplos:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones1[5]}</Latex></h3>
                  <h3 className='text-[17px]'>Multiplicamos y dividimos por el conjugado</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones1[6]}</Latex></h3>
                  <h3 className='text-[17px]'>Simplificamos:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones1[7]}</Latex></h3>
                  <h3 className='text-[17px]'>Ahora evalumaos el límite directamente:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones1[8]}</Latex></h3>
                </div>
                <div>
                  <h3 className='text-[19px] font-semibold'>Regla de L'Hopital</h3>
                  <h3 className='text-[17px]'>La regla de L'Hopital se aplica a las formas indeterminadas <Latex>{expresiones4[0]}</Latex> y <Latex>{expresiones4[1]}</Latex>. Consiste en derivar el numerador y el denominador por searado y luego evaluar el límite de la nueva fracción.</h3>
                  <h3 className='text-[17px]'>Ejemplos:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[1]}</Latex></h3>
                  <h3 className='text-[17px]'>Directamente obtenemos <Latex>{expresiones4[0]}</Latex>, por lo que aplicamos la regla de L'Hopital:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[2]}</Latex></h3>
                </div>
                <div>
                  <h3 className='text-[19px] font-semibold'>Expansión en series de Taylor</h3>
                  <h3 className='text-[17px]'>La expansión en series de Taylor se utiliza para aproximar funciones cerca de un punto y resolver formas indeterminadas.</h3>
                  <h3 className='text-[17px]'>Ejemplos:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[3]}</Latex></h3>
                  <h3 className='text-[17px]'>Usamos la expansión de Taylor de <Latex>{expresiones5[4]}</Latex> cerca de 0:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[5]}</Latex></h3>
                  <h3 className='text-[17px]'>Entonces:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[6]}</Latex></h3>
                  <h3 className='text-[17px]'>Evaluando el límite</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[7]}</Latex></h3>
                </div>
                <div>
                  <h3 className='text-[19px] font-semibold'>Simplificación algebraica</h3>
                  <h3 className='text-[17px]'>A veces, simplificar la expresión algebraica puedo resolver la indeterminación.</h3>
                  <h3 className='text-[17px]'>Ejemplos:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[8]}</Latex></h3>
                  <h3 className='text-[17px]'>Simplificamos la fración:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[9]}</Latex></h3>
                  <h3 className='text-[17px]'>Sabemos que <Latex>{expresiones5[10]}</Latex>, por lo tanto:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones5[11]}</Latex></h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[25px] py-2 bg-slate-400">Teoremas importantes</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className='px-8 hidden'>
              <div>
                <h3 className='text-[19px] font-semibold'>Teorema del Sándwich (Teorema de la compresión)</h3>
                <h3 className='text-[17px]'>El teorema del Sándwich se utiliza para encontrar el límite de una función que está acotado entre dos funciones más simples cuyas límites son conocidos y son iguales en un punto particular </h3>
                <h3 className='text-[17px]'><span className='font-bold'>Enunciado:</span><Latex>{expresiones6[0]}</Latex> para todo <Latex>{expresiones[4]}</Latex> en un intervalo alrededor de <Latex>{expresiones[2]}</Latex>(excepto posiblemente en <Latex>{expresiones[2]}</Latex>) y si:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones6[1]}</Latex></h3>
                <h3 className='text-[17px]'>entonces:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones6[2]}</Latex></h3>
                <h3 className='text-[17px]'>Ejemplos:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones6[3]}</Latex></h3>
                <h3 className='text-[17px]'>Sabemos que <Latex>{expresiones6[4]}</Latex>, por lo tanto:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones6[5]}</Latex></h3>
                <h3 className='text-[17px]'>Aplicando el Teorema del Sándwich:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones6[6]}</Latex> y <Latex>{expresiones6[7]}</Latex></h3>
                <h3 className='text-[17px]'>Así:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones6[8]}</Latex></h3>
              </div>
              <div>
                <h3 className='text-[19px] font-semibold'>Teorema de la Acotación</h3>
                <h3 className='text-[17px]'>El teorema de la Acotación asegura que una función continua en un intervalo cerrado y acotado está acotada y alcanza sus valores máximo y mínimo.</h3>
                <h3 className='text-[17px]'><span className='font-bold'>Enunciado:</span> Si<Latex>{expresiones6[9]}</Latex> es continua en el intervalo cerrado <Latex>{expresiones6[10]}</Latex>, entonces <Latex>{expresiones6[9]}</Latex> en los extremos y en los puntos críticos dentro del intervalo.</h3>
                <h3 className='text-[17px]'>Ejemplo:</h3>
                <h3 className='text-[17px]'>Sea <Latex>{expresiones6[11]}</Latex> en el intervalo <Latex>{expresiones6[12]}</Latex>. Evaluamos <Latex>{expresiones6[9]}</Latex> en los extremos y en los puntos críticos dentro del intervalo:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones6[13]}</Latex>,           <Latex>{expresiones6[14]}</Latex></h3>
                <h3 className='text-[17px]'>La derivada es <Latex>{expresiones6[15]}</Latex>, y resolvemos <Latex>{expresiones6[16]}</Latex>:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones6[17]}</Latex></h3>
                <h3 className='text-[17px]'>Evaluamos <Latex>{expresiones6[9]}</Latex> en <Latex>{expresiones6[18]}</Latex></h3>
                <h3 className='text-[17px]'><Latex>{expresiones6[19]}</Latex></h3>
                <h3 className='text-[15px]'>Así, los valores máximo y mínimo de <Latex>{expresiones6[9]}</Latex> en <Latex>{expresiones6[12]}</Latex> son 2 y <Latex>{expresiones6[20]}</Latex> respectivamente.</h3>
              </div>
              <div>
                <h3 className='text-[19px] font-semibold'>Teorema de Bolzano-Weierstrass</h3>
                <h3 className='text-[17px]'>El teorema de Bolzano-Weierstrass es un resultado fundamental en análisis que garantiza la existencia de una subsecuencia convergente en cualquier sucesión acotada de número reales.</h3>
                <h3 className='text-[17px]'><span className='font-bold'>Enunciado:</span>Toda sucesión acotada de números reales tiene una subsecuencia convergente.</h3>
                <h3 className='text-[17px]'>Ejemplos:</h3>
                <h3 className='text-[17px]'>Considere la sucesión <Latex>{expresiones6[21]}</Latex> donde <Latex>{expresiones6[22]}</Latex>. Esta sucesión está acotada ya que <Latex>{expresiones6[23]}</Latex> para todo <Latex>{expresiones6[24]}</Latex>.</h3>
                <h3 className='text-[17px]'>La subsecuencia <Latex>{expresiones6[25]}</Latex> converge a 1.</h3>
                <h3 className='text-[17px]'>La subsecuencia <Latex>{expresiones6[26]}</Latex> converge a -1.</h3>
                <h3 className='text-[17px]'>Aunque <Latex>{expresiones6[21]}</Latex> no converge, tiene subsecuencias que sí lo hacen, cumpliendo el Teorema de Bolzano-Weierstrass.</h3>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[25px] py-2 bg-slate-400">Limites y continuidad</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className='px-8 hidden'>
              <div>
                <h3 className='text-[19px] font-semibold'>Relación entre límites y continuidad</h3>
                <h3 className='text-[17px]'>Una función <Latex>{expresiones[1]}</Latex> es continua en un punto <Latex>{expresiones7[0]}</Latex> si se cumple las siguientes tres condiciones:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones7[1]}</Latex> está definida.</h3>
                <h3 className='text-[17px]'>El límite de <Latex>{expresiones[1]}</Latex> cuando <Latex>{expresiones[4]}</Latex> tiende a <Latex>{expresiones[2]}</Latex> existe.</h3>
                <h3 className='text-[17px]'>El valor del límite es igual al valor de la función en ese punto: <Latex>{expresiones7[2]}</Latex>.</h3>
                <h3 className='text-[17px]'>Formalmente, una función <Latex>{expresiones6[9]}</Latex> es continua en <Latex>{expresiones7[0]}</Latex> si:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones7[2]}</Latex></h3>
                <h3 className='text-[17px]'>Ejemplo:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones7[3]}</Latex> en  <Latex>{expresiones7[4]}</Latex></h3>
                <h3 className='text-[17px]'><Latex>{expresiones7[5]}</Latex></h3>
                <h3 className='text-[17px]'><Latex>{expresiones7[6]}</Latex></h3>
                <h3 className='text-[17px]'>Dado que <Latex>{expresiones7[7]}</Latex>,<Latex>{expresiones6[9]}</Latex> es continua en <Latex>{expresiones7[4]}</Latex>.</h3>
              </div>
              <div>
                <h3 className='text-[19px] font-semibold'>Tipos de Discontinuidades</h3>
                <h3 className='text-[17px]'>Las discontinuidades ocurren cuando una de las condiciones para la continuidad no se cumple. Existen varios tipos de discontinuidades:</h3>
                <div>
                  <h3 className='text-[17px]'><span className='font-bold'>Discontinuidad Evitable:</span> Ocurre cuando el límite de la función existe, pero no es igual al valor de la función en ese punto, o cuando el valor de la función no está definido en ese punto pero el límite sí existe.</h3>
                  <h3 className='text-[17px]'>Ejemplos:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones7[8]}</Latex></h3>
                  <h3 className='text-[17px]'>Evaluamos el límite:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones7[9]}</Latex></h3>
                  <h3 className='text-[15px]'>Aunque <Latex>{expresiones7[10]}</Latex>,<Latex>{expresiones7[11]}</Latex>. Por lo tanto, la discontinuidad en <Latex>{expresiones7[12]}</Latex> es evitable</h3>
                </div>
                <div>
                  <h3 className='text-[17px]'><span className='font-bold'>Discontinuidad Infinita:</span> Ocurre cuando el límite de la función tiende a infinito en un punto.</h3>
                  <h3 className='text-[17px]'>Ejemplos:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones7[13]}</Latex></h3>
                  <h3 className='text-[17px]'>Evaluamos el límite:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones7[14]}</Latex> y <Latex>{expresiones7[15]}</Latex></h3>
                  <h3 className='text-[15px]'>La función tiene una discontinuidad infinita en <Latex>{expresiones7[4]}</Latex></h3>
                </div>
                <div>
                  <h3 className='text-[17px]'><span className='font-bold'>Discontinuidad de Salto:</span> Ocurre cuando los límites laterales existen pero no son iguales.</h3>
                  <h3 className='text-[17px]'>Ejemplos:</h3>
                  <h3 className='text-[17px]'><Latex>{expresiones7[16]}</Latex></h3>
                  <h3 className='text-[17px]'>Evaluamos los límites laterales en <Latex>{expresiones7[12]}</Latex>:</h3>
                  <h3 className='text-[17px] text-center'><Latex>{expresiones7[17]}</Latex>  y  <Latex>{expresiones7[18]}</Latex></h3>
                  <h3 className='text-[15px]'>Los límites laterales no son iguales, por lo tanto, hay una discontinuidad de salto en <Latex>{expresiones7[12]}</Latex>.</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[25px] py-2 bg-slate-400">Aplicaciones de Límites</h2>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
            <div className='px-8 hidden'>
              <div>
                <h3 className='text-[19px] font-semibold'>Derivadas</h3>
                <h3 className='text-[17px]'>Las derivadas se definen a través del concepto de límite. La derivada de una función <Latex>{expresiones[1]}</Latex> en un punto <Latex>{expresiones7[0]}</Latex> mide la tasa de cambio instantánea de la función en ese punto y se define como el límite de la razón de cambio promedio cuando el intervalo de cambio se hace infinitesimalmente pequeño.</h3>
                <h3 className='text-[17px]'>Definición de la derivada:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[0]}</Latex></h3>
                <h3 className='text-[17px]'>Ejemplo:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[1]}</Latex></h3>
                <h3 className='text-[17px]'>La derivada de <Latex>{expresiones[1]}</Latex> en <Latex>{expresiones7[0]}</Latex> es:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[2]}</Latex></h3>
                <h3 className='text-[15px]'>Por lo tanto, la derivada de <Latex>{expresiones8[1]}</Latex> es <Latex>{expresiones8[3]}</Latex>.</h3>
              </div>
              <div>
                <h3 className='text-[19px] font-semibold'>Integrales</h3>
                <h3 className='text-[17px]'>Las integrales también se definen utilizando el concepto de límite. La integral definida de una función <Latex>{expresiones[1]}</Latex> sobre un intervalo <Latex>{expresiones6[10]}</Latex> representa el área bajo la curva de <Latex>{expresiones[1]}</Latex> entre <Latex>{expresiones7[0]}</Latex> y <Latex>{expresiones8[4]}</Latex>, y se define como el límite de un suma de Rieman.</h3>
                <h3 className='text-[17px]'>Definición de la integral definida:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[5]}</Latex></h3>
                <h3 className='text-[17px]'>donde <Latex>{expresiones8[7]}</Latex> y <Latex>{expresiones8[8]}</Latex> es un punto en el i-ésimo subintervalo.</h3>
                <h3 className='text-[17px]'>Ejemplo</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[6]}</Latex></h3>
                <h3 className='text-[17px]'>Usamos la definición de suma de Riemann:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[9]}</Latex></h3>
                <h3 className='text-[17px]'>Usando la fórmula de la suma de cuadrados</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[10]}</Latex></h3>
                <h3 className='text-[17px]'>Entonces:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[11]}</Latex></h3>
              </div>
              <div>
                <h3 className='text-[19px] font-semibold'>Series infinitas</h3>
                <h3 className='text-[17px]'>Las series infinitas se definen como la suma de los términos de una sucesión infinita y su valor se determina usando límites. Una serie infinita converge a un valor S si la sucesión de susmas parciales a S a medida que el número de términos aumenta indefinidamente.</h3>
                <h3 className='text-[17px]'>Definición de serie infinita:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[12]}</Latex></h3>
                <h3 className='text-[17px]'>Ejemplo:</h3>
                <h3 className='text-[17px]'>La serie geométrica:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[13]}</Latex></h3>
                <h3 className='text-[17px]'>Converge <Latex>{expresiones8[14]}</Latex>, y su suma es:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[15]}</Latex></h3>
                <h3 className='text-[17px]'>Para <Latex>{expresiones8[16]}</Latex>:</h3>
                <h3 className='text-[17px]'><Latex>{expresiones8[17]}</Latex></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-40'>
        <div className='bg-black text-white py-4 px-4 mt-5'>
          <h1 className="text-[35px] font-medium">Derivadas</h1>
        </div>
        <div className='hidden'>
          <h3 className='text-[17px]'>Proximamente......</h3>
        </div>
      </div>
    </div>

  );
};
export default Aprende;