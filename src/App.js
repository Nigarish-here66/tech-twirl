import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import HireUs from './pages/hireUs';
import PortfolioPage from './pages/portfolio';
import Footer from './components/Footer';
import {
  AboutSection,
  Card,
  Card1,
  HeroSection,
  HireUS,
  OurServices,
  SoftwareComapany,
  SoftwareCompany1,
  Stats,
} from './Pages'; 
function App() {
  return (
    <HeroSection />
      <AboutSection />
      <OurServices />
      <SoftwareComapany/>
      <SoftwareCompany1/>
      <HireUS/>
      <Card/>
      <Card1/>
      <Stats/>
    
      <SoftwareCompany1/>
     
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<PortfolioPage/>} />
      <Route path="/hire-us" element={<HireUs />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
