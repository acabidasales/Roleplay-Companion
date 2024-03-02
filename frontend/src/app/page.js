import Image from "next/image";

export default function Inicio() {
  return (
    <div className='max-w-screen-md mx-auto'>
        <h2 className='text-xl font-bold mt-4 mb-4'>Inicio</h2>
        <div className='max-w-screen-md mx-auto bg-zinc-800'>
            <div className='relative max-w-screen-md'>
                <img className='absolute w-1/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="/logo-texto-blanco.png"/>
                <div className='bg-black bg-opacity-0'>
                    <img className="hero-up" src="/hero-img.png"/>
                </div>
            </div>
            <div>
            <div className='m-4 pb-4'>
                <h2 className='text-lg font-semibold mt-4 mb-4'>Bienvenido a Roleplay Companion</h2>
                <p>
                Una web que te acompañará en tus aventuras y te dará un fácil acceso a tus personajes y campañas. Desde crear tus personajes hasta consultar recursos, todo al alncance de tu mano.<br></br><br></br>
                Actualmente solamente dispondrá de un juego de rol personalizado, utilizando bases de 
                </p>
            </div>
         </div>
        </div>
      </div>
  );
}
