import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AbousUs';
import Home from './components/Home/Home';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
