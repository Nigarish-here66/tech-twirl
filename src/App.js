import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import HireUs from './pages/hireUs';
import PortfolioPage from './pages/portfolio';
import Footer from './components/Footer';
function App() {
  return (
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
