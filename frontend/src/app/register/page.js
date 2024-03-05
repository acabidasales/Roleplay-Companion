"use client"
import React, {useState} from 'react';
import {useRouter} from "next/navigation";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();

        await fetch(process.env.NEXT_PUBLIC_BACKEND_API_URL+'/api/register', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                email,
                password
            })
        })

        await router.push('/login');
    }

    return (
            <form onSubmit={submit} className='max-w-screen-md mx-auto bg-zinc-800'>
                <div className='m-4 align-middle justify-center items-center'>
                    <h1 className="text-xl font-bold mt-4 mb-4 pt-2">Registro</h1>
                    <p className='m-4'>Nombre de usuario:</p>
                    <input className="form-control text-black ml-4" placeholder="Username" required
                        onChange={e => setUsername(e.target.value)}
                    />
                    <p className='m-4'>Email</p>
                    <input type="email" className="form-control text-black ml-4" placeholder="Email" required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p className='m-4'>Password</p>
                    <input type="password" className="form-control text-black ml-4" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="w-full mt-4 mb-4 group relative" type="submit">
                        Registrarse
                        <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-500 group-hover:w-1/2 group-hover:transition-all"></span>
                    </button>
                </div>
            </form>
    );
};

export default Register;