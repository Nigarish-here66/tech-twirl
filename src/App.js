import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './HomePage';
import Contact from './pages/contact';
import Team from './pages/team';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';

function App() {
  const isAdminAuthenticated = !!localStorage.getItem('adminToken');

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={isAdminAuthenticated ? <Admin /> : <Navigate to="/admin/login" />} />
        <Route path="/admin/login" element={<AdminLogin />} />
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
