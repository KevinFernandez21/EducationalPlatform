import preview from '../../data/preview.js'
function aprende() {
  return (
    <div>
      {preview.map((tema, index) => (
        <div key={index}>
          <h1>{tema.tema_principal}</h1>
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