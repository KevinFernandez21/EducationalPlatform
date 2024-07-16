import previewData from '../../data/preview.ts';

interface ResumenItem {
  titulo: string;
  contenido: string;
}

interface Tema {
  tema_principal: string;
  resumen: ResumenItem[];
}

const Aprende: React.FC = () => {
  return (
    <div className='p-5'>
      {previewData.map((tema: Tema, index: number) => (
        <div key={index}>
          <h1 className='bg-black text-white py-3 px-3 font-bold text-xl'>{tema.tema_principal}</h1>
          {tema.resumen.map((item: ResumenItem, idx: number) => (
            <div key={idx}>
              <h2>{item.titulo}</h2>
              <p>{item.contenido}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Aprende;