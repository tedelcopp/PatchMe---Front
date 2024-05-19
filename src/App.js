import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./views/AboutUs/AbousUs";
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Outlet from "./views/Shop/Sections/Outlet/Outlet";
import Termoadhesivos from "./views/Shop/Sections/Termoadhesivos/Termoadhesivos";
import Cocidos from "./views/Shop/Sections/Cocidos/Cocidos";
import Novedades from "./views/Shop/Sections/Novedades/Novedades";
import Cart from "./views/Cart/Cart";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/descripcion" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart />} />
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
