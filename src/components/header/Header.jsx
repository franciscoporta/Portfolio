import React from 'react'
import img_perfil from '../../assets/perfil.jpg'
import style from './Header.module.css'

const Header = () => {


  return (
    <header className='w-[14%] bg-[#0c0c14] h-screen fixed '>

      <div className='m-[20%]'>
        <img src={img_perfil} alt='perfil' className='rounded-full mb-[10%]'/>
        <h5 className='text-base font-medium text-slate-200 tracking-widest ml-[2%]'>Francisco Porta</h5>
      </div>

        <ul className=" p-4 divide-y">
          <li className="p-[6%] ">
            <a className={style.link} href='#inicio'>
              <span className="text-base font-medium text-slate-200 hover:text-slate-500 tracking-widest hover:scale-105 ease-in duration-300">Inicio</span>
            </a>
          </li>    
          <li className="p-[6%]">
            <a className={style.link} href='#sobremi'>
              <span className="text-base font-medium text-slate-200 hover:text-slate-500 tracking-widest hover:scale-105 ease-in duration-300">Sobre Mi</span>
            </a>
          </li>
          {/* <li className="p-[6%]">
            <a className={style.link} href='#experiencia'>
              <span className=" hover:scale-105 ease-in duration-300text-base font-medium text-slate-200 hover:text-slate-500 tracking-widest" >Experiencia</span>
            </a>
          </li> */}
          <li className="p-[6%]">
            <a className={style.link} href='#proyectos'>
              <span className="text-base font-medium text-slate-200 hover:text-slate-500 tracking-widest hover:scale-105 ease-in duration-300">Proyectos</span>
            </a>
          </li>
          <li className="p-[6%]">
            <a className={style.link} href='#contacto'>
              <span className="text-base font-medium text-slate-200 hover:text-slate-500 tracking-widest hover:scale-105 ease-in duration-300">Contacto</span>
            </a>
          </li>
        </ul>
    </header>
  )
};

export default Header;


