"use client"

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/navigation';
import { Tooltip } from "@nextui-org/tooltip";

export default function Personaje_update(id) {
    const router = useRouter()
    const firstRender = useRef(true);
    const [userstate, setUserstate] = useState('')
    const [user, setUser] = useState('')
    const [bstate, setBstate] = useState('button')
    const [nombre, setNombre] = useState('')
    const [id_raza, setId_raza] = useState('')
    const [id_clase, setId_clase] = useState('')
    const [id_campaña, setId_Campaña] = useState('')
    const [estado, setEstado] = useState('')
    const [nivel, setNivel] = useState(1)
    const [imagen, setImagen] = useState('')
    const [car_fuerza, setCar_fuerza] = useState(8)
    const [car_destreza, setCar_destreza] = useState(8)
    const [car_constitucion, setCar_constitucion] = useState(8)
    const [car_inteligencia, setCar_inteligencia] = useState(8)
    const [car_sabiduria, setCar_sabiduria] = useState(8)
    const [car_carisma, setCar_carisma] = useState(8)
    const [id_transfondo, setId_transfondo] = useState('')
    const [id_alineamiento, setId_alineamiento] = useState('')
    const [apariencia, setApariencia] = useState('')
    const [edad, setEdad] = useState('')
    const [historia, setHistoria] = useState('')
    const [notas, setNotas] = useState('')
    const [puntos_experiencia, setPuntos_experiencia] = useState(0)
    const [competencias_equipamiento, setCompetenciasEquipamiento] = useState([])
    const [competencias_habilidades, setCompetenciasHabilidades] = useState([])
    const [errors, setErrors] = useState({});

    const [isLoading, setLoading] = useState(true)
    const [data_razas, setData_razas] = useState({})
    const [data_clases, setData_clases] = useState({})
    const [data_camapañas, setData_campañas] = useState({})
    const [data_transfondos, setData_transfondos] = useState({})
    const [data_alineamientos, setData_alineamientos] = useState({})
    const [data_competenciaequipamiento, setData_competenciaequipamiento] = useState({})
    const [data_competenciahabilidades, setData_competenciahabilidades] = useState({})
    const [data_personaje, setData_personaje] = useState({})

    useEffect(() => {
        setUserstate(localStorage.getItem('auth'))
        setUser(localStorage.getItem('user'))
    }, [])

    const validateForm = () => {
        let errors = {};

        if (nombre === "") {
            errors.nombre = 'Es necesario un nombre.';
        }
        if (id_raza === "") {
            errors.raza = 'Es necesaria una raza';
        }
        if (id_clase === "") {
            errors.clase = 'Es necesaria una clase';
        }
        if (nivel === "") {
            errors.nivel = 'Es necesario empezar con al menos nivel 1';
        }
        if (imagen === "") {
            errors.imagen = 'Imagen necesaria.';
        }
        if (id_campaña === "") {
            errors.campaña = 'Es necesaria una campaña';
        }
        if (id_alineamiento === "") {
            errors.alineamiento = 'Es necesario tener un alineamiento';
        }
        if (id_transfondo === "") {
            errors.transfondo = 'Es necesaria un transfondo';
        }
        if (apariencia === "") {
            errors.apariencia = 'Es necesaria una apariencia';
        }
        if (edad === "") {
            errors.edad = 'Es necesaria una edad';
        }
        if (historia === "") {
            errors.historia = 'Es necesaria una historia';
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

        console.log(id.params.id);
        validateForm()
    }, [])

    const submitForm = async (event) => {
        console.log("a");
        event.preventDefault()

        const data_update = {
            "id": id.params.id,
            "usuario_propietario": user,
            "nombre": nombre,
            "id_raza": id_raza,
            "id_clase": id_clase,
            "id_campaña": id_campaña,
            "estado": "Vivo",
            "nivel": nivel,
            "imagen": imagen,
            "car_fuerza": car_fuerza,
            "car_destreza": car_destreza,
            "car_constitucion": car_constitucion,
            "car_inteligencia": car_inteligencia,
            "car_sabiduria": car_sabiduria,
            "car_carisma": car_carisma,
            "id_transfondo": id_transfondo,
            "id_alineamiento": id_alineamiento,
            "apariencia": apariencia,
            "edad": edad,
            "historia": historia,
            "notas": notas,
            "puntos de experiencia": puntos_experiencia
        }

        const JSONdata = JSON.stringify(data_update);

         const resp = await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/update/'+id.params.id, {
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json',
                 credentials: 'include',
             },
             body: JSONdata,
         }).then((res) => res.json())
             .then(async (data) => {
                 const personaje_id = data.personaje.id
                 const equipamientosIDs = [];
                 const habilidadesIDs = [];
 
                 console.log(personaje_id);
 
                 for (let i = 0; i < competencias_equipamiento.length; i++) {
                     const competenciaequipamientoID = competencias_equipamiento[i];
                     equipamientosIDs.push({
                         personaje_id: personaje_id,
                         competencia_equipamiento_id: competenciaequipamientoID
                     });
                 }
 
                 for (let i = 0; i < competencias_habilidades.length; i++) {
                     const competenciahabilidadesID = competencias_habilidades[i];
                     habilidadesIDs.push({
                         personaje_id: personaje_id,
                         competencia_habilidad_id: competenciahabilidadesID
                     });
                 }
 
                 const JSONdataequipamiento = JSON.stringify(competencias_equipamiento);
                 const JSONdatahabilidad = JSON.stringify(competencias_habilidades);
 
                 await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personaje/competencias-equipamiento/'+ id.params.id, {
                     method: 'PUT',
                     headers: {
                         'Content-Type': 'application/json',
                         credentials: 'include',
                     },
                     body: JSONdataequipamiento,
                 });
 
                 await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personaje/competencias-habilidad/'+ id.params.id, {
                     method: 'PUT',
                     headers: {
                         'Content-Type': 'application/json',
                         credentials: 'include',
                     },
                     body: JSONdatahabilidad,
                 });
 
                 router.push("/personajes")
             });
    };
    //CARGAR DATOS
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/razas', {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                setData_razas(data)
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/' + id.params.id, {
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setData_personaje(data)
                        setNombre(data.nombre)
                        setId_raza(data.id_raza)
                        setId_clase(data.id_clase)
                        setNivel(data.nivel)
                        setImagen(data.imagen)
                        setEstado(data.estado)
                        setId_Campaña(data.id_campaña)
                        setCar_fuerza(data.car_fuerza)
                        setCar_destreza(data.car_destreza)
                        setCar_constitucion(data.car_constitucion)
                        setCar_inteligencia(data.car_inteligencia)
                        setCar_sabiduria(data.car_sabiduria)
                        setCar_carisma(data.car_carisma)
                        setId_alineamiento(data.id_alineamiento)
                        setId_transfondo(data.id_transfondo)
                        setApariencia(data.apariencia)
                        setEdad(data.edad)
                        setHistoria(data.historia)
                        setNotas(data.notas)
                        setPuntos_experiencia(data.puntos_experiencia)
                        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/filtrarPorHabilidades/'+id.params.id, {
                            credentials: 'include',
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                let idsArray = [];
                                for (let i = 0; i < data.length; i++) {
                                    if (data[i].id) {
                                        idsArray.push(data[i].competencia_habilidad_id);
                                    }
                                }
                                setCompetenciasHabilidades(idsArray);
                            })
                            fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/personajes/filtrarPorEquipamiento/'+id.params.id, {
                                credentials: 'include',
                            })
                                .then((res) => res.json())
                                .then((data) => {
                                    let idsArray = [];
                                    for (let i = 0; i < data.length; i++) {
                                        if (data[i].id) {
                                            idsArray.push(data[i].competencia_equipamiento_id);
                                        }
                                    }
                                    setCompetenciasEquipamiento(idsArray);
                                })
                    })

                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/clases', {
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setData_clases(data)
                    })
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/campanas', {
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setData_campañas(data)
                    })
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/competencias-habilidades', {
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setData_competenciahabilidades(data)
                    })
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/competencias-equipamiento', {
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setData_competenciaequipamiento(data)
                    })
                fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/alineamientos', {
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setData_alineamientos(data)
                        fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/api/transfondos', {
                            credentials: 'include',
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                setData_transfondos(data)
                            })
                    })
            })
    }, [])

    function isEmpty(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
    //VERIFICAR SI SE HAN CARGADO LOS DATOS
    useEffect(() => {
        // Comprueba si todos los datos han sido cargados
        if (
            !isEmpty(data_razas) &&
            !isEmpty(data_clases) &&
            !isEmpty(data_camapañas) &&
            !isEmpty(data_competenciaequipamiento) &&
            !isEmpty(data_competenciahabilidades) &&
            !isEmpty(data_alineamientos) &&
            !isEmpty(data_transfondos) &&
            !isEmpty(data_personaje)
        ) {
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, [
        data_razas,
        data_clases,
        data_camapañas,
        data_competenciaequipamiento,
        data_competenciahabilidades,
        data_alineamientos,
        data_transfondos,
        data_personaje
    ]);

    function takebonif(num) {
        let bonif = Math.floor((num - 10) / 2);
        let bonif_obj = {
            "string": (bonif >= 0 ? "+" : "") + bonif,
            "int": bonif
        }
        return bonif_obj;
    }

    const handleCheckboxChangeEquipamiento = (itemName) => {
        setCompetenciasEquipamiento(prevItems => {
            if (prevItems.includes(itemName)) {
                return prevItems.filter(item => item !== itemName);
            } else {
                return [...prevItems, itemName];
            }
        });
        console.log(competencias_equipamiento);
    };

    const handleCheckboxChangeHabilidades = (itemName) => {
        setCompetenciasHabilidades(prevItems => {
            if (prevItems.includes(itemName)) {
                return prevItems.filter(item => item !== itemName);
            } else {
                return [...prevItems, itemName];
            }
        });
    };

    if (!userstate) return (
        <div className='lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 rounded pl-3 pr-3 pb-3 z-0'>
            <p className="mt-4 mb-4 ml-4 pt-2 pb-2 text-center w-full">Debes estar registrado para actualizar un personaje. Si no estas registrado,
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
                <h2 className='text-2xl font-bold mt-4 mb-4 ml-4 pt-2 text-white'>Actualizar {data_personaje.nombre}</h2>
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
                            <select id="clase" className='m-4 text-black dark:text-black w-3/4 rounded-lg px-2 p-1' onChange={(e) => setId_clase(e.target.value)} value={id_clase || ''}>
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
                                value={nivel || 1}
                                onChange={(e) => setNivel(e.target.value)}
                            />
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
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Campaña: {errors.campaña && <p className="text-red-600 float-right">{errors.campaña}</p>}</label><br />
                            <select id="campaña" className='m-4 text-black dark:text-black w-3/4 rounded-lg px-2 p-1' onChange={(e) => setId_Campaña(e.target.value)} value={id_campaña || ''}>
                                <option value="">--- Elige campaña ---</option>
                                {data_camapañas.map(item => {
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
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Alineamiento: {errors.alineamiento && <p className="text-red-600 float-right">{errors.alineamiento}</p>}</label><br />
                            <select id="alineamiento" className='m-4 text-black dark:text-black w-3/4 rounded-lg px-2 p-1' onChange={(e) => setId_alineamiento(e.target.value)} value={id_alineamiento || ''}>
                                <option value="">--- Elige alineamiento ---</option>
                                {data_alineamientos.map(item => {
                                    return (

                                        <option
                                            key={item.id}
                                            id={item.id}
                                            name={item.id}
                                            title={item.descripción}
                                            className='m-4 border-sky-800 text-black focus:ring-sky-600'
                                            value={item.id}
                                        >
                                            {item.alineamiento}
                                        </option>
                                    )
                                }
                                )}
                            </select>
                        </div>
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Transfondo: {errors.transfondo && <p className="text-red-600 float-right">{errors.transfondo}</p>}</label><br />
                            <select id="transfondo" className='m-4 text-black dark:text-black w-3/4 rounded-lg px-2 p-1' onChange={(e) => setId_transfondo(e.target.value)} value={id_transfondo || ''}>
                                <option value="">--- Elige transfondo ---</option>
                                {data_transfondos.map(item => {
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
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Apariencia: {errors.apariencia && <p className="text-red-600 float-right">{errors.apariencia}</p>}</label><br />
                            <textarea
                                type="text"
                                id="apariencia"
                                name="apariencia"
                                placeholder='Apariencia'
                                rows="6"
                                className='m-4 p-1 text-black dark:text-black w-3/4 rounded-lg px-2'
                                value={apariencia || ''}
                                onChange={(e) => setApariencia(e.target.value)}
                            />
                        </div>
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950 h-full'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16 h-full'>Edad en años: {errors.edad && <p className="text-red-600 float-right">{errors.edad}</p>}</label><br />
                            <input
                                type="text"
                                id="edad"
                                name="edad"
                                placeholder='Edad'
                                className='m-4 p-1 text-black dark:text-black w-3/4 rounded-lg px-2 mb-24'
                                value={edad || ''}
                                onChange={(e) => setEdad(e.target.value)}
                            />
                        </div>
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Historia: {errors.historia && <p className="text-red-600 float-right">{errors.historia}</p>}</label><br />
                            <textarea
                                type="text"
                                rows="8"
                                id="historia"
                                name="historia"
                                placeholder='Historia'
                                className='m-4 p-1 text-black dark:text-black w-3/4 rounded-lg px-2'
                                value={historia || ''}
                                onChange={(e) => setHistoria(e.target.value)}
                            />
                        </div>
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Notas adicionales: {errors.notas && <p className="text-red-600 float-right">{errors.notas}</p>}</label><br />
                            <textarea
                                type="text"
                                rows="8"
                                id="notas"
                                name="notas"
                                placeholder='Notas'
                                className='m-4 p-1 text-black dark:text-black w-3/4 rounded-lg px-2'
                                value={notas || ''}
                                onChange={(e) => setNotas(e.target.value)}
                            />
                        </div>
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Puntos de experiencia: {errors.puntos_experiencia && <p className="text-red-600 float-right">{errors.puntos_experiencia}</p>}</label><br />
                            <input
                                type="number"
                                id="puntos_experiencia"
                                name="puntos_experiencia"
                                placeholder='Puntos de experiencia'
                                className='m-4 p-1 text-black dark:text-black w-3/4 rounded-lg px-2'
                                value={puntos_experiencia || 0}
                                onChange={(e) => setPuntos_experiencia(e.target.value)}
                            />
                        </div>
                        <div className='w-full justify-center items-center flex flex-col rounded-xl bg-sky-950'>
                        <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Estado: {errors.estado && <p className="text-red-600 float-right">{errors.estado}</p>}</label><br />
                            <select id="estado" className='m-4 text-black dark:text-black w-3/4 rounded-lg px-2 p-1' onChange={(e) => setEstado(e.target.value)} value={estado || ''}>
                                <option value="">--- Elige estado ---</option>
                                <option value="Vivo">Vivo</option>
                                <option value="Muerto">Muerto</option>
                            </select>
                        </div>
                        <div className='w-full justify-center items-center rounded-xl bg-sky-950 pt-4 col-span-2'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Competencias de equipamiento: {errors.competencias_equipamiento && <p className="text-red-600 float-right">{errors.competencias_equipamiento}</p>}</label><br />
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 align-middle justify-center mt-4 p-8'>
                                {data_competenciaequipamiento.map(item => {
                                    const isSelected = competencias_equipamiento.includes(item.id);
                                    const bgColor = isSelected ? 'bg-sky-600' : 'bg-sky-900';
                                    return (
                                        <div key={item.id} className={`flex flex-row align-middle justify-between float-start gap-6 ${bgColor} p-2 px-4 rounded-3xl`}>
                                            <input
                                                type="checkbox"
                                                id={item.id}
                                                name="competencias_equipamiento"
                                                className='text-black dark:text-black min-w-4'
                                                value={item.nombre}
                                                onChange={() => handleCheckboxChangeEquipamiento(item.id)}
                                                checked={isSelected}
                                            />
                                            <label htmlFor={`competencias_equipamiento_${item.id}`} className=' pl-2'>
                                                {item.nombre}
                                            </label>
                                            <div className='flex self-center'>
                                                <Tooltip
                                                    offset={15}
                                                    className='bg-gray-950 rounded-3xl'
                                                    delay={500}
                                                    content={
                                                        <div className="px-4 py-2 max-w-[400px] text-justify">
                                                            <div className="text-md font-bold">{item.nombre}</div>
                                                            <div className="text-sm mt-2">{item.descripcion}</div>
                                                        </div>
                                                    }
                                                >
                                                    <Image width={25} height={25} alt="info equ" src="/info_white.png" />
                                                </Tooltip>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className='w-full justify-center items-center rounded-xl bg-sky-950 pt-4 col-span-2'>
                            <label className='text-lg p-4 text-white dark:text-white w-full pl-16'>Competencias de habilidades: {errors.habilidades && <p className="text-red-600 float-right">{errors.habilidades}</p>}</label><br />
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 align-middle justify-center mt-4 p-8'>
                                {data_competenciahabilidades.map(item => {
                                    console.log(competencias_habilidades);
                                    const isSelected = competencias_habilidades.includes(item.id);
                                    const bgColor = isSelected ? 'bg-sky-600' : 'bg-sky-900';
                                    return (
                                        <div key={item.id} className={`flex flex-row align-middle justify-between float-start gap-6 ${bgColor} p-2 px-4 rounded-3xl`}>
                                            <input
                                                type="checkbox"
                                                id={item.id}
                                                name="competencias_habilidades"
                                                className='text-black dark:text-black min-w-4'
                                                value={item.habilidad}
                                                onChange={() => handleCheckboxChangeHabilidades(item.id)}
                                                checked={isSelected}
                                            />
                                            <label htmlFor={`competencias_habilidades_${item.id}`} className=' pl-2'>
                                                {item.habilidad}
                                            </label>
                                            <div className='flex self-center'>
                                                <Tooltip
                                                    offset={15}
                                                    className='bg-gray-950 rounded-3xl'
                                                    delay={500}
                                                    content={
                                                        <div className="px-4 py-2 max-w-[400px] text-justify">
                                                            <div className="text-md font-bold">{item.habilidad}</div>
                                                            <div className="text-sm mt-2">{item.descripcion}</div>
                                                        </div>
                                                    }
                                                >
                                                    <Image width={25} height={25} className='fill-white' alt="info hab" src="/info_white.png" />
                                                </Tooltip>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                    <button
                        type={bstate}
                        className='flex w-1/12 justify-center text-lg mt-12 text-white bg-sky-700 border-sky-800 border-2 rounded-xl hover:bg-sky-800 p-2 transition-all'
                        onClick={validateForm}
                    >
                        Actualizar
                    </button>
                </form >
            </div>
        </div >
    );
}