import React from 'react'
import AbouteMe from '../abouteme/AbouteMe';
import Contact from '../contact/Contact';
import Inicio from '../inicio/Inicio';
import Portfolio from '../portfolio/Portfolio';
import Services from '../services/Services';


const Home = () => {
  return (
    <div >
        <Inicio/>
        <AbouteMe/>
        <Services/>
        <Portfolio/>
        <Contact/>
    </div>
  )
};

export default Home;
