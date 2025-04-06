import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HireUs from './pages/hireUs';
import PortfolioPage from './pages/portfolio';
import Footer from './components/Footer';
import Card from './HomePage/Card';
import OurServices from './pages/services';
import Contact from './pages/contact';
function App() {
  return (
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
