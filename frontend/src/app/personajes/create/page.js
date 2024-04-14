"use client"

import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/navigation';

export default function Personaje_create() {
    const router = useRouter()
    const firstRender = useRef(true);
    const [userstate, setUserstate] = useState('')
    const [user, setUser] = useState('')
    const [bstate, setBstate] = useState('button')
    const [nombre, setNombre] = useState('')
    const [id_raza, setId_raza] = useState('')
    const [id_clase, setId_clase] = useState('')
    const [estado, setEstado] = useState('')
    const [nivel, setNivel] = useState('')
    const [imagen, setImagen] = useState('')
    const [car_fuerza, setCar_fuerza] = useState('')
    const [car_destreza, setCar_destreza] = useState('')
    const [car_constitucion, setCar_constitucion] = useState('')
    const [car_inteligencia, setCar_inteligencia] = useState('')
    const [car_sabiduria, setCar_sabiduria] = useState('')
    const [car_carisma, setCar_carisma] = useState('')
    const [id_transfondo, setId_transfondo] = useState('')
    const [id_alineamiento, setid_alineamiento] = useState('')
    const [apariencia, setApariencia] = useState('')
    const [edad, setEdad] = useState('')
    const [historia, setHistoria] = useState('')
    const [notas, setNotas] = useState('')
    const [errors, setErrors] = useState({});

    const [isLoading, setLoading] = useState(true)
    const [data_razas, setData_razas] = useState({})
    const [data_clases, setData_clases] = useState({})

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
            id_raza: id_raza,
            id_clase: id_clase,
            propietario: user
        }

        const JSONdata = JSON.stringify(data_create);

        await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                credentials: 'include',
            },
            body: JSONdata,
        });

        router.push("/personajes")
    };

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/razas', {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                setData_razas(data)
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/clases', {
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setData_clases(data)
                        
                        setLoading(false)
                    })
            })
    }, [])

    if (!userstate) return (
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 rounded pl-3 pr-3 pb-3 z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full">Debes estar registrado para crear una campaña. Si no estas registrado,
                <Link className='m-4 text-sky-500 relative group' href="/register">Hazme click
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                </Link><br /></p>
        </div>
    )

    if (isLoading) return (
        <div className='transition-all'>
        </div>
    )

    return (
        <div className='lg:max-w-screen-2xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 mt-4 p-6 rounded-3xl z-0'>
            <div className=' bg-gray-900 p-4 rounded-3xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto'>
                <h2 className='text-2xl font-bold mt-4 mb-4 ml-4 pt-2 text-white'>Crear Personaje</h2>
                <form onSubmit={submitForm} className='p-4 flex flex-col col-span-2 justify-center items-center'>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-6 md:grid md:grid-cols-2 md:gap-6 w-full items-center place-items-center">
                        <div className='w-full justify-center items-center flex flex-col'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Nombre del personaje: {errors.nombre && <p className="text-red-600 float-right">{errors.nombre}</p>}</label><br />
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder='Nombre'
                                className='m-4 p-1 text-black dark:text-black w-3/4 rounded-lg px-2'
                                value={nombre || ''}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className='w-full justify-center items-center flex flex-col'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Raza: {errors.raza && <p className="text-red-600 float-right">{errors.raza}</p>}</label><br />
                            <select id="raza" className='m-4 text-black dark:text-black w-3/4 rounded-lg px-2 p-1' onChange={(e) => setId_raza(e.target.value)}>
                                <option>--- Elige tu raza ---</option>
                                {data_razas.map(item => {
                                    return (
                                        <option
                                            key={item.id_raza}
                                            id={item.id_raza}
                                            name={item.id_raza}
                                            className='m-4 border-sky-800 text-black focus:ring-sky-600'
                                            value={id_raza || ''}
                                        >
                                        {item.nombre}
                                        </option>
                                    )
                                }
                                )}
                            </select>
                        </div>
                    </div>
                    <button
                        type={bstate}
                        className='flex w-1/12 justify-center text-lg my-auto text-white bg-sky-700 border-sky-800 border-2 rounded-xl hover:bg-sky-800 p-2 transition-all'
                        onClick={validateForm}
                    >
                        Crear
                    </button>
                </form >
            </div>
        </div >
    );
}