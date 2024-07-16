import preview from '../../data/preview.js'
function aprende() {
  return (
    <div className='p-5'>
      {preview.map((tema, index) => (
        <div key={index}>
          <h1 className='bg-black text-white py-3 px-3 font-bold text-xl'>{tema.tema_principal}</h1>
          {tema.resumen.map((item, idx) => (
            <div key={idx}>
              <h2>{item.titulo}</h2>
              <p>{item.contenido}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default aprende