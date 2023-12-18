import React from 'react';
// import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';

import NavBar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
// import Footer from '../Footer/Footer';
// import GoHome from '../GoHome/GoHome';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          {/* <GoHome /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
