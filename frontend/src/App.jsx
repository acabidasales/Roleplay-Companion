import { useState } from 'react'
import './App.css'
import './output.css'
import 'boxicons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* Navbar superior con logo y login */}
        <nav id="navbar-hero" className="bg-gradient-to-r from-sky-900 to-zync-900 flex fixed w-screen">
        <div className='flex-1 flex justify-center mr-auto max-w-48 mt-auto mb-auto'></div>
          <div className="mx-12">
              <a href='/'>
                <img className="navbar-logo" src="/logo.png"/>
              </a>
          </div>
          
          <div className='flex-1 flex justify-center ml-auto max-w-48 mt-auto mb-auto'>Login</div>
        </nav>

        {/* Navbar */}
        <div className='pt-14 bg-zinc-800'>
          <div className="navbar-container">
            <ul className="nav navbar-nav inline-flex">
              <li className="nav-item active relative group h-16 flex justify-center items-center" href='/'>
                <a className="nav-link m-4" href='/'>
                  <div className='w-full h-full flex justify-center items-center'>
                    <img className="max-w-10 inline-block max-h-4 mr-2" src='/home-icon.png'/>
                    <p className='inline-block align-middle text-lg group-hover:text-sky-500'>Inicio</p>
                  </div>
                </a>
                <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
              </li>

              <li className="nav-item active relative group h-16 flex justify-center items-center" href='/'>
                <a className="nav-link m-4" href='/'>
                  <div className='w-full h-full flex justify-center items-center'>
                    <box-icon name='food-menu' color='#ffffff' ></box-icon>
                    <p className='inline-block align-middle text-lg group-hover:text-sky-500 ml-1'>Mis personajes</p>
                  </div>
                </a>
                <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
              </li>

              <li className="nav-item active relative group h-16 flex justify-center items-center" href='/'>
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
        </div>

        {/*App content*/}
        <div>
          <div>

          </div>
          <div>
            <section>
              <div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
              </div>
            </section>
          </div>
        </div>

        {/*Footer*/}
        <footer>

        </footer>
    </>
  )
}

export default App
