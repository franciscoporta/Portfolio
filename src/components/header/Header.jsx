import React from 'react'
import img_perfil from '../../assets/perfil.jpg'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.containerHeader}>
      <div>
        <img src={img_perfil} alt='perfil' className={style.img}/>
      </div>
        <h5 className={style.name}>Franisco Porta</h5>
        <ul>
          <li>
            <a className="nav-link" href='#home'>
              <span>Inicio</span>
            </a>
          </li>    
          <li>
            <a className="nav-link" href='#sobremi'>
              <span>Sobre Mi</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href='#experiencia'>
              <span>Experiencia</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href='#proyectos'>
              <span>Proyectos</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href='#contacto'>
              <span>Contacto</span>
            </a>
          </li>
        </ul>
    </header>
  )
};

export default Header;


