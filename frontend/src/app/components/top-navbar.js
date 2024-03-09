"use client"

import Link from "next/link";
import {useEffect, useState} from "react";
import User_navbar from "./top-navbar-user";
import "../globals.css";
import 'boxicons/css/boxicons.min.css';

export default function Top_navbar() {
    const [user, setUser] = useState('');
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+'/api/user', {
                        credentials: 'include',
                    });

                    const content = await response.json();
                    setUser(content.username);
                    setAuth(true);
                } catch (e) {
                    setAuth(false);
                }
            }
        )();
    }, []);

  return (
        <nav id="navbar-hero" className="bg-zinc-900 bg-gradient-to-r from-sky-900 to-zync-900 lg:h-[70px] md:h-[70px] sm:h-[0px] h-[0px] z-50">
          <div className='relative inline-flex justify-center w-screen h-full items-center'>
            <Link href='/' className="">
                <div className='w-full h-full inline-flex justify-center'>
                  <img className="aspect-[4.41/1] w-1/4 max-w-[1250px] min-w-[300px]" src="/logo-texto-lados.png"/>
                </div>
            </Link>
            <User_navbar user={user} auth={auth}/>
          </div>
        </nav>
  );
}