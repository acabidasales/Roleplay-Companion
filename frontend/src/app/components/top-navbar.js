"use client"

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import User_navbar from "./top-navbar-user";
import "../globals.css";
import 'boxicons/css/boxicons.min.css';
import Navbar from "./navbar";

export default function Top_navbar() {
  const [user, setUser] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/user', {
            credentials: 'include',
          });

          const content = await response.json();
          setUser(content.username);
          setAuth(true);
          localStorage.setItem('auth', content.username);
          localStorage.setItem('user', content.id)
        } catch (e) {
          setAuth(false);
        }
      }
    )();
  }, []);

  return (
    <nav id="navbar-hero" className="sticky top-0 bg-bg-950 lg:h-[70px] md:h-[70px] sm:h-[70px] h-[70px] z-50">
      <div className='relative inline-flex w-screen h-full items-center'>
        <Link href='/' className="justify-start">
          <div className='justify-start ml-4'>
            <Image className="mx-8" width="60" height="60" alt="logo" src="/logo.png" />
          </div>
        </Link>
        <Navbar />
        <User_navbar user={user} auth={auth} />
      </div>
    </nav>
  );
}