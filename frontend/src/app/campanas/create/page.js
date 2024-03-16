"use client"

import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/navigation';

export default function Campaña_create() {
    const router = useRouter()
    const firstRender = useRef(true);
    const [userstate, setUserstate] = useState('')
    const [user, setUser] = useState('')
    const [bstate, setBstate] = useState('button')
    const [nombre, setNombre] = useState('')
    const [imagen, setImagen] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setUserstate(localStorage.getItem('auth'))
        setUser(localStorage.getItem('user'))
    }, [])

    const validateForm = () => {
        let errors = {};

        if (nombre === "") {
            errors.nombre = 'Es necesario un nombre.';
        }

        if (imagen === "") {
            errors.imagen = 'Imagen necesaria.';
        }

        if (descripcion === "") {
            errors.descripcion = 'Descripción necesaria.';
        }

        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            setBstate("submit");
        }
    };

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        validateForm()
    }, [])

    const submitForm = async (event) => {
        event.preventDefault()

        const data_create = {
            nombre: nombre,
            imagen: imagen,
            descripcion: descripcion,
            propietario: user
        }

        const JSONdata = JSON.stringify(data_create);

        console.log(JSONdata);

        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/campanas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                credentials: 'include',
            },
            body: JSONdata,
        });

        router.push("/campanas")
    };

    if (!userstate) return (
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 rounded pl-3 pr-3 pb-3 z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full">Debes estar registrado para crear una campaña. Si no estas registrado,
                <Link className='m-4 text-sky-500 relative group' href="/register">Hazme click
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </Link><br /></p>
        </div>
    )

    return (
        <div className='lg:max-w-screen-2xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 mt-4 p-6 rounded-3xl z-0'>
            <h2 className='text-2xl font-bold mt-4 mb-4 ml-4 pt-2 text-white'>Crear Campaña</h2>
            <form onSubmit={submitForm} className='p-4 flex flex-col justify-center items-center'>
                <div className='w-2/3 justify-center items-center flex flex-col'>
                    <label className='text-lg p-4 text-white dark:text-white w-full'>Nombre de la campaña: {errors.nombre && <p className="text-red-600 float-right">{errors.nombre}</p>}</label><br />
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder='Nombre'
                        className='m-4 text-black dark:text-black w-3/4 rounded-lg'
                        value={nombre || ''}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div><br />
                <div className='w-2/3 justify-center items-center flex flex-col'>
                    <label className='text-lg p-4 text-white dark:text-white w-full'>Imagen de la campaña: {errors.imagen && <p className="text-red-600 float-right">{errors.imagen}</p>}</label><br />
                    <input
                        type="text"
                        name="imagen"
                        placeholder='Nombre de la imagen'
                        className='m-4 text-black dark:text-black w-3/4 rounded-lg'
                        value={imagen || ''}
                        onChange={(e) => setImagen(e.target.value)}
                    />
                </div>
                <div className='w-2/3 justify-center items-center flex flex-col'>
                    <label className='text-lg p-4 text-white dark:text-white w-full'>Descripción de la campaña: {errors.descripcion && <p className="text-red-600 float-right">{errors.descripcion}</p>}</label><br />
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder='Describe tu historia'
                        name="descripcion"
                        className='m-4 text-black dark:text-black w-3/4 rounded-lg'
                        value={descripcion || ''}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <button
                    type={bstate}
                    className='flex w-1/12 justify-center text-lg my-auto text-white bg-sky-700 border-sky-800 border-2 rounded-xl hover:bg-sky-800 p-2 transition-all'
                    onClick={validateForm}
                >
                    Crear
                </button>
            </form>
        </div>
    );
}