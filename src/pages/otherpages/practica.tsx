import L_ChatGpt from '../../assets/ChatGPT_logo.svg.png';

function Practica() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 " >
      <h1 className="text-4xl font-bold text-gray-800 animate-pulse flex mx-4">¡Muy Pronto! +</h1>
      <img className='w-[100px] animate-spin mx-4' src={L_ChatGpt} alt="" />
    </div>
  );
}

export default Practica;