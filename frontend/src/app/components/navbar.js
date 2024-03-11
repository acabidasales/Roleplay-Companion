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
    <div>
        <ul className="navbar-nav flex w-full">
            <Link id="0" href="/" className="nav-item active relative group flex">
                <div className="nav-link mx-4 my-5 transition-all">
                <div className='w-full h-full flex justify-center items-center'>
                    <p className={"inline-block align-middle text-lg group-hover:text-sky-600 " + (url === "/" ? "text-sky-600" : "text-white")}>Inicio</p>
                </div>
                </div>
                <span className={"absolute bottom-0 left-1/2 w-0 h-1 bg-sky-600 " + (url === "/" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
                <span className={"absolute bottom-0 right-1/2 w-0 h-1 bg-sky-600 " + (url === "/" ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
            </Link>

            <Link id="1" href="/personajes" className="nav-item relative group flex">
                <div className="nav-link mx-4 my-5">
                <div className='w-full h-full flex justify-center items-center'>
                    <p className={"inline-block align-middle text-lg group-hover:text-sky-600 " + (url.startsWith("/personajes") ? "text-sky-600" : "text-white")}>Mis personajes</p>
                </div>
                </div>
                <span className={"absolute bottom-0 left-1/2 w-0 h-1 bg-sky-600 " + (url.startsWith("/personajes") ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
                <span className={"absolute bottom-0 right-1/2 w-0 h-1 bg-sky-600 " + (url.startsWith("/personajes") ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
            </Link>

            <Link id="2" href="/campanas" className="nav-item relative group flex">
                <div className="nav-link mx-4 my-5">
                <div className='w-full h-full flex justify-center items-center'>
                    <p className={"inline-block align-middle text-lg group-hover:text-sky-600 " + (url.startsWith("/campanas") ? "text-sky-600" : "text-white")}>Campañas</p>
                </div>
                </div>
                <span className={"absolute bottom-0 left-1/2 w-0 h-1 bg-sky-600 " + (url.startsWith("/campanas") ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
                <span className={"absolute bottom-0 right-1/2 w-0 h-1 bg-sky-600 " + (url.startsWith("/campanas") ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
            </Link>
            <Link id="3" href="/wiki" className="nav-item relative group flex">
                <div className="nav-link mx-4 my-5">
                <div className='w-full h-full flex justify-center items-center'>
                    <p className={"inline-block align-middle text-lg group-hover:text-sky-600 " + (url.startsWith("/wiki") ? "text-sky-600" : "text-white")}>Wiki</p>
                </div>
                </div>
                <span className={"absolute bottom-0 left-1/2 w-0 h-1 bg-sky-600 " + (url.startsWith("/wiki") ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
                <span className={"absolute bottom-0 right-1/2 w-0 h-1 bg-sky-600 " + (url.startsWith("/wiki") ? "w-1/2 transition-all" : "group-hover:w-1/2 group-hover:transition-all")}></span>
            </Link>
        </ul>
    </div>
  );
}