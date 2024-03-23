"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { data } from 'autoprefixer';

export default function Campañas_read(id) {
    const router = useRouter()
    const [data_campañas, SetData_Campañas] = useState({})
    const [data_personajes, SetData_Personajes] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/campanas/' + id.params.id, {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                SetData_Campañas(data)
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/filtrarPorCampana/' + id.params.id, {
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data2) => {
                        SetData_Personajes(data2)
                        setLoading(false)
                    })
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
        <div className='transition-all'>
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
            <div className="relative items-center bg-bg-950 rounded-lg shadow transition-all flex lg:flex-row md:flex-col sm:flex-col">
                <div className="text-center w-full">
                    <Image width={750} height={750} className="object-contain border-2 border-sky-800 rounded-3xl md:h-auto mx-auto" src={"/campañas/" + data_campañas.imagen} alt="Imagen campaña" />
                </div>
                <div className="text-center w-2/3">
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-justify pr-8 text-white overflow-hidden overscroll-contain max-h-[400px] overflow-y-auto">{data_campañas.descripcion}</h5>
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
            <h2 className='text-2xl font-bold mt-4 mb-4 pt-2 text-white text-center'>Personajes en la campaña</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 p-4'>
                {data_personajes.map(data =>
                    <a key={data.id} className="flex flex-col items-center bg-bg-950 border border-sky-800 rounded-lg shadow md:flex-row md:max-w-lg transition-al">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/2 md:rounded-none md:rounded-s-lg" src={"/personajes/" + data.imagen} alt={"personaje " + data.id} />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{data.nombre}</h5>
                            <p className="mb-3 font-normal text-white">
                                {data.clase.nombre} <img className="max-w-[125px] min-w-[75px]" src={"/iconos_clases/" + data.clase.imagen} /><b>Nivel: </b>{data.nivel} <b>Estado:</b> {data.estado}
                            </p>
                        </div>
                    </a>
                )}
            </div>
        </div>
    );
}