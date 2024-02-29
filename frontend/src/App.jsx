import { useState } from 'react'
import './App.css'
import './output.css'
import 'boxicons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* Navbar superior con logo y login */}
        <nav id="navbar-hero" className="bg-zinc-900 bg-gradient-to-r from-sky-900 to-zync-900 flex w-screen">
        <div className='flex-1 flex justify-center mr-auto max-w-48 mt-auto mb-auto'></div>
          <div className="mx-12">
              <a href='/'>
                <img className="navbar-logo" src="/logo.png"/>
              </a>
          </div>
          
          <div className='flex-1 flex justify-center ml-auto max-w-48 mt-auto mb-auto'>Login</div>
        </nav>

        {/* Navbar */}
        <div className='bg-zinc-800 sticky top-0 w-full max-h-16'>
            <ul className="nav navbar-nav flex">
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
            <div className=''>
              
              <img className="hero-up mx-auto" src="/hero-img.png"/>
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
