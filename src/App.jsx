import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import style from './App.module.css'

const App = () => {
  return (
    <div className={style.container}>
        <Header/>
        <Home/>
    </div>
  )
};

export default App