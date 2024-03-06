import Link from "next/link";
import "../globals.css";
import 'boxicons/css/boxicons.min.css'

export default function Navbar() {
  return (
    <div className='bg-zinc-800 sticky top-0 w-full max-h-16'>
        <ul className="navbar-nav flex">
        <Link id="0" href="/" className="nav-item active relative group flex">
            <div className="nav-link m-4">
            <div className='w-full h-full flex justify-center items-center'>
                <img className="max-w-10 inline-block max-h-5 mr-2 " src='/home-icon.png'/>
                <p className='inline-block align-middle text-lg group-hover:text-sky-500 text-white'>Inicio</p>
            </div>
            </div>
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link id="1" href="/personajes" className="nav-item relative group flex">
            <div className="nav-link m-4">
            <div className='w-full h-full flex justify-center items-center'>
                <i className='bx bx-food-menu bx-sm text-white'></i>
                <p className='inline-block align-middle text-lg group-hover:text-sky-500 ml-1 text-white'>Mis personajes</p>
            </div>
            </div>
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link id="2" href="/campañas" className="nav-item relative group flex">
            <div className="nav-link m-4">
            <div className='w-full h-full flex justify-center items-center'>
                <i className="bx bx-diamond bx-sm text-white"></i>
                <p className='inline-block align-middle text-lg group-hover:text-sky-500 ml-1 text-white'>Campañas</p>
            </div>
            </div>
            <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>
        </ul>
    </div>
  );
}