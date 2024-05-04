"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Personajes_Read(id) {
    const router = useRouter()
    const [data_personajes, SetData_Personajes] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/' + id.params.id, {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                SetData_Personajes(data)
                setLoading(false)
            })
    }, [])

    const Delete_Personajes = async (id) => {
        if (confirm("¿Estás seguro que lo quieres eliminar?") == true) {
            await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/delete/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(() => {
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personaje/competencias-equipamiento/' + id, {
                    method: 'DELETE'
                })
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personaje/competencias-habilidad/' + id, {
                    method: 'DELETE'
                })
            });
            router.push("/personajes")
        }
    }


    if (isLoading) return (
        <div className='transition-all'>
        </div>
    )

    return (
        <div className='lg:max-w-screen-2xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 mt-4 p-6 rounded-3xl z-0'>
            <Link href='/personajes' className='flex align-middle pl-4 pr-4'>
                <div className='flex justify-center text-lg my-auto text-white bg-sky-700 border-sky-800 border-2 rounded-xl hover:bg-sky-800 p-2 transition-all'>
                    Volver
                </div>
            </Link>
            <h2 className='text-2xl font-bold mt-4 mb-4 pt-2 text-white text-center'>{data_personajes.nombre}</h2>
            <div className="relative items-center bg-bg-950 rounded-lg shadow transition-all grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 p-4">
                <Image width={300} height={300} className="object-cover border-2 border-sky-800 rounded-3xl md:h-auto mx-auto" src={"/personajes/" + data_personajes.imagen} alt="Imagen campaña" />
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 p-4'>
                    <div className='w-full'>Fuerza: {data_personajes.car_fuerza}</div>
                    <div className='w-full'>Destreza: {data_personajes.car_destreza}</div>
                    <div className='w-full'>Constitución: {data_personajes.car_constitucion}</div>
                    <div className='w-full'>Inteligencia: {data_personajes.car_inteligencia}</div>
                    <div className='w-full'>Sabiduría: {data_personajes.car_sabiduria}</div>
                    <div className='w-full'>Carisma: {data_personajes.car_carisma}</div>
                </div>
            </div>
            <div className='p-16 flex'>
                <Link href={'/personajes/' + data_personajes.id + '/update'} className='flex w-full'>
                    <div className='flex w-full justify-center text-lg my-auto text-white bg-sky-700 border-sky-800 border-2 rounded-l-xl hover:bg-sky-800 p-2 transition-all'>
                        Modificar
                    </div>
                </Link>
                <div onClick={() => Delete_Personajes(data_personajes.id)} className='flex w-full'>
                    <div className='flex w-full justify-center text-lg my-auto text-white bg-sky-700 border-sky-800 border-2 rounded-r-xl hover:bg-sky-800 p-2 transition-all'>
                        Eliminar
                    </div>
                </div>
            </div>
        </div>
    );
}