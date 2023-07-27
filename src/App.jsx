import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'

const App = () => {
  return (
    <div className='flex'>
        <Header/>
        <Home/>
    </div>
  )
};

export default App