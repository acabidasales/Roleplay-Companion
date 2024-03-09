"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Razas() {
    const router = useRouter()
    const [data, SetData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+'/api/razas', {
            credentials: 'include',
        })
          .then((res) => res.json())
          .then((data) => {
            SetData(data)
            setLoading(false)
            console.log(data);
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
                <h2 className='text-xl font-bold mt-4 mb-4 ml-4 pt-2 text-white flex-1'>Razas</h2>
                <Link href="/wiki" className="relative group flex float-end">
                    <div className='flex justify-center items-center'>
                        <i className='bx bx-first-page bx-sm text-white lg:max-w-10 lg:max-h-5 md:max-w-8 md:max-h-4 max-w-5 max-h-3 mr-2'></i>
                        <p>Volver</p>
                    </div>
                    <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute bottom-0 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </Link>
            </div>
            {data.map(item => {
                return (
                    <div key={item.id}>
                        <hr className="h-px my-8 bg-sky-600 border-0"></hr>
                        <p className="text-3xl font-extrabold text-white text-center">{item.nombre}</p>
                        <img src={"/iconos_razas/"+item.imagen} className='mx-auto lg:w-[125px]'/>
                        <p className="text-zinc-200 text-center mt-8">{item.descripcion}</p>
                        <h2 className='text-lg font-bold text-center text-white mt-4'>Rasgos</h2>
                        <hr className="w-48 h-1 mx-auto my-2 bg-sky-600 border-0 rounded md:my-5"></hr>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 p-4'>
                        {item.virtudes.map(virtud => {
                            return (
                                <div key={virtud.id} className="flex flex-col items-center bg-zinc-800 border border-zinc-900 rounded-lg shadow md:flex-row md:max-w-lg hover:bg-zinc-800">
                                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg" src={"/iconos_razas/virtudes/"+virtud.imagen} alt=""/>
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{virtud.nombre}</h5>
                                        <p className="mb-3 font-normal text-gray-400">{virtud.descripcion}</p>
                                    </div>
                                </div>
                            );
                        })}
                        {item.defectos.map(defecto => {
                            return (
                                <div key={defecto.id} className="flex flex-col items-center bg-zinc-800 border border-zinc-900 rounded-lg shadow md:flex-row md:max-w-lg hover:bg-zinc-800">
                                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-lg" src={"/iconos_razas/defectos/"+defecto.imagen} alt=""/>
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{defecto.nombre}</h5>
                                        <p className="mb-3 font-normal text-gray-400">{defecto.descripcion}</p>
                                    </div>
                                </div>
                            );
                        })}
                        </div>
                    </div>
                );
            })}

        </div>
    );
}