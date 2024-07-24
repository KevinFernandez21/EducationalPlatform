import { Link } from "react-router-dom"
import { useState } from 'react';
function Header() {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const toggle = () => {
        setShow(!show);
        setShow1(false);
    };
    const toggle1 = () => {
        setShow1(!show1);
        setShow(false);
    };
    return (
        <div className="p-4 flex justify-between overflow-x-hidden z-10">
            <div>
                <a href="" className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                    </svg>
                    <span className="font-bold text-xl">CalcMaster</span>
                </a>
            </div>
            <div className="gap-2 border border-gray-200 rounded-full py-2 px-4 shadow-md shadow-gray-500 hidden xl:flex">
                <Link to='/'>Inicio</Link>
                <div className="border border-l border-gray-300"></div>
                <Link to= '/Aprende'>Aprende!</Link>
                <div className="border border-l border-gray-300"></div>
                <a href="">buscar</a>
                <button className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </button>
            </div>
            <div  className="flex gap-2 border border-gray-200 rounded-full py-2 px-4 shadow-md shadow-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer" onClick={toggle}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                <div className={`absolute top-14 right-0 m-2  px-4 bg-white shadow-md shadow-gray-500 border-gray-200 rounded-xl transition-all duration-300 ease-in-out ${show ?"":"top-[-400px]"}`}>
                    <ul className="py-3">
                        <li className="text-[20px]">Libros</li>
                        <li className="text-[20px] mt-2">Practica</li>
                        <li className="text-[20px] mt-2">referencias</li>
                        <li className="text-[20px] mt-2">Repositorio</li>
                        <li className="text-[20px] mt-2">¿Quienes Somos?</li>
                    </ul>
                </div>
                <div className="border border-l border-gray-300"></div>
                <div className="bg-gray-500 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 p-1 cursor-pointer" onClick={toggle1}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <div className={`absolute top-14 right-0 m-2  px-4 bg-white shadow-md shadow-gray-500 border-gray-200 rounded-xl transition-all duration-300 ease-in-out ${show1 ?"":"top-[-400px]"}`}>
                    <ul className="py-3 text-center">
                        <li className="text-[20px] bg-gray-500 text-white flex justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-15 p-1 cursor-pointer" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </li>
                        <li className="text-[20px] mt-2">Mi cuenta</li>
                        <li className="text-[20px] mt-2">Registro</li>
                        <li className="text-[20px] mt-2">Cerrar sesion</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Header
