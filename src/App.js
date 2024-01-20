import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AboutUs from "./views/AboutUs/AbousUs" 
import Home from "./views/Home/Home"
import Shop from "./views/Shop/Shop"

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/tienda" element={<Shop />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}
