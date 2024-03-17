"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { data } from 'autoprefixer';

export default function Campañas_create(id) {
    const router = useRouter()
    const [data_campañas, SetData_Campañas] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/campanas/' + id.params.id, {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                SetData_Campañas(data)
                setLoading(false)
            })
    }, [])

    const Delete_Campañas = async (id) => {
        if (confirm("¿Estás seguro que lo quieres eliminar?") == true) {
            await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/campanas/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            router.push("/campanas")
        }
    }


    if (isLoading) return (
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 rounded pl-3 pr-3 pb-3 z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full">Debes estar registrado para acceder a las campañas. Si no estas registrado,
                <Link className='m-4 text-sky-500 relative group' href="/register">Hazme click
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </Link><br /></p>
        </div>
    )
    if (data_campañas.length == 0) return (
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 rounded pl-3 pr-3 pb-3 z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full"> ¡Vaya! Parece que no tienes ningúna campaña.
                <Link className='m-4 text-sky-500 relative group' href="/campañas/create">Hazme click para crear tu primera campaña
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </Link><br /></p>
        </div>
    )

    return (
        <div className='lg:max-w-screen-2xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 mt-4 p-6 rounded-3xl z-0'>
            <Link href='/campanas' className='flex align-middle pl-4 pr-4'>
                <div className='flex justify-center text-lg my-auto text-white bg-sky-700 border-sky-800 border-2 rounded-xl hover:bg-sky-800 p-2 transition-all'>
                    Volver
                </div>
            </Link>
            <h2 className='text-2xl font-bold mt-4 mb-4 pt-2 text-white text-center'>{data_campañas.nombre}</h2>
            <div className="relative items-center bg-bg-950 rounded-lg shadow transition-all">
                <Image width={1000} height={1000} className="object-cover border-2 border-sky-800 rounded-3xl md:h-auto mx-auto" src={"/campañas/" + data_campañas.imagen} alt="Imagen campaña" />
                <div className="p-4 text-center w-full">
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-justify pl-32 pr-32 text-white">{data_campañas.descripcion}</h5>
                </div>
            </div>
            <div className='p-16 flex'>
                <Link href={'/campanas/update/' + data_campañas.id} className='flex w-full'>
                    <div className='flex w-full justify-center text-lg my-auto text-white bg-sky-700 border-sky-800 border-2 rounded-l-xl hover:bg-sky-800 p-2 transition-all'>
                        Modificar
                    </div>
                </Link>
                <div onClick={() => Delete_Campañas(data_campañas.id)} className='flex w-full'>
                    <div className='flex w-full justify-center text-lg my-auto text-white bg-sky-700 border-sky-800 border-2 rounded-r-xl hover:bg-sky-800 p-2 transition-all'>
                        Eliminar
                    </div>
                </div>
            </div>
        </div>
    );
}