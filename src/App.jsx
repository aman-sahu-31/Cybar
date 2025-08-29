import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Header/Navbar"; 
import Home from "./Components/Home";
import Dashboard from "./pages/Dashbord";
import AboutUs from "./pages/AboutUs";
import Divisions from "./Divisions";   // ✅ fixed path
import Rules from "./pages/Rules";           
import Data from "./pages/Data";             
import EmployeesCorner from "./pages/EmployeesCorner";
import RTI from "./pages/RTI";
import GrievanceRedressal from "./pages/GrievanceRedressal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Divisions" element={<Divisions />} />
          <Route path="/Rules" element={<Rules />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/EmployeesCorner" element={<EmployeesCorner />} />
          <Route path="/RTI" element={<RTI />} />
          <Route path="/GrievanceRedressal" element={<GrievanceRedressal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
