"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Personajes() {
    const router = useRouter()
    const [data, SetData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+'/api/alineamientos', {
            credentials: 'include',
        })
          .then((res) => res.json())
          .then((data) => {
            SetData(data)
            setLoading(false)
          })
      }, [])

    if (isLoading) return (
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-zinc-800 rounded pl-3 pr-3 pb-3 z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full">Cargando...</p>
        </div>
    )

    return (
        <div className='lg:max-w-screen-2xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-zinc-800 rounded pl-3 pr-3 pb-12 z-0 mt-4'>
            <div className='flex w-full relative'>
                <h2 className='text-xl font-bold mt-4 mb-4 ml-4 pt-2 text-white flex-1'>Alineamientos</h2>
                <Link href="/wiki" className="relative group flex float-end">
                    <div className='flex justify-center items-center'>
                        <i className='bx bx-first-page bx-sm text-white lg:max-w-10 lg:max-h-5 md:max-w-8 md:max-h-4 max-w-5 max-h-3 mr-2'></i>
                        <p>Volver</p>
                    </div>
                    <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </Link>
            </div>
                {data.map(data => 
                    <div>
                        <hr class="h-px my-8 bg-sky-600 border-0"></hr>
                        <p class="text-3xl font-extrabold text-white text-center">{data.alineamiento}</p>
                        <p class="text-zinc-200 text-center mt-8">{data.descripción}</p>
                    </div>
                )}
        </div>
    );
}