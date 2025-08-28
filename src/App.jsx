import React from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'  
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home'
import Dashboard from './pages/Dashbord'
import AboutUs from './pages/AboutUs'
import Rules from './pages/Rules'
import Data from './pages/Data'
import EmployeesCorner from './pages/EmployeesCorner'
import RTI from './pages/Rti'
import GrievanceRedressal from './GrievanceRedressal'
import Divisions from './Divisions'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/About" element={<AboutUs/>}/> 
      <Route path="/Rules" element={<Rules/>}/> 
      <Route path="/Data" element={<Data/>}/> 
      <Route path="/EmployeesCorner" element={<EmployeesCorner/>}/> 
      <Route path="/RTI" element={<RTI/>}/>
      <Route path="/GrievanceRedressal" element={<GrievanceRedressal/>}/>
      <Route path="/Divisions" element={<Divisions/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App