import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HireUs from './pages/hireUs';
import PortfolioPage from './pages/portfolio';
import Footer from './components/Footer';
<<<<<<< HEAD
import Card from './HomePage/Card';
import OurServices from './pages/services';
import Contact from './pages/contact';
=======
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
>>>>>>> b5d61cc33faa5334d002640c9edea5222b0ea23d
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
      <Route path="/" element={<Card/>} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hire-us" element={<HireUs />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
