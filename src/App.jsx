import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/Navtabs';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <NavTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects/*" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
