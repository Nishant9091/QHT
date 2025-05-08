import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Service from './pages/service/Service.jsx'; // Create this component
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Results from './pages/results/Results.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
