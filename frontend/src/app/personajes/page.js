"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function Personajes() {
    const router = useRouter()
    const [data_personajes, SetData_Personajes] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+'/api/personajes', {
            credentials: 'include',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            SetData_Personajes(data)
            setLoading(false)
          })
      }, [])

    if (isLoading) return (
        <div className='max-w-screen-xl mx-auto bg-zinc-800 rounded z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full">Debes estar registrado para acceder a tus personajes. Si no estas registrado, 
                <a className='m-4 text-sky-500 relative group' onClick={() => router.push("/register")}>Hazme click
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </a><br/></p>
        </div>
    )
    if (data_personajes.length == 0) return (
        <div className='max-w-screen-xl mx-auto bg-zinc-800 rounded z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full"> ¡Vaya! Parece que no tienes ningún personaje.
                <a className='m-4 text-sky-500 relative group' onClick={() => router.push("/personajes/create")}>Hazme click para crear tu primer personaje
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </a><br/></p>
        </div>
    )

    return (
        <div className='max-w-screen-2xl mx-auto bg-zinc-800 rounded z-0 pl-4 pr-4 pb-8'>
            <h2 className='text-xl font-bold mt-4 mb-4 ml-4 pt-2 text-white'>Tus personajes</h2>
            <div className='grid grid-cols-3 gap-8'>
                {data_personajes.map(data => 
                    <a href={"/personajes/"+data.id} className="flex flex-col items-center bg-zinc-800 border border-zinc-900 rounded-lg shadow md:flex-row md:max-w-lg hover:bg-zinc-900">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={"/personajes/"+data.imagen} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.nombre}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {data.clase.nombre} <img className="max-w-[125px] min-w-[75px]" src={"/iconos_clases/"+data.clase.imagen}/><b>Nivel: </b>{data.nivel} <b>Estado:</b> {data.estado}
                            </p>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}