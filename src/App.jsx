import React from 'react';
import Home from './pages/home/Home.jsx';
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App;