import React from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'  
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      {/* <Route path="/contact" element={<>}/> */}
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App