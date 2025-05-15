import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './HomePage';
import Contact from './pages/contact';
import Team from './pages/team';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import Admin from './pages/Admin';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;