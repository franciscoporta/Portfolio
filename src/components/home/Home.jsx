import React from 'react'
import AbouteMe from '../abouteme/AbouteMe';
import Contact from '../contact/Contact';
import Inicio from '../inicio/Inicio';
import Proyectos from '../portfolio/Proyectos';


const Home = () => {
  return (
    <div >
        <Inicio/>
        <AbouteMe/>
        <Proyectos/>
        <Contact/>
    </div>
  )
};

export default Home;
