import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer';
import AboutUs from "./views/AboutUs/AbousUs";
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop.jsx";
import Outlet from "./views/Shop/Sections/Outlet/Outlet.jsx";
import Termoadhesivos from "./views/Shop/Sections/Termoadhesivos/Termoadhesivos.jsx";
import Cocidos from "./views/Shop/Sections/Cocidos/Cocidos.jsx";
import Novedades from "./views/Shop/Sections/Novedades/Novedades.jsx";

export default function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="outlet" element={<Outlet />} /> 
          <Route path="termoadhesivos" element={<Termoadhesivos />} />
      <Route path="cocidos" element={<Cocidos />} />
          <Route path="novedades" element={<Novedades />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
