import React from 'react'
import AbouteMe from '../abouteme/AbouteMe';
import Contact from '../contact/Contact';
import Portfolio from '../portfolio/Portfolio';
import Services from '../services/Services';
import style from './Home.module.css'

const Home = () => {
  return (
    <div >
        <section id='home' className={style.containerHome}>
          Soy FullStack Developer orientado al Front-End entusiasta de JavaScript, apasionado por React. Tengo experiencia trabajando con React, Redux, NodeJS, Express, Sequelize y PostgreSQL. Y para al estilado de la pagina utilizo CSS puro y Bootstrap.Tengo experiencia trabajando con metodologias agiles como Scrum.
        </section>
        <AbouteMe/>
        <Services/>
        <Portfolio/>
        <Contact/>
    </div>
  )
};

export default Home;
