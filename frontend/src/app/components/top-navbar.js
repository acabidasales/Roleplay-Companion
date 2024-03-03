import Link from "next/link";
import "../globals.css";
import 'boxicons/css/boxicons.min.css'

export default function Top_navbar() {
  return (
        <nav id="navbar-hero" className="bg-zinc-900 bg-gradient-to-r from-sky-900 to-zync-900 w-screen h-[75px]">
          <div className='relative inline-flex justify-center w-screen h-full items-center'>
            <Link href='/' className="">
                <div className='w-full h-full inline-flex justify-center'>
                  <img className="aspect-[4.41/1] w-1/4 max-w-[1250px] min-w-[300px]" src="/logo-texto-lados.png"/>
                </div>
            </Link>
            <Link href='/login'>
              <div className='absolute flex justify-center mr-16 max-w-48 mt-auto mb-auto top-6 right-0'>Login</div>
            </Link>
          </div>
        </nav>
  );
}