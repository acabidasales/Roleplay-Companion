"use client"
import Link from "next/link";
import "../globals.css";
import 'boxicons/css/boxicons.min.css'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from "react";

export default function Navbar() {
    const location = usePathname();
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(location)
    }, [location])


  return (
    <div className='bg-zinc-800 sticky -top-1 w-full max-h-16 z-40'>
        <ul className="navbar-nav flex w-full">
            <Link id="0" href="/" className="nav-item active relative group flex">
                <div className="nav-link my-4 lg:mx-4 md:mx-2 sm:mx-2">
                <div className='w-full h-full flex justify-center items-center'>
                    <img className="inline-block lg:max-w-10 lg:max-h-5 md:max-w-8 md:max-h-4 max-w-5 max-h-3 mr-2 " src='/home-icon.png'/>
                    <p className={"inline-block align-middle lg:text-lg md:text-md sm:text-sm group-hover:text-sky-500 " + (url === "/" ? "text-sky-500" : "text-white")}>Inicio</p>
                </div>
                </div>
                <span className={"absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 " + (url === "/" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
                <span className={"absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 " + (url === "/" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
            </Link>

            <Link id="1" href="/personajes" className="nav-item relative group flex">
                <div className="nav-link my-4 lg:mx-4 md:mx-2 sm:mx-2">
                <div className='w-full h-full flex justify-center items-center'>
                    <i className='bx bx-id-card bx-sm text-white my-auto mr-2'></i>
                    <p className={"inline-block align-middle lg:text-lg md:text-md sm:text-sm group-hover:text-sky-500 " + (url === "/personajes" ? "text-sky-500" : "text-white")}>Mis personajes</p>
                </div>
                </div>
                <span className={"absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 " + (url === "/personajes" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
                <span className={"absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 " + (url === "/personajes" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
            </Link>

            <Link id="2" href="/campañas" className="nav-item relative group flex">
                <div className="nav-link my-4 lg:mx-4 md:mx-2 sm:mx-2">
                <div className='w-full h-full flex justify-center items-center'>
                    <i className="bx bx-diamond bx-sm text-white lg:max-w-10 lg:max-h-5 md:max-w-8 md:max-h-4 max-w-5 max-h-3 mr-2"></i>
                    <p className={"inline-block align-middle lg:text-lg md:text-md sm:text-sm group-hover:text-sky-500 " + (url === "/campañas" ? "text-sky-500" : "text-white")}>Campañas</p>
                </div>
                </div>
                <span className={"absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 " + (url === "/campañas" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
                <span className={"absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 " + (url === "/campañas" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
            </Link>
            <Link id="3" href="/wiki" className="nav-item relative group flex">
                <div className="nav-link my-4 lg:mx-4 md:mx-2 sm:mx-2">
                <div className='w-full h-full flex justify-center items-center'>
                    <i className='bx bx-food-menu bx-sm text-white lg:max-w-10 lg:max-h-5 md:max-w-8 md:max-h-4 max-w-5 max-h-3 mr-2'></i>
                    <p className={"inline-block align-middle lg:text-lg md:text-md sm:text-sm group-hover:text-sky-500 " + (url === "/wiki" ? "text-sky-500" : "text-white")}>Wiki</p>
                </div>
                </div>
                <span className={"absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 " + (url === "/wiki" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
                <span className={"absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 " + (url === "/wiki" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
            </Link>
        </ul>
    </div>
  );
}