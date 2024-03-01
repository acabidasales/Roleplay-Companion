import { useState } from 'react'
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
              <li className="nav-item active relative group flex" href='/'>
                <a className="nav-link m-4" href='/'>
                  <div className='w-full h-full flex justify-center items-center'>
                    <img className="max-w-10 inline-block max-h-4 mr-2" src='/home-icon.png'/>
                    <p className='inline-block align-middle text-lg group-hover:text-sky-500'>Inicio</p>
                  </div>
                </a>
                <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
              </li>

              <li className="nav-item relative group flex" href='/'>
                <a className="nav-link m-4" href='/'>
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
        <div className='max-w-screen-md mx-auto'>
          <h2 className='text-xl font-bold mt-4 mb-4'>Inicio</h2>
          <div className='max-w-screen-md mx-auto bg-zinc-800'>
            <div className='relative max-w-screen-md'>
              <img className='absolute w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="/logo-texto-blanco.png"/>
              <div className='bg-black bg-opacity-0'>
                <img className="hero-up" src="/hero-img.png"/>
              </div>
            </div>
            <div>
                <div className='m-4 pb-4'>
                  <h2 className='text-lg font-semibold mt-4 mb-4'>Bienvenido a Roleplay Companion</h2>
                  <p>
                    Una web que te acompañará en tus aventuras y te dará un fácil acceso a tus personajes y campañas. Desde crear tus personajes hasta consultar recursos, todo al alncance de tu mano.<br></br><br></br>
                    Actualmente solamente dispondrá de un juego de rol personalizado, utilizando bases de 
                  </p>
                </div>
            </div>
          </div>
        </div>

        {/*Footer*/}
        <footer>

        </footer>
    </>
  )
}

export default App
