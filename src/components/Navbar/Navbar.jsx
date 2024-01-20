import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <Link to="inicio">
                        Patch & Me
                      </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="inicio" className="nav-link active">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                <Link to="nosotros" className="dropdown-item">
                        Nosotros
                      </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Patchs
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                  <Link to="/shop" className="dropdown-item">
                        Ver todos
                      </Link>
                    </li>
                    <li>
                    <Link to="/shop-cocidos" className="dropdown-item">
                      Cocidos
                      </Link>
                    </li>
                    <li>
                    <Link to="/shop-termoadhesivos" className="dropdown-item">
                        Termoadhesivos
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                    <Link to="/outlet" className="dropdown-item">
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
                  placeholder="¿Que estas buscando?"
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
