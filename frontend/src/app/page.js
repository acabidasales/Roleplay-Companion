"use client"
import RevealOnScroll from "@/app/components/reveal";
import Link from "next/link";
import Image from "next/image";

export default function Inicio() {
    return (
        <div className='lg:max-w-screen-2xl md:max-w-screen-xl sm:max-w-screen-lg transition-all mx-auto rounded pl-3 pr-3 pb-32 pt-16 z-0'>
            <section className="text-white bg-bg-950 mt-8 rounded-3xl z-10 h-full">
                <div className="container mx-auto flex p-12 md:flex-row flex-col items-center max-h-screen">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <div className="w-full self-center">
                            <Image className="object-cover object-center rounded p-8 center w-full" width={500} height={500} alt="hero" src="/logo-texto-blanco.png"/>
                        </div>
                        <p className="mb-8 leading-relaxed text-center">Crea, aprende, juega y diviertete con tus propias historias épicas. Conviertete en el mayor heroe conocido o en el villano más temido, todo al alcance de tu mano</p>
                        <div className="flex justify-center mx-auto">
                            {   
                            <Link href="/login" className="inline-flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded-xl text-lg">Iniciar sesión</Link>
                            }
                            <Link href="#scroll" className="ml-4 inline-flex text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded-xl text-lg">Ver más</Link>
                        </div>
                    </div>
                    <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
                        <Image width={750} height={750} className="object-cover object-center rounded-xl" alt="hero" src="/hero.png"/>
                    </div>
                </div>
                
                <div id="scroll"></div>
            </section>
            <RevealOnScroll>
                <div className='lg:max-w-screen-2xl md:max-w-screen-xl sm:max-w-screen-lg transition-all mx-auto relative mt-72 h-[600px] w-full flex flex-row justify-center items-center gap-3'>
                        <div className="bg-bg-950 rounded-3xl p-8 w-[45%] h-full max-h-[600px]">
                                <h1 className=" text-2xl font-semibold text-center">Crea tus propios personajes</h1>
                                <Image width={750} height={750} className="object-cover object-center rounded-xl mt-8" alt="pjs" src="/pjs.jpg"/>
                                <p className=" text-lg font-semibold text-center mt-10">Crea heroes únicos, los mayores villanos de la historia o simplemente sumergete en las mayores aventuras nunca antes vistas</p>
                        </div>
                    <div className="w-[45%] h-full max-h-[600px] flex flex-col justify-center items-center gap-3">
                        <div className="bg-bg-950 rounded-3xl p-8 w-full h-full max-h-[600px]">
                            <h1 className=" text-2xl font-semibold text-center">Sumergete en tu propia aventura</h1>
                            <Image width={700} height={700} className="object-cover object-center rounded-xl mt-4 mx-auto" alt="aventuras" src="/aventuras.jpg"/>
                            <p className=" text-xl font-semibold text-center mt-10">Demuestrales de que estás hecho</p>
                        </div>
                    </div>
                </div >
                <div id="scroll2" className='lg:max-w-screen-2xl md:max-w-screen-xl sm:max-w-screen-lg transition-all mx-auto relative h-[600px] w-full flex mt-3 flex-row justify-center items-center gap-3'>
                        <div className="bg-bg-950 rounded-3xl p-8 w-[45%] h-full max-h-[600px]">
                                <h1 className=" text-2xl font-semibold text-center">Sumérgete en las mayores bibliotecas de los arcanos</h1>
                                <Image width={750} height={750} className="object-cover object-center rounded-xl mt-8" alt="pjs" src="/biblio.jpg"/>
                                <p className=" text-lg font-semibold text-center mt-10">Recopila conocimientos únicos que te ayudarán a derrotar a tus enemigos.¡Dales lo que se merecen a esos sacos de huesos!</p>
                        </div>
                </div >
            </RevealOnScroll>
        </div>
    );
}