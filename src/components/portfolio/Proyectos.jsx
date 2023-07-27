import React from 'react'
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import video from '../../assets/VideoTov.mp4'
import videoGame from '../../assets/videogame.jpg'
import pokemon from '../../assets/pokemon.jpeg'

const Proyectos = () => {

  const abrirEnlace = (value) => {
    window.open(value, "_blank");
  };

  return (
    <section id='proyectos' className='h-screen bg-[#10101a] ml-[14%]'>
      <div className="max-w-[1680px] mx-auto my-auto px-2 py-6 ml-[4%]">
        <p className="text-3xl font-bold text-slate-200 tracking-widest">
          Proyectos
        </p>
        <div className="grid sm:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-10 h-full w-full"
              src="https://res.cloudinary.com/drscelx6f/image/upload/v1676412534/Projects_images/tiger_coffee_hjn2kt.png"
              width="600"
              height="600"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Tiger Coffee
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                MongoDB-NodeJS-ReactJS
              </p>
              <div className="flex justify-between items-center ">
                <a href="https://github.com/JuanSegundo7/Final_Proyect/">
                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </a>
                <a href="https://tigercoffee.vercel.app/">
                  <HiExternalLink className=" text-white text-4xl cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-10 h-full w-full"
              src={videoGame}
              width="600"
              height="600"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Videdogame App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Express-NodeJS-ReactJS
              </p>
              <div className="flex justify-between items-center ">
                <button onClick={() => abrirEnlace('https://github.com/franciscoporta/Videogame')}>

                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </button>
                {/* <a href="https://github.com/JuanSegundo7/Final_Proyect/">
                </a> */}
                <button onClick={() => abrirEnlace('https://www.loom.com/share/c2dc9a11a6334a0fbbe3d0aea174d975?sid=de790003-a506-4c3a-995d-34b3fe537026')}>
                  <HiExternalLink className=" text-white text-4xl cursor-pointer" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <img
              className="rounded-xl group-hover:opacity-10 h-full w-full"
              src={pokemon}
              width="600"
              height="600"
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Pokebola
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Express-NodeJS-ReactJS
              </p>
              <div className="flex justify-between items-center ">
                <button onClick={() => abrirEnlace('https://github.com/franciscoporta/PI-Pokemon')}>
                  <FaGithub className=" text-white text-4xl cursor-pointer" />
                </button>
                <button onClick={() => abrirEnlace('https://www.loom.com/share/e521885e50a44fcd90230a77c314d292?sid=421249e8-e525-4c16-8096-1fda76f8d660')}>
                  <HiExternalLink className=" text-white text-4xl cursor-pointer" />
                </button>
              </div>
            </div>
          </div> 

          <div className="relative flex items-center justify-center h-auto w-[50%] shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] mt-[10%]">
          
          <video autoPlay muted loop id="background-video" className="rounded-xl group-hover:opacity-10 h-full w-full" >
            <source src={video} type="video/mp4" />
          </video>
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <h3 className="text-2xl text-white tracking-wider text-center">
              Mision Tov
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Firebase-React Native-Typescript
                </p>
                <div className="flex justify-between items-center ">
                    <button onClick={() => abrirEnlace('https://www.linkedin.com/feed/update/urn:li:activity:7082424786278129664/')}>
                      <HiExternalLink className=" text-white text-4xl cursor-pointer" />
                    </button>
                </div>
          </div>
        </div>

        </div>
      </div> 
    </section>
  )
}
/*
 const abrirEnlace = (value) => {
    window.open(value, "_blank");
  };

                   <button onClick={() => abrirEnlace('https://www.loom.com/share/c2dc9a11a6334a0fbbe3d0aea174d975?sid=de790003-a506-4c3a-995d-34b3fe537026')}>
                      <HiExternalLink className=" text-white text-4xl cursor-pointer" />
*/
export default Proyectos;
