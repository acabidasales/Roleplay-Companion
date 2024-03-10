"use client"
import React, {useState} from 'react';
import Link from 'next/link';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+'/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                username,
                password
            })
        });

        window.location.href = "/";
    }

    return (
        <form onSubmit={submit} className='max-w-screen-md mx-auto bg-bg-950 z-0'>
            <div className='m-4 align-middle justify-center items-center pb-4'>
                <h1 className="text-xl font-bold mt-4 mb-4 pt-2 text-white">Inicio de sesión</h1>
                <p className='m-4 text-white'>Nombre de usuario:</p>
                <input type="username" className="form-control text-black ml-4" placeholder="Username" required
                        onChange={e => setUsername(e.target.value)}
                />
                <p className='m-4 text-white'>Contraseña</p>
                <input type="password" className="form-control text-black ml-4" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                />

                <button className="w-full mt-4 mb-4 group relative text-white" type="submit">
                    Iniciar sesión
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-700 group-hover:w-1/2 group-hover:transition-all"></span>
                </button>
                <Link className='m-4 relative group' href="/register">¿No tienes una cuenta? Hazme click
                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-700 group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-700 group-hover:w-1/2 group-hover:transition-all"></span>
                </Link><br/>
            </div>
        </form>
    );
};

export default Login;