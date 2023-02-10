import React from 'react'
import Main from './components/main/Main'
import style from './common.module.scss'
import Nav from './components/navigation/Nav'
import About from './components/about/About'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    
    <div className={style.app}>
      <Nav /> 
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </div>
  )
}

export default App