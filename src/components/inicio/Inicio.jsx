import React from 'react'
import img_perfil from '../../assets/perfil.jpg'
import TypingAnimation from '../typinganimation/TypingAnimation'

const Inicio = () => {
  return (
    <section id='inicio' className='h-screen bg-[#10101a] ml-[14%]'>
        <div className='flex'>
            <div className='w-[50%]'>
                <h1 className='text-white tracking-wider text-6xl mt-[30%] ml-[15%] font-normal'>Francisco Porta</h1>
                <h1 className='text-white tracking-wider text-5xl ml-[20%] mt-[4%] pt-[1%] font-bold'><TypingAnimation/></h1>
                <h1 className='text-white w-[60%] ml-[24%] mt-[4%]'>
                Desarrollador Full Stack orientado hacia el Front End. Apasionado por la programación, comprometido con la calidad del código y escalabilidad a largo plazo de las aplicaciones. Abierto a nuevos desafios y en busca de un crecimiento constante. 
                </h1>
                <button className="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 mt-[20%] ml-[45%]"><p className='text-white tracking-wider'>Descarga mi CV!</p></button>
            </div>
            <div>
                <img src={img_perfil} alt='img_perfil'className='rounded-full w-[70%] mt-[20%] ml-[15%]'/>
            </div>
        </div>
    </section>
  )
}

export default Inicio