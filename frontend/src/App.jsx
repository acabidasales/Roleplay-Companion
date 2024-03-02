import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css'
import './output.css'
import 'boxicons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* Navbar superior con logo y login */}
        <nav id="navbar-hero" className="bg-zinc-900 bg-gradient-to-r from-sky-900 to-zync-900 w-screen h-[75px]">
        <div className='relative inline-flex justify-center w-screen h-full items-center'>
          <div className="">
              <a href='/' className='w-full h-full inline-flex justify-center'>
                <img className="aspect-[4.41/1] w-1/4 max-w-[1250px] min-w-[300px]" src="/logo-texto-lados.png"/>
              </a>
          </div>
          <div className='absolute flex justify-center mr-16 max-w-48 mt-auto mb-auto right-0'>Login</div>
        </div>
        </nav>

        {/* Navbar */}
        <div className='bg-zinc-800 sticky top-0 w-full max-h-16'>
            <ul className="navbar-nav flex">
              <Link to="/inicio" className="nav-item active relative group flex">
                <a className="nav-link m-4">
                  <div className='w-full h-full flex justify-center items-center'>
                    <img className="max-w-10 inline-block max-h-4 mr-2" src='/home-icon.png'/>
                    <p className='inline-block align-middle text-lg group-hover:text-sky-500'>Inicio</p>
                  </div>
                </a>
                <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
              </Link>

              <li to="/inicio2" className="nav-item relative group flex">
                <a className="nav-link m-4">
                  <div className='w-full h-full flex justify-center items-center'>
                    <box-icon name='food-menu' color='#ffffff' ></box-icon>
                    <p className='inline-block align-middle text-lg group-hover:text-sky-500 ml-1'>Mis personajes</p>
                  </div>
                </a>
                <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
              </li>

              <li className="nav-item relative group flex" href='/'>
                <a className="nav-link m-4" href='/'>
                  <div className='w-full h-full flex justify-center items-center'>
                    <box-icon name='diamond' color='#ffffff' ></box-icon>
                    <p className='inline-block align-middle text-lg group-hover:text-sky-500 ml-1'>Campañas</p>
                  </div>
                </a>
                <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
              </li>
            </ul>
        </div>

        {/*App content*/}
          <Outlet/>

        {/*Footer*/}
        <footer>

        </footer>
    </>
  )
}

export default App
