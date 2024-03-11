"use client"

import Link from "next/link";
import "../globals.css";
import 'boxicons/css/boxicons.min.css';


export default function User_navbar(user, auth) {

    const logout = async () => {
        await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+'/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        localStorage.removeItem('auth');
        await location.reload();
    }
    let menu;

    if (user.auth != true) {
        menu = (
                <Link href='/login'>
                    <div className='absolute flex w-full justify-center text-lg mr-8 my-auto top-3 right-0 text-white bg-sky-700 border-sky-800 border-2 rounded-xl hover:bg-sky-600 hover:bg-opacity-20 p-2 transition-all'>
                        Login
                    </div>
                </Link>
        )
    } else {
        menu = (
            <div className='absolute justify-center mr-16 max-w-64 my-auto top-4 right-0'>
                <div className="w-full inline-flex">
                    <p className="font-bold text-white">Bienvenido</p><p className="font-bold text-sky-500 ml-2">{user.user}</p><img className="w-6 ml-4 top-0" src="/iconos_usuarios/generic.png"/>
                </div>
                <div className="right-0 mx-auto text-center">
                    <a href="#" className="nav-link text-white" onClick={logout}>Logout</a>
                </div>
            </div>
        )
    }

  return (
        <div className="absolute z-50 right-0 top-0 w-24 h-45">
            {menu}
        </div>
  );
}