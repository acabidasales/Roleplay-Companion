import { Inter } from "next/font/google";
import "./globals.css";
import 'boxicons/css/boxicons.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roleplay Companion",
  description: "Tu acompañante de rol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[url('/background-min-blur.png')] h-screen w-full bg-no-repeat bg-cover bg-left">
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
                <div className="nav-item active relative group flex">
                  <a className="nav-link m-4">
                    <div className='w-full h-full flex justify-center items-center'>
                      <img className="max-w-10 inline-block max-h-5 mr-2" src='/home-icon.png'/>
                      <p className='inline-block align-middle text-lg group-hover:text-sky-500'>Inicio</p>
                    </div>
                  </a>
                  <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </div>

                <div className="nav-item relative group flex">
                  <a className="nav-link m-4">
                    <div className='w-full h-full flex justify-center items-center'>
                      <i className='bx bx-food-menu bx-sm'></i>
                      <p className='inline-block align-middle text-lg group-hover:text-sky-500 ml-1'>Mis personajes</p>
                    </div>
                  </a>
                  <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </div>

                <div className="nav-item relative group flex" href='/'>
                  <a className="nav-link m-4">
                    <div className='w-full h-full flex justify-center items-center'>
                      <i className="bx bx-diamond bx-sm"></i>
                      <p className='inline-block align-middle text-lg group-hover:text-sky-500 ml-1'>Campañas</p>
                    </div>
                  </a>
                  <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                  <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </div>
              </ul>
          </div>
          {children}
        </body>
    </html>
  );
}