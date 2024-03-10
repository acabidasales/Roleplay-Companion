"use client"

import Link from "next/link";

export default function Personajes() {

    return (
        <div className='lg:max-w-screen-2xl md:max-w-screen-md sm:max-w-screen-sm transition-all mx-auto bg-bg-950 rounded pl-3 pr-3 pb-3 z-0'>
            <h2 className='text-xl font-bold mt-4 mb-4 ml-4 pt-2 text-white'>Wiki</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-4'>
                <Link href="/wiki/alineamientos" className="block max-w-scre p-6 bg-bg-950 border border-sky-700 rounded-lg shadow hover:bg-sky-800 transition-all">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Alineamientos</h5>
                    <p className="font-normal text-white">Los alineamientos describen la ética y moralidad de un personaje desde legal bueno hasta caótico malvado, pasando por neutralidades y combinaciones de ley y caos con bien y mal.</p>
                </Link>
                <Link href="/wiki/clases" className="block max-w-scre p-6 bg-bg-950 border border-sky-700 rounded-lg shadow hover:bg-sky-800 transition-all">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Clases</h5>
                    <p className="font-normal text-white">Las clases son roles especializados que definen las habilidades y habilidades únicas de un personaje, como combate cuerpo a cuerpo, magia, habilidades furtivas, sanación y magia divina, entre otros.</p>
                </Link>
                <Link href="/wiki/equipamiento" className="block max-w-scre p-6 bg-bg-950 border border-sky-700 rounded-lg shadow hover:bg-sky-800 transition-all">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Equipamiento</h5>
                    <p className="font-normal text-white">Objetos y herramientas que los personajes pueden usar, como armas, armaduras, herramientas, pociones y artefactos mágicos, proporcionando recursos para combate, protección, y habilidades específicas.</p>
                </Link>
                <Link href="/wiki/habilidades" className="block max-w-scre p-6 bg-bg-950 border border-sky-700 rounded-lg shadow hover:bg-sky-800 transition-all">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Habilidades</h5>
                    <p className="font-normal text-white">Las habilidades representan las capacidades y conocimientos específicos que poseen los personajes, abarcando desde destrezas físicas hasta conocimientos teóricos y sociales, utilizadas para superar desafíos y realizar tareas.</p>
                </Link>
                <Link href="/wiki/razas" className="block max-w-scre p-6 bg-bg-950 border border-sky-700 rounded-lg shadow hover:bg-sky-800 transition-all">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Razas</h5>
                    <p className="font-normal text-white">Las razas son especies que los personajes pueden ser. Cada raza tiene atributos y habilidades únicas que afectan las características y el estilo de juego del personaje.</p>
                </Link>
                <Link href="/wiki/transfondos" className="block max-w-scre p-6 bg-bg-950 border border-sky-700 rounded-lg shadow hover:bg-sky-800 transition-all">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Transfondos</h5>
                    <p className="font-normal text-white">Los transfondos proveen contexto histórico y personal a los personajes, definiendo su pasado, habilidades, y conexiones antes de comenzar sus aventuras.</p>
                </Link>
            </div>
        </div>
    );
}