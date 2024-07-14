import holaImage from '../../assets/hola.png';
import Carousel from '../../herramientas/carrousel';
function home() {
  return (
    <div className="items-center bg-black text-center">
      <div>
        <h1 className="p-4 text-[40px] text-white py-6 font-bold"> Aprende de manera intuitiva </h1>
        <div  className="w-full py-5  bg-white rounded-t-full flex items-center justify-center flex-col">
          <img src={holaImage} alt="hola.png" />
          <button className="bg-slate-600 p-4 rounded-xl font-semibold text-white m-3">
            Empiza aprender
          </button>
        </div>
      </div>
      <div className="bg-white">
        <div className='bg-black text-white py-3 text-left px-4 text-[20px] font-medium'>
          Temas Favoritos
          </div>
        <Carousel/>
      </div>
    </div>
  )
}

export default home