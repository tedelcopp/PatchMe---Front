import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillCartCheckFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import styles from "./Navbar.module.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeMenuAndScrollTop = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" onClick={closeMenuAndScrollTop}>
            <div className="d-flex align-items-center">
              <h3 className="ms-2 mb-0" style={{ fontSize: '18px' }}>Patch&Me</h3>
              <img
        src="https://i.ibb.co/xL8FtR2/a41f71d2332ed44fa93e01de5bbc3bff.png"
                width="55"
                height="55"
                className="d-inline-block align-top"
              />
            </div>
          </Link>

          <button><BsFillCartCheckFill /></button>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`offcanvas offcanvas-end text-bg-dark ${isMenuOpen ? 'show' : ''}`}
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active"
                    onClick={closeMenuAndScrollTop}
                  >
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/nosotros"
                    className="dropdown-item"
                    onClick={closeMenuAndScrollTop}
                  >
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/carrito"
                    className="nav-link active"
                    onClick={closeMenuAndScrollTop}
                  >
                Wishlist
                  </Link>
                </li>
                  <li className="nav-item">
                  <Link
                    to="/carrito"
                    className="nav-link active"
                    onClick={closeMenuAndScrollTop}
                  >
                   Carrito de Compras
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="nav"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link
                        to="/shop"
                        className="dropdown-item"
                        onClick={closeMenuAndScrollTop}
                      >
                        Ver todos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop-cocidos"
                        className="dropdown-item"
                        onClick={closeMenuAndScrollTop}
                      >
                        Cocidos
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop-termoadhesivos"
                        className="dropdown-item"
                        onClick={closeMenuAndScrollTop}
                      >
                        Termoadhesivos
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        to="/outlet"
                        className="dropdown-item"
                        onClick={closeMenuAndScrollTop}
                      >
                        Outlet
                      </Link>
                    </li>

                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="¿Qué estás buscando?"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
