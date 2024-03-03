"use client"

import Link from "next/link";
import "../globals.css";
import 'boxicons/css/boxicons.min.css';


export default function User_navbar(user, auth) {

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })

        await location.reload();
    }
    let menu;

    console.log(user.auth);

    if (user.auth != true) {
        menu = (
            <div>
                <Link href='/login'>
                    <div className='absolute flex justify-center mr-16 max-w-48 mt-auto mb-auto top-2 right-0'>
                        Login
                    </div>
                </Link>
                <Link href='/register'>
                    <div className='absolute flex justify-center mr-16 max-w-48 mt-auto mb-auto top-10 right-0'>
                        Register
                    </div>
                </Link>
            </div>
        )
    } else {
        menu = (
            <div className='absolute flex justify-center mr-16 max-w-64 mt-auto mb-auto top-6 right-0'>
                <div className="w-full inline-flex">
                    <p className="font-bold">Bienvenido</p><p className="font-bold text-sky-500 ml-2">{user.user}</p><img className="w-8 ml-4 top-0" src="/iconos_usuarios/generic.png"/>
                </div>
                <div className="nav-item pl-4">
                    <a href="#" className="nav-link" onClick={logout}>Logout</a>
                </div>
            </div>
        )
    }

  return (
        <div>
            {menu}
        </div>
  );
}