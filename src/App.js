import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PortfolioPage from './pages/portfolio';
import Teams from './pages/team';
import Footer from './components/Footer';
import Homepage from './HomePage';
import OurServices from './pages/services';
import Contact from './pages/contact';
function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<OurServices />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/team" element={<Teams />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
