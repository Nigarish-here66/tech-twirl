
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PortfolioPage from './pages/portfolio';
import Teams from './pages/team';
import Footer from './components/Footer';
import Homepage from './HomePage';
import OurServices from './pages/services';
import Contact from './pages/contact';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* This ensures that scroll position resets on route change */}
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
