"use client"

import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Campañas() {
    const [data_campañas, SetData_Campañas] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+'/api/campanas', {
            credentials: 'include',
        })
          .then((res) => res.json())
          .then((data) => {
            SetData_Campañas(data)
            setLoading(false)
          })
      }, [])

    if (isLoading) return (
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 rounded pl-3 pr-3 pb-3 z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full">Debes estar registrado para acceder a las campañas. Si no estas registrado, 
                <Link className='m-4 text-sky-500 relative group' href="/register">Hazme click
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </Link><br/></p>
        </div>
    )
    if (data_campañas.length == 0) return (
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 rounded pl-3 pr-3 pb-3 z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full"> ¡Vaya! Parece que no tienes ningúna campaña.
                <Link className='m-4 text-sky-500 relative group' href="/campañas/create">Hazme click para crear tu primera campaña
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </Link><br/></p>
        </div>
    )

    return (
        <div className='lg:max-w-screen-2xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 mt-4 p-6 rounded-3xl z-0'>
            <h2 className='text-2xl font-bold mt-4 mb-4 ml-4 pt-2 text-white'>Campañas</h2>
            <Link href='/campanas/create' className='flex align-middle pl-4 pr-4'>
                <div className='flex w-2/12 justify-center text-lg my-auto text-white bg-sky-700 border-sky-800 border-2 rounded-xl hover:bg-sky-800 p-2 transition-all'>
                    Crear campaña
                </div>
            </Link>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 p-4'>
                {data_campañas.map(data => 
                    <a key={data.id} href={"/campañas/"+data.id} className="relative items-center bg-bg-950 border border-sky-800 rounded-lg shadow md:flex-row md:max-w-2xl transition-all hover:bg-sky-800">
                        <img className="object-cover w-full rounded-2xl md:h-auto md:w-full md:rounded-s-lg p-1 mx-auto" src={"/campañas/"+data.imagen} alt=""/>
                        <div className="p-4 text-center w-full h-12">
                            <h5 className="absolute inset-x-0 bottom-0 mb-2 text-2xl font-bold tracking-tight text-white">{data.nombre}</h5>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}