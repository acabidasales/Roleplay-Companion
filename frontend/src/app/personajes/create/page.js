"use client"

import Link from 'next/link';
import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/navigation';
import { Tooltip } from "flowbite-react"

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
    const [car_fuerza, setCar_fuerza] = useState(8)
    const [car_destreza, setCar_destreza] = useState(8)
    const [car_constitucion, setCar_constitucion] = useState(8)
    const [car_inteligencia, setCar_inteligencia] = useState(8)
    const [car_sabiduria, setCar_sabiduria] = useState(8)
    const [car_carisma, setCar_carisma] = useState(8)
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

    function takebonif(num) {
        let bonif = Math.floor((num - 10) / 2);
        let bonif_obj = {
            "string": (bonif >= 0 ? "+" : "") + bonif,
            "int": bonif
        }
        return bonif_obj;
    }

    if (!userstate) return (
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 rounded pl-3 pr-3 pb-3 z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full">Debes estar registrado para crear unpersonaje. Si no estas registrado,
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
        <div className='lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 mt-4 p-6 rounded-3xl z-0'>
            <div className=' bg-gray-900 p-4 rounded-3xl lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto'>
                <h2 className='text-2xl font-bold mt-4 mb-4 ml-4 pt-2 text-white'>Crear Personaje</h2>
                <form onSubmit={submitForm} className='p-4 flex flex-col col-span-2 justify-center items-center'>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-6 md:grid md:grid-cols-2 md:gap-6 w-full items-center place-items-center">
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
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
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Raza: {errors.raza && <p className="text-red-600 float-right">{errors.raza}</p>}</label><br />
                            <select id="raza" className='m-4 text-black dark:text-black w-3/4 rounded-lg px-2 p-1' onChange={(e) => { setId_raza(e.target.value); console.log(e.target.value); }} value={id_raza || ''}>
                                <option value="">--- Elige tu raza ---</option>
                                {data_razas.map(item => {
                                    return (

                                        <option
                                            key={item.id}
                                            id={item.id}
                                            name={item.id}
                                            title={item.descripcion}
                                            className='m-4 border-sky-800 text-black focus:ring-sky-600'
                                            value={item.id}
                                        >
                                            {item.nombre}
                                        </option>
                                    )
                                }
                                )}
                            </select>
                        </div>

                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Clase: {errors.clase && <p className="text-red-600 float-right">{errors.clase}</p>}</label><br />
                            <select id="clase" className='m-4 text-black dark:text-black w-3/4 rounded-lg px-2 p-1' onChange={(e) => setId_clase(e.target.value)}>
                                <option value="">--- Elige tu clase ---</option>
                                {data_clases.map(item => {
                                    return (

                                        <option
                                            key={item.id}
                                            id={item.id}
                                            name={item.id}
                                            title={item.descripcion}
                                            className='m-4 border-sky-800 text-black focus:ring-sky-600'
                                            value={item.id}
                                        >
                                            {item.nombre}
                                        </option>
                                    )
                                }
                                )}
                            </select>
                        </div>
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Nivel: {errors.nivel && <p className="text-red-600 float-right">{errors.nivel}</p>}</label><br />
                            <input
                                type="number"
                                id="nivel"
                                name="nivel"
                                placeholder='Nivel'
                                className='m-4 p-1 text-black dark:text-black w-3/4 rounded-lg px-2'
                                value={nivel || '1'}
                                onChange={(e) => setNivel(e.target.value)}
                            />
                        </div>
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950 col-span-2'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Estadisticas:</label><br />
                            <div className='grid grid-cols-3 justify-center items-center px-4 my-4'>
                                <div className='border items-center justify-center text-center border-sky-800 rounded-tl-xl'>
                                    <label className='text-lg p-4 text-white dark:text-white w-full text-center'>Fuerza</label><br />
                                    <button onClick={(e) => setCar_fuerza(car_fuerza <= 8 ? car_fuerza : car_fuerza - 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4 rounded-l">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="fuerza"
                                        name="fuerza"
                                        placeholder='Fuerza'
                                        min="8"
                                        className='m-4 p-1 text-black dark:text-black px-2 w-2/12 text-center h-[39px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                        value={car_fuerza || 8}
                                        onChange={(e) => setCar_fuerza(e.target.value)}
                                    />
                                    <button onClick={(e) => setCar_fuerza(car_fuerza + 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4  rounded-r">
                                        +
                                    </button>
                                    <p className='font-semibold text-lg'>{takebonif(car_fuerza || 8).string}</p>
                                </div>
                                <div className='border items-center justify-center text-center border-sky-800'>
                                    <label className='text-lg p-4 text-white dark:text-white w-full text-center'>Destreza</label><br />
                                    <button onClick={(e) => setCar_destreza(car_destreza <= 8 ? car_destreza : car_destreza - 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4 rounded-l">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="destreza"
                                        name="destreza"
                                        placeholder='Destreza'
                                        min="8"
                                        className='m-4 p-1 text-black dark:text-black px-2 w-2/12 text-center h-[39px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                        value={car_destreza || 8}
                                        onChange={(e) => setCar_destreza(e.target.value)}
                                    />
                                    <button onClick={(e) => setCar_destreza(car_destreza + 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4  rounded-r">
                                        +
                                    </button>
                                    <p className='font-semibold text-lg'>{takebonif(car_destreza || 8).string}</p>
                                </div>
                                <div className='border items-center justify-center text-center border-sky-800 rounded-tr-xl'>
                                    <label className='text-lg p-4 text-white dark:text-white w-full text-center'>Constitución</label><br />
                                    <button onClick={(e) => setCar_constitucion(car_constitucion <= 8 ? car_constitucion : car_constitucion - 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4 rounded-l">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="constitucion"
                                        name="constitucion"
                                        placeholder='Constitucion'
                                        min="8"
                                        className='m-4 p-1 text-black dark:text-black px-2 w-2/12 text-center h-[39px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                        value={car_constitucion || 8}
                                        onChange={(e) => setCar_constitucion(e.target.value)}
                                    />
                                    <button onClick={(e) => setCar_constitucion(car_constitucion + 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4  rounded-r">
                                        +
                                    </button>
                                    <p className='font-semibold text-lg'>{takebonif(car_constitucion || 8).string}</p>
                                </div>
                                <div className='border items-center justify-center text-center border-sky-800 rounded-bl-xl'>
                                    <label className='text-lg p-4 text-white dark:text-white w-full text-center'>Inteligencia</label><br />
                                    <button onClick={(e) => setCar_inteligencia(car_inteligencia <= 8 ? car_inteligencia : car_inteligencia - 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4 rounded-l">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="inteligencia"
                                        name="inteligencia"
                                        placeholder='Inteligencia'
                                        min="8"
                                        className='m-4 p-1 text-black dark:text-black px-2 w-2/12 text-center h-[39px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                        value={car_inteligencia || 8}
                                        onChange={(e) => setCar_inteligencia(e.target.value)}
                                    />
                                    <button onClick={(e) => setCar_inteligencia(car_inteligencia + 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4  rounded-r">
                                        +
                                    </button>
                                    <p className='font-semibold text-lg'>{takebonif(car_inteligencia || 8).string}</p>
                                </div>
                                <div className='border items-center justify-center text-center border-sky-800'>
                                    <label className='text-lg p-4 text-white dark:text-white w-full text-center'>Sabiduría</label><br />
                                    <button onClick={(e) => setCar_sabiduria(car_sabiduria <= 8 ? car_sabiduria : car_sabiduria - 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4 rounded-l">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="sabiduria"
                                        name="sabiduria"
                                        placeholder='Sabiduría'
                                        min="8"
                                        className='m-4 p-1 text-black dark:text-black px-2 w-2/12 text-center h-[39px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                        value={car_sabiduria || 8}
                                        onChange={(e) => setCar_sabiduria(e.target.value)}
                                    />
                                    <button onClick={(e) => setCar_sabiduria(car_sabiduria + 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4  rounded-r">
                                        +
                                    </button>
                                    <p className='font-semibold text-lg'>{takebonif(car_sabiduria || 8).string}</p>
                                </div>
                                <div className='border items-center justify-center text-center border-sky-800 rounded-br-3xl'>
                                    <label className='text-lg p-4 text-white dark:text-white w-full text-center'>Carisma</label><br />
                                    <button onClick={(e) => setCar_carisma(car_carisma <= 8 ? car_carisma : car_carisma - 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4 rounded-l">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        id="carisma"
                                        name="carisma"
                                        placeholder='Carisma'
                                        min="8"
                                        className='m-4 p-1 text-black dark:text-black px-2 w-2/12 text-center h-[39px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                                        value={car_carisma || 8}
                                        onChange={(e) => setCar_carisma(e.target.value)}
                                    />
                                    <button onClick={(e) => setCar_carisma(car_carisma + 1)} type='button' className="bg-sky-700 hover:bg-sky-800 text-white-800 font-bold py-2 px-4 -mx-4  rounded-r">
                                        +
                                    </button>

                                    <p className='font-semibold text-lg'>{takebonif(car_carisma || 8).string}</p>
                                </div>
                            </div>

                        </div>
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Imagen: {errors.imagen && <p className="text-red-600 float-right">{errors.imagen}</p>}</label><br />
                            <input
                                type="text"
                                id="imagen"
                                name="imagen"
                                placeholder='Imagen'
                                className='m-4 p-1 text-black dark:text-black w-3/4 rounded-lg px-2'
                                value={imagen || ''}
                                onChange={(e) => setImagen(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type={bstate}
                        className='flex w-1/12 justify-center text-lg mt-12 text-white bg-sky-700 border-sky-800 border-2 rounded-xl hover:bg-sky-800 p-2 transition-all'
                        onClick={validateForm}
                    >
                        Crear
                    </button>
                </form >
            </div>
        </div >
    );
}