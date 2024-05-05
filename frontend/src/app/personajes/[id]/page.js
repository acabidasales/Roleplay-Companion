"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Personajes_Read(id) {
    const router = useRouter()
    const [data_personajes, SetData_Personajes] = useState({})
    const [data_competenciahabilidades, setData_competenciahabilidades] = useState({})
    const [data_competenciaequipamiento, setData_competenciaequipamiento] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/' + id.params.id, {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                SetData_Personajes(data)
                console.log(data);
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/filtrarPorHabilidades/' + id.params.id, {
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setData_competenciahabilidades(data);
                        console.log(data);
                        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/filtrarPorEquipamiento/' + id.params.id, {
                            credentials: 'include',
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                                setData_competenciaequipamiento(data);
                                setLoading(false)
                            })
                    })
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

    function takebonif(num) {
        let bonif = Math.floor((num - 10) / 2);
        let bonif_obj = {
            "string": (bonif >= 0 ? "+" : "") + bonif,
            "int": bonif
        }
        return bonif_obj;
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
            <h2 className='font-bold mt-4 mb-4 pt-2 text-white text-center text-5xl'>{data_personajes.nombre}</h2>
            <h4 className='font-bold mt-4 mb-4 pt-2 text-white text-center text-xl'>{data_personajes.alineamiento.alineamiento}, {data_personajes.clase.nombre}, Nivel: {data_personajes.nivel}</h4>
            <div className="relative items-center bg-bg-950 rounded-lg shadow transition-all grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-12 p-4">
                <Image width={350} height={350} className="col-span-2 lg:col-span-1 object-cover border-2 border-gray-900 rounded-3xl mx-auto" src={"/personajes/" + data_personajes.imagen} alt="Imagen campaña" />
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center mx-auto'>
                    <p className=' col-span-3 text-center text-3xl font-bold my-4'>Estadisticas</p>
                    <div className='w-full grid grid-cols-1 border border-sky-900 rounded-tl-3xl h-32 relative min-w-48'>
                        <div className='flex text-3xl justify-center font-semibold items-center w-full z-20'>
                            <p className=''>Fuerza</p>
                        </div>
                        <div className='grid grid-cols-2 z-20 justify-between items-center content-center'>
                            <p className='h-full text-center font-semibold text-xl'>{data_personajes.car_fuerza}</p>
                            <p className='h-full text-center font-semibold text-xl'>{takebonif(data_personajes.car_fuerza).string}</p>
                        </div>
                        <Icon icon="game-icons:fist" width="135" height="135" className='absolute text-sky-900 z-0 inset-0 m-auto w-full h-full' />
                    </div>
                    <div className='w-full grid grid-cols-1 border border-sky-900 h-32 relative min-w-48'>
                        <div className='flex text-3xl justify-center font-semibold items-center w-full z-20'>
                            <p className=''>Destreza</p>
                        </div>
                        <div className='grid grid-cols-2 z-20 justify-between items-center content-center'>
                            <p className='h-full text-center font-semibold text-xl'>{data_personajes.car_destreza}</p>
                            <p className='h-full text-center font-semibold text-xl'>{takebonif(data_personajes.car_destreza).string}</p>
                        </div>
                        <Icon icon="game-icons:running-ninja" width="155" height="155" className='absolute text-sky-900 z-0 inset-0 m-auto w-full h-full' />
                    </div>
                    <div className='w-full grid grid-cols-1 border border-sky-900 rounded-tr-3xl h-32 relative min-w-48'>
                        <div className='flex text-3xl justify-center font-semibold items-center w-full z-20'>
                            <p className=''>Constitución</p>
                        </div>
                        <div className='grid grid-cols-2 z-20 justify-between items-center content-center'>
                            <p className='h-full text-center font-semibold text-xl'>{data_personajes.car_constitucion}</p>
                            <p className='h-full text-center font-semibold text-xl'>{takebonif(data_personajes.car_constitucion).string}</p>
                        </div>
                        <Icon icon="game-icons:heart-plus" width="135" height="135" className='absolute text-sky-900 z-0 inset-0 m-auto w-full h-full' />
                    </div>
                    <div className='w-full grid grid-cols-1 border border-sky-900 rounded-bl-3xl h-32 relative min-w-48'>
                        <div className='flex text-3xl justify-center font-semibold items-center w-full z-20'>
                            <p className=''>Inteligencia</p>
                        </div>
                        <div className='grid grid-cols-2 z-20 justify-between items-center content-center'>
                            <p className='h-full text-center font-semibold text-xl'>{data_personajes.car_inteligencia}</p>
                            <p className='h-full text-center font-semibold text-xl'>{takebonif(data_personajes.car_inteligencia).string}</p>
                        </div>
                        <Icon icon="game-icons:brain" width="135" height="135" className='absolute text-sky-900 z-0 inset-0 m-auto w-full h-full' />
                    </div>
                    <div className='w-full grid grid-cols-1 border border-sky-900 h-32 relative min-w-48'>
                        <div className='flex text-3xl justify-center font-semibold items-center w-full z-20'>
                            <p className=''>Sabiduría</p>
                        </div>
                        <div className='grid grid-cols-2 z-20 justify-between items-center content-center'>
                            <p className='h-full text-center font-semibold text-xl'>{data_personajes.car_sabiduria}</p>
                            <p className='h-full text-center font-semibold text-xl'>{takebonif(data_personajes.car_sabiduria).string}</p>
                        </div>
                        <Icon icon="game-icons:spell-book" width="135" height="135" className='absolute text-sky-900 z-0 inset-0 m-auto w-full h-full' />
                    </div>
                    <div className='w-full grid grid-cols-1 border border-sky-900 rounded-br-3xl h-32 relative min-w-48'>
                        <div className='flex text-3xl justify-center font-semibold items-center w-full z-20'>
                            <p className=''>Carisma</p>
                        </div>
                        <div className='grid grid-cols-2 z-20 justify-between items-center content-center'>
                            <p className='h-full text-center font-semibold text-xl'>{data_personajes.car_carisma}</p>
                            <p className='h-full text-center font-semibold text-xl'>{takebonif(data_personajes.car_carisma).string}</p>
                        </div>
                        <Icon icon="game-icons:talk" width="135" height="135" className='absolute text-sky-900 z-0 inset-0 m-auto w-full h-full' />
                    </div>
                </div>
                <div className='p-2 text-justify col-span-2'>
                    <h4 className='font-bold mt-4 mb-4 pt-2 text-white text-center text-lg'>{data_personajes.apariencia}</h4>
                </div>
                <div className='p-2 text-justify col-span-2'>
                    <p className='font-bold mt-4 mb-4 pt-2 text-white text-center text-lg'>
                        {data_personajes.historia}
                    </p>
                </div>

                <div className='p-2 text-justify col-span-2'>
                    <p className='font-semibold mt-4 mb-4 pt-2 text-white text-justify text-xl'>
                        Tiene competencia en las habilidades de:
                    {data_competenciahabilidades.map(item => {
                                    return (
                                        <b key={item.id} className='mx-1 text-sky-500'> {item.competencia_habilidad.habilidad}</b>
                                    )
                                }
                                )}
                    </p>
                </div>
                <div className='p-2 text-justify col-span-2'>
                    <p className='font-semibold mt-4 mb-4 pt-2 text-white text-justify text-xl'>
                        Tiene competencia en el equipamiento de:
                    {data_competenciaequipamiento.map(item => {
                                    return (
                                        <b key={item.id} className='mx-1 text-sky-500'> {item.competencia_equipamiento.nombre}</b>
                                    )
                                }
                                )}
                    </p>
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