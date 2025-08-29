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
import RTI from "./pages/Rti";
import GrievanceRedressal from "./pages/GrievanceRedressal";
import AccountFraud from "./Components/Account Fraud/AccountFraud";
import AccountTakeover from "./Components/AccountTakeover/AccountTakeover";
import PaymentFraud from "./Components/Payment Fraud/PaymentFraud";
import AppScam from "./Components/AppScam";
import OngoingSessionMonitoring from "./Components/OngoingSessionMonitoring";
import BehavioralRiskAnalytics from "./Components/BehavioralRiskAnalytics";
import TransactionRiskDashboard from "./Components/TransactionRiskDashboard";
import BotAutomationDetection from "./Components/BotAutomationDetection";

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
          <Route path="/AccountFraud" element={<AccountFraud />} />
          <Route path="/AccountTakeover" element={<AccountTakeover />} />
          <Route path="/PaymentFraud" element={<PaymentFraud />} />
          <Route path="/AppScam" element={<AppScam />} />
          <Route path="/OngoingSessionMonitoring" element={<OngoingSessionMonitoring />} />
          <Route path="/BehavioralRiskAnalytics" element={<BehavioralRiskAnalytics />} />
          <Route path="/TransactionRiskDashboard" element={<TransactionRiskDashboard />} />
          <Route path="/BotAutomationDetection" element={<BotAutomationDetection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
