import Persona1 from '../../assets/Creators/Persona1.png';
import Persona2 from '../../assets/Creators/Persona2.png';
import Persona3 from '../../assets/Creators/Persona3.png';
import Persona4 from '../../assets/Creators/Persona4.png';
import Persona5 from '../../assets/Creators/Persona5.png';
const Creator= [
  {
    Name: 'William Javier Zambrano tejena',
    Frase: 'En CalcMaster, fusionamos el arte del diseño web con la precisión del cálculo. Creemos que cada proyecto es una oportunidad para innovar y crear experiencias digitales impactantes.',
    Photo: Persona1,
  },
  {
    Name: 'Jonathan Joel vera Quevedo',
    Frase: 'Nos apasiona convertir la complejidad del cálculo en soluciones web intuitivas y estéticamente agradables. Cada diseño es una obra de arte pensada para educar e inspirar.',
    Photo: Persona2
  },
  {
    Name: 'Michael Miranda Samuel Lastre',
    Frase: 'En CalcMaster, creemos que el aprendizaje debe ser tanto inspirador como accesible. Diseñamos plataformas educativas que no solo enseñan, sino que también encantan a nuestros usuarios.',
    Photo: Persona3,
  },
  {
    Name: 'Erick Javier Suárez Cedeño',
    Frase: 'Todos somos libres de aprender desde cero, ya que nunca es tarde para empezar a aprender.',
    Photo: Persona4,
  },
  {
    Name: 'Nayeli Belén Guillin Quispe',
    Frase: 'Nuestro equipo combina la exactitud matemática con un diseño web elegante, asegurando que cada interacción sea perfecta y funcional. La belleza está en los detalles y la exactitud.',
    Photo: Persona5
  }
];

function nosotros() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-8 items-center justify-center">
      {Creator.map((creator, index) => (
        <div className="relative w-[300px] h-[400px] mx-auto" key={index}>
          <div className="flip-card-inner h-full w-full transition-transform transform-style-3d duration-500 hover:rotate-y-180">
            <div className="flip-card-front absolute inset-0 backface-hidden flex flex-col items-center justify-center bg-white shadow-lg p-4 rounded-lg">
              <h2 className="font-bold text-lg mb-4">{creator.Name}</h2>
              <img className="w-full h-auto rounded" src={creator.Photo} alt="creator" />
            </div>
            <div className="flip-card-back absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center bg-black text-white shadow-lg p-4 rounded-lg">
              <p className="text-center">{creator.Frase}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default nosotros;